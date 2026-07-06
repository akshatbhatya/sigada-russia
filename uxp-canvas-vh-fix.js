try{console.info("[UXP] canvas vh fix bundle loaded");}catch(e){}
(function() {
  var H = 920;
  var FULL_SCREEN_DIM_PROPS = { height: 1, 'min-height': 1, 'max-height': 1 };

  function isPureFullViewportHeight(val) {
    return /^\s*100(\.0+)?(vh|dvh|svh|lvh)\s*(?:!important)?\s*$/i.test(val || '');
  }

  function shouldSkipScreenUtility(prop, val) {
    var p = (prop || '').toLowerCase().trim();
    return !!FULL_SCREEN_DIM_PROPS[p] && isPureFullViewportHeight(val);
  }

  function vhToPx(s) {
    return s.replace(/([0-9.]+)(dvh|svh|lvh|vh)/g, function(_, n) {
      return (parseFloat(n) * H / 100) + 'px';
    });
  }

  function syncVhCustomProp() {
    try {
      var h = window.innerHeight || document.documentElement.clientHeight || H;
      document.documentElement.style.setProperty('--vh', (h / 100) + 'px');
    } catch (e) {}
  }

  function patchRules(rules) {
    try {
      for (var i = 0; i < rules.length; i++) {
        var rule = rules[i];
        if (rule.cssRules) patchRules(rule.cssRules);
        if (!rule.style) continue;
        for (var j = 0; j < rule.style.length; j++) {
          var prop = rule.style[j];
          var val = rule.style.getPropertyValue(prop);
          if (val.indexOf('vh') === -1) continue;
          if (shouldSkipScreenUtility(prop, val)) continue;
          rule.style.setProperty(prop, vhToPx(val), rule.style.getPropertyPriority(prop));
        }
      }
    } catch(e) {}
  }
  function patchSheet(sheet) {
    try { patchRules(sheet.cssRules || []); } catch(e) {}
  }

  /** Vite/React prod builds use <link rel="stylesheet" href="assets/*.css"> â€” not <style>. */
  function patchStylesheetsFromDocument() {
    try {
      var list = document.styleSheets;
      for (var i = 0; i < list.length; i++) {
        try {
          var sheet = list[i];
          if (sheet && sheet.cssRules) patchSheet(sheet);
        } catch (e) {}
      }
    } catch (e) {}
    try {
      document.querySelectorAll('link[rel="stylesheet"]').forEach(function(link) {
        function go() {
          try {
            if (link.sheet) patchSheet(link.sheet);
          } catch (e) {}
        }
        if (link.sheet) go();
        else link.addEventListener('load', go);
      });
    } catch (e) {}
  }

  try {
    var _ins = CSSStyleSheet.prototype.insertRule;
    CSSStyleSheet.prototype.insertRule = function(rule, index) {
      var idx = _ins.call(this, rule, index);
      try { if (this.cssRules && this.cssRules[idx]) patchRules([this.cssRules[idx]]); } catch(e) {}
      return idx;
    };
  } catch(e) {}

  try {
    var _rs = CSSStyleSheet.prototype.replaceSync;
    if (_rs) {
      CSSStyleSheet.prototype.replaceSync = function(text) {
        _rs.call(this, text);
        patchSheet(this);
      };
    }
  } catch(e) {}

  try {
    var _r = CSSStyleSheet.prototype.replace;
    if (_r) {
      CSSStyleSheet.prototype.replace = function(text) {
        var self = this;
        return _r.call(this, text).then(function(sheet) { patchSheet(sheet || self); return sheet || self; });
      };
    }
  } catch(e) {}

  function fixInlineVh(el) {
    var s = el.getAttribute && el.getAttribute('style');
    if (!s || s.indexOf('vh') === -1) return;
    var parts = s.split(';');
    var out = [];
    for (var i = 0; i < parts.length; i++) {
      var seg = parts[i];
      if (!seg.trim()) continue;
      var colon = seg.indexOf(':');
      if (colon === -1) {
        out.push(seg.trim());
        continue;
      }
      var prop = seg.slice(0, colon).trim();
      var val = seg.slice(colon + 1);
      if (shouldSkipScreenUtility(prop, val)) out.push(prop + ':' + val);
      else out.push(prop + ':' + vhToPx(val));
    }
    el.setAttribute('style', out.join('; '));
  }

  function watchStyleEl(el) {
    if (!el || el.getAttribute('data-vh-fix') || el._vhWatched) return;
    el._vhWatched = true;
    if (el.sheet) patchSheet(el.sheet);
    try {
      new MutationObserver(function() { if (el.sheet) patchSheet(el.sheet); })
        .observe(el, { childList: true, subtree: true, characterData: true });
    } catch(e) {}
  }

  function applyFixes() {
    syncVhCustomProp();
    try {
      new ResizeObserver(function() { syncVhCustomProp(); }).observe(document.documentElement);
    } catch (e) {}
    patchStylesheetsFromDocument();
    document.querySelectorAll('[style]').forEach(fixInlineVh);
    document.querySelectorAll('style').forEach(watchStyleEl);
    try { (document.adoptedStyleSheets || []).forEach(patchSheet); } catch(e) {}
    try {
      new MutationObserver(function(muts) {
        muts.forEach(function(m) {
          m.addedNodes.forEach(function(node) {
            if (node.nodeType !== 1) return;
            if (node.tagName === 'STYLE') watchStyleEl(node);
            if (node.tagName === 'LINK' && node.rel === 'stylesheet') {
              var link = node;
              var go = function() {
                try { if (link.sheet) patchSheet(link.sheet); } catch(e) {}
              };
              if (link.sheet) go();
              else link.addEventListener('load', go);
            }
            fixInlineVh(node);
            if (node.querySelectorAll) node.querySelectorAll('[style]').forEach(fixInlineVh);
          });
        });
      }).observe(document.documentElement, { childList: true, subtree: true });
    } catch(e) {}
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', applyFixes);
  else applyFixes();

  window.addEventListener('load', function() {
    syncVhCustomProp();
    patchStylesheetsFromDocument();
    document.querySelectorAll('style').forEach(watchStyleEl);
    document.querySelectorAll('[style]').forEach(fixInlineVh);
    try { (document.adoptedStyleSheets || []).forEach(patchSheet); } catch(e) {}
  });
})();
(function() {
  function _uxpResizeCharts() {
    if (window.Plotly) {
      document.querySelectorAll('.plot-container.plotly').forEach(function(pc) {
        var gd = pc.parentElement;
        if (!gd) return;
        var rect = gd.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;
        try { window.Plotly.relayout(gd, { width: Math.round(rect.width), height: Math.round(rect.height) }); } catch(e) {}
      });
    }
    if (window.ApexCharts && window.Apex && window.Apex._chartInstances) {
      window.Apex._chartInstances.forEach(function(inst) {
        try { (inst.chart || inst).updateOptions({}, false, false); } catch(e) {}
      });
    }
    if (window.Chart) {
      try { Object.values(window.Chart.instances || {}).forEach(function(c) { c.resize(); }); } catch(e) {}
    }
  }

  window.addEventListener('load', function() {
    setTimeout(function() { _uxpResizeCharts(); setTimeout(_uxpResizeCharts, 500); }, 300);
    try {
      var _lastW = 0, _lastH = 0, _timer = 0;
      new ResizeObserver(function() {
        var w = document.documentElement.clientWidth;
        var h = document.documentElement.clientHeight;
        if (w === _lastW && h === _lastH) return;
        _lastW = w; _lastH = h;
        clearTimeout(_timer);
        _timer = setTimeout(_uxpResizeCharts, 150);
      }).observe(document.documentElement);
    } catch(e) {}
  });
})();
