var cp = (e) => {
    throw TypeError(e);
};
var Au = (e, t, n) => t.has(e) || cp("Cannot " + n);
var N = (e, t, n) => (Au(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    ee = (e, t, n) =>
        t.has(e)
            ? cp("Cannot add the same private member more than once")
            : t instanceof WeakSet
              ? t.add(e)
              : t.set(e, n),
    G = (e, t, n, r) => (Au(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    ze = (e, t, n) => (Au(e, t, "access private method"), n);
var ra = (e, t, n, r) => ({
    set _(s) {
        G(e, t, s, n);
    },
    get _() {
        return N(e, t, r);
    },
});
function _S(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const s in r)
                if (s !== "default" && !(s in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, s);
                    i && Object.defineProperty(e, s, i.get ? i : { enumerable: !0, get: () => r[s] });
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const s of document.querySelectorAll('link[rel="modulepreload"]')) r(s);
    new MutationObserver((s) => {
        for (const i of s)
            if (i.type === "childList")
                for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(s) {
        const i = {};
        return (
            s.integrity && (i.integrity = s.integrity),
            s.referrerPolicy && (i.referrerPolicy = s.referrerPolicy),
            s.crossOrigin === "use-credentials"
                ? (i.credentials = "include")
                : s.crossOrigin === "anonymous"
                  ? (i.credentials = "omit")
                  : (i.credentials = "same-origin"),
            i
        );
    }
    function r(s) {
        if (s.ep) return;
        s.ep = !0;
        const i = n(s);
        fetch(s.href, i);
    }
})();
function Yy(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xy = { exports: {} },
    Ul = {},
    qy = { exports: {} },
    J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fo = Symbol.for("react.element"),
    zS = Symbol.for("react.portal"),
    BS = Symbol.for("react.fragment"),
    $S = Symbol.for("react.strict_mode"),
    US = Symbol.for("react.profiler"),
    WS = Symbol.for("react.provider"),
    HS = Symbol.for("react.context"),
    KS = Symbol.for("react.forward_ref"),
    GS = Symbol.for("react.suspense"),
    QS = Symbol.for("react.memo"),
    YS = Symbol.for("react.lazy"),
    fp = Symbol.iterator;
function XS(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (fp && e[fp]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var Zy = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Jy = Object.assign,
    ev = {};
function fi(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = ev), (this.updater = n || Zy);
}
fi.prototype.isReactComponent = {};
fi.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
fi.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function tv() {}
tv.prototype = fi.prototype;
function md(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = ev), (this.updater = n || Zy);
}
var gd = (md.prototype = new tv());
gd.constructor = md;
Jy(gd, fi.prototype);
gd.isPureReactComponent = !0;
var dp = Array.isArray,
    nv = Object.prototype.hasOwnProperty,
    yd = { current: null },
    rv = { key: !0, ref: !0, __self: !0, __source: !0 };
function sv(e, t, n) {
    var r,
        s = {},
        i = null,
        o = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t))
            nv.call(t, r) && !rv.hasOwnProperty(r) && (s[r] = t[r]);
    var a = arguments.length - 2;
    if (a === 1) s.children = n;
    else if (1 < a) {
        for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
        s.children = l;
    }
    if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) s[r] === void 0 && (s[r] = a[r]);
    return { $$typeof: Fo, type: e, key: i, ref: o, props: s, _owner: yd.current };
}
function qS(e, t) {
    return { $$typeof: Fo, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function vd(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Fo;
}
function ZS(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var hp = /\/+/g;
function Ru(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? ZS("" + e.key) : t.toString(36);
}
function Da(e, t, n, r, s) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else
        switch (i) {
            case "string":
            case "number":
                o = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case Fo:
                    case zS:
                        o = !0;
                }
        }
    if (o)
        return (
            (o = e),
            (s = s(o)),
            (e = r === "" ? "." + Ru(o, 0) : r),
            dp(s)
                ? ((n = ""),
                  e != null && (n = e.replace(hp, "$&/") + "/"),
                  Da(s, t, n, "", function (u) {
                      return u;
                  }))
                : s != null &&
                  (vd(s) &&
                      (s = qS(
                          s,
                          n + (!s.key || (o && o.key === s.key) ? "" : ("" + s.key).replace(hp, "$&/") + "/") + e
                      )),
                  t.push(s)),
            1
        );
    if (((o = 0), (r = r === "" ? "." : r + ":"), dp(e)))
        for (var a = 0; a < e.length; a++) {
            i = e[a];
            var l = r + Ru(i, a);
            o += Da(i, t, n, l, s);
        }
    else if (((l = XS(e)), typeof l == "function"))
        for (e = l.call(e), a = 0; !(i = e.next()).done; )
            (i = i.value), (l = r + Ru(i, a++)), (o += Da(i, t, n, l, s));
    else if (i === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return o;
}
function sa(e, t, n) {
    if (e == null) return e;
    var r = [],
        s = 0;
    return (
        Da(e, r, "", "", function (i) {
            return t.call(n, i, s++);
        }),
        r
    );
}
function JS(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var st = { current: null },
    Oa = { transition: null },
    eE = { ReactCurrentDispatcher: st, ReactCurrentBatchConfig: Oa, ReactCurrentOwner: yd };
function iv() {
    throw Error("act(...) is not supported in production builds of React.");
}
J.Children = {
    map: sa,
    forEach: function (e, t, n) {
        sa(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            sa(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            sa(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!vd(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
    },
};
J.Component = fi;
J.Fragment = BS;
J.Profiler = US;
J.PureComponent = md;
J.StrictMode = $S;
J.Suspense = GS;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eE;
J.act = iv;
J.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Jy({}, e.props),
        s = e.key,
        i = e.ref,
        o = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((i = t.ref), (o = yd.current)),
            t.key !== void 0 && (s = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var a = e.type.defaultProps;
        for (l in t) nv.call(t, l) && !rv.hasOwnProperty(l) && (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        a = Array(l);
        for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
        r.children = a;
    }
    return { $$typeof: Fo, type: e.type, key: s, ref: i, props: r, _owner: o };
};
J.createContext = function (e) {
    return (
        (e = {
            $$typeof: HS,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: WS, _context: e }),
        (e.Consumer = e)
    );
};
J.createElement = sv;
J.createFactory = function (e) {
    var t = sv.bind(null, e);
    return (t.type = e), t;
};
J.createRef = function () {
    return { current: null };
};
J.forwardRef = function (e) {
    return { $$typeof: KS, render: e };
};
J.isValidElement = vd;
J.lazy = function (e) {
    return { $$typeof: YS, _payload: { _status: -1, _result: e }, _init: JS };
};
J.memo = function (e, t) {
    return { $$typeof: QS, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function (e) {
    var t = Oa.transition;
    Oa.transition = {};
    try {
        e();
    } finally {
        Oa.transition = t;
    }
};
J.unstable_act = iv;
J.useCallback = function (e, t) {
    return st.current.useCallback(e, t);
};
J.useContext = function (e) {
    return st.current.useContext(e);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (e) {
    return st.current.useDeferredValue(e);
};
J.useEffect = function (e, t) {
    return st.current.useEffect(e, t);
};
J.useId = function () {
    return st.current.useId();
};
J.useImperativeHandle = function (e, t, n) {
    return st.current.useImperativeHandle(e, t, n);
};
J.useInsertionEffect = function (e, t) {
    return st.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function (e, t) {
    return st.current.useLayoutEffect(e, t);
};
J.useMemo = function (e, t) {
    return st.current.useMemo(e, t);
};
J.useReducer = function (e, t, n) {
    return st.current.useReducer(e, t, n);
};
J.useRef = function (e) {
    return st.current.useRef(e);
};
J.useState = function (e) {
    return st.current.useState(e);
};
J.useSyncExternalStore = function (e, t, n) {
    return st.current.useSyncExternalStore(e, t, n);
};
J.useTransition = function () {
    return st.current.useTransition();
};
J.version = "18.3.1";
qy.exports = J;
var w = qy.exports;
const I = Yy(w),
    ov = _S({ __proto__: null, default: I }, [w]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tE = w,
    nE = Symbol.for("react.element"),
    rE = Symbol.for("react.fragment"),
    sE = Object.prototype.hasOwnProperty,
    iE = tE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    oE = { key: !0, ref: !0, __self: !0, __source: !0 };
function av(e, t, n) {
    var r,
        s = {},
        i = null,
        o = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) sE.call(t, r) && !oE.hasOwnProperty(r) && (s[r] = t[r]);
    if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) s[r] === void 0 && (s[r] = t[r]);
    return { $$typeof: nE, type: e, key: i, ref: o, props: s, _owner: iE.current };
}
Ul.Fragment = rE;
Ul.jsx = av;
Ul.jsxs = av;
Xy.exports = Ul;
var E = Xy.exports,
    lv = { exports: {} },
    Tt = {},
    uv = { exports: {} },
    cv = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(A, M) {
        var F = A.length;
        A.push(M);
        e: for (; 0 < F; ) {
            var U = (F - 1) >>> 1,
                $ = A[U];
            if (0 < s($, M)) (A[U] = M), (A[F] = $), (F = U);
            else break e;
        }
    }
    function n(A) {
        return A.length === 0 ? null : A[0];
    }
    function r(A) {
        if (A.length === 0) return null;
        var M = A[0],
            F = A.pop();
        if (F !== M) {
            A[0] = F;
            e: for (var U = 0, $ = A.length, X = $ >>> 1; U < X; ) {
                var Q = 2 * (U + 1) - 1,
                    le = A[Q],
                    we = Q + 1,
                    q = A[we];
                if (0 > s(le, F))
                    we < $ && 0 > s(q, le) ? ((A[U] = q), (A[we] = F), (U = we)) : ((A[U] = le), (A[Q] = F), (U = Q));
                else if (we < $ && 0 > s(q, F)) (A[U] = q), (A[we] = F), (U = we);
                else break e;
            }
        }
        return M;
    }
    function s(A, M) {
        var F = A.sortIndex - M.sortIndex;
        return F !== 0 ? F : A.id - M.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function () {
            return i.now();
        };
    } else {
        var o = Date,
            a = o.now();
        e.unstable_now = function () {
            return o.now() - a;
        };
    }
    var l = [],
        u = [],
        c = 1,
        f = null,
        d = 3,
        h = !1,
        y = !1,
        p = !1,
        x = typeof setTimeout == "function" ? setTimeout : null,
        m = typeof clearTimeout == "function" ? clearTimeout : null,
        g = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(A) {
        for (var M = n(u); M !== null; ) {
            if (M.callback === null) r(u);
            else if (M.startTime <= A) r(u), (M.sortIndex = M.expirationTime), t(l, M);
            else break;
            M = n(u);
        }
    }
    function S(A) {
        if (((p = !1), v(A), !y))
            if (n(l) !== null) (y = !0), _(C);
            else {
                var M = n(u);
                M !== null && K(S, M.startTime - A);
            }
    }
    function C(A, M) {
        (y = !1), p && ((p = !1), m(P), (P = -1)), (h = !0);
        var F = d;
        try {
            for (v(M), f = n(l); f !== null && (!(f.expirationTime > M) || (A && !L())); ) {
                var U = f.callback;
                if (typeof U == "function") {
                    (f.callback = null), (d = f.priorityLevel);
                    var $ = U(f.expirationTime <= M);
                    (M = e.unstable_now()), typeof $ == "function" ? (f.callback = $) : f === n(l) && r(l), v(M);
                } else r(l);
                f = n(l);
            }
            if (f !== null) var X = !0;
            else {
                var Q = n(u);
                Q !== null && K(S, Q.startTime - M), (X = !1);
            }
            return X;
        } finally {
            (f = null), (d = F), (h = !1);
        }
    }
    var T = !1,
        b = null,
        P = -1,
        R = 5,
        k = -1;
    function L() {
        return !(e.unstable_now() - k < R);
    }
    function D() {
        if (b !== null) {
            var A = e.unstable_now();
            k = A;
            var M = !0;
            try {
                M = b(!0, A);
            } finally {
                M ? W() : ((T = !1), (b = null));
            }
        } else T = !1;
    }
    var W;
    if (typeof g == "function")
        W = function () {
            g(D);
        };
    else if (typeof MessageChannel < "u") {
        var O = new MessageChannel(),
            H = O.port2;
        (O.port1.onmessage = D),
            (W = function () {
                H.postMessage(null);
            });
    } else
        W = function () {
            x(D, 0);
        };
    function _(A) {
        (b = A), T || ((T = !0), W());
    }
    function K(A, M) {
        P = x(function () {
            A(e.unstable_now());
        }, M);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (A) {
            A.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            y || h || ((y = !0), _(C));
        }),
        (e.unstable_forceFrameRate = function (A) {
            0 > A || 125 < A
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (R = 0 < A ? Math.floor(1e3 / A) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return d;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(l);
        }),
        (e.unstable_next = function (A) {
            switch (d) {
                case 1:
                case 2:
                case 3:
                    var M = 3;
                    break;
                default:
                    M = d;
            }
            var F = d;
            d = M;
            try {
                return A();
            } finally {
                d = F;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (A, M) {
            switch (A) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    A = 3;
            }
            var F = d;
            d = A;
            try {
                return M();
            } finally {
                d = F;
            }
        }),
        (e.unstable_scheduleCallback = function (A, M, F) {
            var U = e.unstable_now();
            switch (
                (typeof F == "object" && F !== null
                    ? ((F = F.delay), (F = typeof F == "number" && 0 < F ? U + F : U))
                    : (F = U),
                A)
            ) {
                case 1:
                    var $ = -1;
                    break;
                case 2:
                    $ = 250;
                    break;
                case 5:
                    $ = 1073741823;
                    break;
                case 4:
                    $ = 1e4;
                    break;
                default:
                    $ = 5e3;
            }
            return (
                ($ = F + $),
                (A = { id: c++, callback: M, priorityLevel: A, startTime: F, expirationTime: $, sortIndex: -1 }),
                F > U
                    ? ((A.sortIndex = F),
                      t(u, A),
                      n(l) === null && A === n(u) && (p ? (m(P), (P = -1)) : (p = !0), K(S, F - U)))
                    : ((A.sortIndex = $), t(l, A), y || h || ((y = !0), _(C))),
                A
            );
        }),
        (e.unstable_shouldYield = L),
        (e.unstable_wrapCallback = function (A) {
            var M = d;
            return function () {
                var F = d;
                d = M;
                try {
                    return A.apply(this, arguments);
                } finally {
                    d = F;
                }
            };
        });
})(cv);
uv.exports = cv;
var aE = uv.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lE = w,
    bt = aE;
function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var fv = new Set(),
    io = {};
function us(e, t) {
    Js(e, t), Js(e + "Capture", t);
}
function Js(e, t) {
    for (io[e] = t, e = 0; e < t.length; e++) fv.add(t[e]);
}
var jn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Pc = Object.prototype.hasOwnProperty,
    uE =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    pp = {},
    mp = {};
function cE(e) {
    return Pc.call(mp, e) ? !0 : Pc.call(pp, e) ? !1 : uE.test(e) ? (mp[e] = !0) : ((pp[e] = !0), !1);
}
function fE(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                  ? !n.acceptsBooleans
                  : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function dE(e, t, n, r) {
    if (t === null || typeof t > "u" || fE(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function it(e, t, n, r, s, i, o) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = s),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = o);
}
var We = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        We[e] = new it(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    We[t] = new it(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    We[e] = new it(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    We[e] = new it(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        We[e] = new it(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    We[e] = new it(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    We[e] = new it(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    We[e] = new it(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    We[e] = new it(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var xd = /[\-:]([a-z])/g;
function wd(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(xd, wd);
        We[t] = new it(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(xd, wd);
    We[t] = new it(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(xd, wd);
    We[t] = new it(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    We[e] = new it(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
We.xlinkHref = new it("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    We[e] = new it(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Sd(e, t, n, r) {
    var s = We.hasOwnProperty(t) ? We[t] : null;
    (s !== null
        ? s.type !== 0
        : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
        (dE(t, n, s, r) && (n = null),
        r || s === null
            ? cE(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : s.mustUseProperty
              ? (e[s.propertyName] = n === null ? (s.type === 3 ? !1 : "") : n)
              : ((t = s.attributeName),
                (r = s.attributeNamespace),
                n === null
                    ? e.removeAttribute(t)
                    : ((s = s.type),
                      (n = s === 3 || (s === 4 && n === !0) ? "" : "" + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Bn = lE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ia = Symbol.for("react.element"),
    ws = Symbol.for("react.portal"),
    Ss = Symbol.for("react.fragment"),
    Ed = Symbol.for("react.strict_mode"),
    kc = Symbol.for("react.profiler"),
    dv = Symbol.for("react.provider"),
    hv = Symbol.for("react.context"),
    Cd = Symbol.for("react.forward_ref"),
    Ac = Symbol.for("react.suspense"),
    Rc = Symbol.for("react.suspense_list"),
    bd = Symbol.for("react.memo"),
    Jn = Symbol.for("react.lazy"),
    pv = Symbol.for("react.offscreen"),
    gp = Symbol.iterator;
function bi(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (gp && e[gp]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var xe = Object.assign,
    Mu;
function ji(e) {
    if (Mu === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Mu = (t && t[1]) || "";
        }
    return (
        `
` +
        Mu +
        e
    );
}
var Nu = !1;
function Lu(e, t) {
    if (!e || Nu) return "";
    Nu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (u) {
                    var r = u;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (u) {
                    r = u;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (u) {
                r = u;
            }
            e();
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (
                var s = u.stack.split(`
`),
                    i = r.stack.split(`
`),
                    o = s.length - 1,
                    a = i.length - 1;
                1 <= o && 0 <= a && s[o] !== i[a];

            )
                a--;
            for (; 1 <= o && 0 <= a; o--, a--)
                if (s[o] !== i[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if ((o--, a--, 0 > a || s[o] !== i[a])) {
                                var l =
                                    `
` + s[o].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        l.includes("<anonymous>") &&
                                        (l = l.replace("<anonymous>", e.displayName)),
                                    l
                                );
                            }
                        while (1 <= o && 0 <= a);
                    break;
                }
        }
    } finally {
        (Nu = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? ji(e) : "";
}
function hE(e) {
    switch (e.tag) {
        case 5:
            return ji(e.type);
        case 16:
            return ji("Lazy");
        case 13:
            return ji("Suspense");
        case 19:
            return ji("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = Lu(e.type, !1)), e;
        case 11:
            return (e = Lu(e.type.render, !1)), e;
        case 1:
            return (e = Lu(e.type, !0)), e;
        default:
            return "";
    }
}
function Mc(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Ss:
            return "Fragment";
        case ws:
            return "Portal";
        case kc:
            return "Profiler";
        case Ed:
            return "StrictMode";
        case Ac:
            return "Suspense";
        case Rc:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case hv:
                return (e.displayName || "Context") + ".Consumer";
            case dv:
                return (e._context.displayName || "Context") + ".Provider";
            case Cd:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case bd:
                return (t = e.displayName || null), t !== null ? t : Mc(e.type) || "Memo";
            case Jn:
                (t = e._payload), (e = e._init);
                try {
                    return Mc(e(t));
                } catch {}
        }
    return null;
}
function pE(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return Mc(t);
        case 8:
            return t === Ed ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function Er(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function mv(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function mE(e) {
    var t = mv(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var s = n.get,
            i = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return s.call(this);
                },
                set: function (o) {
                    (r = "" + o), i.call(this, o);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (o) {
                    r = "" + o;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function oa(e) {
    e._valueTracker || (e._valueTracker = mE(e));
}
function gv(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = mv(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function tl(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Nc(e, t) {
    var n = t.checked;
    return xe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function yp(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Er(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
        });
}
function yv(e, t) {
    (t = t.checked), t != null && Sd(e, "checked", t, !1);
}
function Lc(e, t) {
    yv(e, t);
    var n = Er(t.value),
        r = t.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value")
        ? Dc(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && Dc(e, t.type, Er(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function vp(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
        (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    (n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n);
}
function Dc(e, t, n) {
    (t !== "number" || tl(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ii = Array.isArray;
function Is(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var s = 0; s < n.length; s++) t["$" + n[s]] = !0;
        for (n = 0; n < e.length; n++)
            (s = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== s && (e[n].selected = s),
                s && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + Er(n), t = null, s = 0; s < e.length; s++) {
            if (e[s].value === n) {
                (e[s].selected = !0), r && (e[s].defaultSelected = !0);
                return;
            }
            t !== null || e[s].disabled || (t = e[s]);
        }
        t !== null && (t.selected = !0);
    }
}
function Oc(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
    return xe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function xp(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(j(92));
            if (Ii(n)) {
                if (1 < n.length) throw Error(j(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Er(n) };
}
function vv(e, t) {
    var n = Er(t.value),
        r = Er(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function wp(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function xv(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function jc(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? xv(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
          ? "http://www.w3.org/1999/xhtml"
          : e;
}
var aa,
    wv = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, s) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, s);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (
                aa = aa || document.createElement("div"),
                    aa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = aa.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function oo(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var $i = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    gE = ["Webkit", "ms", "Moz", "O"];
Object.keys($i).forEach(function (e) {
    gE.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), ($i[t] = $i[e]);
    });
});
function Sv(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n || typeof t != "number" || t === 0 || ($i.hasOwnProperty(e) && $i[e])
          ? ("" + t).trim()
          : t + "px";
}
function Ev(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                s = Sv(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : (e[n] = s);
        }
}
var yE = xe(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function Ic(e, t) {
    if (t) {
        if (yE[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(j(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(j(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(j(62));
    }
}
function Fc(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var Vc = null;
function Td(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var _c = null,
    Fs = null,
    Vs = null;
function Sp(e) {
    if ((e = zo(e))) {
        if (typeof _c != "function") throw Error(j(280));
        var t = e.stateNode;
        t && ((t = Ql(t)), _c(e.stateNode, e.type, t));
    }
}
function Cv(e) {
    Fs ? (Vs ? Vs.push(e) : (Vs = [e])) : (Fs = e);
}
function bv() {
    if (Fs) {
        var e = Fs,
            t = Vs;
        if (((Vs = Fs = null), Sp(e), t)) for (e = 0; e < t.length; e++) Sp(t[e]);
    }
}
function Tv(e, t) {
    return e(t);
}
function Pv() {}
var Du = !1;
function kv(e, t, n) {
    if (Du) return e(t, n);
    Du = !0;
    try {
        return Tv(e, t, n);
    } finally {
        (Du = !1), (Fs !== null || Vs !== null) && (Pv(), bv());
    }
}
function ao(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ql(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
                ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(j(231, t, typeof n));
    return n;
}
var zc = !1;
if (jn)
    try {
        var Ti = {};
        Object.defineProperty(Ti, "passive", {
            get: function () {
                zc = !0;
            },
        }),
            window.addEventListener("test", Ti, Ti),
            window.removeEventListener("test", Ti, Ti);
    } catch {
        zc = !1;
    }
function vE(e, t, n, r, s, i, o, a, l) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u);
    } catch (c) {
        this.onError(c);
    }
}
var Ui = !1,
    nl = null,
    rl = !1,
    Bc = null,
    xE = {
        onError: function (e) {
            (Ui = !0), (nl = e);
        },
    };
function wE(e, t, n, r, s, i, o, a, l) {
    (Ui = !1), (nl = null), vE.apply(xE, arguments);
}
function SE(e, t, n, r, s, i, o, a, l) {
    if ((wE.apply(this, arguments), Ui)) {
        if (Ui) {
            var u = nl;
            (Ui = !1), (nl = null);
        } else throw Error(j(198));
        rl || ((rl = !0), (Bc = u));
    }
}
function cs(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function Av(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
}
function Ep(e) {
    if (cs(e) !== e) throw Error(j(188));
}
function EE(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = cs(e)), t === null)) throw Error(j(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var s = n.return;
        if (s === null) break;
        var i = s.alternate;
        if (i === null) {
            if (((r = s.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (s.child === i.child) {
            for (i = s.child; i; ) {
                if (i === n) return Ep(s), e;
                if (i === r) return Ep(s), t;
                i = i.sibling;
            }
            throw Error(j(188));
        }
        if (n.return !== r.return) (n = s), (r = i);
        else {
            for (var o = !1, a = s.child; a; ) {
                if (a === n) {
                    (o = !0), (n = s), (r = i);
                    break;
                }
                if (a === r) {
                    (o = !0), (r = s), (n = i);
                    break;
                }
                a = a.sibling;
            }
            if (!o) {
                for (a = i.child; a; ) {
                    if (a === n) {
                        (o = !0), (n = i), (r = s);
                        break;
                    }
                    if (a === r) {
                        (o = !0), (r = i), (n = s);
                        break;
                    }
                    a = a.sibling;
                }
                if (!o) throw Error(j(189));
            }
        }
        if (n.alternate !== r) throw Error(j(190));
    }
    if (n.tag !== 3) throw Error(j(188));
    return n.stateNode.current === n ? e : t;
}
function Rv(e) {
    return (e = EE(e)), e !== null ? Mv(e) : null;
}
function Mv(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = Mv(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var Nv = bt.unstable_scheduleCallback,
    Cp = bt.unstable_cancelCallback,
    CE = bt.unstable_shouldYield,
    bE = bt.unstable_requestPaint,
    Te = bt.unstable_now,
    TE = bt.unstable_getCurrentPriorityLevel,
    Pd = bt.unstable_ImmediatePriority,
    Lv = bt.unstable_UserBlockingPriority,
    sl = bt.unstable_NormalPriority,
    PE = bt.unstable_LowPriority,
    Dv = bt.unstable_IdlePriority,
    Wl = null,
    wn = null;
function kE(e) {
    if (wn && typeof wn.onCommitFiberRoot == "function")
        try {
            wn.onCommitFiberRoot(Wl, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
}
var en = Math.clz32 ? Math.clz32 : ME,
    AE = Math.log,
    RE = Math.LN2;
function ME(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((AE(e) / RE) | 0)) | 0;
}
var la = 64,
    ua = 4194304;
function Fi(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function il(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        s = e.suspendedLanes,
        i = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var a = o & ~s;
        a !== 0 ? (r = Fi(a)) : ((i &= o), i !== 0 && (r = Fi(i)));
    } else (o = n & ~s), o !== 0 ? (r = Fi(o)) : i !== 0 && (r = Fi(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & s) && ((s = r & -r), (i = t & -t), s >= i || (s === 16 && (i & 4194240) !== 0)))
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - en(t)), (s = 1 << n), (r |= e[n]), (t &= ~s);
    return r;
}
function NE(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function LE(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var o = 31 - en(i),
            a = 1 << o,
            l = s[o];
        l === -1 ? (!(a & n) || a & r) && (s[o] = NE(a, t)) : l <= t && (e.expiredLanes |= a), (i &= ~a);
    }
}
function $c(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ov() {
    var e = la;
    return (la <<= 1), !(la & 4194240) && (la = 64), e;
}
function Ou(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Vo(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - en(t)),
        (e[t] = n);
}
function DE(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var s = 31 - en(n),
            i = 1 << s;
        (t[s] = 0), (r[s] = -1), (e[s] = -1), (n &= ~i);
    }
}
function kd(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - en(n),
            s = 1 << r;
        (s & t) | (e[r] & t) && (e[r] |= t), (n &= ~s);
    }
}
var oe = 0;
function jv(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Iv,
    Ad,
    Fv,
    Vv,
    _v,
    Uc = !1,
    ca = [],
    hr = null,
    pr = null,
    mr = null,
    lo = new Map(),
    uo = new Map(),
    tr = [],
    OE =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function bp(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            hr = null;
            break;
        case "dragenter":
        case "dragleave":
            pr = null;
            break;
        case "mouseover":
        case "mouseout":
            mr = null;
            break;
        case "pointerover":
        case "pointerout":
            lo.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            uo.delete(t.pointerId);
    }
}
function Pi(e, t, n, r, s, i) {
    return e === null || e.nativeEvent !== i
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [s] }),
          t !== null && ((t = zo(t)), t !== null && Ad(t)),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), s !== null && t.indexOf(s) === -1 && t.push(s), e);
}
function jE(e, t, n, r, s) {
    switch (t) {
        case "focusin":
            return (hr = Pi(hr, e, t, n, r, s)), !0;
        case "dragenter":
            return (pr = Pi(pr, e, t, n, r, s)), !0;
        case "mouseover":
            return (mr = Pi(mr, e, t, n, r, s)), !0;
        case "pointerover":
            var i = s.pointerId;
            return lo.set(i, Pi(lo.get(i) || null, e, t, n, r, s)), !0;
        case "gotpointercapture":
            return (i = s.pointerId), uo.set(i, Pi(uo.get(i) || null, e, t, n, r, s)), !0;
    }
    return !1;
}
function zv(e) {
    var t = Br(e.target);
    if (t !== null) {
        var n = cs(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Av(n)), t !== null)) {
                    (e.blockedOn = t),
                        _v(e.priority, function () {
                            Fv(n);
                        });
                    return;
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function ja(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Wc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Vc = r), n.target.dispatchEvent(r), (Vc = null);
        } else return (t = zo(n)), t !== null && Ad(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Tp(e, t, n) {
    ja(e) && n.delete(t);
}
function IE() {
    (Uc = !1),
        hr !== null && ja(hr) && (hr = null),
        pr !== null && ja(pr) && (pr = null),
        mr !== null && ja(mr) && (mr = null),
        lo.forEach(Tp),
        uo.forEach(Tp);
}
function ki(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), Uc || ((Uc = !0), bt.unstable_scheduleCallback(bt.unstable_NormalPriority, IE)));
}
function co(e) {
    function t(s) {
        return ki(s, e);
    }
    if (0 < ca.length) {
        ki(ca[0], e);
        for (var n = 1; n < ca.length; n++) {
            var r = ca[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        hr !== null && ki(hr, e),
            pr !== null && ki(pr, e),
            mr !== null && ki(mr, e),
            lo.forEach(t),
            uo.forEach(t),
            n = 0;
        n < tr.length;
        n++
    )
        (r = tr[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < tr.length && ((n = tr[0]), n.blockedOn === null); ) zv(n), n.blockedOn === null && tr.shift();
}
var _s = Bn.ReactCurrentBatchConfig,
    ol = !0;
function FE(e, t, n, r) {
    var s = oe,
        i = _s.transition;
    _s.transition = null;
    try {
        (oe = 1), Rd(e, t, n, r);
    } finally {
        (oe = s), (_s.transition = i);
    }
}
function VE(e, t, n, r) {
    var s = oe,
        i = _s.transition;
    _s.transition = null;
    try {
        (oe = 4), Rd(e, t, n, r);
    } finally {
        (oe = s), (_s.transition = i);
    }
}
function Rd(e, t, n, r) {
    if (ol) {
        var s = Wc(e, t, n, r);
        if (s === null) Wu(e, t, r, al, n), bp(e, r);
        else if (jE(s, e, t, n, r)) r.stopPropagation();
        else if ((bp(e, r), t & 4 && -1 < OE.indexOf(e))) {
            for (; s !== null; ) {
                var i = zo(s);
                if ((i !== null && Iv(i), (i = Wc(e, t, n, r)), i === null && Wu(e, t, r, al, n), i === s)) break;
                s = i;
            }
            s !== null && r.stopPropagation();
        } else Wu(e, t, r, null, n);
    }
}
var al = null;
function Wc(e, t, n, r) {
    if (((al = null), (e = Td(r)), (e = Br(e)), e !== null))
        if (((t = cs(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = Av(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (al = e), null;
}
function Bv(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (TE()) {
                case Pd:
                    return 1;
                case Lv:
                    return 4;
                case sl:
                case PE:
                    return 16;
                case Dv:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var ur = null,
    Md = null,
    Ia = null;
function $v() {
    if (Ia) return Ia;
    var e,
        t = Md,
        n = t.length,
        r,
        s = "value" in ur ? ur.value : ur.textContent,
        i = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === s[i - r]; r++);
    return (Ia = s.slice(e, 1 < r ? 1 - r : void 0));
}
function Fa(e) {
    var t = e.keyCode;
    return (
        "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function fa() {
    return !0;
}
function Pp() {
    return !1;
}
function Pt(e) {
    function t(n, r, s, i, o) {
        (this._reactName = n),
            (this._targetInst = s),
            (this.type = r),
            (this.nativeEvent = i),
            (this.target = o),
            (this.currentTarget = null);
        for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(i) : i[a]));
        return (
            (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1)
                ? fa
                : Pp),
            (this.isPropagationStopped = Pp),
            this
        );
    }
    return (
        xe(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                    (this.isDefaultPrevented = fa));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                    (this.isPropagationStopped = fa));
            },
            persist: function () {},
            isPersistent: fa,
        }),
        t
    );
}
var di = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Nd = Pt(di),
    _o = xe({}, di, { view: 0, detail: 0 }),
    _E = Pt(_o),
    ju,
    Iu,
    Ai,
    Hl = xe({}, _o, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Ld,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== Ai &&
                      (Ai && e.type === "mousemove"
                          ? ((ju = e.screenX - Ai.screenX), (Iu = e.screenY - Ai.screenY))
                          : (Iu = ju = 0),
                      (Ai = e)),
                  ju);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : Iu;
        },
    }),
    kp = Pt(Hl),
    zE = xe({}, Hl, { dataTransfer: 0 }),
    BE = Pt(zE),
    $E = xe({}, _o, { relatedTarget: 0 }),
    Fu = Pt($E),
    UE = xe({}, di, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    WE = Pt(UE),
    HE = xe({}, di, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
    }),
    KE = Pt(HE),
    GE = xe({}, di, { data: 0 }),
    Ap = Pt(GE),
    QE = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    YE = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    XE = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function qE(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = XE[e]) ? !!t[e] : !1;
}
function Ld() {
    return qE;
}
var ZE = xe({}, _o, {
        key: function (e) {
            if (e.key) {
                var t = QE[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = Fa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                  ? YE[e.keyCode] || "Unidentified"
                  : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ld,
        charCode: function (e) {
            return e.type === "keypress" ? Fa(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress" ? Fa(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
    }),
    JE = Pt(ZE),
    eC = xe({}, Hl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    Rp = Pt(eC),
    tC = xe({}, _o, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ld,
    }),
    nC = Pt(tC),
    rC = xe({}, di, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    sC = Pt(rC),
    iC = xe({}, Hl, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    oC = Pt(iC),
    aC = [9, 13, 27, 32],
    Dd = jn && "CompositionEvent" in window,
    Wi = null;
jn && "documentMode" in document && (Wi = document.documentMode);
var lC = jn && "TextEvent" in window && !Wi,
    Uv = jn && (!Dd || (Wi && 8 < Wi && 11 >= Wi)),
    Mp = " ",
    Np = !1;
function Wv(e, t) {
    switch (e) {
        case "keyup":
            return aC.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function Hv(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Es = !1;
function uC(e, t) {
    switch (e) {
        case "compositionend":
            return Hv(t);
        case "keypress":
            return t.which !== 32 ? null : ((Np = !0), Mp);
        case "textInput":
            return (e = t.data), e === Mp && Np ? null : e;
        default:
            return null;
    }
}
function cC(e, t) {
    if (Es)
        return e === "compositionend" || (!Dd && Wv(e, t)) ? ((e = $v()), (Ia = Md = ur = null), (Es = !1), e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return Uv && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var fC = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function Lp(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!fC[e.type] : t === "textarea";
}
function Kv(e, t, n, r) {
    Cv(r),
        (t = ll(t, "onChange")),
        0 < t.length && ((n = new Nd("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var Hi = null,
    fo = null;
function dC(e) {
    r0(e, 0);
}
function Kl(e) {
    var t = Ts(e);
    if (gv(t)) return e;
}
function hC(e, t) {
    if (e === "change") return t;
}
var Gv = !1;
if (jn) {
    var Vu;
    if (jn) {
        var _u = "oninput" in document;
        if (!_u) {
            var Dp = document.createElement("div");
            Dp.setAttribute("oninput", "return;"), (_u = typeof Dp.oninput == "function");
        }
        Vu = _u;
    } else Vu = !1;
    Gv = Vu && (!document.documentMode || 9 < document.documentMode);
}
function Op() {
    Hi && (Hi.detachEvent("onpropertychange", Qv), (fo = Hi = null));
}
function Qv(e) {
    if (e.propertyName === "value" && Kl(fo)) {
        var t = [];
        Kv(t, fo, e, Td(e)), kv(dC, t);
    }
}
function pC(e, t, n) {
    e === "focusin" ? (Op(), (Hi = t), (fo = n), Hi.attachEvent("onpropertychange", Qv)) : e === "focusout" && Op();
}
function mC(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Kl(fo);
}
function gC(e, t) {
    if (e === "click") return Kl(t);
}
function yC(e, t) {
    if (e === "input" || e === "change") return Kl(t);
}
function vC(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var sn = typeof Object.is == "function" ? Object.is : vC;
function ho(e, t) {
    if (sn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var s = n[r];
        if (!Pc.call(t, s) || !sn(e[s], t[s])) return !1;
    }
    return !0;
}
function jp(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Ip(e, t) {
    var n = jp(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = jp(n);
    }
}
function Yv(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
              ? !1
              : t && t.nodeType === 3
                ? Yv(e, t.parentNode)
                : "contains" in e
                  ? e.contains(t)
                  : e.compareDocumentPosition
                    ? !!(e.compareDocumentPosition(t) & 16)
                    : !1
        : !1;
}
function Xv() {
    for (var e = window, t = tl(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = tl(e.document);
    }
    return t;
}
function Od(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function xC(e) {
    var t = Xv(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Yv(n.ownerDocument.documentElement, n)) {
        if (r !== null && Od(n)) {
            if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
                e = e.getSelection();
                var s = n.textContent.length,
                    i = Math.min(r.start, s);
                (r = r.end === void 0 ? i : Math.min(r.end, s)),
                    !e.extend && i > r && ((s = r), (r = i), (i = s)),
                    (s = Ip(n, i));
                var o = Ip(n, r);
                s &&
                    o &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== s.node ||
                        e.anchorOffset !== s.offset ||
                        e.focusNode !== o.node ||
                        e.focusOffset !== o.offset) &&
                    ((t = t.createRange()),
                    t.setStart(s.node, s.offset),
                    e.removeAllRanges(),
                    i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
            (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
}
var wC = jn && "documentMode" in document && 11 >= document.documentMode,
    Cs = null,
    Hc = null,
    Ki = null,
    Kc = !1;
function Fp(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Kc ||
        Cs == null ||
        Cs !== tl(r) ||
        ((r = Cs),
        "selectionStart" in r && Od(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (Ki && ho(Ki, r)) ||
            ((Ki = r),
            (r = ll(Hc, "onSelect")),
            0 < r.length &&
                ((t = new Nd("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = Cs))));
}
function da(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var bs = {
        animationend: da("Animation", "AnimationEnd"),
        animationiteration: da("Animation", "AnimationIteration"),
        animationstart: da("Animation", "AnimationStart"),
        transitionend: da("Transition", "TransitionEnd"),
    },
    zu = {},
    qv = {};
jn &&
    ((qv = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete bs.animationend.animation, delete bs.animationiteration.animation, delete bs.animationstart.animation),
    "TransitionEvent" in window || delete bs.transitionend.transition);
function Gl(e) {
    if (zu[e]) return zu[e];
    if (!bs[e]) return e;
    var t = bs[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in qv) return (zu[e] = t[n]);
    return e;
}
var Zv = Gl("animationend"),
    Jv = Gl("animationiteration"),
    e0 = Gl("animationstart"),
    t0 = Gl("transitionend"),
    n0 = new Map(),
    Vp =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function Mr(e, t) {
    n0.set(e, t), us(t, [e]);
}
for (var Bu = 0; Bu < Vp.length; Bu++) {
    var $u = Vp[Bu],
        SC = $u.toLowerCase(),
        EC = $u[0].toUpperCase() + $u.slice(1);
    Mr(SC, "on" + EC);
}
Mr(Zv, "onAnimationEnd");
Mr(Jv, "onAnimationIteration");
Mr(e0, "onAnimationStart");
Mr("dblclick", "onDoubleClick");
Mr("focusin", "onFocus");
Mr("focusout", "onBlur");
Mr(t0, "onTransitionEnd");
Js("onMouseEnter", ["mouseout", "mouseover"]);
Js("onMouseLeave", ["mouseout", "mouseover"]);
Js("onPointerEnter", ["pointerout", "pointerover"]);
Js("onPointerLeave", ["pointerout", "pointerover"]);
us("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
us("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
us("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
us("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
us("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
us("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Vi =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    CC = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vi));
function _p(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), SE(r, t, void 0, e), (e.currentTarget = null);
}
function r0(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            s = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var a = r[o],
                        l = a.instance,
                        u = a.currentTarget;
                    if (((a = a.listener), l !== i && s.isPropagationStopped())) break e;
                    _p(s, a, u), (i = l);
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (
                        ((a = r[o]),
                        (l = a.instance),
                        (u = a.currentTarget),
                        (a = a.listener),
                        l !== i && s.isPropagationStopped())
                    )
                        break e;
                    _p(s, a, u), (i = l);
                }
        }
    }
    if (rl) throw ((e = Bc), (rl = !1), (Bc = null), e);
}
function he(e, t) {
    var n = t[qc];
    n === void 0 && (n = t[qc] = new Set());
    var r = e + "__bubble";
    n.has(r) || (s0(t, e, 2, !1), n.add(r));
}
function Uu(e, t, n) {
    var r = 0;
    t && (r |= 4), s0(n, e, r, t);
}
var ha = "_reactListening" + Math.random().toString(36).slice(2);
function po(e) {
    if (!e[ha]) {
        (e[ha] = !0),
            fv.forEach(function (n) {
                n !== "selectionchange" && (CC.has(n) || Uu(n, !1, e), Uu(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ha] || ((t[ha] = !0), Uu("selectionchange", !1, t));
    }
}
function s0(e, t, n, r) {
    switch (Bv(t)) {
        case 1:
            var s = FE;
            break;
        case 4:
            s = VE;
            break;
        default:
            s = Rd;
    }
    (n = s.bind(null, t, n, e)),
        (s = void 0),
        !zc || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (s = !0),
        r
            ? s !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: s })
                : e.addEventListener(t, n, !0)
            : s !== void 0
              ? e.addEventListener(t, n, { passive: s })
              : e.addEventListener(t, n, !1);
}
function Wu(e, t, n, r, s) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var a = r.stateNode.containerInfo;
                if (a === s || (a.nodeType === 8 && a.parentNode === s)) break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var l = o.tag;
                        if (
                            (l === 3 || l === 4) &&
                            ((l = o.stateNode.containerInfo), l === s || (l.nodeType === 8 && l.parentNode === s))
                        )
                            return;
                        o = o.return;
                    }
                for (; a !== null; ) {
                    if (((o = Br(a)), o === null)) return;
                    if (((l = o.tag), l === 5 || l === 6)) {
                        r = i = o;
                        continue e;
                    }
                    a = a.parentNode;
                }
            }
            r = r.return;
        }
    kv(function () {
        var u = i,
            c = Td(n),
            f = [];
        e: {
            var d = n0.get(e);
            if (d !== void 0) {
                var h = Nd,
                    y = e;
                switch (e) {
                    case "keypress":
                        if (Fa(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        h = JE;
                        break;
                    case "focusin":
                        (y = "focus"), (h = Fu);
                        break;
                    case "focusout":
                        (y = "blur"), (h = Fu);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        h = Fu;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        h = kp;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        h = BE;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        h = nC;
                        break;
                    case Zv:
                    case Jv:
                    case e0:
                        h = WE;
                        break;
                    case t0:
                        h = sC;
                        break;
                    case "scroll":
                        h = _E;
                        break;
                    case "wheel":
                        h = oC;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        h = KE;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        h = Rp;
                }
                var p = (t & 4) !== 0,
                    x = !p && e === "scroll",
                    m = p ? (d !== null ? d + "Capture" : null) : d;
                p = [];
                for (var g = u, v; g !== null; ) {
                    v = g;
                    var S = v.stateNode;
                    if (
                        (v.tag === 5 &&
                            S !== null &&
                            ((v = S), m !== null && ((S = ao(g, m)), S != null && p.push(mo(g, S, v)))),
                        x)
                    )
                        break;
                    g = g.return;
                }
                0 < p.length && ((d = new h(d, y, null, n, c)), f.push({ event: d, listeners: p }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((d = e === "mouseover" || e === "pointerover"),
                    (h = e === "mouseout" || e === "pointerout"),
                    d && n !== Vc && (y = n.relatedTarget || n.fromElement) && (Br(y) || y[In]))
                )
                    break e;
                if (
                    (h || d) &&
                    ((d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window),
                    h
                        ? ((y = n.relatedTarget || n.toElement),
                          (h = u),
                          (y = y ? Br(y) : null),
                          y !== null && ((x = cs(y)), y !== x || (y.tag !== 5 && y.tag !== 6)) && (y = null))
                        : ((h = null), (y = u)),
                    h !== y)
                ) {
                    if (
                        ((p = kp),
                        (S = "onMouseLeave"),
                        (m = "onMouseEnter"),
                        (g = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((p = Rp), (S = "onPointerLeave"), (m = "onPointerEnter"), (g = "pointer")),
                        (x = h == null ? d : Ts(h)),
                        (v = y == null ? d : Ts(y)),
                        (d = new p(S, g + "leave", h, n, c)),
                        (d.target = x),
                        (d.relatedTarget = v),
                        (S = null),
                        Br(c) === u &&
                            ((p = new p(m, g + "enter", y, n, c)), (p.target = v), (p.relatedTarget = x), (S = p)),
                        (x = S),
                        h && y)
                    )
                        t: {
                            for (p = h, m = y, g = 0, v = p; v; v = ys(v)) g++;
                            for (v = 0, S = m; S; S = ys(S)) v++;
                            for (; 0 < g - v; ) (p = ys(p)), g--;
                            for (; 0 < v - g; ) (m = ys(m)), v--;
                            for (; g--; ) {
                                if (p === m || (m !== null && p === m.alternate)) break t;
                                (p = ys(p)), (m = ys(m));
                            }
                            p = null;
                        }
                    else p = null;
                    h !== null && zp(f, d, h, p, !1), y !== null && x !== null && zp(f, x, y, p, !0);
                }
            }
            e: {
                if (
                    ((d = u ? Ts(u) : window),
                    (h = d.nodeName && d.nodeName.toLowerCase()),
                    h === "select" || (h === "input" && d.type === "file"))
                )
                    var C = hC;
                else if (Lp(d))
                    if (Gv) C = yC;
                    else {
                        C = mC;
                        var T = pC;
                    }
                else
                    (h = d.nodeName) &&
                        h.toLowerCase() === "input" &&
                        (d.type === "checkbox" || d.type === "radio") &&
                        (C = gC);
                if (C && (C = C(e, u))) {
                    Kv(f, C, n, c);
                    break e;
                }
                T && T(e, d, u),
                    e === "focusout" &&
                        (T = d._wrapperState) &&
                        T.controlled &&
                        d.type === "number" &&
                        Dc(d, "number", d.value);
            }
            switch (((T = u ? Ts(u) : window), e)) {
                case "focusin":
                    (Lp(T) || T.contentEditable === "true") && ((Cs = T), (Hc = u), (Ki = null));
                    break;
                case "focusout":
                    Ki = Hc = Cs = null;
                    break;
                case "mousedown":
                    Kc = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (Kc = !1), Fp(f, n, c);
                    break;
                case "selectionchange":
                    if (wC) break;
                case "keydown":
                case "keyup":
                    Fp(f, n, c);
            }
            var b;
            if (Dd)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var P = "onCompositionStart";
                            break e;
                        case "compositionend":
                            P = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            P = "onCompositionUpdate";
                            break e;
                    }
                    P = void 0;
                }
            else
                Es
                    ? Wv(e, n) && (P = "onCompositionEnd")
                    : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
            P &&
                (Uv &&
                    n.locale !== "ko" &&
                    (Es || P !== "onCompositionStart"
                        ? P === "onCompositionEnd" && Es && (b = $v())
                        : ((ur = c), (Md = "value" in ur ? ur.value : ur.textContent), (Es = !0))),
                (T = ll(u, P)),
                0 < T.length &&
                    ((P = new Ap(P, e, null, n, c)),
                    f.push({ event: P, listeners: T }),
                    b ? (P.data = b) : ((b = Hv(n)), b !== null && (P.data = b)))),
                (b = lC ? uC(e, n) : cC(e, n)) &&
                    ((u = ll(u, "onBeforeInput")),
                    0 < u.length &&
                        ((c = new Ap("onBeforeInput", "beforeinput", null, n, c)),
                        f.push({ event: c, listeners: u }),
                        (c.data = b)));
        }
        r0(f, t);
    });
}
function mo(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function ll(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var s = e,
            i = s.stateNode;
        s.tag === 5 &&
            i !== null &&
            ((s = i),
            (i = ao(e, n)),
            i != null && r.unshift(mo(e, i, s)),
            (i = ao(e, t)),
            i != null && r.push(mo(e, i, s))),
            (e = e.return);
    }
    return r;
}
function ys(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function zp(e, t, n, r, s) {
    for (var i = t._reactName, o = []; n !== null && n !== r; ) {
        var a = n,
            l = a.alternate,
            u = a.stateNode;
        if (l !== null && l === r) break;
        a.tag === 5 &&
            u !== null &&
            ((a = u),
            s
                ? ((l = ao(n, i)), l != null && o.unshift(mo(n, l, a)))
                : s || ((l = ao(n, i)), l != null && o.push(mo(n, l, a)))),
            (n = n.return);
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
}
var bC = /\r\n?/g,
    TC = /\u0000|\uFFFD/g;
function Bp(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            bC,
            `
`
        )
        .replace(TC, "");
}
function pa(e, t, n) {
    if (((t = Bp(t)), Bp(e) !== t && n)) throw Error(j(425));
}
function ul() {}
var Gc = null,
    Qc = null;
function Yc(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var Xc = typeof setTimeout == "function" ? setTimeout : void 0,
    PC = typeof clearTimeout == "function" ? clearTimeout : void 0,
    $p = typeof Promise == "function" ? Promise : void 0,
    kC =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof $p < "u"
              ? function (e) {
                    return $p.resolve(null).then(e).catch(AC);
                }
              : Xc;
function AC(e) {
    setTimeout(function () {
        throw e;
    });
}
function Hu(e, t) {
    var n = t,
        r = 0;
    do {
        var s = n.nextSibling;
        if ((e.removeChild(n), s && s.nodeType === 8))
            if (((n = s.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(s), co(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = s;
    } while (n);
    co(t);
}
function gr(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function Up(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var hi = Math.random().toString(36).slice(2),
    vn = "__reactFiber$" + hi,
    go = "__reactProps$" + hi,
    In = "__reactContainer$" + hi,
    qc = "__reactEvents$" + hi,
    RC = "__reactListeners$" + hi,
    MC = "__reactHandles$" + hi;
function Br(e) {
    var t = e[vn];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[In] || n[vn])) {
            if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
                for (e = Up(e); e !== null; ) {
                    if ((n = e[vn])) return n;
                    e = Up(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function zo(e) {
    return (e = e[vn] || e[In]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Ts(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(j(33));
}
function Ql(e) {
    return e[go] || null;
}
var Zc = [],
    Ps = -1;
function Nr(e) {
    return { current: e };
}
function pe(e) {
    0 > Ps || ((e.current = Zc[Ps]), (Zc[Ps] = null), Ps--);
}
function ce(e, t) {
    Ps++, (Zc[Ps] = e.current), (e.current = t);
}
var Cr = {},
    Ye = Nr(Cr),
    ct = Nr(!1),
    ns = Cr;
function ei(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Cr;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var s = {},
        i;
    for (i in n) s[i] = t[i];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = s)),
        s
    );
}
function ft(e) {
    return (e = e.childContextTypes), e != null;
}
function cl() {
    pe(ct), pe(Ye);
}
function Wp(e, t, n) {
    if (Ye.current !== Cr) throw Error(j(168));
    ce(Ye, t), ce(ct, n);
}
function i0(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var s in r) if (!(s in t)) throw Error(j(108, pE(e) || "Unknown", s));
    return xe({}, n, r);
}
function fl(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Cr),
        (ns = Ye.current),
        ce(Ye, e),
        ce(ct, ct.current),
        !0
    );
}
function Hp(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(j(169));
    n ? ((e = i0(e, t, ns)), (r.__reactInternalMemoizedMergedChildContext = e), pe(ct), pe(Ye), ce(Ye, e)) : pe(ct),
        ce(ct, n);
}
var Mn = null,
    Yl = !1,
    Ku = !1;
function o0(e) {
    Mn === null ? (Mn = [e]) : Mn.push(e);
}
function NC(e) {
    (Yl = !0), o0(e);
}
function Lr() {
    if (!Ku && Mn !== null) {
        Ku = !0;
        var e = 0,
            t = oe;
        try {
            var n = Mn;
            for (oe = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (Mn = null), (Yl = !1);
        } catch (s) {
            throw (Mn !== null && (Mn = Mn.slice(e + 1)), Nv(Pd, Lr), s);
        } finally {
            (oe = t), (Ku = !1);
        }
    }
    return null;
}
var ks = [],
    As = 0,
    dl = null,
    hl = 0,
    Rt = [],
    Mt = 0,
    rs = null,
    Ln = 1,
    Dn = "";
function Vr(e, t) {
    (ks[As++] = hl), (ks[As++] = dl), (dl = e), (hl = t);
}
function a0(e, t, n) {
    (Rt[Mt++] = Ln), (Rt[Mt++] = Dn), (Rt[Mt++] = rs), (rs = e);
    var r = Ln;
    e = Dn;
    var s = 32 - en(r) - 1;
    (r &= ~(1 << s)), (n += 1);
    var i = 32 - en(t) + s;
    if (30 < i) {
        var o = s - (s % 5);
        (i = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (s -= o),
            (Ln = (1 << (32 - en(t) + s)) | (n << s) | r),
            (Dn = i + e);
    } else (Ln = (1 << i) | (n << s) | r), (Dn = e);
}
function jd(e) {
    e.return !== null && (Vr(e, 1), a0(e, 1, 0));
}
function Id(e) {
    for (; e === dl; ) (dl = ks[--As]), (ks[As] = null), (hl = ks[--As]), (ks[As] = null);
    for (; e === rs; )
        (rs = Rt[--Mt]), (Rt[Mt] = null), (Dn = Rt[--Mt]), (Rt[Mt] = null), (Ln = Rt[--Mt]), (Rt[Mt] = null);
}
var St = null,
    wt = null,
    me = !1,
    Zt = null;
function l0(e, t) {
    var n = Nt(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Kp(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
                t !== null ? ((e.stateNode = t), (St = e), (wt = gr(t.firstChild)), !0) : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (St = e), (wt = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = rs !== null ? { id: Ln, overflow: Dn } : null),
                      (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                      (n = Nt(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (St = e),
                      (wt = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function Jc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ef(e) {
    if (me) {
        var t = wt;
        if (t) {
            var n = t;
            if (!Kp(e, t)) {
                if (Jc(e)) throw Error(j(418));
                t = gr(n.nextSibling);
                var r = St;
                t && Kp(e, t) ? l0(r, n) : ((e.flags = (e.flags & -4097) | 2), (me = !1), (St = e));
            }
        } else {
            if (Jc(e)) throw Error(j(418));
            (e.flags = (e.flags & -4097) | 2), (me = !1), (St = e);
        }
    }
}
function Gp(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    St = e;
}
function ma(e) {
    if (e !== St) return !1;
    if (!me) return Gp(e), (me = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type), (t = t !== "head" && t !== "body" && !Yc(e.type, e.memoizedProps))),
        t && (t = wt))
    ) {
        if (Jc(e)) throw (u0(), Error(j(418)));
        for (; t; ) l0(e, t), (t = gr(t.nextSibling));
    }
    if ((Gp(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(j(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            wt = gr(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            wt = null;
        }
    } else wt = St ? gr(e.stateNode.nextSibling) : null;
    return !0;
}
function u0() {
    for (var e = wt; e; ) e = gr(e.nextSibling);
}
function ti() {
    (wt = St = null), (me = !1);
}
function Fd(e) {
    Zt === null ? (Zt = [e]) : Zt.push(e);
}
var LC = Bn.ReactCurrentBatchConfig;
function Ri(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(j(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(j(147, e));
            var s = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
                ? t.ref
                : ((t = function (o) {
                      var a = s.refs;
                      o === null ? delete a[i] : (a[i] = o);
                  }),
                  (t._stringRef = i),
                  t);
        }
        if (typeof e != "string") throw Error(j(284));
        if (!n._owner) throw Error(j(290, e));
    }
    return e;
}
function ga(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    );
}
function Qp(e) {
    var t = e._init;
    return t(e._payload);
}
function c0(e) {
    function t(m, g) {
        if (e) {
            var v = m.deletions;
            v === null ? ((m.deletions = [g]), (m.flags |= 16)) : v.push(g);
        }
    }
    function n(m, g) {
        if (!e) return null;
        for (; g !== null; ) t(m, g), (g = g.sibling);
        return null;
    }
    function r(m, g) {
        for (m = new Map(); g !== null; ) g.key !== null ? m.set(g.key, g) : m.set(g.index, g), (g = g.sibling);
        return m;
    }
    function s(m, g) {
        return (m = wr(m, g)), (m.index = 0), (m.sibling = null), m;
    }
    function i(m, g, v) {
        return (
            (m.index = v),
            e
                ? ((v = m.alternate),
                  v !== null ? ((v = v.index), v < g ? ((m.flags |= 2), g) : v) : ((m.flags |= 2), g))
                : ((m.flags |= 1048576), g)
        );
    }
    function o(m) {
        return e && m.alternate === null && (m.flags |= 2), m;
    }
    function a(m, g, v, S) {
        return g === null || g.tag !== 6
            ? ((g = Ju(v, m.mode, S)), (g.return = m), g)
            : ((g = s(g, v)), (g.return = m), g);
    }
    function l(m, g, v, S) {
        var C = v.type;
        return C === Ss
            ? c(m, g, v.props.children, S, v.key)
            : g !== null &&
                (g.elementType === C || (typeof C == "object" && C !== null && C.$$typeof === Jn && Qp(C) === g.type))
              ? ((S = s(g, v.props)), (S.ref = Ri(m, g, v)), (S.return = m), S)
              : ((S = Wa(v.type, v.key, v.props, null, m.mode, S)), (S.ref = Ri(m, g, v)), (S.return = m), S);
    }
    function u(m, g, v, S) {
        return g === null ||
            g.tag !== 4 ||
            g.stateNode.containerInfo !== v.containerInfo ||
            g.stateNode.implementation !== v.implementation
            ? ((g = ec(v, m.mode, S)), (g.return = m), g)
            : ((g = s(g, v.children || [])), (g.return = m), g);
    }
    function c(m, g, v, S, C) {
        return g === null || g.tag !== 7
            ? ((g = Jr(v, m.mode, S, C)), (g.return = m), g)
            : ((g = s(g, v)), (g.return = m), g);
    }
    function f(m, g, v) {
        if ((typeof g == "string" && g !== "") || typeof g == "number")
            return (g = Ju("" + g, m.mode, v)), (g.return = m), g;
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
                case ia:
                    return (
                        (v = Wa(g.type, g.key, g.props, null, m.mode, v)), (v.ref = Ri(m, null, g)), (v.return = m), v
                    );
                case ws:
                    return (g = ec(g, m.mode, v)), (g.return = m), g;
                case Jn:
                    var S = g._init;
                    return f(m, S(g._payload), v);
            }
            if (Ii(g) || bi(g)) return (g = Jr(g, m.mode, v, null)), (g.return = m), g;
            ga(m, g);
        }
        return null;
    }
    function d(m, g, v, S) {
        var C = g !== null ? g.key : null;
        if ((typeof v == "string" && v !== "") || typeof v == "number") return C !== null ? null : a(m, g, "" + v, S);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
                case ia:
                    return v.key === C ? l(m, g, v, S) : null;
                case ws:
                    return v.key === C ? u(m, g, v, S) : null;
                case Jn:
                    return (C = v._init), d(m, g, C(v._payload), S);
            }
            if (Ii(v) || bi(v)) return C !== null ? null : c(m, g, v, S, null);
            ga(m, v);
        }
        return null;
    }
    function h(m, g, v, S, C) {
        if ((typeof S == "string" && S !== "") || typeof S == "number")
            return (m = m.get(v) || null), a(g, m, "" + S, C);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
                case ia:
                    return (m = m.get(S.key === null ? v : S.key) || null), l(g, m, S, C);
                case ws:
                    return (m = m.get(S.key === null ? v : S.key) || null), u(g, m, S, C);
                case Jn:
                    var T = S._init;
                    return h(m, g, v, T(S._payload), C);
            }
            if (Ii(S) || bi(S)) return (m = m.get(v) || null), c(g, m, S, C, null);
            ga(g, S);
        }
        return null;
    }
    function y(m, g, v, S) {
        for (var C = null, T = null, b = g, P = (g = 0), R = null; b !== null && P < v.length; P++) {
            b.index > P ? ((R = b), (b = null)) : (R = b.sibling);
            var k = d(m, b, v[P], S);
            if (k === null) {
                b === null && (b = R);
                break;
            }
            e && b && k.alternate === null && t(m, b),
                (g = i(k, g, P)),
                T === null ? (C = k) : (T.sibling = k),
                (T = k),
                (b = R);
        }
        if (P === v.length) return n(m, b), me && Vr(m, P), C;
        if (b === null) {
            for (; P < v.length; P++)
                (b = f(m, v[P], S)), b !== null && ((g = i(b, g, P)), T === null ? (C = b) : (T.sibling = b), (T = b));
            return me && Vr(m, P), C;
        }
        for (b = r(m, b); P < v.length; P++)
            (R = h(b, m, P, v[P], S)),
                R !== null &&
                    (e && R.alternate !== null && b.delete(R.key === null ? P : R.key),
                    (g = i(R, g, P)),
                    T === null ? (C = R) : (T.sibling = R),
                    (T = R));
        return (
            e &&
                b.forEach(function (L) {
                    return t(m, L);
                }),
            me && Vr(m, P),
            C
        );
    }
    function p(m, g, v, S) {
        var C = bi(v);
        if (typeof C != "function") throw Error(j(150));
        if (((v = C.call(v)), v == null)) throw Error(j(151));
        for (var T = (C = null), b = g, P = (g = 0), R = null, k = v.next(); b !== null && !k.done; P++, k = v.next()) {
            b.index > P ? ((R = b), (b = null)) : (R = b.sibling);
            var L = d(m, b, k.value, S);
            if (L === null) {
                b === null && (b = R);
                break;
            }
            e && b && L.alternate === null && t(m, b),
                (g = i(L, g, P)),
                T === null ? (C = L) : (T.sibling = L),
                (T = L),
                (b = R);
        }
        if (k.done) return n(m, b), me && Vr(m, P), C;
        if (b === null) {
            for (; !k.done; P++, k = v.next())
                (k = f(m, k.value, S)),
                    k !== null && ((g = i(k, g, P)), T === null ? (C = k) : (T.sibling = k), (T = k));
            return me && Vr(m, P), C;
        }
        for (b = r(m, b); !k.done; P++, k = v.next())
            (k = h(b, m, P, k.value, S)),
                k !== null &&
                    (e && k.alternate !== null && b.delete(k.key === null ? P : k.key),
                    (g = i(k, g, P)),
                    T === null ? (C = k) : (T.sibling = k),
                    (T = k));
        return (
            e &&
                b.forEach(function (D) {
                    return t(m, D);
                }),
            me && Vr(m, P),
            C
        );
    }
    function x(m, g, v, S) {
        if (
            (typeof v == "object" && v !== null && v.type === Ss && v.key === null && (v = v.props.children),
            typeof v == "object" && v !== null)
        ) {
            switch (v.$$typeof) {
                case ia:
                    e: {
                        for (var C = v.key, T = g; T !== null; ) {
                            if (T.key === C) {
                                if (((C = v.type), C === Ss)) {
                                    if (T.tag === 7) {
                                        n(m, T.sibling), (g = s(T, v.props.children)), (g.return = m), (m = g);
                                        break e;
                                    }
                                } else if (
                                    T.elementType === C ||
                                    (typeof C == "object" && C !== null && C.$$typeof === Jn && Qp(C) === T.type)
                                ) {
                                    n(m, T.sibling),
                                        (g = s(T, v.props)),
                                        (g.ref = Ri(m, T, v)),
                                        (g.return = m),
                                        (m = g);
                                    break e;
                                }
                                n(m, T);
                                break;
                            } else t(m, T);
                            T = T.sibling;
                        }
                        v.type === Ss
                            ? ((g = Jr(v.props.children, m.mode, S, v.key)), (g.return = m), (m = g))
                            : ((S = Wa(v.type, v.key, v.props, null, m.mode, S)),
                              (S.ref = Ri(m, g, v)),
                              (S.return = m),
                              (m = S));
                    }
                    return o(m);
                case ws:
                    e: {
                        for (T = v.key; g !== null; ) {
                            if (g.key === T)
                                if (
                                    g.tag === 4 &&
                                    g.stateNode.containerInfo === v.containerInfo &&
                                    g.stateNode.implementation === v.implementation
                                ) {
                                    n(m, g.sibling), (g = s(g, v.children || [])), (g.return = m), (m = g);
                                    break e;
                                } else {
                                    n(m, g);
                                    break;
                                }
                            else t(m, g);
                            g = g.sibling;
                        }
                        (g = ec(v, m.mode, S)), (g.return = m), (m = g);
                    }
                    return o(m);
                case Jn:
                    return (T = v._init), x(m, g, T(v._payload), S);
            }
            if (Ii(v)) return y(m, g, v, S);
            if (bi(v)) return p(m, g, v, S);
            ga(m, v);
        }
        return (typeof v == "string" && v !== "") || typeof v == "number"
            ? ((v = "" + v),
              g !== null && g.tag === 6
                  ? (n(m, g.sibling), (g = s(g, v)), (g.return = m), (m = g))
                  : (n(m, g), (g = Ju(v, m.mode, S)), (g.return = m), (m = g)),
              o(m))
            : n(m, g);
    }
    return x;
}
var ni = c0(!0),
    f0 = c0(!1),
    pl = Nr(null),
    ml = null,
    Rs = null,
    Vd = null;
function _d() {
    Vd = Rs = ml = null;
}
function zd(e) {
    var t = pl.current;
    pe(pl), (e._currentValue = t);
}
function tf(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function zs(e, t) {
    (ml = e),
        (Vd = Rs = null),
        (e = e.dependencies),
        e !== null && e.firstContext !== null && (e.lanes & t && (ut = !0), (e.firstContext = null));
}
function Ot(e) {
    var t = e._currentValue;
    if (Vd !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Rs === null)) {
            if (ml === null) throw Error(j(308));
            (Rs = e), (ml.dependencies = { lanes: 0, firstContext: e });
        } else Rs = Rs.next = e;
    return t;
}
var $r = null;
function Bd(e) {
    $r === null ? ($r = [e]) : $r.push(e);
}
function d0(e, t, n, r) {
    var s = t.interleaved;
    return s === null ? ((n.next = n), Bd(t)) : ((n.next = s.next), (s.next = n)), (t.interleaved = n), Fn(e, r);
}
function Fn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var er = !1;
function $d(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function h0(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function On(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function yr(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ne & 2)) {
        var s = r.pending;
        return s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)), (r.pending = t), Fn(e, n);
    }
    return (
        (s = r.interleaved),
        s === null ? ((t.next = t), Bd(r)) : ((t.next = s.next), (s.next = t)),
        (r.interleaved = t),
        Fn(e, n)
    );
}
function Va(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), kd(e, n);
    }
}
function Yp(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var s = null,
            i = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                i === null ? (s = i = o) : (i = i.next = o), (n = n.next);
            } while (n !== null);
            i === null ? (s = i = t) : (i = i.next = t);
        } else s = i = t;
        (n = { baseState: r.baseState, firstBaseUpdate: s, lastBaseUpdate: i, shared: r.shared, effects: r.effects }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function gl(e, t, n, r) {
    var s = e.updateQueue;
    er = !1;
    var i = s.firstBaseUpdate,
        o = s.lastBaseUpdate,
        a = s.shared.pending;
    if (a !== null) {
        s.shared.pending = null;
        var l = a,
            u = l.next;
        (l.next = null), o === null ? (i = u) : (o.next = u), (o = l);
        var c = e.alternate;
        c !== null &&
            ((c = c.updateQueue),
            (a = c.lastBaseUpdate),
            a !== o && (a === null ? (c.firstBaseUpdate = u) : (a.next = u), (c.lastBaseUpdate = l)));
    }
    if (i !== null) {
        var f = s.baseState;
        (o = 0), (c = u = l = null), (a = i);
        do {
            var d = a.lane,
                h = a.eventTime;
            if ((r & d) === d) {
                c !== null &&
                    (c = c.next =
                        { eventTime: h, lane: 0, tag: a.tag, payload: a.payload, callback: a.callback, next: null });
                e: {
                    var y = e,
                        p = a;
                    switch (((d = t), (h = n), p.tag)) {
                        case 1:
                            if (((y = p.payload), typeof y == "function")) {
                                f = y.call(h, f, d);
                                break e;
                            }
                            f = y;
                            break e;
                        case 3:
                            y.flags = (y.flags & -65537) | 128;
                        case 0:
                            if (((y = p.payload), (d = typeof y == "function" ? y.call(h, f, d) : y), d == null))
                                break e;
                            f = xe({}, f, d);
                            break e;
                        case 2:
                            er = !0;
                    }
                }
                a.callback !== null &&
                    a.lane !== 0 &&
                    ((e.flags |= 64), (d = s.effects), d === null ? (s.effects = [a]) : d.push(a));
            } else
                (h = { eventTime: h, lane: d, tag: a.tag, payload: a.payload, callback: a.callback, next: null }),
                    c === null ? ((u = c = h), (l = f)) : (c = c.next = h),
                    (o |= d);
            if (((a = a.next), a === null)) {
                if (((a = s.shared.pending), a === null)) break;
                (d = a), (a = d.next), (d.next = null), (s.lastBaseUpdate = d), (s.shared.pending = null);
            }
        } while (!0);
        if (
            (c === null && (l = f),
            (s.baseState = l),
            (s.firstBaseUpdate = u),
            (s.lastBaseUpdate = c),
            (t = s.shared.interleaved),
            t !== null)
        ) {
            s = t;
            do (o |= s.lane), (s = s.next);
            while (s !== t);
        } else i === null && (s.shared.lanes = 0);
        (is |= o), (e.lanes = o), (e.memoizedState = f);
    }
}
function Xp(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                s = r.callback;
            if (s !== null) {
                if (((r.callback = null), (r = n), typeof s != "function")) throw Error(j(191, s));
                s.call(r);
            }
        }
}
var Bo = {},
    Sn = Nr(Bo),
    yo = Nr(Bo),
    vo = Nr(Bo);
function Ur(e) {
    if (e === Bo) throw Error(j(174));
    return e;
}
function Ud(e, t) {
    switch ((ce(vo, t), ce(yo, e), ce(Sn, Bo), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : jc(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = jc(t, e));
    }
    pe(Sn), ce(Sn, t);
}
function ri() {
    pe(Sn), pe(yo), pe(vo);
}
function p0(e) {
    Ur(vo.current);
    var t = Ur(Sn.current),
        n = jc(t, e.type);
    t !== n && (ce(yo, e), ce(Sn, n));
}
function Wd(e) {
    yo.current === e && (pe(Sn), pe(yo));
}
var ge = Nr(0);
function yl(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var Gu = [];
function Hd() {
    for (var e = 0; e < Gu.length; e++) Gu[e]._workInProgressVersionPrimary = null;
    Gu.length = 0;
}
var _a = Bn.ReactCurrentDispatcher,
    Qu = Bn.ReactCurrentBatchConfig,
    ss = 0,
    ve = null,
    Le = null,
    Ve = null,
    vl = !1,
    Gi = !1,
    xo = 0,
    DC = 0;
function He() {
    throw Error(j(321));
}
function Kd(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!sn(e[n], t[n])) return !1;
    return !0;
}
function Gd(e, t, n, r, s, i) {
    if (
        ((ss = i),
        (ve = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (_a.current = e === null || e.memoizedState === null ? FC : VC),
        (e = n(r, s)),
        Gi)
    ) {
        i = 0;
        do {
            if (((Gi = !1), (xo = 0), 25 <= i)) throw Error(j(301));
            (i += 1), (Ve = Le = null), (t.updateQueue = null), (_a.current = _C), (e = n(r, s));
        } while (Gi);
    }
    if (((_a.current = xl), (t = Le !== null && Le.next !== null), (ss = 0), (Ve = Le = ve = null), (vl = !1), t))
        throw Error(j(300));
    return e;
}
function Qd() {
    var e = xo !== 0;
    return (xo = 0), e;
}
function dn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ve === null ? (ve.memoizedState = Ve = e) : (Ve = Ve.next = e), Ve;
}
function jt() {
    if (Le === null) {
        var e = ve.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = Le.next;
    var t = Ve === null ? ve.memoizedState : Ve.next;
    if (t !== null) (Ve = t), (Le = e);
    else {
        if (e === null) throw Error(j(310));
        (Le = e),
            (e = {
                memoizedState: Le.memoizedState,
                baseState: Le.baseState,
                baseQueue: Le.baseQueue,
                queue: Le.queue,
                next: null,
            }),
            Ve === null ? (ve.memoizedState = Ve = e) : (Ve = Ve.next = e);
    }
    return Ve;
}
function wo(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function Yu(e) {
    var t = jt(),
        n = t.queue;
    if (n === null) throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = Le,
        s = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (s !== null) {
            var o = s.next;
            (s.next = i.next), (i.next = o);
        }
        (r.baseQueue = s = i), (n.pending = null);
    }
    if (s !== null) {
        (i = s.next), (r = r.baseState);
        var a = (o = null),
            l = null,
            u = i;
        do {
            var c = u.lane;
            if ((ss & c) === c)
                l !== null &&
                    (l = l.next =
                        {
                            lane: 0,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null,
                        }),
                    (r = u.hasEagerState ? u.eagerState : e(r, u.action));
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                };
                l === null ? ((a = l = f), (o = r)) : (l = l.next = f), (ve.lanes |= c), (is |= c);
            }
            u = u.next;
        } while (u !== null && u !== i);
        l === null ? (o = r) : (l.next = a),
            sn(r, t.memoizedState) || (ut = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = l),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        s = e;
        do (i = s.lane), (ve.lanes |= i), (is |= i), (s = s.next);
        while (s !== e);
    } else s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function Xu(e) {
    var t = jt(),
        n = t.queue;
    if (n === null) throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        s = n.pending,
        i = t.memoizedState;
    if (s !== null) {
        n.pending = null;
        var o = (s = s.next);
        do (i = e(i, o.action)), (o = o.next);
        while (o !== s);
        sn(i, t.memoizedState) || (ut = !0),
            (t.memoizedState = i),
            t.baseQueue === null && (t.baseState = i),
            (n.lastRenderedState = i);
    }
    return [i, r];
}
function m0() {}
function g0(e, t) {
    var n = ve,
        r = jt(),
        s = t(),
        i = !sn(r.memoizedState, s);
    if (
        (i && ((r.memoizedState = s), (ut = !0)),
        (r = r.queue),
        Yd(x0.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (Ve !== null && Ve.memoizedState.tag & 1))
    ) {
        if (((n.flags |= 2048), So(9, v0.bind(null, n, r, s, t), void 0, null), _e === null)) throw Error(j(349));
        ss & 30 || y0(n, t, s);
    }
    return s;
}
function y0(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = ve.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (ve.updateQueue = t), (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function v0(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), w0(t) && S0(e);
}
function x0(e, t, n) {
    return n(function () {
        w0(t) && S0(e);
    });
}
function w0(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !sn(e, n);
    } catch {
        return !0;
    }
}
function S0(e) {
    var t = Fn(e, 1);
    t !== null && tn(t, e, 1, -1);
}
function qp(e) {
    var t = dn();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: wo,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = IC.bind(null, ve, e)),
        [t.memoizedState, e]
    );
}
function So(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = ve.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (ve.updateQueue = t), (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
    );
}
function E0() {
    return jt().memoizedState;
}
function za(e, t, n, r) {
    var s = dn();
    (ve.flags |= e), (s.memoizedState = So(1 | t, n, void 0, r === void 0 ? null : r));
}
function Xl(e, t, n, r) {
    var s = jt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Le !== null) {
        var o = Le.memoizedState;
        if (((i = o.destroy), r !== null && Kd(r, o.deps))) {
            s.memoizedState = So(t, n, i, r);
            return;
        }
    }
    (ve.flags |= e), (s.memoizedState = So(1 | t, n, i, r));
}
function Zp(e, t) {
    return za(8390656, 8, e, t);
}
function Yd(e, t) {
    return Xl(2048, 8, e, t);
}
function C0(e, t) {
    return Xl(4, 2, e, t);
}
function b0(e, t) {
    return Xl(4, 4, e, t);
}
function T0(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function P0(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), Xl(4, 4, T0.bind(null, t, e), n);
}
function Xd() {}
function k0(e, t) {
    var n = jt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Kd(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function A0(e, t) {
    var n = jt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Kd(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function R0(e, t, n) {
    return ss & 21
        ? (sn(n, t) || ((n = Ov()), (ve.lanes |= n), (is |= n), (e.baseState = !0)), t)
        : (e.baseState && ((e.baseState = !1), (ut = !0)), (e.memoizedState = n));
}
function OC(e, t) {
    var n = oe;
    (oe = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Qu.transition;
    Qu.transition = {};
    try {
        e(!1), t();
    } finally {
        (oe = n), (Qu.transition = r);
    }
}
function M0() {
    return jt().memoizedState;
}
function jC(e, t, n) {
    var r = xr(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), N0(e))) L0(t, n);
    else if (((n = d0(e, t, n, r)), n !== null)) {
        var s = rt();
        tn(n, e, r, s), D0(n, t, r);
    }
}
function IC(e, t, n) {
    var r = xr(e),
        s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (N0(e)) L0(t, s);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
            try {
                var o = t.lastRenderedState,
                    a = i(o, n);
                if (((s.hasEagerState = !0), (s.eagerState = a), sn(a, o))) {
                    var l = t.interleaved;
                    l === null ? ((s.next = s), Bd(t)) : ((s.next = l.next), (l.next = s)), (t.interleaved = s);
                    return;
                }
            } catch {
            } finally {
            }
        (n = d0(e, t, s, r)), n !== null && ((s = rt()), tn(n, e, r, s), D0(n, t, r));
    }
}
function N0(e) {
    var t = e.alternate;
    return e === ve || (t !== null && t === ve);
}
function L0(e, t) {
    Gi = vl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function D0(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), kd(e, n);
    }
}
var xl = {
        readContext: Ot,
        useCallback: He,
        useContext: He,
        useEffect: He,
        useImperativeHandle: He,
        useInsertionEffect: He,
        useLayoutEffect: He,
        useMemo: He,
        useReducer: He,
        useRef: He,
        useState: He,
        useDebugValue: He,
        useDeferredValue: He,
        useTransition: He,
        useMutableSource: He,
        useSyncExternalStore: He,
        useId: He,
        unstable_isNewReconciler: !1,
    },
    FC = {
        readContext: Ot,
        useCallback: function (e, t) {
            return (dn().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: Ot,
        useEffect: Zp,
        useImperativeHandle: function (e, t, n) {
            return (n = n != null ? n.concat([e]) : null), za(4194308, 4, T0.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return za(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return za(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = dn();
            return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
            var r = dn();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = jC.bind(null, ve, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = dn();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: qp,
        useDebugValue: Xd,
        useDeferredValue: function (e) {
            return (dn().memoizedState = e);
        },
        useTransition: function () {
            var e = qp(!1),
                t = e[0];
            return (e = OC.bind(null, e[1])), (dn().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = ve,
                s = dn();
            if (me) {
                if (n === void 0) throw Error(j(407));
                n = n();
            } else {
                if (((n = t()), _e === null)) throw Error(j(349));
                ss & 30 || y0(r, t, n);
            }
            s.memoizedState = n;
            var i = { value: n, getSnapshot: t };
            return (
                (s.queue = i),
                Zp(x0.bind(null, r, i, e), [e]),
                (r.flags |= 2048),
                So(9, v0.bind(null, r, i, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = dn(),
                t = _e.identifierPrefix;
            if (me) {
                var n = Dn,
                    r = Ln;
                (n = (r & ~(1 << (32 - en(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = xo++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = DC++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    VC = {
        readContext: Ot,
        useCallback: k0,
        useContext: Ot,
        useEffect: Yd,
        useImperativeHandle: P0,
        useInsertionEffect: C0,
        useLayoutEffect: b0,
        useMemo: A0,
        useReducer: Yu,
        useRef: E0,
        useState: function () {
            return Yu(wo);
        },
        useDebugValue: Xd,
        useDeferredValue: function (e) {
            var t = jt();
            return R0(t, Le.memoizedState, e);
        },
        useTransition: function () {
            var e = Yu(wo)[0],
                t = jt().memoizedState;
            return [e, t];
        },
        useMutableSource: m0,
        useSyncExternalStore: g0,
        useId: M0,
        unstable_isNewReconciler: !1,
    },
    _C = {
        readContext: Ot,
        useCallback: k0,
        useContext: Ot,
        useEffect: Yd,
        useImperativeHandle: P0,
        useInsertionEffect: C0,
        useLayoutEffect: b0,
        useMemo: A0,
        useReducer: Xu,
        useRef: E0,
        useState: function () {
            return Xu(wo);
        },
        useDebugValue: Xd,
        useDeferredValue: function (e) {
            var t = jt();
            return Le === null ? (t.memoizedState = e) : R0(t, Le.memoizedState, e);
        },
        useTransition: function () {
            var e = Xu(wo)[0],
                t = jt().memoizedState;
            return [e, t];
        },
        useMutableSource: m0,
        useSyncExternalStore: g0,
        useId: M0,
        unstable_isNewReconciler: !1,
    };
function Qt(e, t) {
    if (e && e.defaultProps) {
        (t = xe({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
function nf(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : xe({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var ql = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? cs(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = rt(),
            s = xr(e),
            i = On(r, s);
        (i.payload = t), n != null && (i.callback = n), (t = yr(e, i, s)), t !== null && (tn(t, e, s, r), Va(t, e, s));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = rt(),
            s = xr(e),
            i = On(r, s);
        (i.tag = 1),
            (i.payload = t),
            n != null && (i.callback = n),
            (t = yr(e, i, s)),
            t !== null && (tn(t, e, s, r), Va(t, e, s));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = rt(),
            r = xr(e),
            s = On(n, r);
        (s.tag = 2), t != null && (s.callback = t), (t = yr(e, s, r)), t !== null && (tn(t, e, r, n), Va(t, e, r));
    },
};
function Jp(e, t, n, r, s, i, o) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, i, o)
            : t.prototype && t.prototype.isPureReactComponent
              ? !ho(n, r) || !ho(s, i)
              : !0
    );
}
function O0(e, t, n) {
    var r = !1,
        s = Cr,
        i = t.contextType;
    return (
        typeof i == "object" && i !== null
            ? (i = Ot(i))
            : ((s = ft(t) ? ns : Ye.current), (r = t.contextTypes), (i = (r = r != null) ? ei(e, s) : Cr)),
        (t = new t(n, i)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = ql),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = s),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
    );
}
function em(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && ql.enqueueReplaceState(t, t.state, null);
}
function rf(e, t, n, r) {
    var s = e.stateNode;
    (s.props = n), (s.state = e.memoizedState), (s.refs = {}), $d(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? (s.context = Ot(i)) : ((i = ft(t) ? ns : Ye.current), (s.context = ei(e, i))),
        (s.state = e.memoizedState),
        (i = t.getDerivedStateFromProps),
        typeof i == "function" && (nf(e, t, i, n), (s.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof s.getSnapshotBeforeUpdate == "function" ||
            (typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function") ||
            ((t = s.state),
            typeof s.componentWillMount == "function" && s.componentWillMount(),
            typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(),
            t !== s.state && ql.enqueueReplaceState(s, s.state, null),
            gl(e, n, s, r),
            (s.state = e.memoizedState)),
        typeof s.componentDidMount == "function" && (e.flags |= 4194308);
}
function si(e, t) {
    try {
        var n = "",
            r = t;
        do (n += hE(r)), (r = r.return);
        while (r);
        var s = n;
    } catch (i) {
        s =
            `
Error generating stack: ` +
            i.message +
            `
` +
            i.stack;
    }
    return { value: e, source: t, stack: s, digest: null };
}
function qu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function sf(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var zC = typeof WeakMap == "function" ? WeakMap : Map;
function j0(e, t, n) {
    (n = On(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            Sl || ((Sl = !0), (mf = r)), sf(e, t);
        }),
        n
    );
}
function I0(e, t, n) {
    (n = On(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var s = t.value;
        (n.payload = function () {
            return r(s);
        }),
            (n.callback = function () {
                sf(e, t);
            });
    }
    var i = e.stateNode;
    return (
        i !== null &&
            typeof i.componentDidCatch == "function" &&
            (n.callback = function () {
                sf(e, t), typeof r != "function" && (vr === null ? (vr = new Set([this])) : vr.add(this));
                var o = t.stack;
                this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
            }),
        n
    );
}
function tm(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new zC();
        var s = new Set();
        r.set(t, s);
    } else (s = r.get(t)), s === void 0 && ((s = new Set()), r.set(t, s));
    s.has(n) || (s.add(n), (e = eb.bind(null, e, t, n)), t.then(e, e));
}
function nm(e) {
    do {
        var t;
        if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function rm(e, t, n, r, s) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = s), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = On(-1, 1)), (t.tag = 2), yr(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var BC = Bn.ReactCurrentOwner,
    ut = !1;
function Je(e, t, n, r) {
    t.child = e === null ? f0(t, null, n, r) : ni(t, e.child, n, r);
}
function sm(e, t, n, r, s) {
    n = n.render;
    var i = t.ref;
    return (
        zs(t, s),
        (r = Gd(e, t, n, r, i, s)),
        (n = Qd()),
        e !== null && !ut
            ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~s), Vn(e, t, s))
            : (me && n && jd(t), (t.flags |= 1), Je(e, t, r, s), t.child)
    );
}
function im(e, t, n, r, s) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" &&
            !sh(i) &&
            i.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = i), F0(e, t, i, r, s))
            : ((e = Wa(n.type, null, r, t, t.mode, s)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((i = e.child), !(e.lanes & s))) {
        var o = i.memoizedProps;
        if (((n = n.compare), (n = n !== null ? n : ho), n(o, r) && e.ref === t.ref)) return Vn(e, t, s);
    }
    return (t.flags |= 1), (e = wr(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function F0(e, t, n, r, s) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (ho(i, r) && e.ref === t.ref)
            if (((ut = !1), (t.pendingProps = r = i), (e.lanes & s) !== 0)) e.flags & 131072 && (ut = !0);
            else return (t.lanes = e.lanes), Vn(e, t, s);
    }
    return of(e, t, n, r, s);
}
function V0(e, t, n) {
    var r = t.pendingProps,
        s = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ce(Ns, yt), (yt |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = i !== null ? i.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    ce(Ns, yt),
                    (yt |= e),
                    null
                );
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = i !== null ? i.baseLanes : n),
                ce(Ns, yt),
                (yt |= r);
        }
    else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), ce(Ns, yt), (yt |= r);
    return Je(e, t, s, n), t.child;
}
function _0(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function of(e, t, n, r, s) {
    var i = ft(n) ? ns : Ye.current;
    return (
        (i = ei(t, i)),
        zs(t, s),
        (n = Gd(e, t, n, r, i, s)),
        (r = Qd()),
        e !== null && !ut
            ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~s), Vn(e, t, s))
            : (me && r && jd(t), (t.flags |= 1), Je(e, t, n, s), t.child)
    );
}
function om(e, t, n, r, s) {
    if (ft(n)) {
        var i = !0;
        fl(t);
    } else i = !1;
    if ((zs(t, s), t.stateNode === null)) Ba(e, t), O0(t, n, r), rf(t, n, r, s), (r = !0);
    else if (e === null) {
        var o = t.stateNode,
            a = t.memoizedProps;
        o.props = a;
        var l = o.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? (u = Ot(u)) : ((u = ft(n) ? ns : Ye.current), (u = ei(t, u)));
        var c = n.getDerivedStateFromProps,
            f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        f ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                typeof o.componentWillReceiveProps != "function") ||
            ((a !== r || l !== u) && em(t, o, r, u)),
            (er = !1);
        var d = t.memoizedState;
        (o.state = d),
            gl(t, r, o, s),
            (l = t.memoizedState),
            a !== r || d !== l || ct.current || er
                ? (typeof c == "function" && (nf(t, n, c, r), (l = t.memoizedState)),
                  (a = er || Jp(t, n, a, r, d, l, u))
                      ? (f ||
                            (typeof o.UNSAFE_componentWillMount != "function" &&
                                typeof o.componentWillMount != "function") ||
                            (typeof o.componentWillMount == "function" && o.componentWillMount(),
                            typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
                        typeof o.componentDidMount == "function" && (t.flags |= 4194308))
                      : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = l)),
                  (o.props = r),
                  (o.state = l),
                  (o.context = u),
                  (r = a))
                : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
    } else {
        (o = t.stateNode),
            h0(e, t),
            (a = t.memoizedProps),
            (u = t.type === t.elementType ? a : Qt(t.type, a)),
            (o.props = u),
            (f = t.pendingProps),
            (d = o.context),
            (l = n.contextType),
            typeof l == "object" && l !== null ? (l = Ot(l)) : ((l = ft(n) ? ns : Ye.current), (l = ei(t, l)));
        var h = n.getDerivedStateFromProps;
        (c = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function") ||
            (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
                typeof o.componentWillReceiveProps != "function") ||
            ((a !== f || d !== l) && em(t, o, r, l)),
            (er = !1),
            (d = t.memoizedState),
            (o.state = d),
            gl(t, r, o, s);
        var y = t.memoizedState;
        a !== f || d !== y || ct.current || er
            ? (typeof h == "function" && (nf(t, n, h, r), (y = t.memoizedState)),
              (u = er || Jp(t, n, u, r, d, y, l) || !1)
                  ? (c ||
                        (typeof o.UNSAFE_componentWillUpdate != "function" &&
                            typeof o.componentWillUpdate != "function") ||
                        (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, l),
                        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, l)),
                    typeof o.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
                  : (typeof o.componentDidUpdate != "function" ||
                        (a === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate != "function" ||
                        (a === e.memoizedProps && d === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = y)),
              (o.props = r),
              (o.state = y),
              (o.context = l),
              (r = u))
            : (typeof o.componentDidUpdate != "function" ||
                  (a === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                  (a === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return af(e, t, n, r, i, s);
}
function af(e, t, n, r, s, i) {
    _0(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return s && Hp(t, n, !1), Vn(e, t, i);
    (r = t.stateNode), (BC.current = t);
    var a = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
        (t.flags |= 1),
        e !== null && o ? ((t.child = ni(t, e.child, null, i)), (t.child = ni(t, null, a, i))) : Je(e, t, a, i),
        (t.memoizedState = r.state),
        s && Hp(t, n, !0),
        t.child
    );
}
function z0(e) {
    var t = e.stateNode;
    t.pendingContext ? Wp(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Wp(e, t.context, !1),
        Ud(e, t.containerInfo);
}
function am(e, t, n, r, s) {
    return ti(), Fd(s), (t.flags |= 256), Je(e, t, n, r), t.child;
}
var lf = { dehydrated: null, treeContext: null, retryLane: 0 };
function uf(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function B0(e, t, n) {
    var r = t.pendingProps,
        s = ge.current,
        i = !1,
        o = (t.flags & 128) !== 0,
        a;
    if (
        ((a = o) || (a = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0),
        a ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (s |= 1),
        ce(ge, s & 1),
        e === null)
    )
        return (
            ef(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
                : ((o = r.children),
                  (e = r.fallback),
                  i
                      ? ((r = t.mode),
                        (i = t.child),
                        (o = { mode: "hidden", children: o }),
                        !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = o)) : (i = eu(o, r, 0, null)),
                        (e = Jr(e, r, n, null)),
                        (i.return = t),
                        (e.return = t),
                        (i.sibling = e),
                        (t.child = i),
                        (t.child.memoizedState = uf(n)),
                        (t.memoizedState = lf),
                        e)
                      : qd(t, o))
        );
    if (((s = e.memoizedState), s !== null && ((a = s.dehydrated), a !== null))) return $C(e, t, o, r, a, s, n);
    if (i) {
        (i = r.fallback), (o = t.mode), (s = e.child), (a = s.sibling);
        var l = { mode: "hidden", children: r.children };
        return (
            !(o & 1) && t.child !== s
                ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null))
                : ((r = wr(s, l)), (r.subtreeFlags = s.subtreeFlags & 14680064)),
            a !== null ? (i = wr(a, i)) : ((i = Jr(i, o, n, null)), (i.flags |= 2)),
            (i.return = t),
            (r.return = t),
            (r.sibling = i),
            (t.child = r),
            (r = i),
            (i = t.child),
            (o = e.child.memoizedState),
            (o = o === null ? uf(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }),
            (i.memoizedState = o),
            (i.childLanes = e.childLanes & ~n),
            (t.memoizedState = lf),
            r
        );
    }
    return (
        (i = e.child),
        (e = i.sibling),
        (r = wr(i, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function qd(e, t) {
    return (t = eu({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function ya(e, t, n, r) {
    return (
        r !== null && Fd(r),
        ni(t, e.child, null, n),
        (e = qd(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function $C(e, t, n, r, s, i, o) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = qu(Error(j(422)))), ya(e, t, o, r))
            : t.memoizedState !== null
              ? ((t.child = e.child), (t.flags |= 128), null)
              : ((i = r.fallback),
                (s = t.mode),
                (r = eu({ mode: "visible", children: r.children }, s, 0, null)),
                (i = Jr(i, s, o, null)),
                (i.flags |= 2),
                (r.return = t),
                (i.return = t),
                (r.sibling = i),
                (t.child = r),
                t.mode & 1 && ni(t, e.child, null, o),
                (t.child.memoizedState = uf(o)),
                (t.memoizedState = lf),
                i);
    if (!(t.mode & 1)) return ya(e, t, o, null);
    if (s.data === "$!") {
        if (((r = s.nextSibling && s.nextSibling.dataset), r)) var a = r.dgst;
        return (r = a), (i = Error(j(419))), (r = qu(i, r, void 0)), ya(e, t, o, r);
    }
    if (((a = (o & e.childLanes) !== 0), ut || a)) {
        if (((r = _e), r !== null)) {
            switch (o & -o) {
                case 4:
                    s = 2;
                    break;
                case 16:
                    s = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    s = 32;
                    break;
                case 536870912:
                    s = 268435456;
                    break;
                default:
                    s = 0;
            }
            (s = s & (r.suspendedLanes | o) ? 0 : s),
                s !== 0 && s !== i.retryLane && ((i.retryLane = s), Fn(e, s), tn(r, e, s, -1));
        }
        return rh(), (r = qu(Error(j(421)))), ya(e, t, o, r);
    }
    return s.data === "$?"
        ? ((t.flags |= 128), (t.child = e.child), (t = tb.bind(null, e)), (s._reactRetry = t), null)
        : ((e = i.treeContext),
          (wt = gr(s.nextSibling)),
          (St = t),
          (me = !0),
          (Zt = null),
          e !== null && ((Rt[Mt++] = Ln), (Rt[Mt++] = Dn), (Rt[Mt++] = rs), (Ln = e.id), (Dn = e.overflow), (rs = t)),
          (t = qd(t, r.children)),
          (t.flags |= 4096),
          t);
}
function lm(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), tf(e.return, t, n);
}
function Zu(e, t, n, r, s) {
    var i = e.memoizedState;
    i === null
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s })
        : ((i.isBackwards = t),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = r),
          (i.tail = n),
          (i.tailMode = s));
}
function $0(e, t, n) {
    var r = t.pendingProps,
        s = r.revealOrder,
        i = r.tail;
    if ((Je(e, t, r.children, n), (r = ge.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && lm(e, n, t);
                else if (e.tag === 19) lm(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((ce(ge, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (s) {
            case "forwards":
                for (n = t.child, s = null; n !== null; )
                    (e = n.alternate), e !== null && yl(e) === null && (s = n), (n = n.sibling);
                (n = s),
                    n === null ? ((s = t.child), (t.child = null)) : ((s = n.sibling), (n.sibling = null)),
                    Zu(t, !1, s, n, i);
                break;
            case "backwards":
                for (n = null, s = t.child, t.child = null; s !== null; ) {
                    if (((e = s.alternate), e !== null && yl(e) === null)) {
                        t.child = s;
                        break;
                    }
                    (e = s.sibling), (s.sibling = n), (n = s), (s = e);
                }
                Zu(t, !0, n, null, i);
                break;
            case "together":
                Zu(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Ba(e, t) {
    !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Vn(e, t, n) {
    if ((e !== null && (t.dependencies = e.dependencies), (is |= t.lanes), !(n & t.childLanes))) return null;
    if (e !== null && t.child !== e.child) throw Error(j(153));
    if (t.child !== null) {
        for (e = t.child, n = wr(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
            (e = e.sibling), (n = n.sibling = wr(e, e.pendingProps)), (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function UC(e, t, n) {
    switch (t.tag) {
        case 3:
            z0(t), ti();
            break;
        case 5:
            p0(t);
            break;
        case 1:
            ft(t.type) && fl(t);
            break;
        case 4:
            Ud(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                s = t.memoizedProps.value;
            ce(pl, r._currentValue), (r._currentValue = s);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (ce(ge, ge.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                      ? B0(e, t, n)
                      : (ce(ge, ge.current & 1), (e = Vn(e, t, n)), e !== null ? e.sibling : null);
            ce(ge, ge.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return $0(e, t, n);
                t.flags |= 128;
            }
            if (
                ((s = t.memoizedState),
                s !== null && ((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
                ce(ge, ge.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), V0(e, t, n);
    }
    return Vn(e, t, n);
}
var U0, cf, W0, H0;
U0 = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
cf = function () {};
W0 = function (e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
        (e = t.stateNode), Ur(Sn.current);
        var i = null;
        switch (n) {
            case "input":
                (s = Nc(e, s)), (r = Nc(e, r)), (i = []);
                break;
            case "select":
                (s = xe({}, s, { value: void 0 })), (r = xe({}, r, { value: void 0 })), (i = []);
                break;
            case "textarea":
                (s = Oc(e, s)), (r = Oc(e, r)), (i = []);
                break;
            default:
                typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ul);
        }
        Ic(n, r);
        var o;
        n = null;
        for (u in s)
            if (!r.hasOwnProperty(u) && s.hasOwnProperty(u) && s[u] != null)
                if (u === "style") {
                    var a = s[u];
                    for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                } else
                    u !== "dangerouslySetInnerHTML" &&
                        u !== "children" &&
                        u !== "suppressContentEditableWarning" &&
                        u !== "suppressHydrationWarning" &&
                        u !== "autoFocus" &&
                        (io.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
        for (u in r) {
            var l = r[u];
            if (((a = s != null ? s[u] : void 0), r.hasOwnProperty(u) && l !== a && (l != null || a != null)))
                if (u === "style")
                    if (a) {
                        for (o in a) !a.hasOwnProperty(o) || (l && l.hasOwnProperty(o)) || (n || (n = {}), (n[o] = ""));
                        for (o in l) l.hasOwnProperty(o) && a[o] !== l[o] && (n || (n = {}), (n[o] = l[o]));
                    } else n || (i || (i = []), i.push(u, n)), (n = l);
                else
                    u === "dangerouslySetInnerHTML"
                        ? ((l = l ? l.__html : void 0),
                          (a = a ? a.__html : void 0),
                          l != null && a !== l && (i = i || []).push(u, l))
                        : u === "children"
                          ? (typeof l != "string" && typeof l != "number") || (i = i || []).push(u, "" + l)
                          : u !== "suppressContentEditableWarning" &&
                            u !== "suppressHydrationWarning" &&
                            (io.hasOwnProperty(u)
                                ? (l != null && u === "onScroll" && he("scroll", e), i || a === l || (i = []))
                                : (i = i || []).push(u, l));
        }
        n && (i = i || []).push("style", n);
        var u = i;
        (t.updateQueue = u) && (t.flags |= 4);
    }
};
H0 = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function Mi(e, t) {
    if (!me)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
                r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
}
function Ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var s = e.child; s !== null; )
            (n |= s.lanes | s.childLanes),
                (r |= s.subtreeFlags & 14680064),
                (r |= s.flags & 14680064),
                (s.return = e),
                (s = s.sibling);
    else
        for (s = e.child; s !== null; )
            (n |= s.lanes | s.childLanes), (r |= s.subtreeFlags), (r |= s.flags), (s.return = e), (s = s.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function WC(e, t, n) {
    var r = t.pendingProps;
    switch ((Id(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return Ke(t), null;
        case 1:
            return ft(t.type) && cl(), Ke(t), null;
        case 3:
            return (
                (r = t.stateNode),
                ri(),
                pe(ct),
                pe(Ye),
                Hd(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (ma(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024), Zt !== null && (vf(Zt), (Zt = null)))),
                cf(e, t),
                Ke(t),
                null
            );
        case 5:
            Wd(t);
            var s = Ur(vo.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                W0(e, t, n, r, s), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(j(166));
                    return Ke(t), null;
                }
                if (((e = Ur(Sn.current)), ma(t))) {
                    (r = t.stateNode), (n = t.type);
                    var i = t.memoizedProps;
                    switch (((r[vn] = t), (r[go] = i), (e = (t.mode & 1) !== 0), n)) {
                        case "dialog":
                            he("cancel", r), he("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            he("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (s = 0; s < Vi.length; s++) he(Vi[s], r);
                            break;
                        case "source":
                            he("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            he("error", r), he("load", r);
                            break;
                        case "details":
                            he("toggle", r);
                            break;
                        case "input":
                            yp(r, i), he("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!i.multiple }), he("invalid", r);
                            break;
                        case "textarea":
                            xp(r, i), he("invalid", r);
                    }
                    Ic(n, i), (s = null);
                    for (var o in i)
                        if (i.hasOwnProperty(o)) {
                            var a = i[o];
                            o === "children"
                                ? typeof a == "string"
                                    ? r.textContent !== a &&
                                      (i.suppressHydrationWarning !== !0 && pa(r.textContent, a, e),
                                      (s = ["children", a]))
                                    : typeof a == "number" &&
                                      r.textContent !== "" + a &&
                                      (i.suppressHydrationWarning !== !0 && pa(r.textContent, a, e),
                                      (s = ["children", "" + a]))
                                : io.hasOwnProperty(o) && a != null && o === "onScroll" && he("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            oa(r), vp(r, i, !0);
                            break;
                        case "textarea":
                            oa(r), wp(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = ul);
                    }
                    (r = s), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (o = s.nodeType === 9 ? s : s.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = xv(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = o.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                  ? (e = o.createElement(n, { is: r.is }))
                                  : ((e = o.createElement(n)),
                                    n === "select" &&
                                        ((o = e), r.multiple ? (o.multiple = !0) : r.size && (o.size = r.size)))
                            : (e = o.createElementNS(e, n)),
                        (e[vn] = t),
                        (e[go] = r),
                        U0(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((o = Fc(n, r)), n)) {
                            case "dialog":
                                he("cancel", e), he("close", e), (s = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                he("load", e), (s = r);
                                break;
                            case "video":
                            case "audio":
                                for (s = 0; s < Vi.length; s++) he(Vi[s], e);
                                s = r;
                                break;
                            case "source":
                                he("error", e), (s = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                he("error", e), he("load", e), (s = r);
                                break;
                            case "details":
                                he("toggle", e), (s = r);
                                break;
                            case "input":
                                yp(e, r), (s = Nc(e, r)), he("invalid", e);
                                break;
                            case "option":
                                s = r;
                                break;
                            case "select":
                                (e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (s = xe({}, r, { value: void 0 })),
                                    he("invalid", e);
                                break;
                            case "textarea":
                                xp(e, r), (s = Oc(e, r)), he("invalid", e);
                                break;
                            default:
                                s = r;
                        }
                        Ic(n, s), (a = s);
                        for (i in a)
                            if (a.hasOwnProperty(i)) {
                                var l = a[i];
                                i === "style"
                                    ? Ev(e, l)
                                    : i === "dangerouslySetInnerHTML"
                                      ? ((l = l ? l.__html : void 0), l != null && wv(e, l))
                                      : i === "children"
                                        ? typeof l == "string"
                                            ? (n !== "textarea" || l !== "") && oo(e, l)
                                            : typeof l == "number" && oo(e, "" + l)
                                        : i !== "suppressContentEditableWarning" &&
                                          i !== "suppressHydrationWarning" &&
                                          i !== "autoFocus" &&
                                          (io.hasOwnProperty(i)
                                              ? l != null && i === "onScroll" && he("scroll", e)
                                              : l != null && Sd(e, i, l, o));
                            }
                        switch (n) {
                            case "input":
                                oa(e), vp(e, r, !1);
                                break;
                            case "textarea":
                                oa(e), wp(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Er(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (i = r.value),
                                    i != null
                                        ? Is(e, !!r.multiple, i, !1)
                                        : r.defaultValue != null && Is(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof s.onClick == "function" && (e.onclick = ul);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return Ke(t), null;
        case 6:
            if (e && t.stateNode != null) H0(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
                if (((n = Ur(vo.current)), Ur(Sn.current), ma(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[vn] = t),
                        (i = r.nodeValue !== n) && ((e = St), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                pa(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 &&
                                    pa(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    i && (t.flags |= 4);
                } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[vn] = t), (t.stateNode = r);
            }
            return Ke(t), null;
        case 13:
            if (
                (pe(ge),
                (r = t.memoizedState),
                e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
            ) {
                if (me && wt !== null && t.mode & 1 && !(t.flags & 128)) u0(), ti(), (t.flags |= 98560), (i = !1);
                else if (((i = ma(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!i) throw Error(j(318));
                        if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(j(317));
                        i[vn] = t;
                    } else ti(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
                    Ke(t), (i = !1);
                } else Zt !== null && (vf(Zt), (Zt = null)), (i = !0);
                if (!i) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 && (e === null || ge.current & 1 ? Oe === 0 && (Oe = 3) : rh())),
                  t.updateQueue !== null && (t.flags |= 4),
                  Ke(t),
                  null);
        case 4:
            return ri(), cf(e, t), e === null && po(t.stateNode.containerInfo), Ke(t), null;
        case 10:
            return zd(t.type._context), Ke(t), null;
        case 17:
            return ft(t.type) && cl(), Ke(t), null;
        case 19:
            if ((pe(ge), (i = t.memoizedState), i === null)) return Ke(t), null;
            if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
                if (r) Mi(i, !1);
                else {
                    if (Oe !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((o = yl(e)), o !== null)) {
                                for (
                                    t.flags |= 128,
                                        Mi(i, !1),
                                        r = o.updateQueue,
                                        r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (i = n),
                                        (e = r),
                                        (i.flags &= 14680066),
                                        (o = i.alternate),
                                        o === null
                                            ? ((i.childLanes = 0),
                                              (i.lanes = e),
                                              (i.child = null),
                                              (i.subtreeFlags = 0),
                                              (i.memoizedProps = null),
                                              (i.memoizedState = null),
                                              (i.updateQueue = null),
                                              (i.dependencies = null),
                                              (i.stateNode = null))
                                            : ((i.childLanes = o.childLanes),
                                              (i.lanes = o.lanes),
                                              (i.child = o.child),
                                              (i.subtreeFlags = 0),
                                              (i.deletions = null),
                                              (i.memoizedProps = o.memoizedProps),
                                              (i.memoizedState = o.memoizedState),
                                              (i.updateQueue = o.updateQueue),
                                              (i.type = o.type),
                                              (e = o.dependencies),
                                              (i.dependencies =
                                                  e === null
                                                      ? null
                                                      : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (n = n.sibling);
                                return ce(ge, (ge.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    i.tail !== null && Te() > ii && ((t.flags |= 128), (r = !0), Mi(i, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = yl(o)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            Mi(i, !0),
                            i.tail === null && i.tailMode === "hidden" && !o.alternate && !me)
                        )
                            return Ke(t), null;
                    } else
                        2 * Te() - i.renderingStartTime > ii &&
                            n !== 1073741824 &&
                            ((t.flags |= 128), (r = !0), Mi(i, !1), (t.lanes = 4194304));
                i.isBackwards
                    ? ((o.sibling = t.child), (t.child = o))
                    : ((n = i.last), n !== null ? (n.sibling = o) : (t.child = o), (i.last = o));
            }
            return i.tail !== null
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Te()),
                  (t.sibling = null),
                  (n = ge.current),
                  ce(ge, r ? (n & 1) | 2 : n & 1),
                  t)
                : (Ke(t), null);
        case 22:
        case 23:
            return (
                nh(),
                (r = t.memoizedState !== null),
                e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
                r && t.mode & 1 ? yt & 1073741824 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(j(156, t.tag));
}
function HC(e, t) {
    switch ((Id(t), t.tag)) {
        case 1:
            return ft(t.type) && cl(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 3:
            return (
                ri(),
                pe(ct),
                pe(Ye),
                Hd(),
                (e = t.flags),
                e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 5:
            return Wd(t), null;
        case 13:
            if ((pe(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                if (t.alternate === null) throw Error(j(340));
                ti();
            }
            return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 19:
            return pe(ge), null;
        case 4:
            return ri(), null;
        case 10:
            return zd(t.type._context), null;
        case 22:
        case 23:
            return nh(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var va = !1,
    Qe = !1,
    KC = typeof WeakSet == "function" ? WeakSet : Set,
    V = null;
function Ms(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                be(e, t, r);
            }
        else n.current = null;
}
function ff(e, t, n) {
    try {
        n();
    } catch (r) {
        be(e, t, r);
    }
}
var um = !1;
function GC(e, t) {
    if (((Gc = ol), (e = Xv()), Od(e))) {
        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var s = r.anchorOffset,
                        i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, i.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var o = 0,
                        a = -1,
                        l = -1,
                        u = 0,
                        c = 0,
                        f = e,
                        d = null;
                    t: for (;;) {
                        for (
                            var h;
                            f !== n || (s !== 0 && f.nodeType !== 3) || (a = o + s),
                                f !== i || (r !== 0 && f.nodeType !== 3) || (l = o + r),
                                f.nodeType === 3 && (o += f.nodeValue.length),
                                (h = f.firstChild) !== null;

                        )
                            (d = f), (f = h);
                        for (;;) {
                            if (f === e) break t;
                            if (
                                (d === n && ++u === s && (a = o),
                                d === i && ++c === r && (l = o),
                                (h = f.nextSibling) !== null)
                            )
                                break;
                            (f = d), (d = f.parentNode);
                        }
                        f = h;
                    }
                    n = a === -1 || l === -1 ? null : { start: a, end: l };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (Qc = { focusedElem: e, selectionRange: n }, ol = !1, V = t; V !== null; )
        if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (V = e);
        else
            for (; V !== null; ) {
                t = V;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (y !== null) {
                                    var p = y.memoizedProps,
                                        x = y.memoizedState,
                                        m = t.stateNode,
                                        g = m.getSnapshotBeforeUpdate(t.elementType === t.type ? p : Qt(t.type, p), x);
                                    m.__reactInternalSnapshotBeforeUpdate = g;
                                }
                                break;
                            case 3:
                                var v = t.stateNode.containerInfo;
                                v.nodeType === 1
                                    ? (v.textContent = "")
                                    : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(j(163));
                        }
                } catch (S) {
                    be(t, t.return, S);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (V = e);
                    break;
                }
                V = t.return;
            }
    return (y = um), (um = !1), y;
}
function Qi(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var s = (r = r.next);
        do {
            if ((s.tag & e) === e) {
                var i = s.destroy;
                (s.destroy = void 0), i !== void 0 && ff(t, n, i);
            }
            s = s.next;
        } while (s !== r);
    }
}
function Zl(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function df(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function K0(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), K0(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode), t !== null && (delete t[vn], delete t[go], delete t[qc], delete t[RC], delete t[MC])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function G0(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function cm(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || G0(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function hf(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = ul));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (hf(e, t, n), e = e.sibling; e !== null; ) hf(e, t, n), (e = e.sibling);
}
function pf(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (pf(e, t, n), e = e.sibling; e !== null; ) pf(e, t, n), (e = e.sibling);
}
var Be = null,
    qt = !1;
function Qn(e, t, n) {
    for (n = n.child; n !== null; ) Q0(e, t, n), (n = n.sibling);
}
function Q0(e, t, n) {
    if (wn && typeof wn.onCommitFiberUnmount == "function")
        try {
            wn.onCommitFiberUnmount(Wl, n);
        } catch {}
    switch (n.tag) {
        case 5:
            Qe || Ms(n, t);
        case 6:
            var r = Be,
                s = qt;
            (Be = null),
                Qn(e, t, n),
                (Be = r),
                (qt = s),
                Be !== null &&
                    (qt
                        ? ((e = Be),
                          (n = n.stateNode),
                          e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : Be.removeChild(n.stateNode));
            break;
        case 18:
            Be !== null &&
                (qt
                    ? ((e = Be),
                      (n = n.stateNode),
                      e.nodeType === 8 ? Hu(e.parentNode, n) : e.nodeType === 1 && Hu(e, n),
                      co(e))
                    : Hu(Be, n.stateNode));
            break;
        case 4:
            (r = Be), (s = qt), (Be = n.stateNode.containerInfo), (qt = !0), Qn(e, t, n), (Be = r), (qt = s);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!Qe && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
                s = r = r.next;
                do {
                    var i = s,
                        o = i.destroy;
                    (i = i.tag), o !== void 0 && (i & 2 || i & 4) && ff(n, t, o), (s = s.next);
                } while (s !== r);
            }
            Qn(e, t, n);
            break;
        case 1:
            if (!Qe && (Ms(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
                try {
                    (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
                } catch (a) {
                    be(n, t, a);
                }
            Qn(e, t, n);
            break;
        case 21:
            Qn(e, t, n);
            break;
        case 22:
            n.mode & 1 ? ((Qe = (r = Qe) || n.memoizedState !== null), Qn(e, t, n), (Qe = r)) : Qn(e, t, n);
            break;
        default:
            Qn(e, t, n);
    }
}
function fm(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new KC()),
            t.forEach(function (r) {
                var s = nb.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(s, s));
            });
    }
}
function Wt(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var s = n[r];
            try {
                var i = e,
                    o = t,
                    a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                        case 5:
                            (Be = a.stateNode), (qt = !1);
                            break e;
                        case 3:
                            (Be = a.stateNode.containerInfo), (qt = !0);
                            break e;
                        case 4:
                            (Be = a.stateNode.containerInfo), (qt = !0);
                            break e;
                    }
                    a = a.return;
                }
                if (Be === null) throw Error(j(160));
                Q0(i, o, s), (Be = null), (qt = !1);
                var l = s.alternate;
                l !== null && (l.return = null), (s.return = null);
            } catch (u) {
                be(s, t, u);
            }
        }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Y0(t, e), (t = t.sibling);
}
function Y0(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Wt(t, e), fn(e), r & 4)) {
                try {
                    Qi(3, e, e.return), Zl(3, e);
                } catch (p) {
                    be(e, e.return, p);
                }
                try {
                    Qi(5, e, e.return);
                } catch (p) {
                    be(e, e.return, p);
                }
            }
            break;
        case 1:
            Wt(t, e), fn(e), r & 512 && n !== null && Ms(n, n.return);
            break;
        case 5:
            if ((Wt(t, e), fn(e), r & 512 && n !== null && Ms(n, n.return), e.flags & 32)) {
                var s = e.stateNode;
                try {
                    oo(s, "");
                } catch (p) {
                    be(e, e.return, p);
                }
            }
            if (r & 4 && ((s = e.stateNode), s != null)) {
                var i = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : i,
                    a = e.type,
                    l = e.updateQueue;
                if (((e.updateQueue = null), l !== null))
                    try {
                        a === "input" && i.type === "radio" && i.name != null && yv(s, i), Fc(a, o);
                        var u = Fc(a, i);
                        for (o = 0; o < l.length; o += 2) {
                            var c = l[o],
                                f = l[o + 1];
                            c === "style"
                                ? Ev(s, f)
                                : c === "dangerouslySetInnerHTML"
                                  ? wv(s, f)
                                  : c === "children"
                                    ? oo(s, f)
                                    : Sd(s, c, f, u);
                        }
                        switch (a) {
                            case "input":
                                Lc(s, i);
                                break;
                            case "textarea":
                                vv(s, i);
                                break;
                            case "select":
                                var d = s._wrapperState.wasMultiple;
                                s._wrapperState.wasMultiple = !!i.multiple;
                                var h = i.value;
                                h != null
                                    ? Is(s, !!i.multiple, h, !1)
                                    : d !== !!i.multiple &&
                                      (i.defaultValue != null
                                          ? Is(s, !!i.multiple, i.defaultValue, !0)
                                          : Is(s, !!i.multiple, i.multiple ? [] : "", !1));
                        }
                        s[go] = i;
                    } catch (p) {
                        be(e, e.return, p);
                    }
            }
            break;
        case 6:
            if ((Wt(t, e), fn(e), r & 4)) {
                if (e.stateNode === null) throw Error(j(162));
                (s = e.stateNode), (i = e.memoizedProps);
                try {
                    s.nodeValue = i;
                } catch (p) {
                    be(e, e.return, p);
                }
            }
            break;
        case 3:
            if ((Wt(t, e), fn(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
                try {
                    co(t.containerInfo);
                } catch (p) {
                    be(e, e.return, p);
                }
            break;
        case 4:
            Wt(t, e), fn(e);
            break;
        case 13:
            Wt(t, e),
                fn(e),
                (s = e.child),
                s.flags & 8192 &&
                    ((i = s.memoizedState !== null),
                    (s.stateNode.isHidden = i),
                    !i || (s.alternate !== null && s.alternate.memoizedState !== null) || (eh = Te())),
                r & 4 && fm(e);
            break;
        case 22:
            if (
                ((c = n !== null && n.memoizedState !== null),
                e.mode & 1 ? ((Qe = (u = Qe) || c), Wt(t, e), (Qe = u)) : Wt(t, e),
                fn(e),
                r & 8192)
            ) {
                if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !c && e.mode & 1))
                    for (V = e, c = e.child; c !== null; ) {
                        for (f = V = c; V !== null; ) {
                            switch (((d = V), (h = d.child), d.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Qi(4, d, d.return);
                                    break;
                                case 1:
                                    Ms(d, d.return);
                                    var y = d.stateNode;
                                    if (typeof y.componentWillUnmount == "function") {
                                        (r = d), (n = d.return);
                                        try {
                                            (t = r),
                                                (y.props = t.memoizedProps),
                                                (y.state = t.memoizedState),
                                                y.componentWillUnmount();
                                        } catch (p) {
                                            be(r, n, p);
                                        }
                                    }
                                    break;
                                case 5:
                                    Ms(d, d.return);
                                    break;
                                case 22:
                                    if (d.memoizedState !== null) {
                                        hm(f);
                                        continue;
                                    }
                            }
                            h !== null ? ((h.return = d), (V = h)) : hm(f);
                        }
                        c = c.sibling;
                    }
                e: for (c = null, f = e; ; ) {
                    if (f.tag === 5) {
                        if (c === null) {
                            c = f;
                            try {
                                (s = f.stateNode),
                                    u
                                        ? ((i = s.style),
                                          typeof i.setProperty == "function"
                                              ? i.setProperty("display", "none", "important")
                                              : (i.display = "none"))
                                        : ((a = f.stateNode),
                                          (l = f.memoizedProps.style),
                                          (o = l != null && l.hasOwnProperty("display") ? l.display : null),
                                          (a.style.display = Sv("display", o)));
                            } catch (p) {
                                be(e, e.return, p);
                            }
                        }
                    } else if (f.tag === 6) {
                        if (c === null)
                            try {
                                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                            } catch (p) {
                                be(e, e.return, p);
                            }
                    } else if (
                        ((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === e) &&
                        f.child !== null
                    ) {
                        (f.child.return = f), (f = f.child);
                        continue;
                    }
                    if (f === e) break e;
                    for (; f.sibling === null; ) {
                        if (f.return === null || f.return === e) break e;
                        c === f && (c = null), (f = f.return);
                    }
                    c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
                }
            }
            break;
        case 19:
            Wt(t, e), fn(e), r & 4 && fm(e);
            break;
        case 21:
            break;
        default:
            Wt(t, e), fn(e);
    }
}
function fn(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (G0(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(j(160));
            }
            switch (r.tag) {
                case 5:
                    var s = r.stateNode;
                    r.flags & 32 && (oo(s, ""), (r.flags &= -33));
                    var i = cm(e);
                    pf(e, i, s);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        a = cm(e);
                    hf(e, a, o);
                    break;
                default:
                    throw Error(j(161));
            }
        } catch (l) {
            be(e, e.return, l);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function QC(e, t, n) {
    (V = e), X0(e);
}
function X0(e, t, n) {
    for (var r = (e.mode & 1) !== 0; V !== null; ) {
        var s = V,
            i = s.child;
        if (s.tag === 22 && r) {
            var o = s.memoizedState !== null || va;
            if (!o) {
                var a = s.alternate,
                    l = (a !== null && a.memoizedState !== null) || Qe;
                a = va;
                var u = Qe;
                if (((va = o), (Qe = l) && !u))
                    for (V = s; V !== null; )
                        (o = V),
                            (l = o.child),
                            o.tag === 22 && o.memoizedState !== null
                                ? pm(s)
                                : l !== null
                                  ? ((l.return = o), (V = l))
                                  : pm(s);
                for (; i !== null; ) (V = i), X0(i), (i = i.sibling);
                (V = s), (va = a), (Qe = u);
            }
            dm(e);
        } else s.subtreeFlags & 8772 && i !== null ? ((i.return = s), (V = i)) : dm(e);
    }
}
function dm(e) {
    for (; V !== null; ) {
        var t = V;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            Qe || Zl(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !Qe)
                                if (n === null) r.componentDidMount();
                                else {
                                    var s = t.elementType === t.type ? n.memoizedProps : Qt(t.type, n.memoizedProps);
                                    r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var i = t.updateQueue;
                            i !== null && Xp(t, i, r);
                            break;
                        case 3:
                            var o = t.updateQueue;
                            if (o !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                Xp(t, o, n);
                            }
                            break;
                        case 5:
                            var a = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = a;
                                var l = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        l.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        l.src && (n.src = l.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate;
                                if (u !== null) {
                                    var c = u.memoizedState;
                                    if (c !== null) {
                                        var f = c.dehydrated;
                                        f !== null && co(f);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(j(163));
                    }
                Qe || (t.flags & 512 && df(t));
            } catch (d) {
                be(t, t.return, d);
            }
        }
        if (t === e) {
            V = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (V = n);
            break;
        }
        V = t.return;
    }
}
function hm(e) {
    for (; V !== null; ) {
        var t = V;
        if (t === e) {
            V = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (V = n);
            break;
        }
        V = t.return;
    }
}
function pm(e) {
    for (; V !== null; ) {
        var t = V;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Zl(4, t);
                    } catch (l) {
                        be(t, n, l);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var s = t.return;
                        try {
                            r.componentDidMount();
                        } catch (l) {
                            be(t, s, l);
                        }
                    }
                    var i = t.return;
                    try {
                        df(t);
                    } catch (l) {
                        be(t, i, l);
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        df(t);
                    } catch (l) {
                        be(t, o, l);
                    }
            }
        } catch (l) {
            be(t, t.return, l);
        }
        if (t === e) {
            V = null;
            break;
        }
        var a = t.sibling;
        if (a !== null) {
            (a.return = t.return), (V = a);
            break;
        }
        V = t.return;
    }
}
var YC = Math.ceil,
    wl = Bn.ReactCurrentDispatcher,
    Zd = Bn.ReactCurrentOwner,
    Dt = Bn.ReactCurrentBatchConfig,
    ne = 0,
    _e = null,
    Ae = null,
    Ue = 0,
    yt = 0,
    Ns = Nr(0),
    Oe = 0,
    Eo = null,
    is = 0,
    Jl = 0,
    Jd = 0,
    Yi = null,
    lt = null,
    eh = 0,
    ii = 1 / 0,
    Rn = null,
    Sl = !1,
    mf = null,
    vr = null,
    xa = !1,
    cr = null,
    El = 0,
    Xi = 0,
    gf = null,
    $a = -1,
    Ua = 0;
function rt() {
    return ne & 6 ? Te() : $a !== -1 ? $a : ($a = Te());
}
function xr(e) {
    return e.mode & 1
        ? ne & 2 && Ue !== 0
            ? Ue & -Ue
            : LC.transition !== null
              ? (Ua === 0 && (Ua = Ov()), Ua)
              : ((e = oe), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Bv(e.type))), e)
        : 1;
}
function tn(e, t, n, r) {
    if (50 < Xi) throw ((Xi = 0), (gf = null), Error(j(185)));
    Vo(e, n, r),
        (!(ne & 2) || e !== _e) &&
            (e === _e && (!(ne & 2) && (Jl |= n), Oe === 4 && nr(e, Ue)),
            dt(e, r),
            n === 1 && ne === 0 && !(t.mode & 1) && ((ii = Te() + 500), Yl && Lr()));
}
function dt(e, t) {
    var n = e.callbackNode;
    LE(e, t);
    var r = il(e, e === _e ? Ue : 0);
    if (r === 0) n !== null && Cp(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Cp(n), t === 1))
            e.tag === 0 ? NC(mm.bind(null, e)) : o0(mm.bind(null, e)),
                kC(function () {
                    !(ne & 6) && Lr();
                }),
                (n = null);
        else {
            switch (jv(r)) {
                case 1:
                    n = Pd;
                    break;
                case 4:
                    n = Lv;
                    break;
                case 16:
                    n = sl;
                    break;
                case 536870912:
                    n = Dv;
                    break;
                default:
                    n = sl;
            }
            n = sx(n, q0.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function q0(e, t) {
    if ((($a = -1), (Ua = 0), ne & 6)) throw Error(j(327));
    var n = e.callbackNode;
    if (Bs() && e.callbackNode !== n) return null;
    var r = il(e, e === _e ? Ue : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Cl(e, r);
    else {
        t = r;
        var s = ne;
        ne |= 2;
        var i = J0();
        (_e !== e || Ue !== t) && ((Rn = null), (ii = Te() + 500), Zr(e, t));
        do
            try {
                ZC();
                break;
            } catch (a) {
                Z0(e, a);
            }
        while (!0);
        _d(), (wl.current = i), (ne = s), Ae !== null ? (t = 0) : ((_e = null), (Ue = 0), (t = Oe));
    }
    if (t !== 0) {
        if ((t === 2 && ((s = $c(e)), s !== 0 && ((r = s), (t = yf(e, s)))), t === 1))
            throw ((n = Eo), Zr(e, 0), nr(e, r), dt(e, Te()), n);
        if (t === 6) nr(e, r);
        else {
            if (
                ((s = e.current.alternate),
                !(r & 30) &&
                    !XC(s) &&
                    ((t = Cl(e, r)), t === 2 && ((i = $c(e)), i !== 0 && ((r = i), (t = yf(e, i)))), t === 1))
            )
                throw ((n = Eo), Zr(e, 0), nr(e, r), dt(e, Te()), n);
            switch (((e.finishedWork = s), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(j(345));
                case 2:
                    _r(e, lt, Rn);
                    break;
                case 3:
                    if ((nr(e, r), (r & 130023424) === r && ((t = eh + 500 - Te()), 10 < t))) {
                        if (il(e, 0) !== 0) break;
                        if (((s = e.suspendedLanes), (s & r) !== r)) {
                            rt(), (e.pingedLanes |= e.suspendedLanes & s);
                            break;
                        }
                        e.timeoutHandle = Xc(_r.bind(null, e, lt, Rn), t);
                        break;
                    }
                    _r(e, lt, Rn);
                    break;
                case 4:
                    if ((nr(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, s = -1; 0 < r; ) {
                        var o = 31 - en(r);
                        (i = 1 << o), (o = t[o]), o > s && (s = o), (r &= ~i);
                    }
                    if (
                        ((r = s),
                        (r = Te() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                  ? 480
                                  : 1080 > r
                                    ? 1080
                                    : 1920 > r
                                      ? 1920
                                      : 3e3 > r
                                        ? 3e3
                                        : 4320 > r
                                          ? 4320
                                          : 1960 * YC(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = Xc(_r.bind(null, e, lt, Rn), r);
                        break;
                    }
                    _r(e, lt, Rn);
                    break;
                case 5:
                    _r(e, lt, Rn);
                    break;
                default:
                    throw Error(j(329));
            }
        }
    }
    return dt(e, Te()), e.callbackNode === n ? q0.bind(null, e) : null;
}
function yf(e, t) {
    var n = Yi;
    return (
        e.current.memoizedState.isDehydrated && (Zr(e, t).flags |= 256),
        (e = Cl(e, t)),
        e !== 2 && ((t = lt), (lt = n), t !== null && vf(t)),
        e
    );
}
function vf(e) {
    lt === null ? (lt = e) : lt.push.apply(lt, e);
}
function XC(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var s = n[r],
                        i = s.getSnapshot;
                    s = s.value;
                    try {
                        if (!sn(i(), s)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function nr(e, t) {
    for (t &= ~Jd, t &= ~Jl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - en(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function mm(e) {
    if (ne & 6) throw Error(j(327));
    Bs();
    var t = il(e, 0);
    if (!(t & 1)) return dt(e, Te()), null;
    var n = Cl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = $c(e);
        r !== 0 && ((t = r), (n = yf(e, r)));
    }
    if (n === 1) throw ((n = Eo), Zr(e, 0), nr(e, t), dt(e, Te()), n);
    if (n === 6) throw Error(j(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), _r(e, lt, Rn), dt(e, Te()), null;
}
function th(e, t) {
    var n = ne;
    ne |= 1;
    try {
        return e(t);
    } finally {
        (ne = n), ne === 0 && ((ii = Te() + 500), Yl && Lr());
    }
}
function os(e) {
    cr !== null && cr.tag === 0 && !(ne & 6) && Bs();
    var t = ne;
    ne |= 1;
    var n = Dt.transition,
        r = oe;
    try {
        if (((Dt.transition = null), (oe = 1), e)) return e();
    } finally {
        (oe = r), (Dt.transition = n), (ne = t), !(ne & 6) && Lr();
    }
}
function nh() {
    (yt = Ns.current), pe(Ns);
}
function Zr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), PC(n)), Ae !== null))
        for (n = Ae.return; n !== null; ) {
            var r = n;
            switch ((Id(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && cl();
                    break;
                case 3:
                    ri(), pe(ct), pe(Ye), Hd();
                    break;
                case 5:
                    Wd(r);
                    break;
                case 4:
                    ri();
                    break;
                case 13:
                    pe(ge);
                    break;
                case 19:
                    pe(ge);
                    break;
                case 10:
                    zd(r.type._context);
                    break;
                case 22:
                case 23:
                    nh();
            }
            n = n.return;
        }
    if (
        ((_e = e),
        (Ae = e = wr(e.current, null)),
        (Ue = yt = t),
        (Oe = 0),
        (Eo = null),
        (Jd = Jl = is = 0),
        (lt = Yi = null),
        $r !== null)
    ) {
        for (t = 0; t < $r.length; t++)
            if (((n = $r[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var s = r.next,
                    i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    (i.next = s), (r.next = o);
                }
                n.pending = r;
            }
        $r = null;
    }
    return e;
}
function Z0(e, t) {
    do {
        var n = Ae;
        try {
            if ((_d(), (_a.current = xl), vl)) {
                for (var r = ve.memoizedState; r !== null; ) {
                    var s = r.queue;
                    s !== null && (s.pending = null), (r = r.next);
                }
                vl = !1;
            }
            if (
                ((ss = 0),
                (Ve = Le = ve = null),
                (Gi = !1),
                (xo = 0),
                (Zd.current = null),
                n === null || n.return === null)
            ) {
                (Oe = 1), (Eo = t), (Ae = null);
                break;
            }
            e: {
                var i = e,
                    o = n.return,
                    a = n,
                    l = t;
                if (((t = Ue), (a.flags |= 32768), l !== null && typeof l == "object" && typeof l.then == "function")) {
                    var u = l,
                        c = a,
                        f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d
                            ? ((c.updateQueue = d.updateQueue),
                              (c.memoizedState = d.memoizedState),
                              (c.lanes = d.lanes))
                            : ((c.updateQueue = null), (c.memoizedState = null));
                    }
                    var h = nm(o);
                    if (h !== null) {
                        (h.flags &= -257), rm(h, o, a, i, t), h.mode & 1 && tm(i, u, t), (t = h), (l = u);
                        var y = t.updateQueue;
                        if (y === null) {
                            var p = new Set();
                            p.add(l), (t.updateQueue = p);
                        } else y.add(l);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            tm(i, u, t), rh();
                            break e;
                        }
                        l = Error(j(426));
                    }
                } else if (me && a.mode & 1) {
                    var x = nm(o);
                    if (x !== null) {
                        !(x.flags & 65536) && (x.flags |= 256), rm(x, o, a, i, t), Fd(si(l, a));
                        break e;
                    }
                }
                (i = l = si(l, a)), Oe !== 4 && (Oe = 2), Yi === null ? (Yi = [i]) : Yi.push(i), (i = o);
                do {
                    switch (i.tag) {
                        case 3:
                            (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                            var m = j0(i, l, t);
                            Yp(i, m);
                            break e;
                        case 1:
                            a = l;
                            var g = i.type,
                                v = i.stateNode;
                            if (
                                !(i.flags & 128) &&
                                (typeof g.getDerivedStateFromError == "function" ||
                                    (v !== null &&
                                        typeof v.componentDidCatch == "function" &&
                                        (vr === null || !vr.has(v))))
                            ) {
                                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                                var S = I0(i, a, t);
                                Yp(i, S);
                                break e;
                            }
                    }
                    i = i.return;
                } while (i !== null);
            }
            tx(n);
        } catch (C) {
            (t = C), Ae === n && n !== null && (Ae = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function J0() {
    var e = wl.current;
    return (wl.current = xl), e === null ? xl : e;
}
function rh() {
    (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4),
        _e === null || (!(is & 268435455) && !(Jl & 268435455)) || nr(_e, Ue);
}
function Cl(e, t) {
    var n = ne;
    ne |= 2;
    var r = J0();
    (_e !== e || Ue !== t) && ((Rn = null), Zr(e, t));
    do
        try {
            qC();
            break;
        } catch (s) {
            Z0(e, s);
        }
    while (!0);
    if ((_d(), (ne = n), (wl.current = r), Ae !== null)) throw Error(j(261));
    return (_e = null), (Ue = 0), Oe;
}
function qC() {
    for (; Ae !== null; ) ex(Ae);
}
function ZC() {
    for (; Ae !== null && !CE(); ) ex(Ae);
}
function ex(e) {
    var t = rx(e.alternate, e, yt);
    (e.memoizedProps = e.pendingProps), t === null ? tx(e) : (Ae = t), (Zd.current = null);
}
function tx(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = HC(n, t)), n !== null)) {
                (n.flags &= 32767), (Ae = n);
                return;
            }
            if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (Oe = 6), (Ae = null);
                return;
            }
        } else if (((n = WC(n, t, yt)), n !== null)) {
            Ae = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            Ae = t;
            return;
        }
        Ae = t = e;
    } while (t !== null);
    Oe === 0 && (Oe = 5);
}
function _r(e, t, n) {
    var r = oe,
        s = Dt.transition;
    try {
        (Dt.transition = null), (oe = 1), JC(e, t, n, r);
    } finally {
        (Dt.transition = s), (oe = r);
    }
    return null;
}
function JC(e, t, n, r) {
    do Bs();
    while (cr !== null);
    if (ne & 6) throw Error(j(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(j(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
        (DE(e, i),
        e === _e && ((Ae = _e = null), (Ue = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            xa ||
            ((xa = !0),
            sx(sl, function () {
                return Bs(), null;
            })),
        (i = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || i)
    ) {
        (i = Dt.transition), (Dt.transition = null);
        var o = oe;
        oe = 1;
        var a = ne;
        (ne |= 4),
            (Zd.current = null),
            GC(e, n),
            Y0(n, e),
            xC(Qc),
            (ol = !!Gc),
            (Qc = Gc = null),
            (e.current = n),
            QC(n),
            bE(),
            (ne = a),
            (oe = o),
            (Dt.transition = i);
    } else e.current = n;
    if (
        (xa && ((xa = !1), (cr = e), (El = s)),
        (i = e.pendingLanes),
        i === 0 && (vr = null),
        kE(n.stateNode),
        dt(e, Te()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (s = t[n]), r(s.value, { componentStack: s.stack, digest: s.digest });
    if (Sl) throw ((Sl = !1), (e = mf), (mf = null), e);
    return (
        El & 1 && e.tag !== 0 && Bs(),
        (i = e.pendingLanes),
        i & 1 ? (e === gf ? Xi++ : ((Xi = 0), (gf = e))) : (Xi = 0),
        Lr(),
        null
    );
}
function Bs() {
    if (cr !== null) {
        var e = jv(El),
            t = Dt.transition,
            n = oe;
        try {
            if (((Dt.transition = null), (oe = 16 > e ? 16 : e), cr === null)) var r = !1;
            else {
                if (((e = cr), (cr = null), (El = 0), ne & 6)) throw Error(j(331));
                var s = ne;
                for (ne |= 4, V = e.current; V !== null; ) {
                    var i = V,
                        o = i.child;
                    if (V.flags & 16) {
                        var a = i.deletions;
                        if (a !== null) {
                            for (var l = 0; l < a.length; l++) {
                                var u = a[l];
                                for (V = u; V !== null; ) {
                                    var c = V;
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Qi(8, c, i);
                                    }
                                    var f = c.child;
                                    if (f !== null) (f.return = c), (V = f);
                                    else
                                        for (; V !== null; ) {
                                            c = V;
                                            var d = c.sibling,
                                                h = c.return;
                                            if ((K0(c), c === u)) {
                                                V = null;
                                                break;
                                            }
                                            if (d !== null) {
                                                (d.return = h), (V = d);
                                                break;
                                            }
                                            V = h;
                                        }
                                }
                            }
                            var y = i.alternate;
                            if (y !== null) {
                                var p = y.child;
                                if (p !== null) {
                                    y.child = null;
                                    do {
                                        var x = p.sibling;
                                        (p.sibling = null), (p = x);
                                    } while (p !== null);
                                }
                            }
                            V = i;
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (V = o);
                    else
                        e: for (; V !== null; ) {
                            if (((i = V), i.flags & 2048))
                                switch (i.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Qi(9, i, i.return);
                                }
                            var m = i.sibling;
                            if (m !== null) {
                                (m.return = i.return), (V = m);
                                break e;
                            }
                            V = i.return;
                        }
                }
                var g = e.current;
                for (V = g; V !== null; ) {
                    o = V;
                    var v = o.child;
                    if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (V = v);
                    else
                        e: for (o = g; V !== null; ) {
                            if (((a = V), a.flags & 2048))
                                try {
                                    switch (a.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Zl(9, a);
                                    }
                                } catch (C) {
                                    be(a, a.return, C);
                                }
                            if (a === o) {
                                V = null;
                                break e;
                            }
                            var S = a.sibling;
                            if (S !== null) {
                                (S.return = a.return), (V = S);
                                break e;
                            }
                            V = a.return;
                        }
                }
                if (((ne = s), Lr(), wn && typeof wn.onPostCommitFiberRoot == "function"))
                    try {
                        wn.onPostCommitFiberRoot(Wl, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (oe = n), (Dt.transition = t);
        }
    }
    return !1;
}
function gm(e, t, n) {
    (t = si(n, t)), (t = j0(e, t, 1)), (e = yr(e, t, 1)), (t = rt()), e !== null && (Vo(e, 1, t), dt(e, t));
}
function be(e, t, n) {
    if (e.tag === 3) gm(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                gm(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" && (vr === null || !vr.has(r)))
                ) {
                    (e = si(n, e)),
                        (e = I0(t, e, 1)),
                        (t = yr(t, e, 1)),
                        (e = rt()),
                        t !== null && (Vo(t, 1, e), dt(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function eb(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = rt()),
        (e.pingedLanes |= e.suspendedLanes & n),
        _e === e &&
            (Ue & n) === n &&
            (Oe === 4 || (Oe === 3 && (Ue & 130023424) === Ue && 500 > Te() - eh) ? Zr(e, 0) : (Jd |= n)),
        dt(e, t);
}
function nx(e, t) {
    t === 0 && (e.mode & 1 ? ((t = ua), (ua <<= 1), !(ua & 130023424) && (ua = 4194304)) : (t = 1));
    var n = rt();
    (e = Fn(e, t)), e !== null && (Vo(e, t, n), dt(e, n));
}
function tb(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), nx(e, n);
}
function nb(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                s = e.memoizedState;
            s !== null && (n = s.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(j(314));
    }
    r !== null && r.delete(t), nx(e, n);
}
var rx;
rx = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || ct.current) ut = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return (ut = !1), UC(e, t, n);
            ut = !!(e.flags & 131072);
        }
    else (ut = !1), me && t.flags & 1048576 && a0(t, hl, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            Ba(e, t), (e = t.pendingProps);
            var s = ei(t, Ye.current);
            zs(t, n), (s = Gd(null, t, r, e, s, n));
            var i = Qd();
            return (
                (t.flags |= 1),
                typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      ft(r) ? ((i = !0), fl(t)) : (i = !1),
                      (t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null),
                      $d(t),
                      (s.updater = ql),
                      (t.stateNode = s),
                      (s._reactInternals = t),
                      rf(t, r, e, n),
                      (t = af(null, t, r, !0, i, n)))
                    : ((t.tag = 0), me && i && jd(t), Je(null, t, s, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Ba(e, t),
                    (e = t.pendingProps),
                    (s = r._init),
                    (r = s(r._payload)),
                    (t.type = r),
                    (s = t.tag = sb(r)),
                    (e = Qt(r, e)),
                    s)
                ) {
                    case 0:
                        t = of(null, t, r, e, n);
                        break e;
                    case 1:
                        t = om(null, t, r, e, n);
                        break e;
                    case 11:
                        t = sm(null, t, r, e, n);
                        break e;
                    case 14:
                        t = im(null, t, r, Qt(r.type, e), n);
                        break e;
                }
                throw Error(j(306, r, ""));
            }
            return t;
        case 0:
            return (r = t.type), (s = t.pendingProps), (s = t.elementType === r ? s : Qt(r, s)), of(e, t, r, s, n);
        case 1:
            return (r = t.type), (s = t.pendingProps), (s = t.elementType === r ? s : Qt(r, s)), om(e, t, r, s, n);
        case 3:
            e: {
                if ((z0(t), e === null)) throw Error(j(387));
                (r = t.pendingProps), (i = t.memoizedState), (s = i.element), h0(e, t), gl(t, r, null, n);
                var o = t.memoizedState;
                if (((r = o.element), i.isDehydrated))
                    if (
                        ((i = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions,
                        }),
                        (t.updateQueue.baseState = i),
                        (t.memoizedState = i),
                        t.flags & 256)
                    ) {
                        (s = si(Error(j(423)), t)), (t = am(e, t, r, n, s));
                        break e;
                    } else if (r !== s) {
                        (s = si(Error(j(424)), t)), (t = am(e, t, r, n, s));
                        break e;
                    } else
                        for (
                            wt = gr(t.stateNode.containerInfo.firstChild),
                                St = t,
                                me = !0,
                                Zt = null,
                                n = f0(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((ti(), r === s)) {
                        t = Vn(e, t, n);
                        break e;
                    }
                    Je(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                p0(t),
                e === null && ef(t),
                (r = t.type),
                (s = t.pendingProps),
                (i = e !== null ? e.memoizedProps : null),
                (o = s.children),
                Yc(r, s) ? (o = null) : i !== null && Yc(r, i) && (t.flags |= 32),
                _0(e, t),
                Je(e, t, o, n),
                t.child
            );
        case 6:
            return e === null && ef(t), null;
        case 13:
            return B0(e, t, n);
        case 4:
            return (
                Ud(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = ni(t, null, r, n)) : Je(e, t, r, n),
                t.child
            );
        case 11:
            return (r = t.type), (s = t.pendingProps), (s = t.elementType === r ? s : Qt(r, s)), sm(e, t, r, s, n);
        case 7:
            return Je(e, t, t.pendingProps, n), t.child;
        case 8:
            return Je(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return Je(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (s = t.pendingProps),
                    (i = t.memoizedProps),
                    (o = s.value),
                    ce(pl, r._currentValue),
                    (r._currentValue = o),
                    i !== null)
                )
                    if (sn(i.value, o)) {
                        if (i.children === s.children && !ct.current) {
                            t = Vn(e, t, n);
                            break e;
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                            var a = i.dependencies;
                            if (a !== null) {
                                o = i.child;
                                for (var l = a.firstContext; l !== null; ) {
                                    if (l.context === r) {
                                        if (i.tag === 1) {
                                            (l = On(-1, n & -n)), (l.tag = 2);
                                            var u = i.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var c = u.pending;
                                                c === null ? (l.next = l) : ((l.next = c.next), (c.next = l)),
                                                    (u.pending = l);
                                            }
                                        }
                                        (i.lanes |= n),
                                            (l = i.alternate),
                                            l !== null && (l.lanes |= n),
                                            tf(i.return, n, t),
                                            (a.lanes |= n);
                                        break;
                                    }
                                    l = l.next;
                                }
                            } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (((o = i.return), o === null)) throw Error(j(341));
                                (o.lanes |= n),
                                    (a = o.alternate),
                                    a !== null && (a.lanes |= n),
                                    tf(o, n, t),
                                    (o = i.sibling);
                            } else o = i.child;
                            if (o !== null) o.return = i;
                            else
                                for (o = i; o !== null; ) {
                                    if (o === t) {
                                        o = null;
                                        break;
                                    }
                                    if (((i = o.sibling), i !== null)) {
                                        (i.return = o.return), (o = i);
                                        break;
                                    }
                                    o = o.return;
                                }
                            i = o;
                        }
                Je(e, t, s.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (s = t.type),
                (r = t.pendingProps.children),
                zs(t, n),
                (s = Ot(s)),
                (r = r(s)),
                (t.flags |= 1),
                Je(e, t, r, n),
                t.child
            );
        case 14:
            return (r = t.type), (s = Qt(r, t.pendingProps)), (s = Qt(r.type, s)), im(e, t, r, s, n);
        case 15:
            return F0(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (s = t.pendingProps),
                (s = t.elementType === r ? s : Qt(r, s)),
                Ba(e, t),
                (t.tag = 1),
                ft(r) ? ((e = !0), fl(t)) : (e = !1),
                zs(t, n),
                O0(t, r, s),
                rf(t, r, s, n),
                af(null, t, r, !0, e, n)
            );
        case 19:
            return $0(e, t, n);
        case 22:
            return V0(e, t, n);
    }
    throw Error(j(156, t.tag));
};
function sx(e, t) {
    return Nv(e, t);
}
function rb(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Nt(e, t, n, r) {
    return new rb(e, t, n, r);
}
function sh(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function sb(e) {
    if (typeof e == "function") return sh(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Cd)) return 11;
        if (e === bd) return 14;
    }
    return 2;
}
function wr(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Nt(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function Wa(e, t, n, r, s, i) {
    var o = 2;
    if (((r = e), typeof e == "function")) sh(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else
        e: switch (e) {
            case Ss:
                return Jr(n.children, s, i, t);
            case Ed:
                (o = 8), (s |= 8);
                break;
            case kc:
                return (e = Nt(12, n, t, s | 2)), (e.elementType = kc), (e.lanes = i), e;
            case Ac:
                return (e = Nt(13, n, t, s)), (e.elementType = Ac), (e.lanes = i), e;
            case Rc:
                return (e = Nt(19, n, t, s)), (e.elementType = Rc), (e.lanes = i), e;
            case pv:
                return eu(n, s, i, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case dv:
                            o = 10;
                            break e;
                        case hv:
                            o = 9;
                            break e;
                        case Cd:
                            o = 11;
                            break e;
                        case bd:
                            o = 14;
                            break e;
                        case Jn:
                            (o = 16), (r = null);
                            break e;
                    }
                throw Error(j(130, e == null ? e : typeof e, ""));
        }
    return (t = Nt(o, n, t, s)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function Jr(e, t, n, r) {
    return (e = Nt(7, e, r, t)), (e.lanes = n), e;
}
function eu(e, t, n, r) {
    return (e = Nt(22, e, r, t)), (e.elementType = pv), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Ju(e, t, n) {
    return (e = Nt(6, e, null, t)), (e.lanes = n), e;
}
function ec(e, t, n) {
    return (
        (t = Nt(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
function ib(e, t, n, r, s) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Ou(0)),
        (this.expirationTimes = Ou(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Ou(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = s),
        (this.mutableSourceEagerHydrationData = null);
}
function ih(e, t, n, r, s, i, o, a, l) {
    return (
        (e = new ib(e, t, n, a, l)),
        t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
        (i = Nt(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        $d(i),
        e
    );
}
function ob(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ws, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ix(e) {
    if (!e) return Cr;
    e = e._reactInternals;
    e: {
        if (cs(e) !== e || e.tag !== 1) throw Error(j(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (ft(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(j(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ft(n)) return i0(e, n, t);
    }
    return t;
}
function ox(e, t, n, r, s, i, o, a, l) {
    return (
        (e = ih(n, r, !0, e, s, i, o, a, l)),
        (e.context = ix(null)),
        (n = e.current),
        (r = rt()),
        (s = xr(n)),
        (i = On(r, s)),
        (i.callback = t ?? null),
        yr(n, i, s),
        (e.current.lanes = s),
        Vo(e, s, r),
        dt(e, r),
        e
    );
}
function tu(e, t, n, r) {
    var s = t.current,
        i = rt(),
        o = xr(s);
    return (
        (n = ix(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = On(i, o)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = yr(s, t, o)),
        e !== null && (tn(e, s, o, i), Va(e, s, o)),
        o
    );
}
function bl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function ym(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function oh(e, t) {
    ym(e, t), (e = e.alternate) && ym(e, t);
}
function ab() {
    return null;
}
var ax =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function ah(e) {
    this._internalRoot = e;
}
nu.prototype.render = ah.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(j(409));
    tu(e, t, null, null);
};
nu.prototype.unmount = ah.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        os(function () {
            tu(null, e, null, null);
        }),
            (t[In] = null);
    }
};
function nu(e) {
    this._internalRoot = e;
}
nu.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Vv();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < tr.length && t !== 0 && t < tr[n].priority; n++);
        tr.splice(n, 0, e), n === 0 && zv(e);
    }
};
function lh(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ru(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
}
function vm() {}
function lb(e, t, n, r, s) {
    if (s) {
        if (typeof r == "function") {
            var i = r;
            r = function () {
                var u = bl(o);
                i.call(u);
            };
        }
        var o = ox(t, r, e, 0, null, !1, !1, "", vm);
        return (e._reactRootContainer = o), (e[In] = o.current), po(e.nodeType === 8 ? e.parentNode : e), os(), o;
    }
    for (; (s = e.lastChild); ) e.removeChild(s);
    if (typeof r == "function") {
        var a = r;
        r = function () {
            var u = bl(l);
            a.call(u);
        };
    }
    var l = ih(e, 0, !1, null, null, !1, !1, "", vm);
    return (
        (e._reactRootContainer = l),
        (e[In] = l.current),
        po(e.nodeType === 8 ? e.parentNode : e),
        os(function () {
            tu(t, l, n, r);
        }),
        l
    );
}
function su(e, t, n, r, s) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof s == "function") {
            var a = s;
            s = function () {
                var l = bl(o);
                a.call(l);
            };
        }
        tu(t, o, e, s);
    } else o = lb(n, t, e, s, r);
    return bl(o);
}
Iv = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Fi(t.pendingLanes);
                n !== 0 && (kd(t, n | 1), dt(t, Te()), !(ne & 6) && ((ii = Te() + 500), Lr()));
            }
            break;
        case 13:
            os(function () {
                var r = Fn(e, 1);
                if (r !== null) {
                    var s = rt();
                    tn(r, e, 1, s);
                }
            }),
                oh(e, 1);
    }
};
Ad = function (e) {
    if (e.tag === 13) {
        var t = Fn(e, 134217728);
        if (t !== null) {
            var n = rt();
            tn(t, e, 134217728, n);
        }
        oh(e, 134217728);
    }
};
Fv = function (e) {
    if (e.tag === 13) {
        var t = xr(e),
            n = Fn(e, t);
        if (n !== null) {
            var r = rt();
            tn(n, e, t, r);
        }
        oh(e, t);
    }
};
Vv = function () {
    return oe;
};
_v = function (e, t) {
    var n = oe;
    try {
        return (oe = e), t();
    } finally {
        oe = n;
    }
};
_c = function (e, t, n) {
    switch (t) {
        case "input":
            if ((Lc(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var s = Ql(r);
                        if (!s) throw Error(j(90));
                        gv(r), Lc(r, s);
                    }
                }
            }
            break;
        case "textarea":
            vv(e, n);
            break;
        case "select":
            (t = n.value), t != null && Is(e, !!n.multiple, t, !1);
    }
};
Tv = th;
Pv = os;
var ub = { usingClientEntryPoint: !1, Events: [zo, Ts, Ql, Cv, bv, th] },
    Ni = { findFiberByHostInstance: Br, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
    cb = {
        bundleType: Ni.bundleType,
        version: Ni.version,
        rendererPackageName: Ni.rendererPackageName,
        rendererConfig: Ni.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Bn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Rv(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Ni.findFiberByHostInstance || ab,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wa.isDisabled && wa.supportsFiber)
        try {
            (Wl = wa.inject(cb)), (wn = wa);
        } catch {}
}
Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ub;
Tt.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!lh(t)) throw Error(j(200));
    return ob(e, t, null, n);
};
Tt.createRoot = function (e, t) {
    if (!lh(e)) throw Error(j(299));
    var n = !1,
        r = "",
        s = ax;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (s = t.onRecoverableError)),
        (t = ih(e, 1, !1, null, null, n, !1, r, s)),
        (e[In] = t.current),
        po(e.nodeType === 8 ? e.parentNode : e),
        new ah(t)
    );
};
Tt.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(j(188)) : ((e = Object.keys(e).join(",")), Error(j(268, e)));
    return (e = Rv(t)), (e = e === null ? null : e.stateNode), e;
};
Tt.flushSync = function (e) {
    return os(e);
};
Tt.hydrate = function (e, t, n) {
    if (!ru(t)) throw Error(j(200));
    return su(null, e, t, !0, n);
};
Tt.hydrateRoot = function (e, t, n) {
    if (!lh(e)) throw Error(j(405));
    var r = (n != null && n.hydratedSources) || null,
        s = !1,
        i = "",
        o = ax;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (s = !0),
            n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = ox(t, null, e, 1, n ?? null, s, !1, i, o)),
        (e[In] = t.current),
        po(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (s = n._getVersion),
                (s = s(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, s])
                    : t.mutableSourceEagerHydrationData.push(n, s);
    return new nu(t);
};
Tt.render = function (e, t, n) {
    if (!ru(t)) throw Error(j(200));
    return su(null, e, t, !1, n);
};
Tt.unmountComponentAtNode = function (e) {
    if (!ru(e)) throw Error(j(40));
    return e._reactRootContainer
        ? (os(function () {
              su(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[In] = null);
              });
          }),
          !0)
        : !1;
};
Tt.unstable_batchedUpdates = th;
Tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!ru(n)) throw Error(j(200));
    if (e == null || e._reactInternals === void 0) throw Error(j(38));
    return su(e, t, n, !1, r);
};
Tt.version = "18.3.1-next-f1338f8080-20240426";
function lx() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lx);
        } catch (e) {
            console.error(e);
        }
}
lx(), (lv.exports = Tt);
var $o = lv.exports;
const ux = Yy($o);
var cx,
    xm = $o;
(cx = xm.createRoot), xm.hydrateRoot;
const fb = 1,
    db = 1e6;
let tc = 0;
function hb() {
    return (tc = (tc + 1) % Number.MAX_SAFE_INTEGER), tc.toString();
}
const nc = new Map(),
    wm = (e) => {
        if (nc.has(e)) return;
        const t = setTimeout(() => {
            nc.delete(e), qi({ type: "REMOVE_TOAST", toastId: e });
        }, db);
        nc.set(e, t);
    },
    pb = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return { ...e, toasts: [t.toast, ...e.toasts].slice(0, fb) };
            case "UPDATE_TOAST":
                return { ...e, toasts: e.toasts.map((n) => (n.id === t.toast.id ? { ...n, ...t.toast } : n)) };
            case "DISMISS_TOAST": {
                const { toastId: n } = t;
                return (
                    n
                        ? wm(n)
                        : e.toasts.forEach((r) => {
                              wm(r.id);
                          }),
                    { ...e, toasts: e.toasts.map((r) => (r.id === n || n === void 0 ? { ...r, open: !1 } : r)) }
                );
            }
            case "REMOVE_TOAST":
                return t.toastId === void 0
                    ? { ...e, toasts: [] }
                    : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
        }
    },
    Ha = [];
let Ka = { toasts: [] };
function qi(e) {
    (Ka = pb(Ka, e)),
        Ha.forEach((t) => {
            t(Ka);
        });
}
function mb({ ...e }) {
    const t = hb(),
        n = (s) => qi({ type: "UPDATE_TOAST", toast: { ...s, id: t } }),
        r = () => qi({ type: "DISMISS_TOAST", toastId: t });
    return (
        qi({
            type: "ADD_TOAST",
            toast: {
                ...e,
                id: t,
                open: !0,
                onOpenChange: (s) => {
                    s || r();
                },
            },
        }),
        { id: t, dismiss: r, update: n }
    );
}
function gb() {
    const [e, t] = w.useState(Ka);
    return (
        w.useEffect(
            () => (
                Ha.push(t),
                () => {
                    const n = Ha.indexOf(t);
                    n > -1 && Ha.splice(n, 1);
                }
            ),
            [e]
        ),
        { ...e, toast: mb, dismiss: (n) => qi({ type: "DISMISS_TOAST", toastId: n }) }
    );
}
function De(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (s) {
        if ((e == null || e(s), n === !1 || !s.defaultPrevented)) return t == null ? void 0 : t(s);
    };
}
function Sm(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t);
}
function fx(...e) {
    return (t) => {
        let n = !1;
        const r = e.map((s) => {
            const i = Sm(s, t);
            return !n && typeof i == "function" && (n = !0), i;
        });
        if (n)
            return () => {
                for (let s = 0; s < r.length; s++) {
                    const i = r[s];
                    typeof i == "function" ? i() : Sm(e[s], null);
                }
            };
    };
}
function on(...e) {
    return w.useCallback(fx(...e), e);
}
function iu(e, t = []) {
    let n = [];
    function r(i, o) {
        const a = w.createContext(o),
            l = n.length;
        n = [...n, o];
        const u = (f) => {
            var m;
            const { scope: d, children: h, ...y } = f,
                p = ((m = d == null ? void 0 : d[e]) == null ? void 0 : m[l]) || a,
                x = w.useMemo(() => y, Object.values(y));
            return E.jsx(p.Provider, { value: x, children: h });
        };
        u.displayName = i + "Provider";
        function c(f, d) {
            var p;
            const h = ((p = d == null ? void 0 : d[e]) == null ? void 0 : p[l]) || a,
                y = w.useContext(h);
            if (y) return y;
            if (o !== void 0) return o;
            throw new Error(`\`${f}\` must be used within \`${i}\``);
        }
        return [u, c];
    }
    const s = () => {
        const i = n.map((o) => w.createContext(o));
        return function (a) {
            const l = (a == null ? void 0 : a[e]) || i;
            return w.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
        };
    };
    return (s.scopeName = e), [r, yb(s, ...t)];
}
function yb(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
        return function (i) {
            const o = r.reduce((a, { useScope: l, scopeName: u }) => {
                const f = l(i)[`__scope${u}`];
                return { ...a, ...f };
            }, {});
            return w.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
        };
    };
    return (n.scopeName = t.scopeName), n;
}
function xf(e) {
    const t = vb(e),
        n = w.forwardRef((r, s) => {
            const { children: i, ...o } = r,
                a = w.Children.toArray(i),
                l = a.find(wb);
            if (l) {
                const u = l.props.children,
                    c = a.map((f) =>
                        f === l
                            ? w.Children.count(u) > 1
                                ? w.Children.only(null)
                                : w.isValidElement(u)
                                  ? u.props.children
                                  : null
                            : f
                    );
                return E.jsx(t, { ...o, ref: s, children: w.isValidElement(u) ? w.cloneElement(u, void 0, c) : null });
            }
            return E.jsx(t, { ...o, ref: s, children: i });
        });
    return (n.displayName = `${e}.Slot`), n;
}
function vb(e) {
    const t = w.forwardRef((n, r) => {
        const { children: s, ...i } = n;
        if (w.isValidElement(s)) {
            const o = Eb(s),
                a = Sb(i, s.props);
            return s.type !== w.Fragment && (a.ref = r ? fx(r, o) : o), w.cloneElement(s, a);
        }
        return w.Children.count(s) > 1 ? w.Children.only(null) : null;
    });
    return (t.displayName = `${e}.SlotClone`), t;
}
var xb = Symbol("radix.slottable");
function wb(e) {
    return w.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === xb;
}
function Sb(e, t) {
    const n = { ...t };
    for (const r in t) {
        const s = e[r],
            i = t[r];
        /^on[A-Z]/.test(r)
            ? s && i
                ? (n[r] = (...a) => {
                      const l = i(...a);
                      return s(...a), l;
                  })
                : s && (n[r] = s)
            : r === "style"
              ? (n[r] = { ...s, ...i })
              : r === "className" && (n[r] = [s, i].filter(Boolean).join(" "));
    }
    return { ...e, ...n };
}
function Eb(e) {
    var r, s;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get),
          (n = t && "isReactWarning" in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
function Cb(e) {
    const t = e + "CollectionProvider",
        [n, r] = iu(t),
        [s, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
        o = (p) => {
            const { scope: x, children: m } = p,
                g = I.useRef(null),
                v = I.useRef(new Map()).current;
            return E.jsx(s, { scope: x, itemMap: v, collectionRef: g, children: m });
        };
    o.displayName = t;
    const a = e + "CollectionSlot",
        l = xf(a),
        u = I.forwardRef((p, x) => {
            const { scope: m, children: g } = p,
                v = i(a, m),
                S = on(x, v.collectionRef);
            return E.jsx(l, { ref: S, children: g });
        });
    u.displayName = a;
    const c = e + "CollectionItemSlot",
        f = "data-radix-collection-item",
        d = xf(c),
        h = I.forwardRef((p, x) => {
            const { scope: m, children: g, ...v } = p,
                S = I.useRef(null),
                C = on(x, S),
                T = i(c, m);
            return (
                I.useEffect(() => (T.itemMap.set(S, { ref: S, ...v }), () => void T.itemMap.delete(S))),
                E.jsx(d, { [f]: "", ref: C, children: g })
            );
        });
    h.displayName = c;
    function y(p) {
        const x = i(e + "CollectionConsumer", p);
        return I.useCallback(() => {
            const g = x.collectionRef.current;
            if (!g) return [];
            const v = Array.from(g.querySelectorAll(`[${f}]`));
            return Array.from(x.itemMap.values()).sort((T, b) => v.indexOf(T.ref.current) - v.indexOf(b.ref.current));
        }, [x.collectionRef, x.itemMap]);
    }
    return [{ Provider: o, Slot: u, ItemSlot: h }, y, r];
}
var bb = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "select",
        "span",
        "svg",
        "ul",
    ],
    pt = bb.reduce((e, t) => {
        const n = xf(`Primitive.${t}`),
            r = w.forwardRef((s, i) => {
                const { asChild: o, ...a } = s,
                    l = o ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), E.jsx(l, { ...a, ref: i });
            });
        return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
    }, {});
function dx(e, t) {
    e && $o.flushSync(() => e.dispatchEvent(t));
}
function br(e) {
    const t = w.useRef(e);
    return (
        w.useEffect(() => {
            t.current = e;
        }),
        w.useMemo(
            () =>
                (...n) => {
                    var r;
                    return (r = t.current) == null ? void 0 : r.call(t, ...n);
                },
            []
        )
    );
}
function Tb(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = br(e);
    w.useEffect(() => {
        const r = (s) => {
            s.key === "Escape" && n(s);
        };
        return (
            t.addEventListener("keydown", r, { capture: !0 }),
            () => t.removeEventListener("keydown", r, { capture: !0 })
        );
    }, [n, t]);
}
var Pb = "DismissableLayer",
    wf = "dismissableLayer.update",
    kb = "dismissableLayer.pointerDownOutside",
    Ab = "dismissableLayer.focusOutside",
    Em,
    hx = w.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
    uh = w.forwardRef((e, t) => {
        const {
                disableOutsidePointerEvents: n = !1,
                onEscapeKeyDown: r,
                onPointerDownOutside: s,
                onFocusOutside: i,
                onInteractOutside: o,
                onDismiss: a,
                ...l
            } = e,
            u = w.useContext(hx),
            [c, f] = w.useState(null),
            d = (c == null ? void 0 : c.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document),
            [, h] = w.useState({}),
            y = on(t, (b) => f(b)),
            p = Array.from(u.layers),
            [x] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
            m = p.indexOf(x),
            g = c ? p.indexOf(c) : -1,
            v = u.layersWithOutsidePointerEventsDisabled.size > 0,
            S = g >= m,
            C = Mb((b) => {
                const P = b.target,
                    R = [...u.branches].some((k) => k.contains(P));
                !S || R || (s == null || s(b), o == null || o(b), b.defaultPrevented || a == null || a());
            }, d),
            T = Nb((b) => {
                const P = b.target;
                [...u.branches].some((k) => k.contains(P)) ||
                    (i == null || i(b), o == null || o(b), b.defaultPrevented || a == null || a());
            }, d);
        return (
            Tb((b) => {
                g === u.layers.size - 1 && (r == null || r(b), !b.defaultPrevented && a && (b.preventDefault(), a()));
            }, d),
            w.useEffect(() => {
                if (c)
                    return (
                        n &&
                            (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                                ((Em = d.body.style.pointerEvents), (d.body.style.pointerEvents = "none")),
                            u.layersWithOutsidePointerEventsDisabled.add(c)),
                        u.layers.add(c),
                        Cm(),
                        () => {
                            n &&
                                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                                (d.body.style.pointerEvents = Em);
                        }
                    );
            }, [c, d, n, u]),
            w.useEffect(
                () => () => {
                    c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), Cm());
                },
                [c, u]
            ),
            w.useEffect(() => {
                const b = () => h({});
                return document.addEventListener(wf, b), () => document.removeEventListener(wf, b);
            }, []),
            E.jsx(pt.div, {
                ...l,
                ref: y,
                style: { pointerEvents: v ? (S ? "auto" : "none") : void 0, ...e.style },
                onFocusCapture: De(e.onFocusCapture, T.onFocusCapture),
                onBlurCapture: De(e.onBlurCapture, T.onBlurCapture),
                onPointerDownCapture: De(e.onPointerDownCapture, C.onPointerDownCapture),
            })
        );
    });
uh.displayName = Pb;
var Rb = "DismissableLayerBranch",
    px = w.forwardRef((e, t) => {
        const n = w.useContext(hx),
            r = w.useRef(null),
            s = on(t, r);
        return (
            w.useEffect(() => {
                const i = r.current;
                if (i)
                    return (
                        n.branches.add(i),
                        () => {
                            n.branches.delete(i);
                        }
                    );
            }, [n.branches]),
            E.jsx(pt.div, { ...e, ref: s })
        );
    });
px.displayName = Rb;
function Mb(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = br(e),
        r = w.useRef(!1),
        s = w.useRef(() => {});
    return (
        w.useEffect(() => {
            const i = (a) => {
                    if (a.target && !r.current) {
                        let l = function () {
                            mx(kb, n, u, { discrete: !0 });
                        };
                        const u = { originalEvent: a };
                        a.pointerType === "touch"
                            ? (t.removeEventListener("click", s.current),
                              (s.current = l),
                              t.addEventListener("click", s.current, { once: !0 }))
                            : l();
                    } else t.removeEventListener("click", s.current);
                    r.current = !1;
                },
                o = window.setTimeout(() => {
                    t.addEventListener("pointerdown", i);
                }, 0);
            return () => {
                window.clearTimeout(o),
                    t.removeEventListener("pointerdown", i),
                    t.removeEventListener("click", s.current);
            };
        }, [t, n]),
        { onPointerDownCapture: () => (r.current = !0) }
    );
}
function Nb(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = br(e),
        r = w.useRef(!1);
    return (
        w.useEffect(() => {
            const s = (i) => {
                i.target && !r.current && mx(Ab, n, { originalEvent: i }, { discrete: !1 });
            };
            return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
        }, [t, n]),
        { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
    );
}
function Cm() {
    const e = new CustomEvent(wf);
    document.dispatchEvent(e);
}
function mx(e, t, n, { discrete: r }) {
    const s = n.originalEvent.target,
        i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
    t && s.addEventListener(e, t, { once: !0 }), r ? dx(s, i) : s.dispatchEvent(i);
}
var Lb = uh,
    Db = px,
    Tr = globalThis != null && globalThis.document ? w.useLayoutEffect : () => {},
    Ob = "Portal",
    gx = w.forwardRef((e, t) => {
        var a;
        const { container: n, ...r } = e,
            [s, i] = w.useState(!1);
        Tr(() => i(!0), []);
        const o = n || (s && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body));
        return o ? ux.createPortal(E.jsx(pt.div, { ...r, ref: t }), o) : null;
    });
gx.displayName = Ob;
function jb(e, t) {
    return w.useReducer((n, r) => t[n][r] ?? n, e);
}
var ch = (e) => {
    const { present: t, children: n } = e,
        r = Ib(t),
        s = typeof n == "function" ? n({ present: r.isPresent }) : w.Children.only(n),
        i = on(r.ref, Fb(s));
    return typeof n == "function" || r.isPresent ? w.cloneElement(s, { ref: i }) : null;
};
ch.displayName = "Presence";
function Ib(e) {
    const [t, n] = w.useState(),
        r = w.useRef(null),
        s = w.useRef(e),
        i = w.useRef("none"),
        o = e ? "mounted" : "unmounted",
        [a, l] = jb(o, {
            mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
            unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
            unmounted: { MOUNT: "mounted" },
        });
    return (
        w.useEffect(() => {
            const u = Sa(r.current);
            i.current = a === "mounted" ? u : "none";
        }, [a]),
        Tr(() => {
            const u = r.current,
                c = s.current;
            if (c !== e) {
                const d = i.current,
                    h = Sa(u);
                e
                    ? l("MOUNT")
                    : h === "none" || (u == null ? void 0 : u.display) === "none"
                      ? l("UNMOUNT")
                      : l(c && d !== h ? "ANIMATION_OUT" : "UNMOUNT"),
                    (s.current = e);
            }
        }, [e, l]),
        Tr(() => {
            if (t) {
                let u;
                const c = t.ownerDocument.defaultView ?? window,
                    f = (h) => {
                        const p = Sa(r.current).includes(CSS.escape(h.animationName));
                        if (h.target === t && p && (l("ANIMATION_END"), !s.current)) {
                            const x = t.style.animationFillMode;
                            (t.style.animationFillMode = "forwards"),
                                (u = c.setTimeout(() => {
                                    t.style.animationFillMode === "forwards" && (t.style.animationFillMode = x);
                                }));
                        }
                    },
                    d = (h) => {
                        h.target === t && (i.current = Sa(r.current));
                    };
                return (
                    t.addEventListener("animationstart", d),
                    t.addEventListener("animationcancel", f),
                    t.addEventListener("animationend", f),
                    () => {
                        c.clearTimeout(u),
                            t.removeEventListener("animationstart", d),
                            t.removeEventListener("animationcancel", f),
                            t.removeEventListener("animationend", f);
                    }
                );
            } else l("ANIMATION_END");
        }, [t, l]),
        {
            isPresent: ["mounted", "unmountSuspended"].includes(a),
            ref: w.useCallback((u) => {
                (r.current = u ? getComputedStyle(u) : null), n(u);
            }, []),
        }
    );
}
function Sa(e) {
    return (e == null ? void 0 : e.animationName) || "none";
}
function Fb(e) {
    var r, s;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get),
          (n = t && "isReactWarning" in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var Vb = ov[" useInsertionEffect ".trim().toString()] || Tr;
function _b({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
    const [s, i, o] = zb({ defaultProp: t, onChange: n }),
        a = e !== void 0,
        l = a ? e : s;
    {
        const c = w.useRef(e !== void 0);
        w.useEffect(() => {
            const f = c.current;
            f !== a &&
                console.warn(
                    `${r} is changing from ${f ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
                ),
                (c.current = a);
        }, [a, r]);
    }
    const u = w.useCallback(
        (c) => {
            var f;
            if (a) {
                const d = Bb(c) ? c(e) : c;
                d !== e && ((f = o.current) == null || f.call(o, d));
            } else i(c);
        },
        [a, e, i, o]
    );
    return [l, u];
}
function zb({ defaultProp: e, onChange: t }) {
    const [n, r] = w.useState(e),
        s = w.useRef(n),
        i = w.useRef(t);
    return (
        Vb(() => {
            i.current = t;
        }, [t]),
        w.useEffect(() => {
            var o;
            s.current !== n && ((o = i.current) == null || o.call(i, n), (s.current = n));
        }, [n, s]),
        [n, r, i]
    );
}
function Bb(e) {
    return typeof e == "function";
}
var $b = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
    }),
    Ub = "VisuallyHidden",
    ou = w.forwardRef((e, t) => E.jsx(pt.span, { ...e, ref: t, style: { ...$b, ...e.style } }));
ou.displayName = Ub;
var Wb = ou,
    fh = "ToastProvider",
    [dh, Hb, Kb] = Cb("Toast"),
    [yx] = iu("Toast", [Kb]),
    [Gb, au] = yx(fh),
    vx = (e) => {
        const {
                __scopeToast: t,
                label: n = "Notification",
                duration: r = 5e3,
                swipeDirection: s = "right",
                swipeThreshold: i = 50,
                children: o,
            } = e,
            [a, l] = w.useState(null),
            [u, c] = w.useState(0),
            f = w.useRef(!1),
            d = w.useRef(!1);
        return (
            n.trim() || console.error(`Invalid prop \`label\` supplied to \`${fh}\`. Expected non-empty \`string\`.`),
            E.jsx(dh.Provider, {
                scope: t,
                children: E.jsx(Gb, {
                    scope: t,
                    label: n,
                    duration: r,
                    swipeDirection: s,
                    swipeThreshold: i,
                    toastCount: u,
                    viewport: a,
                    onViewportChange: l,
                    onToastAdd: w.useCallback(() => c((h) => h + 1), []),
                    onToastRemove: w.useCallback(() => c((h) => h - 1), []),
                    isFocusedToastEscapeKeyDownRef: f,
                    isClosePausedRef: d,
                    children: o,
                }),
            })
        );
    };
vx.displayName = fh;
var xx = "ToastViewport",
    Qb = ["F8"],
    Sf = "toast.viewportPause",
    Ef = "toast.viewportResume",
    wx = w.forwardRef((e, t) => {
        const { __scopeToast: n, hotkey: r = Qb, label: s = "Notifications ({hotkey})", ...i } = e,
            o = au(xx, n),
            a = Hb(n),
            l = w.useRef(null),
            u = w.useRef(null),
            c = w.useRef(null),
            f = w.useRef(null),
            d = on(t, f, o.onViewportChange),
            h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
            y = o.toastCount > 0;
        w.useEffect(() => {
            const x = (m) => {
                var v;
                r.length !== 0 && r.every((S) => m[S] || m.code === S) && ((v = f.current) == null || v.focus());
            };
            return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
        }, [r]),
            w.useEffect(() => {
                const x = l.current,
                    m = f.current;
                if (y && x && m) {
                    const g = () => {
                            if (!o.isClosePausedRef.current) {
                                const T = new CustomEvent(Sf);
                                m.dispatchEvent(T), (o.isClosePausedRef.current = !0);
                            }
                        },
                        v = () => {
                            if (o.isClosePausedRef.current) {
                                const T = new CustomEvent(Ef);
                                m.dispatchEvent(T), (o.isClosePausedRef.current = !1);
                            }
                        },
                        S = (T) => {
                            !x.contains(T.relatedTarget) && v();
                        },
                        C = () => {
                            x.contains(document.activeElement) || v();
                        };
                    return (
                        x.addEventListener("focusin", g),
                        x.addEventListener("focusout", S),
                        x.addEventListener("pointermove", g),
                        x.addEventListener("pointerleave", C),
                        window.addEventListener("blur", g),
                        window.addEventListener("focus", v),
                        () => {
                            x.removeEventListener("focusin", g),
                                x.removeEventListener("focusout", S),
                                x.removeEventListener("pointermove", g),
                                x.removeEventListener("pointerleave", C),
                                window.removeEventListener("blur", g),
                                window.removeEventListener("focus", v);
                        }
                    );
                }
            }, [y, o.isClosePausedRef]);
        const p = w.useCallback(
            ({ tabbingDirection: x }) => {
                const g = a().map((v) => {
                    const S = v.ref.current,
                        C = [S, ...aT(S)];
                    return x === "forwards" ? C : C.reverse();
                });
                return (x === "forwards" ? g.reverse() : g).flat();
            },
            [a]
        );
        return (
            w.useEffect(() => {
                const x = f.current;
                if (x) {
                    const m = (g) => {
                        var C, T, b;
                        const v = g.altKey || g.ctrlKey || g.metaKey;
                        if (g.key === "Tab" && !v) {
                            const P = document.activeElement,
                                R = g.shiftKey;
                            if (g.target === x && R) {
                                (C = u.current) == null || C.focus();
                                return;
                            }
                            const D = p({ tabbingDirection: R ? "backwards" : "forwards" }),
                                W = D.findIndex((O) => O === P);
                            rc(D.slice(W + 1))
                                ? g.preventDefault()
                                : R
                                  ? (T = u.current) == null || T.focus()
                                  : (b = c.current) == null || b.focus();
                        }
                    };
                    return x.addEventListener("keydown", m), () => x.removeEventListener("keydown", m);
                }
            }, [a, p]),
            E.jsxs(Db, {
                ref: l,
                role: "region",
                "aria-label": s.replace("{hotkey}", h),
                tabIndex: -1,
                style: { pointerEvents: y ? void 0 : "none" },
                children: [
                    y &&
                        E.jsx(Cf, {
                            ref: u,
                            onFocusFromOutsideViewport: () => {
                                const x = p({ tabbingDirection: "forwards" });
                                rc(x);
                            },
                        }),
                    E.jsx(dh.Slot, { scope: n, children: E.jsx(pt.ol, { tabIndex: -1, ...i, ref: d }) }),
                    y &&
                        E.jsx(Cf, {
                            ref: c,
                            onFocusFromOutsideViewport: () => {
                                const x = p({ tabbingDirection: "backwards" });
                                rc(x);
                            },
                        }),
                ],
            })
        );
    });
wx.displayName = xx;
var Sx = "ToastFocusProxy",
    Cf = w.forwardRef((e, t) => {
        const { __scopeToast: n, onFocusFromOutsideViewport: r, ...s } = e,
            i = au(Sx, n);
        return E.jsx(ou, {
            tabIndex: 0,
            ...s,
            ref: t,
            style: { position: "fixed" },
            onFocus: (o) => {
                var u;
                const a = o.relatedTarget;
                !((u = i.viewport) != null && u.contains(a)) && r();
            },
        });
    });
Cf.displayName = Sx;
var Uo = "Toast",
    Yb = "toast.swipeStart",
    Xb = "toast.swipeMove",
    qb = "toast.swipeCancel",
    Zb = "toast.swipeEnd",
    Ex = w.forwardRef((e, t) => {
        const { forceMount: n, open: r, defaultOpen: s, onOpenChange: i, ...o } = e,
            [a, l] = _b({ prop: r, defaultProp: s ?? !0, onChange: i, caller: Uo });
        return E.jsx(ch, {
            present: n || a,
            children: E.jsx(tT, {
                open: a,
                ...o,
                ref: t,
                onClose: () => l(!1),
                onPause: br(e.onPause),
                onResume: br(e.onResume),
                onSwipeStart: De(e.onSwipeStart, (u) => {
                    u.currentTarget.setAttribute("data-swipe", "start");
                }),
                onSwipeMove: De(e.onSwipeMove, (u) => {
                    const { x: c, y: f } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "move"),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${c}px`),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${f}px`);
                }),
                onSwipeCancel: De(e.onSwipeCancel, (u) => {
                    u.currentTarget.setAttribute("data-swipe", "cancel"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
                }),
                onSwipeEnd: De(e.onSwipeEnd, (u) => {
                    const { x: c, y: f } = u.detail.delta;
                    u.currentTarget.setAttribute("data-swipe", "end"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${c}px`),
                        u.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${f}px`),
                        l(!1);
                }),
            }),
        });
    });
Ex.displayName = Uo;
var [Jb, eT] = yx(Uo, { onClose() {} }),
    tT = w.forwardRef((e, t) => {
        const {
                __scopeToast: n,
                type: r = "foreground",
                duration: s,
                open: i,
                onClose: o,
                onEscapeKeyDown: a,
                onPause: l,
                onResume: u,
                onSwipeStart: c,
                onSwipeMove: f,
                onSwipeCancel: d,
                onSwipeEnd: h,
                ...y
            } = e,
            p = au(Uo, n),
            [x, m] = w.useState(null),
            g = on(t, (O) => m(O)),
            v = w.useRef(null),
            S = w.useRef(null),
            C = s || p.duration,
            T = w.useRef(0),
            b = w.useRef(C),
            P = w.useRef(0),
            { onToastAdd: R, onToastRemove: k } = p,
            L = br(() => {
                var H;
                (x == null ? void 0 : x.contains(document.activeElement)) && ((H = p.viewport) == null || H.focus()),
                    o();
            }),
            D = w.useCallback(
                (O) => {
                    !O ||
                        O === 1 / 0 ||
                        (window.clearTimeout(P.current),
                        (T.current = new Date().getTime()),
                        (P.current = window.setTimeout(L, O)));
                },
                [L]
            );
        w.useEffect(() => {
            const O = p.viewport;
            if (O) {
                const H = () => {
                        D(b.current), u == null || u();
                    },
                    _ = () => {
                        const K = new Date().getTime() - T.current;
                        (b.current = b.current - K), window.clearTimeout(P.current), l == null || l();
                    };
                return (
                    O.addEventListener(Sf, _),
                    O.addEventListener(Ef, H),
                    () => {
                        O.removeEventListener(Sf, _), O.removeEventListener(Ef, H);
                    }
                );
            }
        }, [p.viewport, C, l, u, D]),
            w.useEffect(() => {
                i && !p.isClosePausedRef.current && D(C);
            }, [i, C, p.isClosePausedRef, D]),
            w.useEffect(() => (R(), () => k()), [R, k]);
        const W = w.useMemo(() => (x ? Rx(x) : null), [x]);
        return p.viewport
            ? E.jsxs(E.Fragment, {
                  children: [
                      W &&
                          E.jsx(nT, {
                              __scopeToast: n,
                              role: "status",
                              "aria-live": r === "foreground" ? "assertive" : "polite",
                              children: W,
                          }),
                      E.jsx(Jb, {
                          scope: n,
                          onClose: L,
                          children: $o.createPortal(
                              E.jsx(dh.ItemSlot, {
                                  scope: n,
                                  children: E.jsx(Lb, {
                                      asChild: !0,
                                      onEscapeKeyDown: De(a, () => {
                                          p.isFocusedToastEscapeKeyDownRef.current || L(),
                                              (p.isFocusedToastEscapeKeyDownRef.current = !1);
                                      }),
                                      children: E.jsx(pt.li, {
                                          tabIndex: 0,
                                          "data-state": i ? "open" : "closed",
                                          "data-swipe-direction": p.swipeDirection,
                                          ...y,
                                          ref: g,
                                          style: { userSelect: "none", touchAction: "none", ...e.style },
                                          onKeyDown: De(e.onKeyDown, (O) => {
                                              O.key === "Escape" &&
                                                  (a == null || a(O.nativeEvent),
                                                  O.nativeEvent.defaultPrevented ||
                                                      ((p.isFocusedToastEscapeKeyDownRef.current = !0), L()));
                                          }),
                                          onPointerDown: De(e.onPointerDown, (O) => {
                                              O.button === 0 && (v.current = { x: O.clientX, y: O.clientY });
                                          }),
                                          onPointerMove: De(e.onPointerMove, (O) => {
                                              if (!v.current) return;
                                              const H = O.clientX - v.current.x,
                                                  _ = O.clientY - v.current.y,
                                                  K = !!S.current,
                                                  A = ["left", "right"].includes(p.swipeDirection),
                                                  M = ["left", "up"].includes(p.swipeDirection) ? Math.min : Math.max,
                                                  F = A ? M(0, H) : 0,
                                                  U = A ? 0 : M(0, _),
                                                  $ = O.pointerType === "touch" ? 10 : 2,
                                                  X = { x: F, y: U },
                                                  Q = { originalEvent: O, delta: X };
                                              K
                                                  ? ((S.current = X), Ea(Xb, f, Q, { discrete: !1 }))
                                                  : bm(X, p.swipeDirection, $)
                                                    ? ((S.current = X),
                                                      Ea(Yb, c, Q, { discrete: !1 }),
                                                      O.target.setPointerCapture(O.pointerId))
                                                    : (Math.abs(H) > $ || Math.abs(_) > $) && (v.current = null);
                                          }),
                                          onPointerUp: De(e.onPointerUp, (O) => {
                                              const H = S.current,
                                                  _ = O.target;
                                              if (
                                                  (_.hasPointerCapture(O.pointerId) &&
                                                      _.releasePointerCapture(O.pointerId),
                                                  (S.current = null),
                                                  (v.current = null),
                                                  H)
                                              ) {
                                                  const K = O.currentTarget,
                                                      A = { originalEvent: O, delta: H };
                                                  bm(H, p.swipeDirection, p.swipeThreshold)
                                                      ? Ea(Zb, h, A, { discrete: !0 })
                                                      : Ea(qb, d, A, { discrete: !0 }),
                                                      K.addEventListener("click", (M) => M.preventDefault(), {
                                                          once: !0,
                                                      });
                                              }
                                          }),
                                      }),
                                  }),
                              }),
                              p.viewport
                          ),
                      }),
                  ],
              })
            : null;
    }),
    nT = (e) => {
        const { __scopeToast: t, children: n, ...r } = e,
            s = au(Uo, t),
            [i, o] = w.useState(!1),
            [a, l] = w.useState(!1);
        return (
            iT(() => o(!0)),
            w.useEffect(() => {
                const u = window.setTimeout(() => l(!0), 1e3);
                return () => window.clearTimeout(u);
            }, []),
            a
                ? null
                : E.jsx(gx, {
                      asChild: !0,
                      children: E.jsx(ou, { ...r, children: i && E.jsxs(E.Fragment, { children: [s.label, " ", n] }) }),
                  })
        );
    },
    rT = "ToastTitle",
    Cx = w.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return E.jsx(pt.div, { ...r, ref: t });
    });
Cx.displayName = rT;
var sT = "ToastDescription",
    bx = w.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return E.jsx(pt.div, { ...r, ref: t });
    });
bx.displayName = sT;
var Tx = "ToastAction",
    Px = w.forwardRef((e, t) => {
        const { altText: n, ...r } = e;
        return n.trim()
            ? E.jsx(Ax, { altText: n, asChild: !0, children: E.jsx(hh, { ...r, ref: t }) })
            : (console.error(`Invalid prop \`altText\` supplied to \`${Tx}\`. Expected non-empty \`string\`.`), null);
    });
Px.displayName = Tx;
var kx = "ToastClose",
    hh = w.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e,
            s = eT(kx, n);
        return E.jsx(Ax, {
            asChild: !0,
            children: E.jsx(pt.button, { type: "button", ...r, ref: t, onClick: De(e.onClick, s.onClose) }),
        });
    });
hh.displayName = kx;
var Ax = w.forwardRef((e, t) => {
    const { __scopeToast: n, altText: r, ...s } = e;
    return E.jsx(pt.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...s,
        ref: t,
    });
});
function Rx(e) {
    const t = [];
    return (
        Array.from(e.childNodes).forEach((r) => {
            if ((r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), oT(r))) {
                const s = r.ariaHidden || r.hidden || r.style.display === "none",
                    i = r.dataset.radixToastAnnounceExclude === "";
                if (!s)
                    if (i) {
                        const o = r.dataset.radixToastAnnounceAlt;
                        o && t.push(o);
                    } else t.push(...Rx(r));
            }
        }),
        t
    );
}
function Ea(e, t, n, { discrete: r }) {
    const s = n.originalEvent.currentTarget,
        i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
    t && s.addEventListener(e, t, { once: !0 }), r ? dx(s, i) : s.dispatchEvent(i);
}
var bm = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        s = Math.abs(e.y),
        i = r > s;
    return t === "left" || t === "right" ? i && r > n : !i && s > n;
};
function iT(e = () => {}) {
    const t = br(e);
    Tr(() => {
        let n = 0,
            r = 0;
        return (
            (n = window.requestAnimationFrame(() => (r = window.requestAnimationFrame(t)))),
            () => {
                window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
            }
        );
    }, [t]);
}
function oT(e) {
    return e.nodeType === e.ELEMENT_NODE;
}
function aT(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (r) => {
                const s = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || s
                    ? NodeFilter.FILTER_SKIP
                    : r.tabIndex >= 0
                      ? NodeFilter.FILTER_ACCEPT
                      : NodeFilter.FILTER_SKIP;
            },
        });
    for (; n.nextNode(); ) t.push(n.currentNode);
    return t;
}
function rc(e) {
    const t = document.activeElement;
    return e.some((n) => (n === t ? !0 : (n.focus(), document.activeElement !== t)));
}
var lT = vx,
    Mx = wx,
    Nx = Ex,
    Lx = Cx,
    Dx = bx,
    Ox = Px,
    jx = hh;
function Ix(e) {
    var t,
        n,
        r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var s = e.length;
            for (t = 0; t < s; t++) e[t] && (n = Ix(e[t])) && (r && (r += " "), (r += n));
        } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
}
function Fx() {
    for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
        (e = arguments[n]) && (t = Ix(e)) && (r && (r += " "), (r += t));
    return r;
}
const Tm = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
    Pm = Fx,
    uT = (e, t) => (n) => {
        var r;
        if ((t == null ? void 0 : t.variants) == null)
            return Pm(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const { variants: s, defaultVariants: i } = t,
            o = Object.keys(s).map((u) => {
                const c = n == null ? void 0 : n[u],
                    f = i == null ? void 0 : i[u];
                if (c === null) return null;
                const d = Tm(c) || Tm(f);
                return s[u][d];
            }),
            a =
                n &&
                Object.entries(n).reduce((u, c) => {
                    let [f, d] = c;
                    return d === void 0 || (u[f] = d), u;
                }, {}),
            l =
                t == null || (r = t.compoundVariants) === null || r === void 0
                    ? void 0
                    : r.reduce((u, c) => {
                          let { class: f, className: d, ...h } = c;
                          return Object.entries(h).every((y) => {
                              let [p, x] = y;
                              return Array.isArray(x) ? x.includes({ ...i, ...a }[p]) : { ...i, ...a }[p] === x;
                          })
                              ? [...u, f, d]
                              : u;
                      }, []);
        return Pm(e, o, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cT = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    Vx = (...e) =>
        e
            .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
            .join(" ")
            .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var fT = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dT = w.forwardRef(
    (
        {
            color: e = "currentColor",
            size: t = 24,
            strokeWidth: n = 2,
            absoluteStrokeWidth: r,
            className: s = "",
            children: i,
            iconNode: o,
            ...a
        },
        l
    ) =>
        w.createElement(
            "svg",
            {
                ref: l,
                ...fT,
                width: t,
                height: t,
                stroke: e,
                strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
                className: Vx("lucide", s),
                ...a,
            },
            [...o.map(([u, c]) => w.createElement(u, c)), ...(Array.isArray(i) ? i : [i])]
        )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dr = (e, t) => {
    const n = w.forwardRef(({ className: r, ...s }, i) =>
        w.createElement(dT, { ref: i, iconNode: t, className: Vx(`lucide-${cT(e)}`, r), ...s })
    );
    return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hT = Dr("ArrowRight", [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const km = Dr("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pT = Dr("CircleCheck", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mT = Dr("Menu", [
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
    ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
    ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Am = Dr("MessageCircle", [["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ca = Dr("Phone", [
    [
        "path",
        {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
            key: "foiqr5",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gT = Dr("Star", [
    [
        "path",
        {
            d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
            key: "r04s7s",
        },
    ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _x = Dr("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]),
    ph = "-",
    yT = (e) => {
        const t = xT(e),
            { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (o) => {
                const a = o.split(ph);
                return a[0] === "" && a.length !== 1 && a.shift(), zx(a, t) || vT(o);
            },
            getConflictingClassGroupIds: (o, a) => {
                const l = n[o] || [];
                return a && r[o] ? [...l, ...r[o]] : l;
            },
        };
    },
    zx = (e, t) => {
        var o;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            s = r ? zx(e.slice(1), r) : void 0;
        if (s) return s;
        if (t.validators.length === 0) return;
        const i = e.join(ph);
        return (o = t.validators.find(({ validator: a }) => a(i))) == null ? void 0 : o.classGroupId;
    },
    Rm = /^\[(.+)\]$/,
    vT = (e) => {
        if (Rm.test(e)) {
            const t = Rm.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n;
        }
    },
    xT = (e) => {
        const { theme: t, prefix: n } = e,
            r = { nextPart: new Map(), validators: [] };
        return (
            ST(Object.entries(e.classGroups), n).forEach(([i, o]) => {
                bf(o, r, i, t);
            }),
            r
        );
    },
    bf = (e, t, n, r) => {
        e.forEach((s) => {
            if (typeof s == "string") {
                const i = s === "" ? t : Mm(t, s);
                i.classGroupId = n;
                return;
            }
            if (typeof s == "function") {
                if (wT(s)) {
                    bf(s(r), t, n, r);
                    return;
                }
                t.validators.push({ validator: s, classGroupId: n });
                return;
            }
            Object.entries(s).forEach(([i, o]) => {
                bf(o, Mm(t, i), n, r);
            });
        });
    },
    Mm = (e, t) => {
        let n = e;
        return (
            t.split(ph).forEach((r) => {
                n.nextPart.has(r) || n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
                    (n = n.nextPart.get(r));
            }),
            n
        );
    },
    wT = (e) => e.isThemeGetter,
    ST = (e, t) =>
        t
            ? e.map(([n, r]) => {
                  const s = r.map((i) =>
                      typeof i == "string"
                          ? t + i
                          : typeof i == "object"
                            ? Object.fromEntries(Object.entries(i).map(([o, a]) => [t + o, a]))
                            : i
                  );
                  return [n, s];
              })
            : e,
    ET = (e) => {
        if (e < 1) return { get: () => {}, set: () => {} };
        let t = 0,
            n = new Map(),
            r = new Map();
        const s = (i, o) => {
            n.set(i, o), t++, t > e && ((t = 0), (r = n), (n = new Map()));
        };
        return {
            get(i) {
                let o = n.get(i);
                if (o !== void 0) return o;
                if ((o = r.get(i)) !== void 0) return s(i, o), o;
            },
            set(i, o) {
                n.has(i) ? n.set(i, o) : s(i, o);
            },
        };
    },
    Bx = "!",
    CT = (e) => {
        const { separator: t, experimentalParseClassName: n } = e,
            r = t.length === 1,
            s = t[0],
            i = t.length,
            o = (a) => {
                const l = [];
                let u = 0,
                    c = 0,
                    f;
                for (let x = 0; x < a.length; x++) {
                    let m = a[x];
                    if (u === 0) {
                        if (m === s && (r || a.slice(x, x + i) === t)) {
                            l.push(a.slice(c, x)), (c = x + i);
                            continue;
                        }
                        if (m === "/") {
                            f = x;
                            continue;
                        }
                    }
                    m === "[" ? u++ : m === "]" && u--;
                }
                const d = l.length === 0 ? a : a.substring(c),
                    h = d.startsWith(Bx),
                    y = h ? d.substring(1) : d,
                    p = f && f > c ? f - c : void 0;
                return { modifiers: l, hasImportantModifier: h, baseClassName: y, maybePostfixModifierPosition: p };
            };
        return n ? (a) => n({ className: a, parseClassName: o }) : o;
    },
    bT = (e) => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return (
            e.forEach((r) => {
                r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
            }),
            t.push(...n.sort()),
            t
        );
    },
    TT = (e) => ({ cache: ET(e.cacheSize), parseClassName: CT(e), ...yT(e) }),
    PT = /\s+/,
    kT = (e, t) => {
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: s } = t,
            i = [],
            o = e.trim().split(PT);
        let a = "";
        for (let l = o.length - 1; l >= 0; l -= 1) {
            const u = o[l],
                { modifiers: c, hasImportantModifier: f, baseClassName: d, maybePostfixModifierPosition: h } = n(u);
            let y = !!h,
                p = r(y ? d.substring(0, h) : d);
            if (!p) {
                if (!y) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue;
                }
                if (((p = r(d)), !p)) {
                    a = u + (a.length > 0 ? " " + a : a);
                    continue;
                }
                y = !1;
            }
            const x = bT(c).join(":"),
                m = f ? x + Bx : x,
                g = m + p;
            if (i.includes(g)) continue;
            i.push(g);
            const v = s(p, y);
            for (let S = 0; S < v.length; ++S) {
                const C = v[S];
                i.push(m + C);
            }
            a = u + (a.length > 0 ? " " + a : a);
        }
        return a;
    };
function AT() {
    let e = 0,
        t,
        n,
        r = "";
    for (; e < arguments.length; ) (t = arguments[e++]) && (n = $x(t)) && (r && (r += " "), (r += n));
    return r;
}
const $x = (e) => {
    if (typeof e == "string") return e;
    let t,
        n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = $x(e[r])) && (n && (n += " "), (n += t));
    return n;
};
function RT(e, ...t) {
    let n,
        r,
        s,
        i = o;
    function o(l) {
        const u = t.reduce((c, f) => f(c), e());
        return (n = TT(u)), (r = n.cache.get), (s = n.cache.set), (i = a), a(l);
    }
    function a(l) {
        const u = r(l);
        if (u) return u;
        const c = kT(l, n);
        return s(l, c), c;
    }
    return function () {
        return i(AT.apply(null, arguments));
    };
}
const de = (e) => {
        const t = (n) => n[e] || [];
        return (t.isThemeGetter = !0), t;
    },
    Ux = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    MT = /^\d+\/\d+$/,
    NT = new Set(["px", "full", "screen"]),
    LT = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    DT =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    OT = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
    jT = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    IT = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Pn = (e) => $s(e) || NT.has(e) || MT.test(e),
    Yn = (e) => pi(e, "length", WT),
    $s = (e) => !!e && !Number.isNaN(Number(e)),
    sc = (e) => pi(e, "number", $s),
    Li = (e) => !!e && Number.isInteger(Number(e)),
    FT = (e) => e.endsWith("%") && $s(e.slice(0, -1)),
    Z = (e) => Ux.test(e),
    Xn = (e) => LT.test(e),
    VT = new Set(["length", "size", "percentage"]),
    _T = (e) => pi(e, VT, Wx),
    zT = (e) => pi(e, "position", Wx),
    BT = new Set(["image", "url"]),
    $T = (e) => pi(e, BT, KT),
    UT = (e) => pi(e, "", HT),
    Di = () => !0,
    pi = (e, t, n) => {
        const r = Ux.exec(e);
        return r ? (r[1] ? (typeof t == "string" ? r[1] === t : t.has(r[1])) : n(r[2])) : !1;
    },
    WT = (e) => DT.test(e) && !OT.test(e),
    Wx = () => !1,
    HT = (e) => jT.test(e),
    KT = (e) => IT.test(e),
    GT = () => {
        const e = de("colors"),
            t = de("spacing"),
            n = de("blur"),
            r = de("brightness"),
            s = de("borderColor"),
            i = de("borderRadius"),
            o = de("borderSpacing"),
            a = de("borderWidth"),
            l = de("contrast"),
            u = de("grayscale"),
            c = de("hueRotate"),
            f = de("invert"),
            d = de("gap"),
            h = de("gradientColorStops"),
            y = de("gradientColorStopPositions"),
            p = de("inset"),
            x = de("margin"),
            m = de("opacity"),
            g = de("padding"),
            v = de("saturate"),
            S = de("scale"),
            C = de("sepia"),
            T = de("skew"),
            b = de("space"),
            P = de("translate"),
            R = () => ["auto", "contain", "none"],
            k = () => ["auto", "hidden", "clip", "visible", "scroll"],
            L = () => ["auto", Z, t],
            D = () => [Z, t],
            W = () => ["", Pn, Yn],
            O = () => ["auto", $s, Z],
            H = () => [
                "bottom",
                "center",
                "left",
                "left-bottom",
                "left-top",
                "right",
                "right-bottom",
                "right-top",
                "top",
            ],
            _ = () => ["solid", "dashed", "dotted", "double", "none"],
            K = () => [
                "normal",
                "multiply",
                "screen",
                "overlay",
                "darken",
                "lighten",
                "color-dodge",
                "color-burn",
                "hard-light",
                "soft-light",
                "difference",
                "exclusion",
                "hue",
                "saturation",
                "color",
                "luminosity",
            ],
            A = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            M = () => ["", "0", Z],
            F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            U = () => [$s, Z];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [Di],
                spacing: [Pn, Yn],
                blur: ["none", "", Xn, Z],
                brightness: U(),
                borderColor: [e],
                borderRadius: ["none", "", "full", Xn, Z],
                borderSpacing: D(),
                borderWidth: W(),
                contrast: U(),
                grayscale: M(),
                hueRotate: U(),
                invert: M(),
                gap: D(),
                gradientColorStops: [e],
                gradientColorStopPositions: [FT, Yn],
                inset: L(),
                margin: L(),
                opacity: U(),
                padding: D(),
                saturate: U(),
                scale: U(),
                sepia: M(),
                skew: U(),
                space: D(),
                translate: D(),
            },
            classGroups: {
                aspect: [{ aspect: ["auto", "square", "video", Z] }],
                container: ["container"],
                columns: [{ columns: [Xn] }],
                "break-after": [{ "break-after": F() }],
                "break-before": [{ "break-before": F() }],
                "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
                "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
                box: [{ box: ["border", "content"] }],
                display: [
                    "block",
                    "inline-block",
                    "inline",
                    "flex",
                    "inline-flex",
                    "table",
                    "inline-table",
                    "table-caption",
                    "table-cell",
                    "table-column",
                    "table-column-group",
                    "table-footer-group",
                    "table-header-group",
                    "table-row-group",
                    "table-row",
                    "flow-root",
                    "grid",
                    "inline-grid",
                    "contents",
                    "list-item",
                    "hidden",
                ],
                float: [{ float: ["right", "left", "none", "start", "end"] }],
                clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
                "object-position": [{ object: [...H(), Z] }],
                overflow: [{ overflow: k() }],
                "overflow-x": [{ "overflow-x": k() }],
                "overflow-y": [{ "overflow-y": k() }],
                overscroll: [{ overscroll: R() }],
                "overscroll-x": [{ "overscroll-x": R() }],
                "overscroll-y": [{ "overscroll-y": R() }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{ inset: [p] }],
                "inset-x": [{ "inset-x": [p] }],
                "inset-y": [{ "inset-y": [p] }],
                start: [{ start: [p] }],
                end: [{ end: [p] }],
                top: [{ top: [p] }],
                right: [{ right: [p] }],
                bottom: [{ bottom: [p] }],
                left: [{ left: [p] }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{ z: ["auto", Li, Z] }],
                basis: [{ basis: L() }],
                "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
                "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
                flex: [{ flex: ["1", "auto", "initial", "none", Z] }],
                grow: [{ grow: M() }],
                shrink: [{ shrink: M() }],
                order: [{ order: ["first", "last", "none", Li, Z] }],
                "grid-cols": [{ "grid-cols": [Di] }],
                "col-start-end": [{ col: ["auto", { span: ["full", Li, Z] }, Z] }],
                "col-start": [{ "col-start": O() }],
                "col-end": [{ "col-end": O() }],
                "grid-rows": [{ "grid-rows": [Di] }],
                "row-start-end": [{ row: ["auto", { span: [Li, Z] }, Z] }],
                "row-start": [{ "row-start": O() }],
                "row-end": [{ "row-end": O() }],
                "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
                "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Z] }],
                "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Z] }],
                gap: [{ gap: [d] }],
                "gap-x": [{ "gap-x": [d] }],
                "gap-y": [{ "gap-y": [d] }],
                "justify-content": [{ justify: ["normal", ...A()] }],
                "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
                "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
                "align-content": [{ content: ["normal", ...A(), "baseline"] }],
                "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
                "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
                "place-content": [{ "place-content": [...A(), "baseline"] }],
                "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }],
                "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }],
                p: [{ p: [g] }],
                px: [{ px: [g] }],
                py: [{ py: [g] }],
                ps: [{ ps: [g] }],
                pe: [{ pe: [g] }],
                pt: [{ pt: [g] }],
                pr: [{ pr: [g] }],
                pb: [{ pb: [g] }],
                pl: [{ pl: [g] }],
                m: [{ m: [x] }],
                mx: [{ mx: [x] }],
                my: [{ my: [x] }],
                ms: [{ ms: [x] }],
                me: [{ me: [x] }],
                mt: [{ mt: [x] }],
                mr: [{ mr: [x] }],
                mb: [{ mb: [x] }],
                ml: [{ ml: [x] }],
                "space-x": [{ "space-x": [b] }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{ "space-y": [b] }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Z, t] }],
                "min-w": [{ "min-w": [Z, t, "min", "max", "fit"] }],
                "max-w": [{ "max-w": [Z, t, "none", "full", "min", "max", "fit", "prose", { screen: [Xn] }, Xn] }],
                h: [{ h: [Z, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
                "min-h": [{ "min-h": [Z, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                "max-h": [{ "max-h": [Z, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                size: [{ size: [Z, t, "auto", "min", "max", "fit"] }],
                "font-size": [{ text: ["base", Xn, Yn] }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [
                    {
                        font: [
                            "thin",
                            "extralight",
                            "light",
                            "normal",
                            "medium",
                            "semibold",
                            "bold",
                            "extrabold",
                            "black",
                            sc,
                        ],
                    },
                ],
                "font-family": [{ font: [Di] }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Z] }],
                "line-clamp": [{ "line-clamp": ["none", $s, sc] }],
                leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Pn, Z] }],
                "list-image": [{ "list-image": ["none", Z] }],
                "list-style-type": [{ list: ["none", "disc", "decimal", Z] }],
                "list-style-position": [{ list: ["inside", "outside"] }],
                "placeholder-color": [{ placeholder: [e] }],
                "placeholder-opacity": [{ "placeholder-opacity": [m] }],
                "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
                "text-color": [{ text: [e] }],
                "text-opacity": [{ "text-opacity": [m] }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{ decoration: [..._(), "wavy"] }],
                "text-decoration-thickness": [{ decoration: ["auto", "from-font", Pn, Yn] }],
                "underline-offset": [{ "underline-offset": ["auto", Pn, Z] }],
                "text-decoration-color": [{ decoration: [e] }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
                indent: [{ indent: D() }],
                "vertical-align": [
                    { align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Z] },
                ],
                whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }],
                break: [{ break: ["normal", "words", "all", "keep"] }],
                hyphens: [{ hyphens: ["none", "manual", "auto"] }],
                content: [{ content: ["none", Z] }],
                "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
                "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
                "bg-opacity": [{ "bg-opacity": [m] }],
                "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
                "bg-position": [{ bg: [...H(), zT] }],
                "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
                "bg-size": [{ bg: ["auto", "cover", "contain", _T] }],
                "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, $T] }],
                "bg-color": [{ bg: [e] }],
                "gradient-from-pos": [{ from: [y] }],
                "gradient-via-pos": [{ via: [y] }],
                "gradient-to-pos": [{ to: [y] }],
                "gradient-from": [{ from: [h] }],
                "gradient-via": [{ via: [h] }],
                "gradient-to": [{ to: [h] }],
                rounded: [{ rounded: [i] }],
                "rounded-s": [{ "rounded-s": [i] }],
                "rounded-e": [{ "rounded-e": [i] }],
                "rounded-t": [{ "rounded-t": [i] }],
                "rounded-r": [{ "rounded-r": [i] }],
                "rounded-b": [{ "rounded-b": [i] }],
                "rounded-l": [{ "rounded-l": [i] }],
                "rounded-ss": [{ "rounded-ss": [i] }],
                "rounded-se": [{ "rounded-se": [i] }],
                "rounded-ee": [{ "rounded-ee": [i] }],
                "rounded-es": [{ "rounded-es": [i] }],
                "rounded-tl": [{ "rounded-tl": [i] }],
                "rounded-tr": [{ "rounded-tr": [i] }],
                "rounded-br": [{ "rounded-br": [i] }],
                "rounded-bl": [{ "rounded-bl": [i] }],
                "border-w": [{ border: [a] }],
                "border-w-x": [{ "border-x": [a] }],
                "border-w-y": [{ "border-y": [a] }],
                "border-w-s": [{ "border-s": [a] }],
                "border-w-e": [{ "border-e": [a] }],
                "border-w-t": [{ "border-t": [a] }],
                "border-w-r": [{ "border-r": [a] }],
                "border-w-b": [{ "border-b": [a] }],
                "border-w-l": [{ "border-l": [a] }],
                "border-opacity": [{ "border-opacity": [m] }],
                "border-style": [{ border: [..._(), "hidden"] }],
                "divide-x": [{ "divide-x": [a] }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{ "divide-y": [a] }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{ "divide-opacity": [m] }],
                "divide-style": [{ divide: _() }],
                "border-color": [{ border: [s] }],
                "border-color-x": [{ "border-x": [s] }],
                "border-color-y": [{ "border-y": [s] }],
                "border-color-s": [{ "border-s": [s] }],
                "border-color-e": [{ "border-e": [s] }],
                "border-color-t": [{ "border-t": [s] }],
                "border-color-r": [{ "border-r": [s] }],
                "border-color-b": [{ "border-b": [s] }],
                "border-color-l": [{ "border-l": [s] }],
                "divide-color": [{ divide: [s] }],
                "outline-style": [{ outline: ["", ..._()] }],
                "outline-offset": [{ "outline-offset": [Pn, Z] }],
                "outline-w": [{ outline: [Pn, Yn] }],
                "outline-color": [{ outline: [e] }],
                "ring-w": [{ ring: W() }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{ ring: [e] }],
                "ring-opacity": [{ "ring-opacity": [m] }],
                "ring-offset-w": [{ "ring-offset": [Pn, Yn] }],
                "ring-offset-color": [{ "ring-offset": [e] }],
                shadow: [{ shadow: ["", "inner", "none", Xn, UT] }],
                "shadow-color": [{ shadow: [Di] }],
                opacity: [{ opacity: [m] }],
                "mix-blend": [{ "mix-blend": [...K(), "plus-lighter", "plus-darker"] }],
                "bg-blend": [{ "bg-blend": K() }],
                filter: [{ filter: ["", "none"] }],
                blur: [{ blur: [n] }],
                brightness: [{ brightness: [r] }],
                contrast: [{ contrast: [l] }],
                "drop-shadow": [{ "drop-shadow": ["", "none", Xn, Z] }],
                grayscale: [{ grayscale: [u] }],
                "hue-rotate": [{ "hue-rotate": [c] }],
                invert: [{ invert: [f] }],
                saturate: [{ saturate: [v] }],
                sepia: [{ sepia: [C] }],
                "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
                "backdrop-blur": [{ "backdrop-blur": [n] }],
                "backdrop-brightness": [{ "backdrop-brightness": [r] }],
                "backdrop-contrast": [{ "backdrop-contrast": [l] }],
                "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
                "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [c] }],
                "backdrop-invert": [{ "backdrop-invert": [f] }],
                "backdrop-opacity": [{ "backdrop-opacity": [m] }],
                "backdrop-saturate": [{ "backdrop-saturate": [v] }],
                "backdrop-sepia": [{ "backdrop-sepia": [C] }],
                "border-collapse": [{ border: ["collapse", "separate"] }],
                "border-spacing": [{ "border-spacing": [o] }],
                "border-spacing-x": [{ "border-spacing-x": [o] }],
                "border-spacing-y": [{ "border-spacing-y": [o] }],
                "table-layout": [{ table: ["auto", "fixed"] }],
                caption: [{ caption: ["top", "bottom"] }],
                transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Z] }],
                duration: [{ duration: U() }],
                ease: [{ ease: ["linear", "in", "out", "in-out", Z] }],
                delay: [{ delay: U() }],
                animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Z] }],
                transform: [{ transform: ["", "gpu", "none"] }],
                scale: [{ scale: [S] }],
                "scale-x": [{ "scale-x": [S] }],
                "scale-y": [{ "scale-y": [S] }],
                rotate: [{ rotate: [Li, Z] }],
                "translate-x": [{ "translate-x": [P] }],
                "translate-y": [{ "translate-y": [P] }],
                "skew-x": [{ "skew-x": [T] }],
                "skew-y": [{ "skew-y": [T] }],
                "transform-origin": [
                    {
                        origin: [
                            "center",
                            "top",
                            "top-right",
                            "right",
                            "bottom-right",
                            "bottom",
                            "bottom-left",
                            "left",
                            "top-left",
                            Z,
                        ],
                    },
                ],
                accent: [{ accent: ["auto", e] }],
                appearance: [{ appearance: ["none", "auto"] }],
                cursor: [
                    {
                        cursor: [
                            "auto",
                            "default",
                            "pointer",
                            "wait",
                            "text",
                            "move",
                            "help",
                            "not-allowed",
                            "none",
                            "context-menu",
                            "progress",
                            "cell",
                            "crosshair",
                            "vertical-text",
                            "alias",
                            "copy",
                            "no-drop",
                            "grab",
                            "grabbing",
                            "all-scroll",
                            "col-resize",
                            "row-resize",
                            "n-resize",
                            "e-resize",
                            "s-resize",
                            "w-resize",
                            "ne-resize",
                            "nw-resize",
                            "se-resize",
                            "sw-resize",
                            "ew-resize",
                            "ns-resize",
                            "nesw-resize",
                            "nwse-resize",
                            "zoom-in",
                            "zoom-out",
                            Z,
                        ],
                    },
                ],
                "caret-color": [{ caret: [e] }],
                "pointer-events": [{ "pointer-events": ["none", "auto"] }],
                resize: [{ resize: ["none", "y", "x", ""] }],
                "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
                "scroll-m": [{ "scroll-m": D() }],
                "scroll-mx": [{ "scroll-mx": D() }],
                "scroll-my": [{ "scroll-my": D() }],
                "scroll-ms": [{ "scroll-ms": D() }],
                "scroll-me": [{ "scroll-me": D() }],
                "scroll-mt": [{ "scroll-mt": D() }],
                "scroll-mr": [{ "scroll-mr": D() }],
                "scroll-mb": [{ "scroll-mb": D() }],
                "scroll-ml": [{ "scroll-ml": D() }],
                "scroll-p": [{ "scroll-p": D() }],
                "scroll-px": [{ "scroll-px": D() }],
                "scroll-py": [{ "scroll-py": D() }],
                "scroll-ps": [{ "scroll-ps": D() }],
                "scroll-pe": [{ "scroll-pe": D() }],
                "scroll-pt": [{ "scroll-pt": D() }],
                "scroll-pr": [{ "scroll-pr": D() }],
                "scroll-pb": [{ "scroll-pb": D() }],
                "scroll-pl": [{ "scroll-pl": D() }],
                "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
                "snap-stop": [{ snap: ["normal", "always"] }],
                "snap-type": [{ snap: ["none", "x", "y", "both"] }],
                "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
                touch: [{ touch: ["auto", "none", "manipulation"] }],
                "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
                "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{ select: ["none", "text", "all", "auto"] }],
                "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", Z] }],
                fill: [{ fill: [e, "none"] }],
                "stroke-w": [{ stroke: [Pn, Yn, sc] }],
                stroke: [{ stroke: [e, "none"] }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: [
                    "rounded-s",
                    "rounded-e",
                    "rounded-t",
                    "rounded-r",
                    "rounded-b",
                    "rounded-l",
                    "rounded-ss",
                    "rounded-se",
                    "rounded-ee",
                    "rounded-es",
                    "rounded-tl",
                    "rounded-tr",
                    "rounded-br",
                    "rounded-bl",
                ],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": [
                    "border-color-s",
                    "border-color-e",
                    "border-color-t",
                    "border-color-r",
                    "border-color-b",
                    "border-color-l",
                ],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": [
                    "scroll-mx",
                    "scroll-my",
                    "scroll-ms",
                    "scroll-me",
                    "scroll-mt",
                    "scroll-mr",
                    "scroll-mb",
                    "scroll-ml",
                ],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": [
                    "scroll-px",
                    "scroll-py",
                    "scroll-ps",
                    "scroll-pe",
                    "scroll-pt",
                    "scroll-pr",
                    "scroll-pb",
                    "scroll-pl",
                ],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
    },
    QT = RT(GT);
function fs(...e) {
    return QT(Fx(e));
}
const YT = lT,
    Hx = w.forwardRef(({ className: e, ...t }, n) =>
        E.jsx(Mx, {
            ref: n,
            className: fs(
                "flex fixed top-0 flex-col-reverse p-4 w-full max-h-screen z-[100] sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
                e
            ),
            ...t,
        })
    );
Hx.displayName = Mx.displayName;
const XT = uT(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
        {
            variants: {
                variant: {
                    default: "border bg-background text-foreground",
                    destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
                },
            },
            defaultVariants: { variant: "default" },
        }
    ),
    Kx = w.forwardRef(({ className: e, variant: t, ...n }, r) =>
        E.jsx(Nx, { ref: r, className: fs(XT({ variant: t }), e), ...n })
    );
Kx.displayName = Nx.displayName;
const qT = w.forwardRef(({ className: e, ...t }, n) =>
    E.jsx(Ox, {
        ref: n,
        className: fs(
            "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
            e
        ),
        ...t,
    })
);
qT.displayName = Ox.displayName;
const Gx = w.forwardRef(({ className: e, ...t }, n) =>
    E.jsx(jx, {
        ref: n,
        className: fs(
            "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
            e
        ),
        "toast-close": "",
        ...t,
        children: E.jsx(_x, { className: "w-4 h-4" }),
    })
);
Gx.displayName = jx.displayName;
const Qx = w.forwardRef(({ className: e, ...t }, n) =>
    E.jsx(Lx, { ref: n, className: fs("text-sm font-semibold", e), ...t })
);
Qx.displayName = Lx.displayName;
const Yx = w.forwardRef(({ className: e, ...t }, n) =>
    E.jsx(Dx, { ref: n, className: fs("text-sm opacity-90", e), ...t })
);
Yx.displayName = Dx.displayName;
function ZT() {
    const { toasts: e } = gb();
    return E.jsxs(YT, {
        children: [
            e.map(function ({ id: t, title: n, description: r, action: s, ...i }) {
                return E.jsxs(
                    Kx,
                    {
                        ...i,
                        children: [
                            E.jsxs("div", {
                                className: "grid gap-1",
                                children: [n && E.jsx(Qx, { children: n }), r && E.jsx(Yx, { children: r })],
                            }),
                            s,
                            E.jsx(Gx, {}),
                        ],
                    },
                    t
                );
            }),
            E.jsx(Hx, {}),
        ],
    });
}
var Nm = ["light", "dark"],
    JT = "(prefers-color-scheme: dark)",
    eP = w.createContext(void 0),
    tP = { setTheme: (e) => {}, themes: [] },
    nP = () => {
        var e;
        return (e = w.useContext(eP)) != null ? e : tP;
    };
w.memo(
    ({
        forcedTheme: e,
        storageKey: t,
        attribute: n,
        enableSystem: r,
        enableColorScheme: s,
        defaultTheme: i,
        value: o,
        attrs: a,
        nonce: l,
    }) => {
        let u = i === "system",
            c =
                n === "class"
                    ? `var d=document.documentElement,c=d.classList;${`c.remove(${a.map((y) => `'${y}'`).join(",")})`};`
                    : `var d=document.documentElement,n='${n}',s='setAttribute';`,
            f = s
                ? Nm.includes(i) && i
                    ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
                    : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : "",
            d = (y, p = !1, x = !0) => {
                let m = o ? o[y] : y,
                    g = p ? y + "|| ''" : `'${m}'`,
                    v = "";
                return (
                    s && x && !p && Nm.includes(y) && (v += `d.style.colorScheme = '${y}';`),
                    n === "class" ? (p || m ? (v += `c.add(${g})`) : (v += "null")) : m && (v += `d[s](n,${g})`),
                    v
                );
            },
            h = e
                ? `!function(){${c}${d(e)}}()`
                : r
                  ? `!function(){try{${c}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${JT}',m=window.matchMedia(t);if(m.media!==t||m.matches){${d("dark")}}else{${d("light")}}}else if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${d(o ? "x[e]" : "e", !0)}}${u ? "" : "else{" + d(i, !1, !1) + "}"}${f}}catch(e){}}()`
                  : `!function(){try{${c}var e=localStorage.getItem('${t}');if(e){${o ? `var x=${JSON.stringify(o)};` : ""}${d(o ? "x[e]" : "e", !0)}}else{${d(i, !1, !1)};}${f}}catch(t){}}();`;
        return w.createElement("script", { nonce: l, dangerouslySetInnerHTML: { __html: h } });
    }
);
var rP = (e) => {
        switch (e) {
            case "success":
                return oP;
            case "info":
                return lP;
            case "warning":
                return aP;
            case "error":
                return uP;
            default:
                return null;
        }
    },
    sP = Array(12).fill(0),
    iP = ({ visible: e, className: t }) =>
        I.createElement(
            "div",
            { className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e },
            I.createElement(
                "div",
                { className: "sonner-spinner" },
                sP.map((n, r) => I.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${r}` }))
            )
        ),
    oP = I.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        I.createElement("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
            clipRule: "evenodd",
        })
    ),
    aP = I.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" },
        I.createElement("path", {
            fillRule: "evenodd",
            d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
            clipRule: "evenodd",
        })
    ),
    lP = I.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        I.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
            clipRule: "evenodd",
        })
    ),
    uP = I.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        I.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
            clipRule: "evenodd",
        })
    ),
    cP = I.createElement(
        "svg",
        {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
        },
        I.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        I.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
    ),
    fP = () => {
        let [e, t] = I.useState(document.hidden);
        return (
            I.useEffect(() => {
                let n = () => {
                    t(document.hidden);
                };
                return (
                    document.addEventListener("visibilitychange", n),
                    () => window.removeEventListener("visibilitychange", n)
                );
            }, []),
            e
        );
    },
    Tf = 1,
    dP = class {
        constructor() {
            (this.subscribe = (e) => (
                this.subscribers.push(e),
                () => {
                    let t = this.subscribers.indexOf(e);
                    this.subscribers.splice(t, 1);
                }
            )),
                (this.publish = (e) => {
                    this.subscribers.forEach((t) => t(e));
                }),
                (this.addToast = (e) => {
                    this.publish(e), (this.toasts = [...this.toasts, e]);
                }),
                (this.create = (e) => {
                    var t;
                    let { message: n, ...r } = e,
                        s =
                            typeof (e == null ? void 0 : e.id) == "number" ||
                            ((t = e.id) == null ? void 0 : t.length) > 0
                                ? e.id
                                : Tf++,
                        i = this.toasts.find((a) => a.id === s),
                        o = e.dismissible === void 0 ? !0 : e.dismissible;
                    return (
                        this.dismissedToasts.has(s) && this.dismissedToasts.delete(s),
                        i
                            ? (this.toasts = this.toasts.map((a) =>
                                  a.id === s
                                      ? (this.publish({ ...a, ...e, id: s, title: n }),
                                        { ...a, ...e, id: s, dismissible: o, title: n })
                                      : a
                              ))
                            : this.addToast({ title: n, ...r, dismissible: o, id: s }),
                        s
                    );
                }),
                (this.dismiss = (e) => (
                    this.dismissedToasts.add(e),
                    e ||
                        this.toasts.forEach((t) => {
                            this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
                        }),
                    this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
                    e
                )),
                (this.message = (e, t) => this.create({ ...t, message: e })),
                (this.error = (e, t) => this.create({ ...t, message: e, type: "error" })),
                (this.success = (e, t) => this.create({ ...t, type: "success", message: e })),
                (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
                (this.warning = (e, t) => this.create({ ...t, type: "warning", message: e })),
                (this.loading = (e, t) => this.create({ ...t, type: "loading", message: e })),
                (this.promise = (e, t) => {
                    if (!t) return;
                    let n;
                    t.loading !== void 0 &&
                        (n = this.create({
                            ...t,
                            promise: e,
                            type: "loading",
                            message: t.loading,
                            description: typeof t.description != "function" ? t.description : void 0,
                        }));
                    let r = e instanceof Promise ? e : e(),
                        s = n !== void 0,
                        i,
                        o = r
                            .then(async (l) => {
                                if (((i = ["resolve", l]), I.isValidElement(l)))
                                    (s = !1), this.create({ id: n, type: "default", message: l });
                                else if (pP(l) && !l.ok) {
                                    s = !1;
                                    let u =
                                            typeof t.error == "function"
                                                ? await t.error(`HTTP error! status: ${l.status}`)
                                                : t.error,
                                        c =
                                            typeof t.description == "function"
                                                ? await t.description(`HTTP error! status: ${l.status}`)
                                                : t.description;
                                    this.create({ id: n, type: "error", message: u, description: c });
                                } else if (t.success !== void 0) {
                                    s = !1;
                                    let u = typeof t.success == "function" ? await t.success(l) : t.success,
                                        c = typeof t.description == "function" ? await t.description(l) : t.description;
                                    this.create({ id: n, type: "success", message: u, description: c });
                                }
                            })
                            .catch(async (l) => {
                                if (((i = ["reject", l]), t.error !== void 0)) {
                                    s = !1;
                                    let u = typeof t.error == "function" ? await t.error(l) : t.error,
                                        c = typeof t.description == "function" ? await t.description(l) : t.description;
                                    this.create({ id: n, type: "error", message: u, description: c });
                                }
                            })
                            .finally(() => {
                                var l;
                                s && (this.dismiss(n), (n = void 0)), (l = t.finally) == null || l.call(t);
                            }),
                        a = () => new Promise((l, u) => o.then(() => (i[0] === "reject" ? u(i[1]) : l(i[1]))).catch(u));
                    return typeof n != "string" && typeof n != "number"
                        ? { unwrap: a }
                        : Object.assign(n, { unwrap: a });
                }),
                (this.custom = (e, t) => {
                    let n = (t == null ? void 0 : t.id) || Tf++;
                    return this.create({ jsx: e(n), id: n, ...t }), n;
                }),
                (this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
                (this.subscribers = []),
                (this.toasts = []),
                (this.dismissedToasts = new Set());
        }
    },
    at = new dP(),
    hP = (e, t) => {
        let n = (t == null ? void 0 : t.id) || Tf++;
        return at.addToast({ title: e, ...t, id: n }), n;
    },
    pP = (e) =>
        e &&
        typeof e == "object" &&
        "ok" in e &&
        typeof e.ok == "boolean" &&
        "status" in e &&
        typeof e.status == "number",
    mP = hP,
    gP = () => at.toasts,
    yP = () => at.getActiveToasts();
Object.assign(
    mP,
    {
        success: at.success,
        info: at.info,
        warning: at.warning,
        error: at.error,
        custom: at.custom,
        message: at.message,
        promise: at.promise,
        dismiss: at.dismiss,
        loading: at.loading,
    },
    { getHistory: gP, getToasts: yP }
);
function vP(e, { insertAt: t } = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
    (r.type = "text/css"),
        t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
        r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e));
}
vP(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function ba(e) {
    return e.label !== void 0;
}
var xP = 3,
    wP = "32px",
    SP = "16px",
    Lm = 4e3,
    EP = 356,
    CP = 14,
    bP = 20,
    TP = 200;
function Ht(...e) {
    return e.filter(Boolean).join(" ");
}
function PP(e) {
    let [t, n] = e.split("-"),
        r = [];
    return t && r.push(t), n && r.push(n), r;
}
var kP = (e) => {
    var t, n, r, s, i, o, a, l, u, c, f;
    let {
            invert: d,
            toast: h,
            unstyled: y,
            interacting: p,
            setHeights: x,
            visibleToasts: m,
            heights: g,
            index: v,
            toasts: S,
            expanded: C,
            removeToast: T,
            defaultRichColors: b,
            closeButton: P,
            style: R,
            cancelButtonStyle: k,
            actionButtonStyle: L,
            className: D = "",
            descriptionClassName: W = "",
            duration: O,
            position: H,
            gap: _,
            loadingIcon: K,
            expandByDefault: A,
            classNames: M,
            icons: F,
            closeButtonAriaLabel: U = "Close toast",
            pauseWhenPageIsHidden: $,
        } = e,
        [X, Q] = I.useState(null),
        [le, we] = I.useState(null),
        [q, Se] = I.useState(!1),
        [je, Pe] = I.useState(!1),
        [se, B] = I.useState(!1),
        [te, fe] = I.useState(!1),
        [Me, Xe] = I.useState(!1),
        [mt, gt] = I.useState(0),
        [qe, cn] = I.useState(0),
        Ft = I.useRef(h.duration || O || Lm),
        ps = I.useRef(null),
        Vt = I.useRef(null),
        Zo = v === 0,
        Jo = v + 1 <= m,
        ot = h.type,
        Tn = h.dismissible !== !1,
        bu = h.className || "",
        Si = h.descriptionClassName || "",
        _t = I.useMemo(() => g.findIndex((Y) => Y.toastId === h.id) || 0, [g, h.id]),
        Ei = I.useMemo(() => {
            var Y;
            return (Y = h.closeButton) != null ? Y : P;
        }, [h.closeButton, P]),
        ms = I.useMemo(() => h.duration || O || Lm, [h.duration, O]),
        Un = I.useRef(0),
        Wn = I.useRef(0),
        ea = I.useRef(0),
        Hn = I.useRef(null),
        [Tu, Pu] = H.split("-"),
        Ci = I.useMemo(() => g.reduce((Y, ie, ue) => (ue >= _t ? Y : Y + ie.height), 0), [g, _t]),
        ta = fP(),
        na = h.invert || d,
        gs = ot === "loading";
    (Wn.current = I.useMemo(() => _t * _ + Ci, [_t, Ci])),
        I.useEffect(() => {
            Ft.current = ms;
        }, [ms]),
        I.useEffect(() => {
            Se(!0);
        }, []),
        I.useEffect(() => {
            let Y = Vt.current;
            if (Y) {
                let ie = Y.getBoundingClientRect().height;
                return (
                    cn(ie),
                    x((ue) => [{ toastId: h.id, height: ie, position: h.position }, ...ue]),
                    () => x((ue) => ue.filter((Bt) => Bt.toastId !== h.id))
                );
            }
        }, [x, h.id]),
        I.useLayoutEffect(() => {
            if (!q) return;
            let Y = Vt.current,
                ie = Y.style.height;
            Y.style.height = "auto";
            let ue = Y.getBoundingClientRect().height;
            (Y.style.height = ie),
                cn(ue),
                x((Bt) =>
                    Bt.find(($t) => $t.toastId === h.id)
                        ? Bt.map(($t) => ($t.toastId === h.id ? { ...$t, height: ue } : $t))
                        : [{ toastId: h.id, height: ue, position: h.position }, ...Bt]
                );
        }, [q, h.title, h.description, x, h.id]);
    let zt = I.useCallback(() => {
        Pe(!0),
            gt(Wn.current),
            x((Y) => Y.filter((ie) => ie.toastId !== h.id)),
            setTimeout(() => {
                T(h);
            }, TP);
    }, [h, T, x, Wn]);
    I.useEffect(() => {
        if ((h.promise && ot === "loading") || h.duration === 1 / 0 || h.type === "loading") return;
        let Y;
        return (
            C || p || ($ && ta)
                ? (() => {
                      if (ea.current < Un.current) {
                          let ie = new Date().getTime() - Un.current;
                          Ft.current = Ft.current - ie;
                      }
                      ea.current = new Date().getTime();
                  })()
                : Ft.current !== 1 / 0 &&
                  ((Un.current = new Date().getTime()),
                  (Y = setTimeout(() => {
                      var ie;
                      (ie = h.onAutoClose) == null || ie.call(h, h), zt();
                  }, Ft.current))),
            () => clearTimeout(Y)
        );
    }, [C, p, h, ot, $, ta, zt]),
        I.useEffect(() => {
            h.delete && zt();
        }, [zt, h.delete]);
    function ku() {
        var Y, ie, ue;
        return F != null && F.loading
            ? I.createElement(
                  "div",
                  {
                      className: Ht(
                          M == null ? void 0 : M.loader,
                          (Y = h == null ? void 0 : h.classNames) == null ? void 0 : Y.loader,
                          "sonner-loader"
                      ),
                      "data-visible": ot === "loading",
                  },
                  F.loading
              )
            : K
              ? I.createElement(
                    "div",
                    {
                        className: Ht(
                            M == null ? void 0 : M.loader,
                            (ie = h == null ? void 0 : h.classNames) == null ? void 0 : ie.loader,
                            "sonner-loader"
                        ),
                        "data-visible": ot === "loading",
                    },
                    K
                )
              : I.createElement(iP, {
                    className: Ht(
                        M == null ? void 0 : M.loader,
                        (ue = h == null ? void 0 : h.classNames) == null ? void 0 : ue.loader
                    ),
                    visible: ot === "loading",
                });
    }
    return I.createElement(
        "li",
        {
            tabIndex: 0,
            ref: Vt,
            className: Ht(
                D,
                bu,
                M == null ? void 0 : M.toast,
                (t = h == null ? void 0 : h.classNames) == null ? void 0 : t.toast,
                M == null ? void 0 : M.default,
                M == null ? void 0 : M[ot],
                (n = h == null ? void 0 : h.classNames) == null ? void 0 : n[ot]
            ),
            "data-sonner-toast": "",
            "data-rich-colors": (r = h.richColors) != null ? r : b,
            "data-styled": !(h.jsx || h.unstyled || y),
            "data-mounted": q,
            "data-promise": !!h.promise,
            "data-swiped": Me,
            "data-removed": je,
            "data-visible": Jo,
            "data-y-position": Tu,
            "data-x-position": Pu,
            "data-index": v,
            "data-front": Zo,
            "data-swiping": se,
            "data-dismissible": Tn,
            "data-type": ot,
            "data-invert": na,
            "data-swipe-out": te,
            "data-swipe-direction": le,
            "data-expanded": !!(C || (A && q)),
            style: {
                "--index": v,
                "--toasts-before": v,
                "--z-index": S.length - v,
                "--offset": `${je ? mt : Wn.current}px`,
                "--initial-height": A ? "auto" : `${qe}px`,
                ...R,
                ...h.style,
            },
            onDragEnd: () => {
                B(!1), Q(null), (Hn.current = null);
            },
            onPointerDown: (Y) => {
                gs ||
                    !Tn ||
                    ((ps.current = new Date()),
                    gt(Wn.current),
                    Y.target.setPointerCapture(Y.pointerId),
                    Y.target.tagName !== "BUTTON" && (B(!0), (Hn.current = { x: Y.clientX, y: Y.clientY })));
            },
            onPointerUp: () => {
                var Y, ie, ue, Bt;
                if (te || !Tn) return;
                Hn.current = null;
                let $t = Number(
                        ((Y = Vt.current) == null
                            ? void 0
                            : Y.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0
                    ),
                    Kn = Number(
                        ((ie = Vt.current) == null
                            ? void 0
                            : ie.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0
                    ),
                    jr = new Date().getTime() - ((ue = ps.current) == null ? void 0 : ue.getTime()),
                    Ut = X === "x" ? $t : Kn,
                    Gn = Math.abs(Ut) / jr;
                if (Math.abs(Ut) >= bP || Gn > 0.11) {
                    gt(Wn.current),
                        (Bt = h.onDismiss) == null || Bt.call(h, h),
                        we(X === "x" ? ($t > 0 ? "right" : "left") : Kn > 0 ? "down" : "up"),
                        zt(),
                        fe(!0),
                        Xe(!1);
                    return;
                }
                B(!1), Q(null);
            },
            onPointerMove: (Y) => {
                var ie, ue, Bt, $t;
                if (!Hn.current || !Tn || ((ie = window.getSelection()) == null ? void 0 : ie.toString().length) > 0)
                    return;
                let Kn = Y.clientY - Hn.current.y,
                    jr = Y.clientX - Hn.current.x,
                    Ut = (ue = e.swipeDirections) != null ? ue : PP(H);
                !X && (Math.abs(jr) > 1 || Math.abs(Kn) > 1) && Q(Math.abs(jr) > Math.abs(Kn) ? "x" : "y");
                let Gn = { x: 0, y: 0 };
                X === "y"
                    ? (Ut.includes("top") || Ut.includes("bottom")) &&
                      ((Ut.includes("top") && Kn < 0) || (Ut.includes("bottom") && Kn > 0)) &&
                      (Gn.y = Kn)
                    : X === "x" &&
                      (Ut.includes("left") || Ut.includes("right")) &&
                      ((Ut.includes("left") && jr < 0) || (Ut.includes("right") && jr > 0)) &&
                      (Gn.x = jr),
                    (Math.abs(Gn.x) > 0 || Math.abs(Gn.y) > 0) && Xe(!0),
                    (Bt = Vt.current) == null || Bt.style.setProperty("--swipe-amount-x", `${Gn.x}px`),
                    ($t = Vt.current) == null || $t.style.setProperty("--swipe-amount-y", `${Gn.y}px`);
            },
        },
        Ei && !h.jsx
            ? I.createElement(
                  "button",
                  {
                      "aria-label": U,
                      "data-disabled": gs,
                      "data-close-button": !0,
                      onClick:
                          gs || !Tn
                              ? () => {}
                              : () => {
                                    var Y;
                                    zt(), (Y = h.onDismiss) == null || Y.call(h, h);
                                },
                      className: Ht(
                          M == null ? void 0 : M.closeButton,
                          (s = h == null ? void 0 : h.classNames) == null ? void 0 : s.closeButton
                      ),
                  },
                  (i = F == null ? void 0 : F.close) != null ? i : cP
              )
            : null,
        h.jsx || w.isValidElement(h.title)
            ? h.jsx
                ? h.jsx
                : typeof h.title == "function"
                  ? h.title()
                  : h.title
            : I.createElement(
                  I.Fragment,
                  null,
                  ot || h.icon || h.promise
                      ? I.createElement(
                            "div",
                            {
                                "data-icon": "",
                                className: Ht(
                                    M == null ? void 0 : M.icon,
                                    (o = h == null ? void 0 : h.classNames) == null ? void 0 : o.icon
                                ),
                            },
                            h.promise || (h.type === "loading" && !h.icon) ? h.icon || ku() : null,
                            h.type !== "loading" ? h.icon || (F == null ? void 0 : F[ot]) || rP(ot) : null
                        )
                      : null,
                  I.createElement(
                      "div",
                      {
                          "data-content": "",
                          className: Ht(
                              M == null ? void 0 : M.content,
                              (a = h == null ? void 0 : h.classNames) == null ? void 0 : a.content
                          ),
                      },
                      I.createElement(
                          "div",
                          {
                              "data-title": "",
                              className: Ht(
                                  M == null ? void 0 : M.title,
                                  (l = h == null ? void 0 : h.classNames) == null ? void 0 : l.title
                              ),
                          },
                          typeof h.title == "function" ? h.title() : h.title
                      ),
                      h.description
                          ? I.createElement(
                                "div",
                                {
                                    "data-description": "",
                                    className: Ht(
                                        W,
                                        Si,
                                        M == null ? void 0 : M.description,
                                        (u = h == null ? void 0 : h.classNames) == null ? void 0 : u.description
                                    ),
                                },
                                typeof h.description == "function" ? h.description() : h.description
                            )
                          : null
                  ),
                  w.isValidElement(h.cancel)
                      ? h.cancel
                      : h.cancel && ba(h.cancel)
                        ? I.createElement(
                              "button",
                              {
                                  "data-button": !0,
                                  "data-cancel": !0,
                                  style: h.cancelButtonStyle || k,
                                  onClick: (Y) => {
                                      var ie, ue;
                                      ba(h.cancel) &&
                                          Tn &&
                                          ((ue = (ie = h.cancel).onClick) == null || ue.call(ie, Y), zt());
                                  },
                                  className: Ht(
                                      M == null ? void 0 : M.cancelButton,
                                      (c = h == null ? void 0 : h.classNames) == null ? void 0 : c.cancelButton
                                  ),
                              },
                              h.cancel.label
                          )
                        : null,
                  w.isValidElement(h.action)
                      ? h.action
                      : h.action && ba(h.action)
                        ? I.createElement(
                              "button",
                              {
                                  "data-button": !0,
                                  "data-action": !0,
                                  style: h.actionButtonStyle || L,
                                  onClick: (Y) => {
                                      var ie, ue;
                                      ba(h.action) &&
                                          ((ue = (ie = h.action).onClick) == null || ue.call(ie, Y),
                                          !Y.defaultPrevented && zt());
                                  },
                                  className: Ht(
                                      M == null ? void 0 : M.actionButton,
                                      (f = h == null ? void 0 : h.classNames) == null ? void 0 : f.actionButton
                                  ),
                              },
                              h.action.label
                          )
                        : null
              )
    );
};
function Dm() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function AP(e, t) {
    let n = {};
    return (
        [e, t].forEach((r, s) => {
            let i = s === 1,
                o = i ? "--mobile-offset" : "--offset",
                a = i ? SP : wP;
            function l(u) {
                ["top", "right", "bottom", "left"].forEach((c) => {
                    n[`${o}-${c}`] = typeof u == "number" ? `${u}px` : u;
                });
            }
            typeof r == "number" || typeof r == "string"
                ? l(r)
                : typeof r == "object"
                  ? ["top", "right", "bottom", "left"].forEach((u) => {
                        r[u] === void 0
                            ? (n[`${o}-${u}`] = a)
                            : (n[`${o}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]);
                    })
                  : l(a);
        }),
        n
    );
}
var RP = w.forwardRef(function (e, t) {
    let {
            invert: n,
            position: r = "bottom-right",
            hotkey: s = ["altKey", "KeyT"],
            expand: i,
            closeButton: o,
            className: a,
            offset: l,
            mobileOffset: u,
            theme: c = "light",
            richColors: f,
            duration: d,
            style: h,
            visibleToasts: y = xP,
            toastOptions: p,
            dir: x = Dm(),
            gap: m = CP,
            loadingIcon: g,
            icons: v,
            containerAriaLabel: S = "Notifications",
            pauseWhenPageIsHidden: C,
        } = e,
        [T, b] = I.useState([]),
        P = I.useMemo(
            () => Array.from(new Set([r].concat(T.filter(($) => $.position).map(($) => $.position)))),
            [T, r]
        ),
        [R, k] = I.useState([]),
        [L, D] = I.useState(!1),
        [W, O] = I.useState(!1),
        [H, _] = I.useState(
            c !== "system"
                ? c
                : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "dark"
                  : "light"
        ),
        K = I.useRef(null),
        A = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
        M = I.useRef(null),
        F = I.useRef(!1),
        U = I.useCallback(($) => {
            b((X) => {
                var Q;
                return (
                    ((Q = X.find((le) => le.id === $.id)) != null && Q.delete) || at.dismiss($.id),
                    X.filter(({ id: le }) => le !== $.id)
                );
            });
        }, []);
    return (
        I.useEffect(
            () =>
                at.subscribe(($) => {
                    if ($.dismiss) {
                        b((X) => X.map((Q) => (Q.id === $.id ? { ...Q, delete: !0 } : Q)));
                        return;
                    }
                    setTimeout(() => {
                        ux.flushSync(() => {
                            b((X) => {
                                let Q = X.findIndex((le) => le.id === $.id);
                                return Q !== -1 ? [...X.slice(0, Q), { ...X[Q], ...$ }, ...X.slice(Q + 1)] : [$, ...X];
                            });
                        });
                    });
                }),
            []
        ),
        I.useEffect(() => {
            if (c !== "system") {
                _(c);
                return;
            }
            if (
                (c === "system" &&
                    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                        ? _("dark")
                        : _("light")),
                typeof window > "u")
            )
                return;
            let $ = window.matchMedia("(prefers-color-scheme: dark)");
            try {
                $.addEventListener("change", ({ matches: X }) => {
                    _(X ? "dark" : "light");
                });
            } catch {
                $.addListener(({ matches: Q }) => {
                    try {
                        _(Q ? "dark" : "light");
                    } catch (le) {
                        console.error(le);
                    }
                });
            }
        }, [c]),
        I.useEffect(() => {
            T.length <= 1 && D(!1);
        }, [T]),
        I.useEffect(() => {
            let $ = (X) => {
                var Q, le;
                s.every((we) => X[we] || X.code === we) && (D(!0), (Q = K.current) == null || Q.focus()),
                    X.code === "Escape" &&
                        (document.activeElement === K.current ||
                            ((le = K.current) != null && le.contains(document.activeElement))) &&
                        D(!1);
            };
            return document.addEventListener("keydown", $), () => document.removeEventListener("keydown", $);
        }, [s]),
        I.useEffect(() => {
            if (K.current)
                return () => {
                    M.current && (M.current.focus({ preventScroll: !0 }), (M.current = null), (F.current = !1));
                };
        }, [K.current]),
        I.createElement(
            "section",
            {
                ref: t,
                "aria-label": `${S} ${A}`,
                tabIndex: -1,
                "aria-live": "polite",
                "aria-relevant": "additions text",
                "aria-atomic": "false",
                suppressHydrationWarning: !0,
            },
            P.map(($, X) => {
                var Q;
                let [le, we] = $.split("-");
                return T.length
                    ? I.createElement(
                          "ol",
                          {
                              key: $,
                              dir: x === "auto" ? Dm() : x,
                              tabIndex: -1,
                              ref: K,
                              className: a,
                              "data-sonner-toaster": !0,
                              "data-theme": H,
                              "data-y-position": le,
                              "data-lifted": L && T.length > 1 && !i,
                              "data-x-position": we,
                              style: {
                                  "--front-toast-height": `${((Q = R[0]) == null ? void 0 : Q.height) || 0}px`,
                                  "--width": `${EP}px`,
                                  "--gap": `${m}px`,
                                  ...h,
                                  ...AP(l, u),
                              },
                              onBlur: (q) => {
                                  F.current &&
                                      !q.currentTarget.contains(q.relatedTarget) &&
                                      ((F.current = !1),
                                      M.current && (M.current.focus({ preventScroll: !0 }), (M.current = null)));
                              },
                              onFocus: (q) => {
                                  (q.target instanceof HTMLElement && q.target.dataset.dismissible === "false") ||
                                      F.current ||
                                      ((F.current = !0), (M.current = q.relatedTarget));
                              },
                              onMouseEnter: () => D(!0),
                              onMouseMove: () => D(!0),
                              onMouseLeave: () => {
                                  W || D(!1);
                              },
                              onDragEnd: () => D(!1),
                              onPointerDown: (q) => {
                                  (q.target instanceof HTMLElement && q.target.dataset.dismissible === "false") ||
                                      O(!0);
                              },
                              onPointerUp: () => O(!1),
                          },
                          T.filter((q) => (!q.position && X === 0) || q.position === $).map((q, Se) => {
                              var je, Pe;
                              return I.createElement(kP, {
                                  key: q.id,
                                  icons: v,
                                  index: Se,
                                  toast: q,
                                  defaultRichColors: f,
                                  duration: (je = p == null ? void 0 : p.duration) != null ? je : d,
                                  className: p == null ? void 0 : p.className,
                                  descriptionClassName: p == null ? void 0 : p.descriptionClassName,
                                  invert: n,
                                  visibleToasts: y,
                                  closeButton: (Pe = p == null ? void 0 : p.closeButton) != null ? Pe : o,
                                  interacting: W,
                                  position: $,
                                  style: p == null ? void 0 : p.style,
                                  unstyled: p == null ? void 0 : p.unstyled,
                                  classNames: p == null ? void 0 : p.classNames,
                                  cancelButtonStyle: p == null ? void 0 : p.cancelButtonStyle,
                                  actionButtonStyle: p == null ? void 0 : p.actionButtonStyle,
                                  removeToast: U,
                                  toasts: T.filter((se) => se.position == q.position),
                                  heights: R.filter((se) => se.position == q.position),
                                  setHeights: k,
                                  expandByDefault: i,
                                  gap: m,
                                  loadingIcon: g,
                                  expanded: L,
                                  pauseWhenPageIsHidden: C,
                                  swipeDirections: e.swipeDirections,
                              });
                          })
                      )
                    : null;
            })
        )
    );
});
const MP = ({ ...e }) => {
        const { theme: t = "system" } = nP();
        return E.jsx(RP, {
            theme: t,
            className: "toaster group",
            toastOptions: {
                classNames: {
                    toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                    description: "group-[.toast]:text-muted-foreground",
                    actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                    cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
                },
            },
            ...e,
        });
    },
    NP = ["top", "right", "bottom", "left"],
    Pr = Math.min,
    xt = Math.max,
    Tl = Math.round,
    Ta = Math.floor,
    En = (e) => ({ x: e, y: e }),
    LP = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Pf(e, t, n) {
    return xt(e, Pr(t, n));
}
function _n(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function zn(e) {
    return e.split("-")[0];
}
function mi(e) {
    return e.split("-")[1];
}
function mh(e) {
    return e === "x" ? "y" : "x";
}
function gh(e) {
    return e === "y" ? "height" : "width";
}
function xn(e) {
    const t = e[0];
    return t === "t" || t === "b" ? "y" : "x";
}
function yh(e) {
    return mh(xn(e));
}
function DP(e, t, n) {
    n === void 0 && (n = !1);
    const r = mi(e),
        s = yh(e),
        i = gh(s);
    let o = s === "x" ? (r === (n ? "end" : "start") ? "right" : "left") : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (o = Pl(o)), [o, Pl(o)];
}
function OP(e) {
    const t = Pl(e);
    return [kf(e), t, kf(t)];
}
function kf(e) {
    return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Om = ["left", "right"],
    jm = ["right", "left"],
    jP = ["top", "bottom"],
    IP = ["bottom", "top"];
function FP(e, t, n) {
    switch (e) {
        case "top":
        case "bottom":
            return n ? (t ? jm : Om) : t ? Om : jm;
        case "left":
        case "right":
            return t ? jP : IP;
        default:
            return [];
    }
}
function VP(e, t, n, r) {
    const s = mi(e);
    let i = FP(zn(e), n === "start", r);
    return s && ((i = i.map((o) => o + "-" + s)), t && (i = i.concat(i.map(kf)))), i;
}
function Pl(e) {
    const t = zn(e);
    return LP[t] + e.slice(t.length);
}
function _P(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Xx(e) {
    return typeof e != "number" ? _P(e) : { top: e, right: e, bottom: e, left: e };
}
function kl(e) {
    const { x: t, y: n, width: r, height: s } = e;
    return { width: r, height: s, top: n, left: t, right: t + r, bottom: n + s, x: t, y: n };
}
function Im(e, t, n) {
    let { reference: r, floating: s } = e;
    const i = xn(t),
        o = yh(t),
        a = gh(o),
        l = zn(t),
        u = i === "y",
        c = r.x + r.width / 2 - s.width / 2,
        f = r.y + r.height / 2 - s.height / 2,
        d = r[a] / 2 - s[a] / 2;
    let h;
    switch (l) {
        case "top":
            h = { x: c, y: r.y - s.height };
            break;
        case "bottom":
            h = { x: c, y: r.y + r.height };
            break;
        case "right":
            h = { x: r.x + r.width, y: f };
            break;
        case "left":
            h = { x: r.x - s.width, y: f };
            break;
        default:
            h = { x: r.x, y: r.y };
    }
    switch (mi(t)) {
        case "start":
            h[o] -= d * (n && u ? -1 : 1);
            break;
        case "end":
            h[o] += d * (n && u ? -1 : 1);
            break;
    }
    return h;
}
async function zP(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: s, platform: i, rects: o, elements: a, strategy: l } = e,
        {
            boundary: u = "clippingAncestors",
            rootBoundary: c = "viewport",
            elementContext: f = "floating",
            altBoundary: d = !1,
            padding: h = 0,
        } = _n(t, e),
        y = Xx(h),
        x = a[d ? (f === "floating" ? "reference" : "floating") : f],
        m = kl(
            await i.getClippingRect({
                element:
                    (n = await (i.isElement == null ? void 0 : i.isElement(x))) == null || n
                        ? x
                        : x.contextElement ||
                          (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating))),
                boundary: u,
                rootBoundary: c,
                strategy: l,
            })
        ),
        g = f === "floating" ? { x: r, y: s, width: o.floating.width, height: o.floating.height } : o.reference,
        v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)),
        S = (await (i.isElement == null ? void 0 : i.isElement(v)))
            ? (await (i.getScale == null ? void 0 : i.getScale(v))) || { x: 1, y: 1 }
            : { x: 1, y: 1 },
        C = kl(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                      elements: a,
                      rect: g,
                      offsetParent: v,
                      strategy: l,
                  })
                : g
        );
    return {
        top: (m.top - C.top + y.top) / S.y,
        bottom: (C.bottom - m.bottom + y.bottom) / S.y,
        left: (m.left - C.left + y.left) / S.x,
        right: (C.right - m.right + y.right) / S.x,
    };
}
const BP = 50,
    $P = async (e, t, n) => {
        const { placement: r = "bottom", strategy: s = "absolute", middleware: i = [], platform: o } = n,
            a = o.detectOverflow ? o : { ...o, detectOverflow: zP },
            l = await (o.isRTL == null ? void 0 : o.isRTL(t));
        let u = await o.getElementRects({ reference: e, floating: t, strategy: s }),
            { x: c, y: f } = Im(u, r, l),
            d = r,
            h = 0;
        const y = {};
        for (let p = 0; p < i.length; p++) {
            const x = i[p];
            if (!x) continue;
            const { name: m, fn: g } = x,
                {
                    x: v,
                    y: S,
                    data: C,
                    reset: T,
                } = await g({
                    x: c,
                    y: f,
                    initialPlacement: r,
                    placement: d,
                    strategy: s,
                    middlewareData: y,
                    rects: u,
                    platform: a,
                    elements: { reference: e, floating: t },
                });
            (c = v ?? c),
                (f = S ?? f),
                (y[m] = { ...y[m], ...C }),
                T &&
                    h < BP &&
                    (h++,
                    typeof T == "object" &&
                        (T.placement && (d = T.placement),
                        T.rects &&
                            (u =
                                T.rects === !0
                                    ? await o.getElementRects({ reference: e, floating: t, strategy: s })
                                    : T.rects),
                        ({ x: c, y: f } = Im(u, d, l))),
                    (p = -1));
        }
        return { x: c, y: f, placement: d, strategy: s, middlewareData: y };
    },
    UP = (e) => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const { x: n, y: r, placement: s, rects: i, platform: o, elements: a, middlewareData: l } = t,
                { element: u, padding: c = 0 } = _n(e, t) || {};
            if (u == null) return {};
            const f = Xx(c),
                d = { x: n, y: r },
                h = yh(s),
                y = gh(h),
                p = await o.getDimensions(u),
                x = h === "y",
                m = x ? "top" : "left",
                g = x ? "bottom" : "right",
                v = x ? "clientHeight" : "clientWidth",
                S = i.reference[y] + i.reference[h] - d[h] - i.floating[y],
                C = d[h] - i.reference[h],
                T = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
            let b = T ? T[v] : 0;
            (!b || !(await (o.isElement == null ? void 0 : o.isElement(T)))) && (b = a.floating[v] || i.floating[y]);
            const P = S / 2 - C / 2,
                R = b / 2 - p[y] / 2 - 1,
                k = Pr(f[m], R),
                L = Pr(f[g], R),
                D = k,
                W = b - p[y] - L,
                O = b / 2 - p[y] / 2 + P,
                H = Pf(D, O, W),
                _ = !l.arrow && mi(s) != null && O !== H && i.reference[y] / 2 - (O < D ? k : L) - p[y] / 2 < 0,
                K = _ ? (O < D ? O - D : O - W) : 0;
            return {
                [h]: d[h] + K,
                data: { [h]: H, centerOffset: O - H - K, ...(_ && { alignmentOffset: K }) },
                reset: _,
            };
        },
    }),
    WP = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "flip",
                options: e,
                async fn(t) {
                    var n, r;
                    const {
                            placement: s,
                            middlewareData: i,
                            rects: o,
                            initialPlacement: a,
                            platform: l,
                            elements: u,
                        } = t,
                        {
                            mainAxis: c = !0,
                            crossAxis: f = !0,
                            fallbackPlacements: d,
                            fallbackStrategy: h = "bestFit",
                            fallbackAxisSideDirection: y = "none",
                            flipAlignment: p = !0,
                            ...x
                        } = _n(e, t);
                    if ((n = i.arrow) != null && n.alignmentOffset) return {};
                    const m = zn(s),
                        g = xn(a),
                        v = zn(a) === a,
                        S = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)),
                        C = d || (v || !p ? [Pl(a)] : OP(a)),
                        T = y !== "none";
                    !d && T && C.push(...VP(a, p, y, S));
                    const b = [a, ...C],
                        P = await l.detectOverflow(t, x),
                        R = [];
                    let k = ((r = i.flip) == null ? void 0 : r.overflows) || [];
                    if ((c && R.push(P[m]), f)) {
                        const O = DP(s, o, S);
                        R.push(P[O[0]], P[O[1]]);
                    }
                    if (((k = [...k, { placement: s, overflows: R }]), !R.every((O) => O <= 0))) {
                        var L, D;
                        const O = (((L = i.flip) == null ? void 0 : L.index) || 0) + 1,
                            H = b[O];
                        if (
                            H &&
                            (!(f === "alignment" ? g !== xn(H) : !1) ||
                                k.every((A) => (xn(A.placement) === g ? A.overflows[0] > 0 : !0)))
                        )
                            return { data: { index: O, overflows: k }, reset: { placement: H } };
                        let _ =
                            (D = k
                                .filter((K) => K.overflows[0] <= 0)
                                .sort((K, A) => K.overflows[1] - A.overflows[1])[0]) == null
                                ? void 0
                                : D.placement;
                        if (!_)
                            switch (h) {
                                case "bestFit": {
                                    var W;
                                    const K =
                                        (W = k
                                            .filter((A) => {
                                                if (T) {
                                                    const M = xn(A.placement);
                                                    return M === g || M === "y";
                                                }
                                                return !0;
                                            })
                                            .map((A) => [
                                                A.placement,
                                                A.overflows.filter((M) => M > 0).reduce((M, F) => M + F, 0),
                                            ])
                                            .sort((A, M) => A[1] - M[1])[0]) == null
                                            ? void 0
                                            : W[0];
                                    K && (_ = K);
                                    break;
                                }
                                case "initialPlacement":
                                    _ = a;
                                    break;
                            }
                        if (s !== _) return { reset: { placement: _ } };
                    }
                    return {};
                },
            }
        );
    };
function Fm(e, t) {
    return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function Vm(e) {
    return NP.some((t) => e[t] >= 0);
}
const HP = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "hide",
                options: e,
                async fn(t) {
                    const { rects: n, platform: r } = t,
                        { strategy: s = "referenceHidden", ...i } = _n(e, t);
                    switch (s) {
                        case "referenceHidden": {
                            const o = await r.detectOverflow(t, { ...i, elementContext: "reference" }),
                                a = Fm(o, n.reference);
                            return { data: { referenceHiddenOffsets: a, referenceHidden: Vm(a) } };
                        }
                        case "escaped": {
                            const o = await r.detectOverflow(t, { ...i, altBoundary: !0 }),
                                a = Fm(o, n.floating);
                            return { data: { escapedOffsets: a, escaped: Vm(a) } };
                        }
                        default:
                            return {};
                    }
                },
            }
        );
    },
    qx = new Set(["left", "top"]);
async function KP(e, t) {
    const { placement: n, platform: r, elements: s } = e,
        i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)),
        o = zn(n),
        a = mi(n),
        l = xn(n) === "y",
        u = qx.has(o) ? -1 : 1,
        c = i && l ? -1 : 1,
        f = _n(t, e);
    let {
        mainAxis: d,
        crossAxis: h,
        alignmentAxis: y,
    } = typeof f == "number"
        ? { mainAxis: f, crossAxis: 0, alignmentAxis: null }
        : { mainAxis: f.mainAxis || 0, crossAxis: f.crossAxis || 0, alignmentAxis: f.alignmentAxis };
    return (
        a && typeof y == "number" && (h = a === "end" ? y * -1 : y), l ? { x: h * c, y: d * u } : { x: d * u, y: h * c }
    );
}
const GP = function (e) {
        return (
            e === void 0 && (e = 0),
            {
                name: "offset",
                options: e,
                async fn(t) {
                    var n, r;
                    const { x: s, y: i, placement: o, middlewareData: a } = t,
                        l = await KP(t, e);
                    return o === ((n = a.offset) == null ? void 0 : n.placement) &&
                        (r = a.arrow) != null &&
                        r.alignmentOffset
                        ? {}
                        : { x: s + l.x, y: i + l.y, data: { ...l, placement: o } };
                },
            }
        );
    },
    QP = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "shift",
                options: e,
                async fn(t) {
                    const { x: n, y: r, placement: s, platform: i } = t,
                        {
                            mainAxis: o = !0,
                            crossAxis: a = !1,
                            limiter: l = {
                                fn: (m) => {
                                    let { x: g, y: v } = m;
                                    return { x: g, y: v };
                                },
                            },
                            ...u
                        } = _n(e, t),
                        c = { x: n, y: r },
                        f = await i.detectOverflow(t, u),
                        d = xn(zn(s)),
                        h = mh(d);
                    let y = c[h],
                        p = c[d];
                    if (o) {
                        const m = h === "y" ? "top" : "left",
                            g = h === "y" ? "bottom" : "right",
                            v = y + f[m],
                            S = y - f[g];
                        y = Pf(v, y, S);
                    }
                    if (a) {
                        const m = d === "y" ? "top" : "left",
                            g = d === "y" ? "bottom" : "right",
                            v = p + f[m],
                            S = p - f[g];
                        p = Pf(v, p, S);
                    }
                    const x = l.fn({ ...t, [h]: y, [d]: p });
                    return { ...x, data: { x: x.x - n, y: x.y - r, enabled: { [h]: o, [d]: a } } };
                },
            }
        );
    },
    YP = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                options: e,
                fn(t) {
                    const { x: n, y: r, placement: s, rects: i, middlewareData: o } = t,
                        { offset: a = 0, mainAxis: l = !0, crossAxis: u = !0 } = _n(e, t),
                        c = { x: n, y: r },
                        f = xn(s),
                        d = mh(f);
                    let h = c[d],
                        y = c[f];
                    const p = _n(a, t),
                        x = typeof p == "number" ? { mainAxis: p, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...p };
                    if (l) {
                        const v = d === "y" ? "height" : "width",
                            S = i.reference[d] - i.floating[v] + x.mainAxis,
                            C = i.reference[d] + i.reference[v] - x.mainAxis;
                        h < S ? (h = S) : h > C && (h = C);
                    }
                    if (u) {
                        var m, g;
                        const v = d === "y" ? "width" : "height",
                            S = qx.has(zn(s)),
                            C =
                                i.reference[f] -
                                i.floating[v] +
                                ((S && ((m = o.offset) == null ? void 0 : m[f])) || 0) +
                                (S ? 0 : x.crossAxis),
                            T =
                                i.reference[f] +
                                i.reference[v] +
                                (S ? 0 : ((g = o.offset) == null ? void 0 : g[f]) || 0) -
                                (S ? x.crossAxis : 0);
                        y < C ? (y = C) : y > T && (y = T);
                    }
                    return { [d]: h, [f]: y };
                },
            }
        );
    },
    XP = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "size",
                options: e,
                async fn(t) {
                    var n, r;
                    const { placement: s, rects: i, platform: o, elements: a } = t,
                        { apply: l = () => {}, ...u } = _n(e, t),
                        c = await o.detectOverflow(t, u),
                        f = zn(s),
                        d = mi(s),
                        h = xn(s) === "y",
                        { width: y, height: p } = i.floating;
                    let x, m;
                    f === "top" || f === "bottom"
                        ? ((x = f),
                          (m =
                              d === ((await (o.isRTL == null ? void 0 : o.isRTL(a.floating))) ? "start" : "end")
                                  ? "left"
                                  : "right"))
                        : ((m = f), (x = d === "end" ? "top" : "bottom"));
                    const g = p - c.top - c.bottom,
                        v = y - c.left - c.right,
                        S = Pr(p - c[x], g),
                        C = Pr(y - c[m], v),
                        T = !t.middlewareData.shift;
                    let b = S,
                        P = C;
                    if (
                        ((n = t.middlewareData.shift) != null && n.enabled.x && (P = v),
                        (r = t.middlewareData.shift) != null && r.enabled.y && (b = g),
                        T && !d)
                    ) {
                        const k = xt(c.left, 0),
                            L = xt(c.right, 0),
                            D = xt(c.top, 0),
                            W = xt(c.bottom, 0);
                        h
                            ? (P = y - 2 * (k !== 0 || L !== 0 ? k + L : xt(c.left, c.right)))
                            : (b = p - 2 * (D !== 0 || W !== 0 ? D + W : xt(c.top, c.bottom)));
                    }
                    await l({ ...t, availableWidth: P, availableHeight: b });
                    const R = await o.getDimensions(a.floating);
                    return y !== R.width || p !== R.height ? { reset: { rects: !0 } } : {};
                },
            }
        );
    };
function lu() {
    return typeof window < "u";
}
function gi(e) {
    return Zx(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Et(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function bn(e) {
    var t;
    return (t = (Zx(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Zx(e) {
    return lu() ? e instanceof Node || e instanceof Et(e).Node : !1;
}
function an(e) {
    return lu() ? e instanceof Element || e instanceof Et(e).Element : !1;
}
function $n(e) {
    return lu() ? e instanceof HTMLElement || e instanceof Et(e).HTMLElement : !1;
}
function _m(e) {
    return !lu() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Et(e).ShadowRoot;
}
function Wo(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: s } = ln(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && s !== "inline" && s !== "contents";
}
function qP(e) {
    return /^(table|td|th)$/.test(gi(e));
}
function uu(e) {
    try {
        if (e.matches(":popover-open")) return !0;
    } catch {}
    try {
        return e.matches(":modal");
    } catch {
        return !1;
    }
}
const ZP = /transform|translate|scale|rotate|perspective|filter/,
    JP = /paint|layout|strict|content/,
    Ir = (e) => !!e && e !== "none";
let ic;
function vh(e) {
    const t = an(e) ? ln(e) : e;
    return (
        Ir(t.transform) ||
        Ir(t.translate) ||
        Ir(t.scale) ||
        Ir(t.rotate) ||
        Ir(t.perspective) ||
        (!xh() && (Ir(t.backdropFilter) || Ir(t.filter))) ||
        ZP.test(t.willChange || "") ||
        JP.test(t.contain || "")
    );
}
function ek(e) {
    let t = kr(e);
    for (; $n(t) && !oi(t); ) {
        if (vh(t)) return t;
        if (uu(t)) return null;
        t = kr(t);
    }
    return null;
}
function xh() {
    return ic == null && (ic = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), ic;
}
function oi(e) {
    return /^(html|body|#document)$/.test(gi(e));
}
function ln(e) {
    return Et(e).getComputedStyle(e);
}
function cu(e) {
    return an(e)
        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
        : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function kr(e) {
    if (gi(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || (_m(e) && e.host) || bn(e);
    return _m(t) ? t.host : t;
}
function Jx(e) {
    const t = kr(e);
    return oi(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : $n(t) && Wo(t) ? t : Jx(t);
}
function Co(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const s = Jx(e),
        i = s === ((r = e.ownerDocument) == null ? void 0 : r.body),
        o = Et(s);
    if (i) {
        const a = Af(o);
        return t.concat(o, o.visualViewport || [], Wo(s) ? s : [], a && n ? Co(a) : []);
    } else return t.concat(s, Co(s, [], n));
}
function Af(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function ew(e) {
    const t = ln(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const s = $n(e),
        i = s ? e.offsetWidth : n,
        o = s ? e.offsetHeight : r,
        a = Tl(n) !== i || Tl(r) !== o;
    return a && ((n = i), (r = o)), { width: n, height: r, $: a };
}
function wh(e) {
    return an(e) ? e : e.contextElement;
}
function Us(e) {
    const t = wh(e);
    if (!$n(t)) return En(1);
    const n = t.getBoundingClientRect(),
        { width: r, height: s, $: i } = ew(t);
    let o = (i ? Tl(n.width) : n.width) / r,
        a = (i ? Tl(n.height) : n.height) / s;
    return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), { x: o, y: a };
}
const tk = En(0);
function tw(e) {
    const t = Et(e);
    return !xh() || !t.visualViewport ? tk : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function nk(e, t, n) {
    return t === void 0 && (t = !1), !n || (t && n !== Et(e)) ? !1 : t;
}
function as(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const s = e.getBoundingClientRect(),
        i = wh(e);
    let o = En(1);
    t && (r ? an(r) && (o = Us(r)) : (o = Us(e)));
    const a = nk(i, n, r) ? tw(i) : En(0);
    let l = (s.left + a.x) / o.x,
        u = (s.top + a.y) / o.y,
        c = s.width / o.x,
        f = s.height / o.y;
    if (i) {
        const d = Et(i),
            h = r && an(r) ? Et(r) : r;
        let y = d,
            p = Af(y);
        for (; p && r && h !== y; ) {
            const x = Us(p),
                m = p.getBoundingClientRect(),
                g = ln(p),
                v = m.left + (p.clientLeft + parseFloat(g.paddingLeft)) * x.x,
                S = m.top + (p.clientTop + parseFloat(g.paddingTop)) * x.y;
            (l *= x.x), (u *= x.y), (c *= x.x), (f *= x.y), (l += v), (u += S), (y = Et(p)), (p = Af(y));
        }
    }
    return kl({ width: c, height: f, x: l, y: u });
}
function fu(e, t) {
    const n = cu(e).scrollLeft;
    return t ? t.left + n : as(bn(e)).left + n;
}
function nw(e, t) {
    const n = e.getBoundingClientRect(),
        r = n.left + t.scrollLeft - fu(e, n),
        s = n.top + t.scrollTop;
    return { x: r, y: s };
}
function rk(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: s } = e;
    const i = s === "fixed",
        o = bn(r),
        a = t ? uu(t.floating) : !1;
    if (r === o || (a && i)) return n;
    let l = { scrollLeft: 0, scrollTop: 0 },
        u = En(1);
    const c = En(0),
        f = $n(r);
    if ((f || (!f && !i)) && ((gi(r) !== "body" || Wo(o)) && (l = cu(r)), f)) {
        const h = as(r);
        (u = Us(r)), (c.x = h.x + r.clientLeft), (c.y = h.y + r.clientTop);
    }
    const d = o && !f && !i ? nw(o, l) : En(0);
    return {
        width: n.width * u.x,
        height: n.height * u.y,
        x: n.x * u.x - l.scrollLeft * u.x + c.x + d.x,
        y: n.y * u.y - l.scrollTop * u.y + c.y + d.y,
    };
}
function sk(e) {
    return Array.from(e.getClientRects());
}
function ik(e) {
    const t = bn(e),
        n = cu(e),
        r = e.ownerDocument.body,
        s = xt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        i = xt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let o = -n.scrollLeft + fu(e);
    const a = -n.scrollTop;
    return (
        ln(r).direction === "rtl" && (o += xt(t.clientWidth, r.clientWidth) - s), { width: s, height: i, x: o, y: a }
    );
}
const zm = 25;
function ok(e, t) {
    const n = Et(e),
        r = bn(e),
        s = n.visualViewport;
    let i = r.clientWidth,
        o = r.clientHeight,
        a = 0,
        l = 0;
    if (s) {
        (i = s.width), (o = s.height);
        const c = xh();
        (!c || (c && t === "fixed")) && ((a = s.offsetLeft), (l = s.offsetTop));
    }
    const u = fu(r);
    if (u <= 0) {
        const c = r.ownerDocument,
            f = c.body,
            d = getComputedStyle(f),
            h = (c.compatMode === "CSS1Compat" && parseFloat(d.marginLeft) + parseFloat(d.marginRight)) || 0,
            y = Math.abs(r.clientWidth - f.clientWidth - h);
        y <= zm && (i -= y);
    } else u <= zm && (i += u);
    return { width: i, height: o, x: a, y: l };
}
function ak(e, t) {
    const n = as(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        s = n.left + e.clientLeft,
        i = $n(e) ? Us(e) : En(1),
        o = e.clientWidth * i.x,
        a = e.clientHeight * i.y,
        l = s * i.x,
        u = r * i.y;
    return { width: o, height: a, x: l, y: u };
}
function Bm(e, t, n) {
    let r;
    if (t === "viewport") r = ok(e, n);
    else if (t === "document") r = ik(bn(e));
    else if (an(t)) r = ak(t, n);
    else {
        const s = tw(e);
        r = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
    }
    return kl(r);
}
function rw(e, t) {
    const n = kr(e);
    return n === t || !an(n) || oi(n) ? !1 : ln(n).position === "fixed" || rw(n, t);
}
function lk(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = Co(e, [], !1).filter((a) => an(a) && gi(a) !== "body"),
        s = null;
    const i = ln(e).position === "fixed";
    let o = i ? kr(e) : e;
    for (; an(o) && !oi(o); ) {
        const a = ln(o),
            l = vh(o);
        !l && a.position === "fixed" && (s = null),
            (
                i
                    ? !l && !s
                    : (!l && a.position === "static" && !!s && (s.position === "absolute" || s.position === "fixed")) ||
                      (Wo(o) && !l && rw(e, o))
            )
                ? (r = r.filter((c) => c !== o))
                : (s = a),
            (o = kr(o));
    }
    return t.set(e, r), r;
}
function uk(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: s } = e;
    const o = [...(n === "clippingAncestors" ? (uu(t) ? [] : lk(t, this._c)) : [].concat(n)), r],
        a = Bm(t, o[0], s);
    let l = a.top,
        u = a.right,
        c = a.bottom,
        f = a.left;
    for (let d = 1; d < o.length; d++) {
        const h = Bm(t, o[d], s);
        (l = xt(h.top, l)), (u = Pr(h.right, u)), (c = Pr(h.bottom, c)), (f = xt(h.left, f));
    }
    return { width: u - f, height: c - l, x: f, y: l };
}
function ck(e) {
    const { width: t, height: n } = ew(e);
    return { width: t, height: n };
}
function fk(e, t, n) {
    const r = $n(t),
        s = bn(t),
        i = n === "fixed",
        o = as(e, !0, i, t);
    let a = { scrollLeft: 0, scrollTop: 0 };
    const l = En(0);
    function u() {
        l.x = fu(s);
    }
    if (r || (!r && !i))
        if (((gi(t) !== "body" || Wo(s)) && (a = cu(t)), r)) {
            const h = as(t, !0, i, t);
            (l.x = h.x + t.clientLeft), (l.y = h.y + t.clientTop);
        } else s && u();
    i && !r && s && u();
    const c = s && !r && !i ? nw(s, a) : En(0),
        f = o.left + a.scrollLeft - l.x - c.x,
        d = o.top + a.scrollTop - l.y - c.y;
    return { x: f, y: d, width: o.width, height: o.height };
}
function oc(e) {
    return ln(e).position === "static";
}
function $m(e, t) {
    if (!$n(e) || ln(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return bn(e) === n && (n = n.ownerDocument.body), n;
}
function sw(e, t) {
    const n = Et(e);
    if (uu(e)) return n;
    if (!$n(e)) {
        let s = kr(e);
        for (; s && !oi(s); ) {
            if (an(s) && !oc(s)) return s;
            s = kr(s);
        }
        return n;
    }
    let r = $m(e, t);
    for (; r && qP(r) && oc(r); ) r = $m(r, t);
    return r && oi(r) && oc(r) && !vh(r) ? n : r || ek(e) || n;
}
const dk = async function (e) {
    const t = this.getOffsetParent || sw,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: fk(e.reference, await t(e.floating), e.strategy),
        floating: { x: 0, y: 0, width: r.width, height: r.height },
    };
};
function hk(e) {
    return ln(e).direction === "rtl";
}
const pk = {
    convertOffsetParentRelativeRectToViewportRelativeRect: rk,
    getDocumentElement: bn,
    getClippingRect: uk,
    getOffsetParent: sw,
    getElementRects: dk,
    getClientRects: sk,
    getDimensions: ck,
    getScale: Us,
    isElement: an,
    isRTL: hk,
};
function iw(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function mk(e, t) {
    let n = null,
        r;
    const s = bn(e);
    function i() {
        var a;
        clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
    }
    function o(a, l) {
        a === void 0 && (a = !1), l === void 0 && (l = 1), i();
        const u = e.getBoundingClientRect(),
            { left: c, top: f, width: d, height: h } = u;
        if ((a || t(), !d || !h)) return;
        const y = Ta(f),
            p = Ta(s.clientWidth - (c + d)),
            x = Ta(s.clientHeight - (f + h)),
            m = Ta(c),
            v = { rootMargin: -y + "px " + -p + "px " + -x + "px " + -m + "px", threshold: xt(0, Pr(1, l)) || 1 };
        let S = !0;
        function C(T) {
            const b = T[0].intersectionRatio;
            if (b !== l) {
                if (!S) return o();
                b
                    ? o(!1, b)
                    : (r = setTimeout(() => {
                          o(!1, 1e-7);
                      }, 1e3));
            }
            b === 1 && !iw(u, e.getBoundingClientRect()) && o(), (S = !1);
        }
        try {
            n = new IntersectionObserver(C, { ...v, root: s.ownerDocument });
        } catch {
            n = new IntersectionObserver(C, v);
        }
        n.observe(e);
    }
    return o(!0), i;
}
function gk(e, t, n, r) {
    r === void 0 && (r = {});
    const {
            ancestorScroll: s = !0,
            ancestorResize: i = !0,
            elementResize: o = typeof ResizeObserver == "function",
            layoutShift: a = typeof IntersectionObserver == "function",
            animationFrame: l = !1,
        } = r,
        u = wh(e),
        c = s || i ? [...(u ? Co(u) : []), ...(t ? Co(t) : [])] : [];
    c.forEach((m) => {
        s && m.addEventListener("scroll", n, { passive: !0 }), i && m.addEventListener("resize", n);
    });
    const f = u && a ? mk(u, n) : null;
    let d = -1,
        h = null;
    o &&
        ((h = new ResizeObserver((m) => {
            let [g] = m;
            g &&
                g.target === u &&
                h &&
                t &&
                (h.unobserve(t),
                cancelAnimationFrame(d),
                (d = requestAnimationFrame(() => {
                    var v;
                    (v = h) == null || v.observe(t);
                }))),
                n();
        })),
        u && !l && h.observe(u),
        t && h.observe(t));
    let y,
        p = l ? as(e) : null;
    l && x();
    function x() {
        const m = as(e);
        p && !iw(p, m) && n(), (p = m), (y = requestAnimationFrame(x));
    }
    return (
        n(),
        () => {
            var m;
            c.forEach((g) => {
                s && g.removeEventListener("scroll", n), i && g.removeEventListener("resize", n);
            }),
                f == null || f(),
                (m = h) == null || m.disconnect(),
                (h = null),
                l && cancelAnimationFrame(y);
        }
    );
}
const yk = GP,
    vk = QP,
    xk = WP,
    wk = XP,
    Sk = HP,
    Um = UP,
    Ek = YP,
    Ck = (e, t, n) => {
        const r = new Map(),
            s = { platform: pk, ...n },
            i = { ...s.platform, _c: r };
        return $P(e, t, { ...s, platform: i });
    };
var bk = typeof document < "u",
    Tk = function () {},
    Ga = bk ? w.useLayoutEffect : Tk;
function Al(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, s;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; r-- !== 0; ) if (!Al(e[r], t[r])) return !1;
            return !0;
        }
        if (((s = Object.keys(e)), (n = s.length), n !== Object.keys(t).length)) return !1;
        for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, s[r])) return !1;
        for (r = n; r-- !== 0; ) {
            const i = s[r];
            if (!(i === "_owner" && e.$$typeof) && !Al(e[i], t[i])) return !1;
        }
        return !0;
    }
    return e !== e && t !== t;
}
function ow(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Wm(e, t) {
    const n = ow(e);
    return Math.round(t * n) / n;
}
function ac(e) {
    const t = w.useRef(e);
    return (
        Ga(() => {
            t.current = e;
        }),
        t
    );
}
function Pk(e) {
    e === void 0 && (e = {});
    const {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: r = [],
            platform: s,
            elements: { reference: i, floating: o } = {},
            transform: a = !0,
            whileElementsMounted: l,
            open: u,
        } = e,
        [c, f] = w.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
        [d, h] = w.useState(r);
    Al(d, r) || h(r);
    const [y, p] = w.useState(null),
        [x, m] = w.useState(null),
        g = w.useCallback((A) => {
            A !== T.current && ((T.current = A), p(A));
        }, []),
        v = w.useCallback((A) => {
            A !== b.current && ((b.current = A), m(A));
        }, []),
        S = i || y,
        C = o || x,
        T = w.useRef(null),
        b = w.useRef(null),
        P = w.useRef(c),
        R = l != null,
        k = ac(l),
        L = ac(s),
        D = ac(u),
        W = w.useCallback(() => {
            if (!T.current || !b.current) return;
            const A = { placement: t, strategy: n, middleware: d };
            L.current && (A.platform = L.current),
                Ck(T.current, b.current, A).then((M) => {
                    const F = { ...M, isPositioned: D.current !== !1 };
                    O.current &&
                        !Al(P.current, F) &&
                        ((P.current = F),
                        $o.flushSync(() => {
                            f(F);
                        }));
                });
        }, [d, t, n, L, D]);
    Ga(() => {
        u === !1 && P.current.isPositioned && ((P.current.isPositioned = !1), f((A) => ({ ...A, isPositioned: !1 })));
    }, [u]);
    const O = w.useRef(!1);
    Ga(
        () => (
            (O.current = !0),
            () => {
                O.current = !1;
            }
        ),
        []
    ),
        Ga(() => {
            if ((S && (T.current = S), C && (b.current = C), S && C)) {
                if (k.current) return k.current(S, C, W);
                W();
            }
        }, [S, C, W, k, R]);
    const H = w.useMemo(() => ({ reference: T, floating: b, setReference: g, setFloating: v }), [g, v]),
        _ = w.useMemo(() => ({ reference: S, floating: C }), [S, C]),
        K = w.useMemo(() => {
            const A = { position: n, left: 0, top: 0 };
            if (!_.floating) return A;
            const M = Wm(_.floating, c.x),
                F = Wm(_.floating, c.y);
            return a
                ? {
                      ...A,
                      transform: "translate(" + M + "px, " + F + "px)",
                      ...(ow(_.floating) >= 1.5 && { willChange: "transform" }),
                  }
                : { position: n, left: M, top: F };
        }, [n, a, _.floating, c.x, c.y]);
    return w.useMemo(() => ({ ...c, update: W, refs: H, elements: _, floatingStyles: K }), [c, W, H, _, K]);
}
const kk = (e) => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current");
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const { element: r, padding: s } = typeof e == "function" ? e(n) : e;
                return r && t(r)
                    ? r.current != null
                        ? Um({ element: r.current, padding: s }).fn(n)
                        : {}
                    : r
                      ? Um({ element: r, padding: s }).fn(n)
                      : {};
            },
        };
    },
    Ak = (e, t) => {
        const n = yk(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
    },
    Rk = (e, t) => {
        const n = vk(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
    },
    Mk = (e, t) => ({ fn: Ek(e).fn, options: [e, t] }),
    Nk = (e, t) => {
        const n = xk(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
    },
    Lk = (e, t) => {
        const n = wk(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
    },
    Dk = (e, t) => {
        const n = Sk(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
    },
    Ok = (e, t) => {
        const n = kk(e);
        return { name: n.name, fn: n.fn, options: [e, t] };
    };
var jk = "Arrow",
    aw = w.forwardRef((e, t) => {
        const { children: n, width: r = 10, height: s = 5, ...i } = e;
        return E.jsx(pt.svg, {
            ...i,
            ref: t,
            width: r,
            height: s,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : E.jsx("polygon", { points: "0,0 30,0 15,10" }),
        });
    });
aw.displayName = jk;
var Ik = aw;
function Fk(e) {
    const [t, n] = w.useState(void 0);
    return (
        Tr(() => {
            if (e) {
                n({ width: e.offsetWidth, height: e.offsetHeight });
                const r = new ResizeObserver((s) => {
                    if (!Array.isArray(s) || !s.length) return;
                    const i = s[0];
                    let o, a;
                    if ("borderBoxSize" in i) {
                        const l = i.borderBoxSize,
                            u = Array.isArray(l) ? l[0] : l;
                        (o = u.inlineSize), (a = u.blockSize);
                    } else (o = e.offsetWidth), (a = e.offsetHeight);
                    n({ width: o, height: a });
                });
                return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
            } else n(void 0);
        }, [e]),
        t
    );
}
var lw = "Popper",
    [uw, cw] = iu(lw),
    [aj, fw] = uw(lw),
    dw = "PopperAnchor",
    hw = w.forwardRef((e, t) => {
        const { __scopePopper: n, virtualRef: r, ...s } = e,
            i = fw(dw, n),
            o = w.useRef(null),
            a = on(t, o),
            l = w.useRef(null);
        return (
            w.useEffect(() => {
                const u = l.current;
                (l.current = (r == null ? void 0 : r.current) || o.current),
                    u !== l.current && i.onAnchorChange(l.current);
            }),
            r ? null : E.jsx(pt.div, { ...s, ref: a })
        );
    });
hw.displayName = dw;
var Sh = "PopperContent",
    [Vk, _k] = uw(Sh),
    pw = w.forwardRef((e, t) => {
        var q, Se, je, Pe, se, B;
        const {
                __scopePopper: n,
                side: r = "bottom",
                sideOffset: s = 0,
                align: i = "center",
                alignOffset: o = 0,
                arrowPadding: a = 0,
                avoidCollisions: l = !0,
                collisionBoundary: u = [],
                collisionPadding: c = 0,
                sticky: f = "partial",
                hideWhenDetached: d = !1,
                updatePositionStrategy: h = "optimized",
                onPlaced: y,
                ...p
            } = e,
            x = fw(Sh, n),
            [m, g] = w.useState(null),
            v = on(t, (te) => g(te)),
            [S, C] = w.useState(null),
            T = Fk(S),
            b = (T == null ? void 0 : T.width) ?? 0,
            P = (T == null ? void 0 : T.height) ?? 0,
            R = r + (i !== "center" ? "-" + i : ""),
            k = typeof c == "number" ? c : { top: 0, right: 0, bottom: 0, left: 0, ...c },
            L = Array.isArray(u) ? u : [u],
            D = L.length > 0,
            W = { padding: k, boundary: L.filter(Bk), altBoundary: D },
            {
                refs: O,
                floatingStyles: H,
                placement: _,
                isPositioned: K,
                middlewareData: A,
            } = Pk({
                strategy: "fixed",
                placement: R,
                whileElementsMounted: (...te) => gk(...te, { animationFrame: h === "always" }),
                elements: { reference: x.anchor },
                middleware: [
                    Ak({ mainAxis: s + P, alignmentAxis: o }),
                    l && Rk({ mainAxis: !0, crossAxis: !1, limiter: f === "partial" ? Mk() : void 0, ...W }),
                    l && Nk({ ...W }),
                    Lk({
                        ...W,
                        apply: ({ elements: te, rects: fe, availableWidth: Me, availableHeight: Xe }) => {
                            const { width: mt, height: gt } = fe.reference,
                                qe = te.floating.style;
                            qe.setProperty("--radix-popper-available-width", `${Me}px`),
                                qe.setProperty("--radix-popper-available-height", `${Xe}px`),
                                qe.setProperty("--radix-popper-anchor-width", `${mt}px`),
                                qe.setProperty("--radix-popper-anchor-height", `${gt}px`);
                        },
                    }),
                    S && Ok({ element: S, padding: a }),
                    $k({ arrowWidth: b, arrowHeight: P }),
                    d && Dk({ strategy: "referenceHidden", ...W }),
                ],
            }),
            [M, F] = yw(_),
            U = br(y);
        Tr(() => {
            K && (U == null || U());
        }, [K, U]);
        const $ = (q = A.arrow) == null ? void 0 : q.x,
            X = (Se = A.arrow) == null ? void 0 : Se.y,
            Q = ((je = A.arrow) == null ? void 0 : je.centerOffset) !== 0,
            [le, we] = w.useState();
        return (
            Tr(() => {
                m && we(window.getComputedStyle(m).zIndex);
            }, [m]),
            E.jsx("div", {
                ref: O.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                    ...H,
                    transform: K ? H.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: le,
                    "--radix-popper-transform-origin": [
                        (Pe = A.transformOrigin) == null ? void 0 : Pe.x,
                        (se = A.transformOrigin) == null ? void 0 : se.y,
                    ].join(" "),
                    ...(((B = A.hide) == null ? void 0 : B.referenceHidden) && {
                        visibility: "hidden",
                        pointerEvents: "none",
                    }),
                },
                dir: e.dir,
                children: E.jsx(Vk, {
                    scope: n,
                    placedSide: M,
                    onArrowChange: C,
                    arrowX: $,
                    arrowY: X,
                    shouldHideArrow: Q,
                    children: E.jsx(pt.div, {
                        "data-side": M,
                        "data-align": F,
                        ...p,
                        ref: v,
                        style: { ...p.style, animation: K ? void 0 : "none" },
                    }),
                }),
            })
        );
    });
pw.displayName = Sh;
var mw = "PopperArrow",
    zk = { top: "bottom", right: "left", bottom: "top", left: "right" },
    gw = w.forwardRef(function (t, n) {
        const { __scopePopper: r, ...s } = t,
            i = _k(mw, r),
            o = zk[i.placedSide];
        return E.jsx("span", {
            ref: i.onArrowChange,
            style: {
                position: "absolute",
                left: i.arrowX,
                top: i.arrowY,
                [o]: 0,
                transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[i.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)",
                }[i.placedSide],
                visibility: i.shouldHideArrow ? "hidden" : void 0,
            },
            children: E.jsx(Ik, { ...s, ref: n, style: { ...s.style, display: "block" } }),
        });
    });
gw.displayName = mw;
function Bk(e) {
    return e !== null;
}
var $k = (e) => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var x, m, g;
        const { placement: n, rects: r, middlewareData: s } = t,
            o = ((x = s.arrow) == null ? void 0 : x.centerOffset) !== 0,
            a = o ? 0 : e.arrowWidth,
            l = o ? 0 : e.arrowHeight,
            [u, c] = yw(n),
            f = { start: "0%", center: "50%", end: "100%" }[c],
            d = (((m = s.arrow) == null ? void 0 : m.x) ?? 0) + a / 2,
            h = (((g = s.arrow) == null ? void 0 : g.y) ?? 0) + l / 2;
        let y = "",
            p = "";
        return (
            u === "bottom"
                ? ((y = o ? f : `${d}px`), (p = `${-l}px`))
                : u === "top"
                  ? ((y = o ? f : `${d}px`), (p = `${r.floating.height + l}px`))
                  : u === "right"
                    ? ((y = `${-l}px`), (p = o ? f : `${h}px`))
                    : u === "left" && ((y = `${r.floating.width + l}px`), (p = o ? f : `${h}px`)),
            { data: { x: y, y: p } }
        );
    },
});
function yw(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n];
}
var Uk = hw,
    Wk = pw,
    Hk = gw,
    Kk = Symbol("radix.slottable");
function Gk(e) {
    const t = ({ children: n }) => E.jsx(E.Fragment, { children: n });
    return (t.displayName = `${e}.Slottable`), (t.__radixId = Kk), t;
}
var [du] = iu("Tooltip", [cw]),
    Eh = cw(),
    vw = "TooltipProvider",
    Qk = 700,
    Hm = "tooltip.open",
    [Yk, xw] = du(vw),
    ww = (e) => {
        const {
                __scopeTooltip: t,
                delayDuration: n = Qk,
                skipDelayDuration: r = 300,
                disableHoverableContent: s = !1,
                children: i,
            } = e,
            o = w.useRef(!0),
            a = w.useRef(!1),
            l = w.useRef(0);
        return (
            w.useEffect(() => {
                const u = l.current;
                return () => window.clearTimeout(u);
            }, []),
            E.jsx(Yk, {
                scope: t,
                isOpenDelayedRef: o,
                delayDuration: n,
                onOpen: w.useCallback(() => {
                    window.clearTimeout(l.current), (o.current = !1);
                }, []),
                onClose: w.useCallback(() => {
                    window.clearTimeout(l.current), (l.current = window.setTimeout(() => (o.current = !0), r));
                }, [r]),
                isPointerInTransitRef: a,
                onPointerInTransitChange: w.useCallback((u) => {
                    a.current = u;
                }, []),
                disableHoverableContent: s,
                children: i,
            })
        );
    };
ww.displayName = vw;
var Sw = "Tooltip",
    [lj, hu] = du(Sw),
    Rf = "TooltipTrigger",
    Xk = w.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e,
            s = hu(Rf, n),
            i = xw(Rf, n),
            o = Eh(n),
            a = w.useRef(null),
            l = on(t, a, s.onTriggerChange),
            u = w.useRef(!1),
            c = w.useRef(!1),
            f = w.useCallback(() => (u.current = !1), []);
        return (
            w.useEffect(() => () => document.removeEventListener("pointerup", f), [f]),
            E.jsx(Uk, {
                asChild: !0,
                ...o,
                children: E.jsx(pt.button, {
                    "aria-describedby": s.open ? s.contentId : void 0,
                    "data-state": s.stateAttribute,
                    ...r,
                    ref: l,
                    onPointerMove: De(e.onPointerMove, (d) => {
                        d.pointerType !== "touch" &&
                            !c.current &&
                            !i.isPointerInTransitRef.current &&
                            (s.onTriggerEnter(), (c.current = !0));
                    }),
                    onPointerLeave: De(e.onPointerLeave, () => {
                        s.onTriggerLeave(), (c.current = !1);
                    }),
                    onPointerDown: De(e.onPointerDown, () => {
                        s.open && s.onClose(),
                            (u.current = !0),
                            document.addEventListener("pointerup", f, { once: !0 });
                    }),
                    onFocus: De(e.onFocus, () => {
                        u.current || s.onOpen();
                    }),
                    onBlur: De(e.onBlur, s.onClose),
                    onClick: De(e.onClick, s.onClose),
                }),
            })
        );
    });
Xk.displayName = Rf;
var qk = "TooltipPortal",
    [uj, Zk] = du(qk, { forceMount: void 0 }),
    ai = "TooltipContent",
    Ew = w.forwardRef((e, t) => {
        const n = Zk(ai, e.__scopeTooltip),
            { forceMount: r = n.forceMount, side: s = "top", ...i } = e,
            o = hu(ai, e.__scopeTooltip);
        return E.jsx(ch, {
            present: r || o.open,
            children: o.disableHoverableContent
                ? E.jsx(Cw, { side: s, ...i, ref: t })
                : E.jsx(Jk, { side: s, ...i, ref: t }),
        });
    }),
    Jk = w.forwardRef((e, t) => {
        const n = hu(ai, e.__scopeTooltip),
            r = xw(ai, e.__scopeTooltip),
            s = w.useRef(null),
            i = on(t, s),
            [o, a] = w.useState(null),
            { trigger: l, onClose: u } = n,
            c = s.current,
            { onPointerInTransitChange: f } = r,
            d = w.useCallback(() => {
                a(null), f(!1);
            }, [f]),
            h = w.useCallback(
                (y, p) => {
                    const x = y.currentTarget,
                        m = { x: y.clientX, y: y.clientY },
                        g = sA(m, x.getBoundingClientRect()),
                        v = iA(m, g),
                        S = oA(p.getBoundingClientRect()),
                        C = lA([...v, ...S]);
                    a(C), f(!0);
                },
                [f]
            );
        return (
            w.useEffect(() => () => d(), [d]),
            w.useEffect(() => {
                if (l && c) {
                    const y = (x) => h(x, c),
                        p = (x) => h(x, l);
                    return (
                        l.addEventListener("pointerleave", y),
                        c.addEventListener("pointerleave", p),
                        () => {
                            l.removeEventListener("pointerleave", y), c.removeEventListener("pointerleave", p);
                        }
                    );
                }
            }, [l, c, h, d]),
            w.useEffect(() => {
                if (o) {
                    const y = (p) => {
                        const x = p.target,
                            m = { x: p.clientX, y: p.clientY },
                            g = (l == null ? void 0 : l.contains(x)) || (c == null ? void 0 : c.contains(x)),
                            v = !aA(m, o);
                        g ? d() : v && (d(), u());
                    };
                    return (
                        document.addEventListener("pointermove", y),
                        () => document.removeEventListener("pointermove", y)
                    );
                }
            }, [l, c, o, u, d]),
            E.jsx(Cw, { ...e, ref: i })
        );
    }),
    [eA, tA] = du(Sw, { isInside: !1 }),
    nA = Gk("TooltipContent"),
    Cw = w.forwardRef((e, t) => {
        const {
                __scopeTooltip: n,
                children: r,
                "aria-label": s,
                onEscapeKeyDown: i,
                onPointerDownOutside: o,
                ...a
            } = e,
            l = hu(ai, n),
            u = Eh(n),
            { onClose: c } = l;
        return (
            w.useEffect(() => (document.addEventListener(Hm, c), () => document.removeEventListener(Hm, c)), [c]),
            w.useEffect(() => {
                if (l.trigger) {
                    const f = (d) => {
                        const h = d.target;
                        h != null && h.contains(l.trigger) && c();
                    };
                    return (
                        window.addEventListener("scroll", f, { capture: !0 }),
                        () => window.removeEventListener("scroll", f, { capture: !0 })
                    );
                }
            }, [l.trigger, c]),
            E.jsx(uh, {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: i,
                onPointerDownOutside: o,
                onFocusOutside: (f) => f.preventDefault(),
                onDismiss: c,
                children: E.jsxs(Wk, {
                    "data-state": l.stateAttribute,
                    ...u,
                    ...a,
                    ref: t,
                    style: {
                        ...a.style,
                        "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)",
                    },
                    children: [
                        E.jsx(nA, { children: r }),
                        E.jsx(eA, {
                            scope: n,
                            isInside: !0,
                            children: E.jsx(Wb, { id: l.contentId, role: "tooltip", children: s || r }),
                        }),
                    ],
                }),
            })
        );
    });
Ew.displayName = ai;
var bw = "TooltipArrow",
    rA = w.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e,
            s = Eh(n);
        return tA(bw, n).isInside ? null : E.jsx(Hk, { ...s, ...r, ref: t });
    });
rA.displayName = bw;
function sA(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        s = Math.abs(t.right - e.x),
        i = Math.abs(t.left - e.x);
    switch (Math.min(n, r, s, i)) {
        case i:
            return "left";
        case s:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable");
    }
}
function iA(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
            break;
        case "bottom":
            r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
            break;
        case "left":
            r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
            break;
        case "right":
            r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
            break;
    }
    return r;
}
function oA(e) {
    const { top: t, right: n, bottom: r, left: s } = e;
    return [
        { x: s, y: t },
        { x: n, y: t },
        { x: n, y: r },
        { x: s, y: r },
    ];
}
function aA(e, t) {
    const { x: n, y: r } = e;
    let s = !1;
    for (let i = 0, o = t.length - 1; i < t.length; o = i++) {
        const a = t[i],
            l = t[o],
            u = a.x,
            c = a.y,
            f = l.x,
            d = l.y;
        c > r != d > r && n < ((f - u) * (r - c)) / (d - c) + u && (s = !s);
    }
    return s;
}
function lA(e) {
    const t = e.slice();
    return t.sort((n, r) => (n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0)), uA(t);
}
function uA(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const s = e[r];
        for (; t.length >= 2; ) {
            const i = t[t.length - 1],
                o = t[t.length - 2];
            if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) t.pop();
            else break;
        }
        t.push(s);
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const s = e[r];
        for (; n.length >= 2; ) {
            const i = n[n.length - 1],
                o = n[n.length - 2];
            if ((i.x - o.x) * (s.y - o.y) >= (i.y - o.y) * (s.x - o.x)) n.pop();
            else break;
        }
        n.push(s);
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var cA = ww,
    Tw = Ew;
const fA = cA,
    dA = w.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
        E.jsx(Tw, {
            ref: r,
            sideOffset: t,
            className: fs(
                "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]",
                e
            ),
            ...n,
        })
    );
dA.displayName = Tw.displayName;
var pu = class {
        constructor() {
            (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
            return (
                this.listeners.add(e),
                this.onSubscribe(),
                () => {
                    this.listeners.delete(e), this.onUnsubscribe();
                }
            );
        }
        hasListeners() {
            return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    Kr,
    rr,
    Ws,
    zy,
    hA =
        ((zy = class extends pu {
            constructor() {
                super();
                ee(this, Kr);
                ee(this, rr);
                ee(this, Ws);
                G(this, Ws, (t) => {
                    if (typeof window < "u" && window.addEventListener) {
                        const n = () => t();
                        return (
                            window.addEventListener("visibilitychange", n, !1),
                            () => {
                                window.removeEventListener("visibilitychange", n);
                            }
                        );
                    }
                });
            }
            onSubscribe() {
                N(this, rr) || this.setEventListener(N(this, Ws));
            }
            onUnsubscribe() {
                var t;
                this.hasListeners() || ((t = N(this, rr)) == null || t.call(this), G(this, rr, void 0));
            }
            setEventListener(t) {
                var n;
                G(this, Ws, t),
                    (n = N(this, rr)) == null || n.call(this),
                    G(
                        this,
                        rr,
                        t((r) => {
                            typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
                        })
                    );
            }
            setFocused(t) {
                N(this, Kr) !== t && (G(this, Kr, t), this.onFocus());
            }
            onFocus() {
                const t = this.isFocused();
                this.listeners.forEach((n) => {
                    n(t);
                });
            }
            isFocused() {
                var t;
                return typeof N(this, Kr) == "boolean"
                    ? N(this, Kr)
                    : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
            }
        }),
        (Kr = new WeakMap()),
        (rr = new WeakMap()),
        (Ws = new WeakMap()),
        zy),
    Pw = new hA(),
    pA = {
        setTimeout: (e, t) => setTimeout(e, t),
        clearTimeout: (e) => clearTimeout(e),
        setInterval: (e, t) => setInterval(e, t),
        clearInterval: (e) => clearInterval(e),
    },
    sr,
    pd,
    By,
    mA =
        ((By = class {
            constructor() {
                ee(this, sr, pA);
                ee(this, pd, !1);
            }
            setTimeoutProvider(e) {
                G(this, sr, e);
            }
            setTimeout(e, t) {
                return N(this, sr).setTimeout(e, t);
            }
            clearTimeout(e) {
                N(this, sr).clearTimeout(e);
            }
            setInterval(e, t) {
                return N(this, sr).setInterval(e, t);
            }
            clearInterval(e) {
                N(this, sr).clearInterval(e);
            }
        }),
        (sr = new WeakMap()),
        (pd = new WeakMap()),
        By),
    Mf = new mA();
function gA(e) {
    setTimeout(e, 0);
}
var yA = typeof window > "u" || "Deno" in globalThis;
function Yt() {}
function vA(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function xA(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function wA(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0);
}
function Nf(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function SA(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function Km(e, t) {
    const { type: n = "all", exact: r, fetchStatus: s, predicate: i, queryKey: o, stale: a } = e;
    if (o) {
        if (r) {
            if (t.queryHash !== Ch(o, t.options)) return !1;
        } else if (!To(t.queryKey, o)) return !1;
    }
    if (n !== "all") {
        const l = t.isActive();
        if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
    }
    return !((typeof a == "boolean" && t.isStale() !== a) || (s && s !== t.state.fetchStatus) || (i && !i(t)));
}
function Gm(e, t) {
    const { exact: n, status: r, predicate: s, mutationKey: i } = e;
    if (i) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (bo(t.options.mutationKey) !== bo(i)) return !1;
        } else if (!To(t.options.mutationKey, i)) return !1;
    }
    return !((r && t.state.status !== r) || (s && !s(t)));
}
function Ch(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || bo)(e);
}
function bo(e) {
    return JSON.stringify(e, (t, n) =>
        Lf(n)
            ? Object.keys(n)
                  .sort()
                  .reduce((r, s) => ((r[s] = n[s]), r), {})
            : n
    );
}
function To(e, t) {
    return e === t
        ? !0
        : typeof e != typeof t
          ? !1
          : e && t && typeof e == "object" && typeof t == "object"
            ? Object.keys(t).every((n) => To(e[n], t[n]))
            : !1;
}
var EA = Object.prototype.hasOwnProperty;
function kw(e, t, n = 0) {
    if (e === t) return e;
    if (n > 500) return t;
    const r = Qm(e) && Qm(t);
    if (!r && !(Lf(e) && Lf(t))) return t;
    const i = (r ? e : Object.keys(e)).length,
        o = r ? t : Object.keys(t),
        a = o.length,
        l = r ? new Array(a) : {};
    let u = 0;
    for (let c = 0; c < a; c++) {
        const f = r ? c : o[c],
            d = e[f],
            h = t[f];
        if (d === h) {
            (l[f] = d), (r ? c < i : EA.call(e, f)) && u++;
            continue;
        }
        if (d === null || h === null || typeof d != "object" || typeof h != "object") {
            l[f] = h;
            continue;
        }
        const y = kw(d, h, n + 1);
        (l[f] = y), y === d && u++;
    }
    return i === a && u === i ? e : l;
}
function Qm(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Lf(e) {
    if (!Ym(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!Ym(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Ym(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
function CA(e) {
    return new Promise((t) => {
        Mf.setTimeout(t, e);
    });
}
function bA(e, t, n) {
    return typeof n.structuralSharing == "function"
        ? n.structuralSharing(e, t)
        : n.structuralSharing !== !1
          ? kw(e, t)
          : t;
}
function TA(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r;
}
function PA(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r;
}
var bh = Symbol();
function Aw(e, t) {
    return !e.queryFn && t != null && t.initialPromise
        ? () => t.initialPromise
        : !e.queryFn || e.queryFn === bh
          ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
          : e.queryFn;
}
function kA(e, t, n) {
    let r = !1,
        s;
    return (
        Object.defineProperty(e, "signal", {
            enumerable: !0,
            get: () => (
                s ?? (s = t()), r || ((r = !0), s.aborted ? n() : s.addEventListener("abort", n, { once: !0 })), s
            ),
        }),
        e
    );
}
var Rw = (() => {
    let e = () => yA;
    return {
        isServer() {
            return e();
        },
        setIsServer(t) {
            e = t;
        },
    };
})();
function AA() {
    let e, t;
    const n = new Promise((s, i) => {
        (e = s), (t = i);
    });
    (n.status = "pending"), n.catch(() => {});
    function r(s) {
        Object.assign(n, s), delete n.resolve, delete n.reject;
    }
    return (
        (n.resolve = (s) => {
            r({ status: "fulfilled", value: s }), e(s);
        }),
        (n.reject = (s) => {
            r({ status: "rejected", reason: s }), t(s);
        }),
        n
    );
}
var RA = gA;
function MA() {
    let e = [],
        t = 0,
        n = (a) => {
            a();
        },
        r = (a) => {
            a();
        },
        s = RA;
    const i = (a) => {
            t
                ? e.push(a)
                : s(() => {
                      n(a);
                  });
        },
        o = () => {
            const a = e;
            (e = []),
                a.length &&
                    s(() => {
                        r(() => {
                            a.forEach((l) => {
                                n(l);
                            });
                        });
                    });
        };
    return {
        batch: (a) => {
            let l;
            t++;
            try {
                l = a();
            } finally {
                t--, t || o();
            }
            return l;
        },
        batchCalls:
            (a) =>
            (...l) => {
                i(() => {
                    a(...l);
                });
            },
        schedule: i,
        setNotifyFunction: (a) => {
            n = a;
        },
        setBatchNotifyFunction: (a) => {
            r = a;
        },
        setScheduler: (a) => {
            s = a;
        },
    };
}
var et = MA(),
    Hs,
    ir,
    Ks,
    $y,
    NA =
        (($y = class extends pu {
            constructor() {
                super();
                ee(this, Hs, !0);
                ee(this, ir);
                ee(this, Ks);
                G(this, Ks, (t) => {
                    if (typeof window < "u" && window.addEventListener) {
                        const n = () => t(!0),
                            r = () => t(!1);
                        return (
                            window.addEventListener("online", n, !1),
                            window.addEventListener("offline", r, !1),
                            () => {
                                window.removeEventListener("online", n), window.removeEventListener("offline", r);
                            }
                        );
                    }
                });
            }
            onSubscribe() {
                N(this, ir) || this.setEventListener(N(this, Ks));
            }
            onUnsubscribe() {
                var t;
                this.hasListeners() || ((t = N(this, ir)) == null || t.call(this), G(this, ir, void 0));
            }
            setEventListener(t) {
                var n;
                G(this, Ks, t), (n = N(this, ir)) == null || n.call(this), G(this, ir, t(this.setOnline.bind(this)));
            }
            setOnline(t) {
                N(this, Hs) !== t &&
                    (G(this, Hs, t),
                    this.listeners.forEach((r) => {
                        r(t);
                    }));
            }
            isOnline() {
                return N(this, Hs);
            }
        }),
        (Hs = new WeakMap()),
        (ir = new WeakMap()),
        (Ks = new WeakMap()),
        $y),
    Rl = new NA();
function LA(e) {
    return Math.min(1e3 * 2 ** e, 3e4);
}
function Mw(e) {
    return (e ?? "online") === "online" ? Rl.isOnline() : !0;
}
var Df = class extends Error {
    constructor(e) {
        super("CancelledError"),
            (this.revert = e == null ? void 0 : e.revert),
            (this.silent = e == null ? void 0 : e.silent);
    }
};
function Nw(e) {
    let t = !1,
        n = 0,
        r;
    const s = AA(),
        i = () => s.status !== "pending",
        o = (p) => {
            var x;
            if (!i()) {
                const m = new Df(p);
                d(m), (x = e.onCancel) == null || x.call(e, m);
            }
        },
        a = () => {
            t = !0;
        },
        l = () => {
            t = !1;
        },
        u = () => Pw.isFocused() && (e.networkMode === "always" || Rl.isOnline()) && e.canRun(),
        c = () => Mw(e.networkMode) && e.canRun(),
        f = (p) => {
            i() || (r == null || r(), s.resolve(p));
        },
        d = (p) => {
            i() || (r == null || r(), s.reject(p));
        },
        h = () =>
            new Promise((p) => {
                var x;
                (r = (m) => {
                    (i() || u()) && p(m);
                }),
                    (x = e.onPause) == null || x.call(e);
            }).then(() => {
                var p;
                (r = void 0), i() || (p = e.onContinue) == null || p.call(e);
            }),
        y = () => {
            if (i()) return;
            let p;
            const x = n === 0 ? e.initialPromise : void 0;
            try {
                p = x ?? e.fn();
            } catch (m) {
                p = Promise.reject(m);
            }
            Promise.resolve(p)
                .then(f)
                .catch((m) => {
                    var T;
                    if (i()) return;
                    const g = e.retry ?? (Rw.isServer() ? 0 : 3),
                        v = e.retryDelay ?? LA,
                        S = typeof v == "function" ? v(n, m) : v,
                        C = g === !0 || (typeof g == "number" && n < g) || (typeof g == "function" && g(n, m));
                    if (t || !C) {
                        d(m);
                        return;
                    }
                    n++,
                        (T = e.onFail) == null || T.call(e, n, m),
                        CA(S)
                            .then(() => (u() ? void 0 : h()))
                            .then(() => {
                                t ? d(m) : y();
                            });
                });
        };
    return {
        promise: s,
        status: () => s.status,
        cancel: o,
        continue: () => (r == null || r(), s),
        cancelRetry: a,
        continueRetry: l,
        canStart: c,
        start: () => (c() ? y() : h().then(y), s),
    };
}
var Gr,
    Uy,
    Lw =
        ((Uy = class {
            constructor() {
                ee(this, Gr);
            }
            destroy() {
                this.clearGcTimeout();
            }
            scheduleGc() {
                this.clearGcTimeout(),
                    xA(this.gcTime) &&
                        G(
                            this,
                            Gr,
                            Mf.setTimeout(() => {
                                this.optionalRemove();
                            }, this.gcTime)
                        );
            }
            updateGcTime(e) {
                this.gcTime = Math.max(this.gcTime || 0, e ?? (Rw.isServer() ? 1 / 0 : 5 * 60 * 1e3));
            }
            clearGcTimeout() {
                N(this, Gr) !== void 0 && (Mf.clearTimeout(N(this, Gr)), G(this, Gr, void 0));
            }
        }),
        (Gr = new WeakMap()),
        Uy);
function DA(e) {
    return {
        onFetch: (t, n) => {
            var c, f, d, h, y;
            const r = t.options,
                s =
                    (d = (f = (c = t.fetchOptions) == null ? void 0 : c.meta) == null ? void 0 : f.fetchMore) == null
                        ? void 0
                        : d.direction,
                i = ((h = t.state.data) == null ? void 0 : h.pages) || [],
                o = ((y = t.state.data) == null ? void 0 : y.pageParams) || [];
            let a = { pages: [], pageParams: [] },
                l = 0;
            const u = async () => {
                let p = !1;
                const x = (v) => {
                        kA(
                            v,
                            () => t.signal,
                            () => (p = !0)
                        );
                    },
                    m = Aw(t.options, t.fetchOptions),
                    g = async (v, S, C) => {
                        if (p) return Promise.reject(t.signal.reason);
                        if (S == null && v.pages.length) return Promise.resolve(v);
                        const b = (() => {
                                const L = {
                                    client: t.client,
                                    queryKey: t.queryKey,
                                    pageParam: S,
                                    direction: C ? "backward" : "forward",
                                    meta: t.options.meta,
                                };
                                return x(L), L;
                            })(),
                            P = await m(b),
                            { maxPages: R } = t.options,
                            k = C ? PA : TA;
                        return { pages: k(v.pages, P, R), pageParams: k(v.pageParams, S, R) };
                    };
                if (s && i.length) {
                    const v = s === "backward",
                        S = v ? OA : Xm,
                        C = { pages: i, pageParams: o },
                        T = S(r, C);
                    a = await g(C, T, v);
                } else {
                    const v = e ?? i.length;
                    do {
                        const S = l === 0 ? (o[0] ?? r.initialPageParam) : Xm(r, a);
                        if (l > 0 && S == null) break;
                        (a = await g(a, S)), l++;
                    } while (l < v);
                }
                return a;
            };
            t.options.persister
                ? (t.fetchFn = () => {
                      var p, x;
                      return (x = (p = t.options).persister) == null
                          ? void 0
                          : x.call(
                                p,
                                u,
                                { client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
                                n
                            );
                  })
                : (t.fetchFn = u);
        },
    };
}
function Xm(e, { pages: t, pageParams: n }) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function OA(e, { pages: t, pageParams: n }) {
    var r;
    return t.length > 0 ? ((r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n)) : void 0;
}
var Gs,
    Qr,
    Qs,
    At,
    Yr,
    Ie,
    Oo,
    Xr,
    vt,
    Dw,
    kn,
    Wy,
    jA =
        ((Wy = class extends Lw {
            constructor(t) {
                super();
                ee(this, vt);
                ee(this, Gs);
                ee(this, Qr);
                ee(this, Qs);
                ee(this, At);
                ee(this, Yr);
                ee(this, Ie);
                ee(this, Oo);
                ee(this, Xr);
                G(this, Xr, !1),
                    G(this, Oo, t.defaultOptions),
                    this.setOptions(t.options),
                    (this.observers = []),
                    G(this, Yr, t.client),
                    G(this, At, N(this, Yr).getQueryCache()),
                    (this.queryKey = t.queryKey),
                    (this.queryHash = t.queryHash),
                    G(this, Qr, Zm(this.options)),
                    (this.state = t.state ?? N(this, Qr)),
                    this.scheduleGc();
            }
            get meta() {
                return this.options.meta;
            }
            get queryType() {
                return N(this, Gs);
            }
            get promise() {
                var t;
                return (t = N(this, Ie)) == null ? void 0 : t.promise;
            }
            setOptions(t) {
                if (
                    ((this.options = { ...N(this, Oo), ...t }),
                    t != null && t._type && G(this, Gs, t._type),
                    this.updateGcTime(this.options.gcTime),
                    this.state && this.state.data === void 0)
                ) {
                    const n = Zm(this.options);
                    n.data !== void 0 && (this.setState(qm(n.data, n.dataUpdatedAt)), G(this, Qr, n));
                }
            }
            optionalRemove() {
                !this.observers.length && this.state.fetchStatus === "idle" && N(this, At).remove(this);
            }
            setData(t, n) {
                const r = bA(this.state.data, t, this.options);
                return (
                    ze(this, vt, kn).call(this, {
                        data: r,
                        type: "success",
                        dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                        manual: n == null ? void 0 : n.manual,
                    }),
                    r
                );
            }
            setState(t) {
                ze(this, vt, kn).call(this, { type: "setState", state: t });
            }
            cancel(t) {
                var r, s;
                const n = (r = N(this, Ie)) == null ? void 0 : r.promise;
                return (s = N(this, Ie)) == null || s.cancel(t), n ? n.then(Yt).catch(Yt) : Promise.resolve();
            }
            destroy() {
                super.destroy(), this.cancel({ silent: !0 });
            }
            get resetState() {
                return N(this, Qr);
            }
            reset() {
                this.destroy(), this.setState(this.resetState);
            }
            isActive() {
                return this.observers.some((t) => SA(t.options.enabled, this) !== !1);
            }
            isDisabled() {
                return this.getObserversCount() > 0
                    ? !this.isActive()
                    : this.options.queryFn === bh || !this.isFetched();
            }
            isFetched() {
                return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
            }
            isStatic() {
                return this.getObserversCount() > 0
                    ? this.observers.some((t) => Nf(t.options.staleTime, this) === "static")
                    : !1;
            }
            isStale() {
                return this.getObserversCount() > 0
                    ? this.observers.some((t) => t.getCurrentResult().isStale)
                    : this.state.data === void 0 || this.state.isInvalidated;
            }
            isStaleByTime(t = 0) {
                return this.state.data === void 0
                    ? !0
                    : t === "static"
                      ? !1
                      : this.state.isInvalidated
                        ? !0
                        : !wA(this.state.dataUpdatedAt, t);
            }
            onFocus() {
                var n;
                const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
                t == null || t.refetch({ cancelRefetch: !1 }), (n = N(this, Ie)) == null || n.continue();
            }
            onOnline() {
                var n;
                const t = this.observers.find((r) => r.shouldFetchOnReconnect());
                t == null || t.refetch({ cancelRefetch: !1 }), (n = N(this, Ie)) == null || n.continue();
            }
            addObserver(t) {
                this.observers.includes(t) ||
                    (this.observers.push(t),
                    this.clearGcTimeout(),
                    N(this, At).notify({ type: "observerAdded", query: this, observer: t }));
            }
            removeObserver(t) {
                this.observers.includes(t) &&
                    ((this.observers = this.observers.filter((n) => n !== t)),
                    this.observers.length ||
                        (N(this, Ie) &&
                            (N(this, Xr) || ze(this, vt, Dw).call(this)
                                ? N(this, Ie).cancel({ revert: !0 })
                                : N(this, Ie).cancelRetry()),
                        this.scheduleGc()),
                    N(this, At).notify({ type: "observerRemoved", query: this, observer: t }));
            }
            getObserversCount() {
                return this.observers.length;
            }
            invalidate() {
                this.state.isInvalidated || ze(this, vt, kn).call(this, { type: "invalidate" });
            }
            async fetch(t, n) {
                var u, c, f, d, h, y, p, x, m, g, v;
                if (
                    this.state.fetchStatus !== "idle" &&
                    ((u = N(this, Ie)) == null ? void 0 : u.status()) !== "rejected"
                ) {
                    if (this.state.data !== void 0 && n != null && n.cancelRefetch) this.cancel({ silent: !0 });
                    else if (N(this, Ie)) return N(this, Ie).continueRetry(), N(this, Ie).promise;
                }
                if ((t && this.setOptions(t), !this.options.queryFn)) {
                    const S = this.observers.find((C) => C.options.queryFn);
                    S && this.setOptions(S.options);
                }
                const r = new AbortController(),
                    s = (S) => {
                        Object.defineProperty(S, "signal", { enumerable: !0, get: () => (G(this, Xr, !0), r.signal) });
                    },
                    i = () => {
                        const S = Aw(this.options, n),
                            T = (() => {
                                const b = { client: N(this, Yr), queryKey: this.queryKey, meta: this.meta };
                                return s(b), b;
                            })();
                        return G(this, Xr, !1), this.options.persister ? this.options.persister(S, T, this) : S(T);
                    },
                    a = (() => {
                        const S = {
                            fetchOptions: n,
                            options: this.options,
                            queryKey: this.queryKey,
                            client: N(this, Yr),
                            state: this.state,
                            fetchFn: i,
                        };
                        return s(S), S;
                    })(),
                    l = N(this, Gs) === "infinite" ? DA(this.options.pages) : this.options.behavior;
                l == null || l.onFetch(a, this),
                    G(this, Qs, this.state),
                    (this.state.fetchStatus === "idle" ||
                        this.state.fetchMeta !== ((c = a.fetchOptions) == null ? void 0 : c.meta)) &&
                        ze(this, vt, kn).call(this, {
                            type: "fetch",
                            meta: (f = a.fetchOptions) == null ? void 0 : f.meta,
                        }),
                    G(
                        this,
                        Ie,
                        Nw({
                            initialPromise: n == null ? void 0 : n.initialPromise,
                            fn: a.fetchFn,
                            onCancel: (S) => {
                                S instanceof Df && S.revert && this.setState({ ...N(this, Qs), fetchStatus: "idle" }),
                                    r.abort();
                            },
                            onFail: (S, C) => {
                                ze(this, vt, kn).call(this, { type: "failed", failureCount: S, error: C });
                            },
                            onPause: () => {
                                ze(this, vt, kn).call(this, { type: "pause" });
                            },
                            onContinue: () => {
                                ze(this, vt, kn).call(this, { type: "continue" });
                            },
                            retry: a.options.retry,
                            retryDelay: a.options.retryDelay,
                            networkMode: a.options.networkMode,
                            canRun: () => !0,
                        })
                    );
                try {
                    const S = await N(this, Ie).start();
                    if (S === void 0) throw new Error(`${this.queryHash} data is undefined`);
                    return (
                        this.setData(S),
                        (h = (d = N(this, At).config).onSuccess) == null || h.call(d, S, this),
                        (p = (y = N(this, At).config).onSettled) == null || p.call(y, S, this.state.error, this),
                        S
                    );
                } catch (S) {
                    if (S instanceof Df) {
                        if (S.silent) return N(this, Ie).promise;
                        if (S.revert) {
                            if (this.state.data === void 0) throw S;
                            return this.state.data;
                        }
                    }
                    throw (
                        (ze(this, vt, kn).call(this, { type: "error", error: S }),
                        (m = (x = N(this, At).config).onError) == null || m.call(x, S, this),
                        (v = (g = N(this, At).config).onSettled) == null || v.call(g, this.state.data, S, this),
                        S)
                    );
                } finally {
                    this.scheduleGc();
                }
            }
        }),
        (Gs = new WeakMap()),
        (Qr = new WeakMap()),
        (Qs = new WeakMap()),
        (At = new WeakMap()),
        (Yr = new WeakMap()),
        (Ie = new WeakMap()),
        (Oo = new WeakMap()),
        (Xr = new WeakMap()),
        (vt = new WeakSet()),
        (Dw = function () {
            return this.state.fetchStatus === "paused" && this.state.status === "pending";
        }),
        (kn = function (t) {
            const n = (r) => {
                switch (t.type) {
                    case "failed":
                        return { ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
                    case "pause":
                        return { ...r, fetchStatus: "paused" };
                    case "continue":
                        return { ...r, fetchStatus: "fetching" };
                    case "fetch":
                        return { ...r, ...IA(r.data, this.options), fetchMeta: t.meta ?? null };
                    case "success":
                        const s = {
                            ...r,
                            ...qm(t.data, t.dataUpdatedAt),
                            dataUpdateCount: r.dataUpdateCount + 1,
                            ...(!t.manual && { fetchStatus: "idle", fetchFailureCount: 0, fetchFailureReason: null }),
                        };
                        return G(this, Qs, t.manual ? s : void 0), s;
                    case "error":
                        const i = t.error;
                        return {
                            ...r,
                            error: i,
                            errorUpdateCount: r.errorUpdateCount + 1,
                            errorUpdatedAt: Date.now(),
                            fetchFailureCount: r.fetchFailureCount + 1,
                            fetchFailureReason: i,
                            fetchStatus: "idle",
                            status: "error",
                            isInvalidated: !0,
                        };
                    case "invalidate":
                        return { ...r, isInvalidated: !0 };
                    case "setState":
                        return { ...r, ...t.state };
                }
            };
            (this.state = n(this.state)),
                et.batch(() => {
                    this.observers.forEach((r) => {
                        r.onQueryUpdate();
                    }),
                        N(this, At).notify({ query: this, type: "updated", action: t });
                });
        }),
        Wy);
function IA(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Mw(t.networkMode) ? "fetching" : "paused",
        ...(e === void 0 && { error: null, status: "pending" }),
    };
}
function qm(e, t) {
    return { data: e, dataUpdatedAt: t ?? Date.now(), error: null, isInvalidated: !1, status: "success" };
}
function Zm(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? (typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt) : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? (r ?? Date.now()) : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle",
    };
}
var jo,
    pn,
    Ge,
    qr,
    mn,
    qn,
    Hy,
    FA =
        ((Hy = class extends Lw {
            constructor(t) {
                super();
                ee(this, mn);
                ee(this, jo);
                ee(this, pn);
                ee(this, Ge);
                ee(this, qr);
                G(this, jo, t.client),
                    (this.mutationId = t.mutationId),
                    G(this, Ge, t.mutationCache),
                    G(this, pn, []),
                    (this.state = t.state || VA()),
                    this.setOptions(t.options),
                    this.scheduleGc();
            }
            setOptions(t) {
                (this.options = t), this.updateGcTime(this.options.gcTime);
            }
            get meta() {
                return this.options.meta;
            }
            addObserver(t) {
                N(this, pn).includes(t) ||
                    (N(this, pn).push(t),
                    this.clearGcTimeout(),
                    N(this, Ge).notify({ type: "observerAdded", mutation: this, observer: t }));
            }
            removeObserver(t) {
                G(
                    this,
                    pn,
                    N(this, pn).filter((n) => n !== t)
                ),
                    this.scheduleGc(),
                    N(this, Ge).notify({ type: "observerRemoved", mutation: this, observer: t });
            }
            optionalRemove() {
                N(this, pn).length || (this.state.status === "pending" ? this.scheduleGc() : N(this, Ge).remove(this));
            }
            continue() {
                var t;
                return ((t = N(this, qr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables);
            }
            async execute(t) {
                var o, a, l, u, c, f, d, h, y, p, x, m, g, v, S, C, T, b;
                const n = () => {
                        ze(this, mn, qn).call(this, { type: "continue" });
                    },
                    r = { client: N(this, jo), meta: this.options.meta, mutationKey: this.options.mutationKey };
                G(
                    this,
                    qr,
                    Nw({
                        fn: () =>
                            this.options.mutationFn
                                ? this.options.mutationFn(t, r)
                                : Promise.reject(new Error("No mutationFn found")),
                        onFail: (P, R) => {
                            ze(this, mn, qn).call(this, { type: "failed", failureCount: P, error: R });
                        },
                        onPause: () => {
                            ze(this, mn, qn).call(this, { type: "pause" });
                        },
                        onContinue: n,
                        retry: this.options.retry ?? 0,
                        retryDelay: this.options.retryDelay,
                        networkMode: this.options.networkMode,
                        canRun: () => N(this, Ge).canRun(this),
                    })
                );
                const s = this.state.status === "pending",
                    i = !N(this, qr).canStart();
                try {
                    if (s) n();
                    else {
                        ze(this, mn, qn).call(this, { type: "pending", variables: t, isPaused: i }),
                            N(this, Ge).config.onMutate && (await N(this, Ge).config.onMutate(t, this, r));
                        const R = await ((a = (o = this.options).onMutate) == null ? void 0 : a.call(o, t, r));
                        R !== this.state.context &&
                            ze(this, mn, qn).call(this, { type: "pending", context: R, variables: t, isPaused: i });
                    }
                    const P = await N(this, qr).start();
                    return (
                        await ((u = (l = N(this, Ge).config).onSuccess) == null
                            ? void 0
                            : u.call(l, P, t, this.state.context, this, r)),
                        await ((f = (c = this.options).onSuccess) == null
                            ? void 0
                            : f.call(c, P, t, this.state.context, r)),
                        await ((h = (d = N(this, Ge).config).onSettled) == null
                            ? void 0
                            : h.call(d, P, null, this.state.variables, this.state.context, this, r)),
                        await ((p = (y = this.options).onSettled) == null
                            ? void 0
                            : p.call(y, P, null, t, this.state.context, r)),
                        ze(this, mn, qn).call(this, { type: "success", data: P }),
                        P
                    );
                } catch (P) {
                    try {
                        await ((m = (x = N(this, Ge).config).onError) == null
                            ? void 0
                            : m.call(x, P, t, this.state.context, this, r));
                    } catch (R) {
                        Promise.reject(R);
                    }
                    try {
                        await ((v = (g = this.options).onError) == null
                            ? void 0
                            : v.call(g, P, t, this.state.context, r));
                    } catch (R) {
                        Promise.reject(R);
                    }
                    try {
                        await ((C = (S = N(this, Ge).config).onSettled) == null
                            ? void 0
                            : C.call(S, void 0, P, this.state.variables, this.state.context, this, r));
                    } catch (R) {
                        Promise.reject(R);
                    }
                    try {
                        await ((b = (T = this.options).onSettled) == null
                            ? void 0
                            : b.call(T, void 0, P, t, this.state.context, r));
                    } catch (R) {
                        Promise.reject(R);
                    }
                    throw (ze(this, mn, qn).call(this, { type: "error", error: P }), P);
                } finally {
                    N(this, Ge).runNext(this);
                }
            }
        }),
        (jo = new WeakMap()),
        (pn = new WeakMap()),
        (Ge = new WeakMap()),
        (qr = new WeakMap()),
        (mn = new WeakSet()),
        (qn = function (t) {
            const n = (r) => {
                switch (t.type) {
                    case "failed":
                        return { ...r, failureCount: t.failureCount, failureReason: t.error };
                    case "pause":
                        return { ...r, isPaused: !0 };
                    case "continue":
                        return { ...r, isPaused: !1 };
                    case "pending":
                        return {
                            ...r,
                            context: t.context,
                            data: void 0,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            isPaused: t.isPaused,
                            status: "pending",
                            variables: t.variables,
                            submittedAt: Date.now(),
                        };
                    case "success":
                        return {
                            ...r,
                            data: t.data,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            status: "success",
                            isPaused: !1,
                        };
                    case "error":
                        return {
                            ...r,
                            data: void 0,
                            error: t.error,
                            failureCount: r.failureCount + 1,
                            failureReason: t.error,
                            isPaused: !1,
                            status: "error",
                        };
                }
            };
            (this.state = n(this.state)),
                et.batch(() => {
                    N(this, pn).forEach((r) => {
                        r.onMutationUpdate(t);
                    }),
                        N(this, Ge).notify({ mutation: this, type: "updated", action: t });
                });
        }),
        Hy);
function VA() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0,
    };
}
var Nn,
    Xt,
    Io,
    Ky,
    _A =
        ((Ky = class extends pu {
            constructor(t = {}) {
                super();
                ee(this, Nn);
                ee(this, Xt);
                ee(this, Io);
                (this.config = t), G(this, Nn, new Set()), G(this, Xt, new Map()), G(this, Io, 0);
            }
            build(t, n, r) {
                const s = new FA({
                    client: t,
                    mutationCache: this,
                    mutationId: ++ra(this, Io)._,
                    options: t.defaultMutationOptions(n),
                    state: r,
                });
                return this.add(s), s;
            }
            add(t) {
                N(this, Nn).add(t);
                const n = Pa(t);
                if (typeof n == "string") {
                    const r = N(this, Xt).get(n);
                    r ? r.push(t) : N(this, Xt).set(n, [t]);
                }
                this.notify({ type: "added", mutation: t });
            }
            remove(t) {
                if (N(this, Nn).delete(t)) {
                    const n = Pa(t);
                    if (typeof n == "string") {
                        const r = N(this, Xt).get(n);
                        if (r)
                            if (r.length > 1) {
                                const s = r.indexOf(t);
                                s !== -1 && r.splice(s, 1);
                            } else r[0] === t && N(this, Xt).delete(n);
                    }
                }
                this.notify({ type: "removed", mutation: t });
            }
            canRun(t) {
                const n = Pa(t);
                if (typeof n == "string") {
                    const r = N(this, Xt).get(n),
                        s = r == null ? void 0 : r.find((i) => i.state.status === "pending");
                    return !s || s === t;
                } else return !0;
            }
            runNext(t) {
                var r;
                const n = Pa(t);
                if (typeof n == "string") {
                    const s = (r = N(this, Xt).get(n)) == null ? void 0 : r.find((i) => i !== t && i.state.isPaused);
                    return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
                } else return Promise.resolve();
            }
            clear() {
                et.batch(() => {
                    N(this, Nn).forEach((t) => {
                        this.notify({ type: "removed", mutation: t });
                    }),
                        N(this, Nn).clear(),
                        N(this, Xt).clear();
                });
            }
            getAll() {
                return Array.from(N(this, Nn));
            }
            find(t) {
                const n = { exact: !0, ...t };
                return this.getAll().find((r) => Gm(n, r));
            }
            findAll(t = {}) {
                return this.getAll().filter((n) => Gm(t, n));
            }
            notify(t) {
                et.batch(() => {
                    this.listeners.forEach((n) => {
                        n(t);
                    });
                });
            }
            resumePausedMutations() {
                const t = this.getAll().filter((n) => n.state.isPaused);
                return et.batch(() => Promise.all(t.map((n) => n.continue().catch(Yt))));
            }
        }),
        (Nn = new WeakMap()),
        (Xt = new WeakMap()),
        (Io = new WeakMap()),
        Ky);
function Pa(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id;
}
var gn,
    Gy,
    zA =
        ((Gy = class extends pu {
            constructor(t = {}) {
                super();
                ee(this, gn);
                (this.config = t), G(this, gn, new Map());
            }
            build(t, n, r) {
                const s = n.queryKey,
                    i = n.queryHash ?? Ch(s, n);
                let o = this.get(i);
                return (
                    o ||
                        ((o = new jA({
                            client: t,
                            queryKey: s,
                            queryHash: i,
                            options: t.defaultQueryOptions(n),
                            state: r,
                            defaultOptions: t.getQueryDefaults(s),
                        })),
                        this.add(o)),
                    o
                );
            }
            add(t) {
                N(this, gn).has(t.queryHash) ||
                    (N(this, gn).set(t.queryHash, t), this.notify({ type: "added", query: t }));
            }
            remove(t) {
                const n = N(this, gn).get(t.queryHash);
                n &&
                    (t.destroy(),
                    n === t && N(this, gn).delete(t.queryHash),
                    this.notify({ type: "removed", query: t }));
            }
            clear() {
                et.batch(() => {
                    this.getAll().forEach((t) => {
                        this.remove(t);
                    });
                });
            }
            get(t) {
                return N(this, gn).get(t);
            }
            getAll() {
                return [...N(this, gn).values()];
            }
            find(t) {
                const n = { exact: !0, ...t };
                return this.getAll().find((r) => Km(n, r));
            }
            findAll(t = {}) {
                const n = this.getAll();
                return Object.keys(t).length > 0 ? n.filter((r) => Km(t, r)) : n;
            }
            notify(t) {
                et.batch(() => {
                    this.listeners.forEach((n) => {
                        n(t);
                    });
                });
            }
            onFocus() {
                et.batch(() => {
                    this.getAll().forEach((t) => {
                        t.onFocus();
                    });
                });
            }
            onOnline() {
                et.batch(() => {
                    this.getAll().forEach((t) => {
                        t.onOnline();
                    });
                });
            }
        }),
        (gn = new WeakMap()),
        Gy),
    Ee,
    or,
    ar,
    Ys,
    Xs,
    lr,
    qs,
    Zs,
    Qy,
    BA =
        ((Qy = class {
            constructor(e = {}) {
                ee(this, Ee);
                ee(this, or);
                ee(this, ar);
                ee(this, Ys);
                ee(this, Xs);
                ee(this, lr);
                ee(this, qs);
                ee(this, Zs);
                G(this, Ee, e.queryCache || new zA()),
                    G(this, or, e.mutationCache || new _A()),
                    G(this, ar, e.defaultOptions || {}),
                    G(this, Ys, new Map()),
                    G(this, Xs, new Map()),
                    G(this, lr, 0);
            }
            mount() {
                ra(this, lr)._++,
                    N(this, lr) === 1 &&
                        (G(
                            this,
                            qs,
                            Pw.subscribe(async (e) => {
                                e && (await this.resumePausedMutations(), N(this, Ee).onFocus());
                            })
                        ),
                        G(
                            this,
                            Zs,
                            Rl.subscribe(async (e) => {
                                e && (await this.resumePausedMutations(), N(this, Ee).onOnline());
                            })
                        ));
            }
            unmount() {
                var e, t;
                ra(this, lr)._--,
                    N(this, lr) === 0 &&
                        ((e = N(this, qs)) == null || e.call(this),
                        G(this, qs, void 0),
                        (t = N(this, Zs)) == null || t.call(this),
                        G(this, Zs, void 0));
            }
            isFetching(e) {
                return N(this, Ee).findAll({ ...e, fetchStatus: "fetching" }).length;
            }
            isMutating(e) {
                return N(this, or).findAll({ ...e, status: "pending" }).length;
            }
            getQueryData(e) {
                var n;
                const t = this.defaultQueryOptions({ queryKey: e });
                return (n = N(this, Ee).get(t.queryHash)) == null ? void 0 : n.state.data;
            }
            ensureQueryData(e) {
                const t = this.defaultQueryOptions(e),
                    n = N(this, Ee).build(this, t),
                    r = n.state.data;
                return r === void 0
                    ? this.fetchQuery(e)
                    : (e.revalidateIfStale && n.isStaleByTime(Nf(t.staleTime, n)) && this.prefetchQuery(t),
                      Promise.resolve(r));
            }
            getQueriesData(e) {
                return N(this, Ee)
                    .findAll(e)
                    .map(({ queryKey: t, state: n }) => {
                        const r = n.data;
                        return [t, r];
                    });
            }
            setQueryData(e, t, n) {
                const r = this.defaultQueryOptions({ queryKey: e }),
                    s = N(this, Ee).get(r.queryHash),
                    i = s == null ? void 0 : s.state.data,
                    o = vA(t, i);
                if (o !== void 0)
                    return N(this, Ee)
                        .build(this, r)
                        .setData(o, { ...n, manual: !0 });
            }
            setQueriesData(e, t, n) {
                return et.batch(() =>
                    N(this, Ee)
                        .findAll(e)
                        .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
                );
            }
            getQueryState(e) {
                var n;
                const t = this.defaultQueryOptions({ queryKey: e });
                return (n = N(this, Ee).get(t.queryHash)) == null ? void 0 : n.state;
            }
            removeQueries(e) {
                const t = N(this, Ee);
                et.batch(() => {
                    t.findAll(e).forEach((n) => {
                        t.remove(n);
                    });
                });
            }
            resetQueries(e, t) {
                const n = N(this, Ee);
                return et.batch(
                    () => (
                        n.findAll(e).forEach((r) => {
                            r.reset();
                        }),
                        this.refetchQueries({ type: "active", ...e }, t)
                    )
                );
            }
            cancelQueries(e, t = {}) {
                const n = { revert: !0, ...t },
                    r = et.batch(() =>
                        N(this, Ee)
                            .findAll(e)
                            .map((s) => s.cancel(n))
                    );
                return Promise.all(r).then(Yt).catch(Yt);
            }
            invalidateQueries(e, t = {}) {
                return et.batch(
                    () => (
                        N(this, Ee)
                            .findAll(e)
                            .forEach((n) => {
                                n.invalidate();
                            }),
                        (e == null ? void 0 : e.refetchType) === "none"
                            ? Promise.resolve()
                            : this.refetchQueries(
                                  {
                                      ...e,
                                      type:
                                          (e == null ? void 0 : e.refetchType) ??
                                          (e == null ? void 0 : e.type) ??
                                          "active",
                                  },
                                  t
                              )
                    )
                );
            }
            refetchQueries(e, t = {}) {
                const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
                    r = et.batch(() =>
                        N(this, Ee)
                            .findAll(e)
                            .filter((s) => !s.isDisabled() && !s.isStatic())
                            .map((s) => {
                                let i = s.fetch(void 0, n);
                                return (
                                    n.throwOnError || (i = i.catch(Yt)),
                                    s.state.fetchStatus === "paused" ? Promise.resolve() : i
                                );
                            })
                    );
                return Promise.all(r).then(Yt);
            }
            fetchQuery(e) {
                const t = this.defaultQueryOptions(e);
                t.retry === void 0 && (t.retry = !1);
                const n = N(this, Ee).build(this, t);
                return n.isStaleByTime(Nf(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
            }
            prefetchQuery(e) {
                return this.fetchQuery(e).then(Yt).catch(Yt);
            }
            fetchInfiniteQuery(e) {
                return (e._type = "infinite"), this.fetchQuery(e);
            }
            prefetchInfiniteQuery(e) {
                return this.fetchInfiniteQuery(e).then(Yt).catch(Yt);
            }
            ensureInfiniteQueryData(e) {
                return (e._type = "infinite"), this.ensureQueryData(e);
            }
            resumePausedMutations() {
                return Rl.isOnline() ? N(this, or).resumePausedMutations() : Promise.resolve();
            }
            getQueryCache() {
                return N(this, Ee);
            }
            getMutationCache() {
                return N(this, or);
            }
            getDefaultOptions() {
                return N(this, ar);
            }
            setDefaultOptions(e) {
                G(this, ar, e);
            }
            setQueryDefaults(e, t) {
                N(this, Ys).set(bo(e), { queryKey: e, defaultOptions: t });
            }
            getQueryDefaults(e) {
                const t = [...N(this, Ys).values()],
                    n = {};
                return (
                    t.forEach((r) => {
                        To(e, r.queryKey) && Object.assign(n, r.defaultOptions);
                    }),
                    n
                );
            }
            setMutationDefaults(e, t) {
                N(this, Xs).set(bo(e), { mutationKey: e, defaultOptions: t });
            }
            getMutationDefaults(e) {
                const t = [...N(this, Xs).values()],
                    n = {};
                return (
                    t.forEach((r) => {
                        To(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
                    }),
                    n
                );
            }
            defaultQueryOptions(e) {
                if (e._defaulted) return e;
                const t = { ...N(this, ar).queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
                return (
                    t.queryHash || (t.queryHash = Ch(t.queryKey, t)),
                    t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
                    t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
                    !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
                    t.queryFn === bh && (t.enabled = !1),
                    t
                );
            }
            defaultMutationOptions(e) {
                return e != null && e._defaulted
                    ? e
                    : {
                          ...N(this, ar).mutations,
                          ...((e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey)),
                          ...e,
                          _defaulted: !0,
                      };
            }
            clear() {
                N(this, Ee).clear(), N(this, or).clear();
            }
        }),
        (Ee = new WeakMap()),
        (or = new WeakMap()),
        (ar = new WeakMap()),
        (Ys = new WeakMap()),
        (Xs = new WeakMap()),
        (lr = new WeakMap()),
        (qs = new WeakMap()),
        (Zs = new WeakMap()),
        Qy),
    $A = w.createContext(void 0),
    UA = ({ client: e, children: t }) => (
        w.useEffect(
            () => (
                e.mount(),
                () => {
                    e.unmount();
                }
            ),
            [e]
        ),
        E.jsx($A.Provider, { value: e, children: t })
    );
/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Po() {
    return (
        (Po = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Po.apply(null, arguments)
    );
}
var fr;
(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(fr || (fr = {}));
const Jm = "popstate";
function WA(e) {
    e === void 0 && (e = {});
    function t(r, s) {
        let { pathname: i, search: o, hash: a } = r.location;
        return Of(
            "",
            { pathname: i, search: o, hash: a },
            (s.state && s.state.usr) || null,
            (s.state && s.state.key) || "default"
        );
    }
    function n(r, s) {
        return typeof s == "string" ? s : Ml(s);
    }
    return KA(t, n, null, e);
}
function Re(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Th(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}
function HA() {
    return Math.random().toString(36).substr(2, 8);
}
function eg(e, t) {
    return { usr: e.state, key: e.key, idx: t };
}
function Of(e, t, n, r) {
    return (
        n === void 0 && (n = null),
        Po(
            { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
            typeof t == "string" ? yi(t) : t,
            { state: n, key: (t && t.key) || r || HA() }
        )
    );
}
function Ml(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
        n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
    );
}
function yi(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
    }
    return t;
}
function KA(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: s = document.defaultView, v5Compat: i = !1 } = r,
        o = s.history,
        a = fr.Pop,
        l = null,
        u = c();
    u == null && ((u = 0), o.replaceState(Po({}, o.state, { idx: u }), ""));
    function c() {
        return (o.state || { idx: null }).idx;
    }
    function f() {
        a = fr.Pop;
        let x = c(),
            m = x == null ? null : x - u;
        (u = x), l && l({ action: a, location: p.location, delta: m });
    }
    function d(x, m) {
        a = fr.Push;
        let g = Of(p.location, x, m);
        u = c() + 1;
        let v = eg(g, u),
            S = p.createHref(g);
        try {
            o.pushState(v, "", S);
        } catch (C) {
            if (C instanceof DOMException && C.name === "DataCloneError") throw C;
            s.location.assign(S);
        }
        i && l && l({ action: a, location: p.location, delta: 1 });
    }
    function h(x, m) {
        a = fr.Replace;
        let g = Of(p.location, x, m);
        u = c();
        let v = eg(g, u),
            S = p.createHref(g);
        o.replaceState(v, "", S), i && l && l({ action: a, location: p.location, delta: 0 });
    }
    function y(x) {
        let m = s.location.origin !== "null" ? s.location.origin : s.location.href,
            g = typeof x == "string" ? x : Ml(x);
        return (
            (g = g.replace(/ $/, "%20")),
            Re(m, "No window.location.(origin|href) available to create URL for href: " + g),
            new URL(g, m)
        );
    }
    let p = {
        get action() {
            return a;
        },
        get location() {
            return e(s, o);
        },
        listen(x) {
            if (l) throw new Error("A history only accepts one active listener");
            return (
                s.addEventListener(Jm, f),
                (l = x),
                () => {
                    s.removeEventListener(Jm, f), (l = null);
                }
            );
        },
        createHref(x) {
            return t(s, x);
        },
        createURL: y,
        encodeLocation(x) {
            let m = y(x);
            return { pathname: m.pathname, search: m.search, hash: m.hash };
        },
        push: d,
        replace: h,
        go(x) {
            return o.go(x);
        },
    };
    return p;
}
var tg;
(function (e) {
    (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(tg || (tg = {}));
function GA(e, t, n) {
    return n === void 0 && (n = "/"), QA(e, t, n);
}
function QA(e, t, n, r) {
    let s = typeof t == "string" ? yi(t) : t,
        i = Ph(s.pathname || "/", n);
    if (i == null) return null;
    let o = Ow(e);
    YA(o);
    let a = null,
        l = a2(i);
    for (let u = 0; a == null && u < o.length; ++u) a = s2(o[u], l);
    return a;
}
function Ow(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let s = (i, o, a) => {
        let l = {
            relativePath: a === void 0 ? i.path || "" : a,
            caseSensitive: i.caseSensitive === !0,
            childrenIndex: o,
            route: i,
        };
        l.relativePath.startsWith("/") &&
            (Re(
                l.relativePath.startsWith(r),
                'Absolute route path "' +
                    l.relativePath +
                    '" nested under path ' +
                    ('"' + r + '" is not valid. An absolute child route path ') +
                    "must start with the combined path of all its parent routes."
            ),
            (l.relativePath = l.relativePath.slice(r.length)));
        let u = Sr([r, l.relativePath]),
            c = n.concat(l);
        i.children &&
            i.children.length > 0 &&
            (Re(
                i.index !== !0,
                "Index routes must not have child routes. Please remove " +
                    ('all child routes from route path "' + u + '".')
            ),
            Ow(i.children, t, c, u)),
            !(i.path == null && !i.index) && t.push({ path: u, score: n2(u, i.index), routesMeta: c });
    };
    return (
        e.forEach((i, o) => {
            var a;
            if (i.path === "" || !((a = i.path) != null && a.includes("?"))) s(i, o);
            else for (let l of jw(i.path)) s(i, o, l);
        }),
        t
    );
}
function jw(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
        s = n.endsWith("?"),
        i = n.replace(/\?$/, "");
    if (r.length === 0) return s ? [i, ""] : [i];
    let o = jw(r.join("/")),
        a = [];
    return (
        a.push(...o.map((l) => (l === "" ? i : [i, l].join("/")))),
        s && a.push(...o),
        a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
    );
}
function YA(e) {
    e.sort((t, n) =>
        t.score !== n.score
            ? n.score - t.score
            : r2(
                  t.routesMeta.map((r) => r.childrenIndex),
                  n.routesMeta.map((r) => r.childrenIndex)
              )
    );
}
const XA = /^:[\w-]+$/,
    qA = 3,
    ZA = 2,
    JA = 1,
    e2 = 10,
    t2 = -2,
    ng = (e) => e === "*";
function n2(e, t) {
    let n = e.split("/"),
        r = n.length;
    return (
        n.some(ng) && (r += t2),
        t && (r += ZA),
        n.filter((s) => !ng(s)).reduce((s, i) => s + (XA.test(i) ? qA : i === "" ? JA : e2), r)
    );
}
function r2(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, s) => r === t[s]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function s2(e, t, n) {
    let { routesMeta: r } = e,
        s = {},
        i = "/",
        o = [];
    for (let a = 0; a < r.length; ++a) {
        let l = r[a],
            u = a === r.length - 1,
            c = i === "/" ? t : t.slice(i.length) || "/",
            f = i2({ path: l.relativePath, caseSensitive: l.caseSensitive, end: u }, c),
            d = l.route;
        if (!f) return null;
        Object.assign(s, f.params),
            o.push({ params: s, pathname: Sr([i, f.pathname]), pathnameBase: d2(Sr([i, f.pathnameBase])), route: d }),
            f.pathnameBase !== "/" && (i = Sr([i, f.pathnameBase]));
    }
    return o;
}
function i2(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = o2(e.path, e.caseSensitive, e.end),
        s = t.match(n);
    if (!s) return null;
    let i = s[0],
        o = i.replace(/(.)\/+$/, "$1"),
        a = s.slice(1);
    return {
        params: r.reduce((u, c, f) => {
            let { paramName: d, isOptional: h } = c;
            if (d === "*") {
                let p = a[f] || "";
                o = i.slice(0, i.length - p.length).replace(/(.)\/+$/, "$1");
            }
            const y = a[f];
            return h && !y ? (u[d] = void 0) : (u[d] = (y || "").replace(/%2F/g, "/")), u;
        }, {}),
        pathname: i,
        pathnameBase: o,
        pattern: e,
    };
}
function o2(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        Th(
            e === "*" || !e.endsWith("*") || e.endsWith("/*"),
            'Route path "' +
                e +
                '" will be treated as if it were ' +
                ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
                "always follow a `/` in the pattern. To get rid of this warning, " +
                ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
        );
    let r = [],
        s =
            "^" +
            e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (o, a, l) => (r.push({ paramName: a, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)")
                );
    return (
        e.endsWith("*")
            ? (r.push({ paramName: "*" }), (s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : n
              ? (s += "\\/*$")
              : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"),
        [new RegExp(s, t ? void 0 : "i"), r]
    );
}
function a2(e) {
    try {
        return e
            .split("/")
            .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
            .join("/");
    } catch (t) {
        return (
            Th(
                !1,
                'The URL path "' +
                    e +
                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
                    ("encoding (" + t + ").")
            ),
            e
        );
    }
}
function Ph(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
}
const l2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    u2 = (e) => l2.test(e);
function c2(e, t) {
    t === void 0 && (t = "/");
    let { pathname: n, search: r = "", hash: s = "" } = typeof e == "string" ? yi(e) : e,
        i;
    if (n)
        if (u2(n)) i = n;
        else {
            if (n.includes("//")) {
                let o = n;
                (n = Vw(n)), Th(!1, "Pathnames cannot have embedded double slashes - normalizing " + (o + " -> " + n));
            }
            n.startsWith("/") ? (i = rg(n.substring(1), "/")) : (i = rg(n, t));
        }
    else i = t;
    return { pathname: i, search: h2(r), hash: p2(s) };
}
function rg(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
        e.split("/").forEach((s) => {
            s === ".." ? n.length > 1 && n.pop() : s !== "." && n.push(s);
        }),
        n.length > 1 ? n.join("/") : "/"
    );
}
function lc(e, t, n, r) {
    return (
        "Cannot include a '" +
        e +
        "' character in a manually specified " +
        ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") +
        ("`to." + n + "` field. Alternatively you may provide the full path as ") +
        'a string in <Link to="..."> and the router will parse it for you.'
    );
}
function f2(e) {
    return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function Iw(e, t) {
    let n = f2(e);
    return t ? n.map((r, s) => (s === n.length - 1 ? r.pathname : r.pathnameBase)) : n.map((r) => r.pathnameBase);
}
function Fw(e, t, n, r) {
    r === void 0 && (r = !1);
    let s;
    typeof e == "string"
        ? (s = yi(e))
        : ((s = Po({}, e)),
          Re(!s.pathname || !s.pathname.includes("?"), lc("?", "pathname", "search", s)),
          Re(!s.pathname || !s.pathname.includes("#"), lc("#", "pathname", "hash", s)),
          Re(!s.search || !s.search.includes("#"), lc("#", "search", "hash", s)));
    let i = e === "" || s.pathname === "",
        o = i ? "/" : s.pathname,
        a;
    if (o == null) a = n;
    else {
        let f = t.length - 1;
        if (!r && o.startsWith("..")) {
            let d = o.split("/");
            for (; d[0] === ".."; ) d.shift(), (f -= 1);
            s.pathname = d.join("/");
        }
        a = f >= 0 ? t[f] : "/";
    }
    let l = c2(s, a),
        u = o && o !== "/" && o.endsWith("/"),
        c = (i || o === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Vw = (e) => e.replace(/\/\/+/g, "/"),
    Sr = (e) => Vw(e.join("/")),
    d2 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    h2 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    p2 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function m2(e) {
    return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.internal == "boolean" &&
        "data" in e
    );
}
const _w = ["post", "put", "patch", "delete"];
new Set(_w);
const g2 = ["get", ..._w];
new Set(g2);
/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ko() {
    return (
        (ko = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        ko.apply(null, arguments)
    );
}
const kh = w.createContext(null),
    y2 = w.createContext(null),
    ds = w.createContext(null),
    mu = w.createContext(null),
    hs = w.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    zw = w.createContext(null);
function v2(e, t) {
    let { relative: n } = t === void 0 ? {} : t;
    Ho() || Re(!1);
    let { basename: r, navigator: s } = w.useContext(ds),
        { hash: i, pathname: o, search: a } = $w(e, { relative: n }),
        l = o;
    return r !== "/" && (l = o === "/" ? r : Sr([r, o])), s.createHref({ pathname: l, search: a, hash: i });
}
function Ho() {
    return w.useContext(mu) != null;
}
function Ko() {
    return Ho() || Re(!1), w.useContext(mu).location;
}
function Bw(e) {
    w.useContext(ds).static || w.useLayoutEffect(e);
}
function x2() {
    let { isDataRoute: e } = w.useContext(hs);
    return e ? L2() : w2();
}
function w2() {
    Ho() || Re(!1);
    let e = w.useContext(kh),
        { basename: t, future: n, navigator: r } = w.useContext(ds),
        { matches: s } = w.useContext(hs),
        { pathname: i } = Ko(),
        o = JSON.stringify(Iw(s, n.v7_relativeSplatPath)),
        a = w.useRef(!1);
    return (
        Bw(() => {
            a.current = !0;
        }),
        w.useCallback(
            function (u, c) {
                if ((c === void 0 && (c = {}), !a.current)) return;
                if (typeof u == "number") {
                    r.go(u);
                    return;
                }
                let f = Fw(u, JSON.parse(o), i, c.relative === "path");
                e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : Sr([t, f.pathname])),
                    (c.replace ? r.replace : r.push)(f, c.state, c);
            },
            [t, r, o, i, e]
        )
    );
}
function $w(e, t) {
    let { relative: n } = t === void 0 ? {} : t,
        { future: r } = w.useContext(ds),
        { matches: s } = w.useContext(hs),
        { pathname: i } = Ko(),
        o = JSON.stringify(Iw(s, r.v7_relativeSplatPath));
    return w.useMemo(() => Fw(e, JSON.parse(o), i, n === "path"), [e, o, i, n]);
}
function S2(e, t) {
    return E2(e, t);
}
function E2(e, t, n, r) {
    Ho() || Re(!1);
    let { navigator: s } = w.useContext(ds),
        { matches: i } = w.useContext(hs),
        o = i[i.length - 1],
        a = o ? o.params : {};
    o && o.pathname;
    let l = o ? o.pathnameBase : "/";
    o && o.route;
    let u = Ko(),
        c;
    if (t) {
        var f;
        let x = typeof t == "string" ? yi(t) : t;
        l === "/" || ((f = x.pathname) != null && f.startsWith(l)) || Re(!1), (c = x);
    } else c = u;
    let d = c.pathname || "/",
        h = d;
    if (l !== "/") {
        let x = l.replace(/^\//, "").split("/");
        h = "/" + d.replace(/^\//, "").split("/").slice(x.length).join("/");
    }
    let y = GA(e, { pathname: h }),
        p = k2(
            y &&
                y.map((x) =>
                    Object.assign({}, x, {
                        params: Object.assign({}, a, x.params),
                        pathname: Sr([l, s.encodeLocation ? s.encodeLocation(x.pathname).pathname : x.pathname]),
                        pathnameBase:
                            x.pathnameBase === "/"
                                ? l
                                : Sr([
                                      l,
                                      s.encodeLocation ? s.encodeLocation(x.pathnameBase).pathname : x.pathnameBase,
                                  ]),
                    })
                ),
            i,
            n,
            r
        );
    return t && p
        ? w.createElement(
              mu.Provider,
              {
                  value: {
                      location: ko({ pathname: "/", search: "", hash: "", state: null, key: "default" }, c),
                      navigationType: fr.Pop,
                  },
              },
              p
          )
        : p;
}
function C2() {
    let e = N2(),
        t = m2(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        s = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
    return w.createElement(
        w.Fragment,
        null,
        w.createElement("h2", null, "Unexpected Application Error!"),
        w.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? w.createElement("pre", { style: s }, n) : null,
        null
    );
}
const b2 = w.createElement(C2, null);
class T2 extends w.Component {
    constructor(t) {
        super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
    }
    static getDerivedStateFromError(t) {
        return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || (n.revalidation !== "idle" && t.revalidation === "idle")
            ? { error: t.error, location: t.location, revalidation: t.revalidation }
            : {
                  error: t.error !== void 0 ? t.error : n.error,
                  location: n.location,
                  revalidation: t.revalidation || n.revalidation,
              };
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n);
    }
    render() {
        return this.state.error !== void 0
            ? w.createElement(
                  hs.Provider,
                  { value: this.props.routeContext },
                  w.createElement(zw.Provider, { value: this.state.error, children: this.props.component })
              )
            : this.props.children;
    }
}
function P2(e) {
    let { routeContext: t, match: n, children: r } = e,
        s = w.useContext(kh);
    return (
        s &&
            s.static &&
            s.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (s.staticContext._deepestRenderedBoundaryId = n.route.id),
        w.createElement(hs.Provider, { value: t }, r)
    );
}
function k2(e, t, n, r) {
    var s;
    if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
        var i;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((i = r) != null && i.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else return null;
    }
    let o = e,
        a = (s = n) == null ? void 0 : s.errors;
    if (a != null) {
        let c = o.findIndex((f) => f.route.id && (a == null ? void 0 : a[f.route.id]) !== void 0);
        c >= 0 || Re(!1), (o = o.slice(0, Math.min(o.length, c + 1)));
    }
    let l = !1,
        u = -1;
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < o.length; c++) {
            let f = o[c];
            if (((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c), f.route.id)) {
                let { loaderData: d, errors: h } = n,
                    y = f.route.loader && d[f.route.id] === void 0 && (!h || h[f.route.id] === void 0);
                if (f.route.lazy || y) {
                    (l = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
                    break;
                }
            }
        }
    return o.reduceRight((c, f, d) => {
        let h,
            y = !1,
            p = null,
            x = null;
        n &&
            ((h = a && f.route.id ? a[f.route.id] : void 0),
            (p = f.route.errorElement || b2),
            l &&
                (u < 0 && d === 0
                    ? (D2("route-fallback"), (y = !0), (x = null))
                    : u === d && ((y = !0), (x = f.route.hydrateFallbackElement || null))));
        let m = t.concat(o.slice(0, d + 1)),
            g = () => {
                let v;
                return (
                    h
                        ? (v = p)
                        : y
                          ? (v = x)
                          : f.route.Component
                            ? (v = w.createElement(f.route.Component, null))
                            : f.route.element
                              ? (v = f.route.element)
                              : (v = c),
                    w.createElement(P2, {
                        match: f,
                        routeContext: { outlet: c, matches: m, isDataRoute: n != null },
                        children: v,
                    })
                );
            };
        return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
            ? w.createElement(T2, {
                  location: n.location,
                  revalidation: n.revalidation,
                  component: p,
                  error: h,
                  children: g(),
                  routeContext: { outlet: null, matches: m, isDataRoute: !0 },
              })
            : g();
    }, null);
}
var Uw = (function (e) {
        return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
        );
    })(Uw || {}),
    Ww = (function (e) {
        return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
        );
    })(Ww || {});
function A2(e) {
    let t = w.useContext(kh);
    return t || Re(!1), t;
}
function R2(e) {
    let t = w.useContext(y2);
    return t || Re(!1), t;
}
function M2(e) {
    let t = w.useContext(hs);
    return t || Re(!1), t;
}
function Hw(e) {
    let t = M2(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || Re(!1), n.route.id;
}
function N2() {
    var e;
    let t = w.useContext(zw),
        n = R2(),
        r = Hw();
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function L2() {
    let { router: e } = A2(Uw.UseNavigateStable),
        t = Hw(Ww.UseNavigateStable),
        n = w.useRef(!1);
    return (
        Bw(() => {
            n.current = !0;
        }),
        w.useCallback(
            function (s, i) {
                i === void 0 && (i = {}),
                    n.current && (typeof s == "number" ? e.navigate(s) : e.navigate(s, ko({ fromRouteId: t }, i)));
            },
            [e, t]
        )
    );
}
const sg = {};
function D2(e, t, n) {
    sg[e] || (sg[e] = !0);
}
function O2(e, t) {
    e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function jf(e) {
    Re(!1);
}
function j2(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: s = fr.Pop,
        navigator: i,
        static: o = !1,
        future: a,
    } = e;
    Ho() && Re(!1);
    let l = t.replace(/^\/*/, "/"),
        u = w.useMemo(
            () => ({ basename: l, navigator: i, static: o, future: ko({ v7_relativeSplatPath: !1 }, a) }),
            [l, a, i, o]
        );
    typeof r == "string" && (r = yi(r));
    let { pathname: c = "/", search: f = "", hash: d = "", state: h = null, key: y = "default" } = r,
        p = w.useMemo(() => {
            let x = Ph(c, l);
            return x == null
                ? null
                : { location: { pathname: x, search: f, hash: d, state: h, key: y }, navigationType: s };
        }, [l, c, f, d, h, y, s]);
    return p == null
        ? null
        : w.createElement(ds.Provider, { value: u }, w.createElement(mu.Provider, { children: n, value: p }));
}
function I2(e) {
    let { children: t, location: n } = e;
    return S2(If(t), n);
}
new Promise(() => {});
function If(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
        w.Children.forEach(e, (r, s) => {
            if (!w.isValidElement(r)) return;
            let i = [...t, s];
            if (r.type === w.Fragment) {
                n.push.apply(n, If(r.props.children, i));
                return;
            }
            r.type !== jf && Re(!1), !r.props.index || !r.props.children || Re(!1);
            let o = {
                id: r.props.id || i.join("-"),
                caseSensitive: r.props.caseSensitive,
                element: r.props.element,
                Component: r.props.Component,
                index: r.props.index,
                path: r.props.path,
                loader: r.props.loader,
                action: r.props.action,
                errorElement: r.props.errorElement,
                ErrorBoundary: r.props.ErrorBoundary,
                hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
                shouldRevalidate: r.props.shouldRevalidate,
                handle: r.props.handle,
                lazy: r.props.lazy,
            };
            r.props.children && (o.children = If(r.props.children, i)), n.push(o);
        }),
        n
    );
}
/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ff() {
    return (
        (Ff = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Ff.apply(null, arguments)
    );
}
function F2(e, t) {
    if (e == null) return {};
    var n = {};
    for (var r in e)
        if ({}.hasOwnProperty.call(e, r)) {
            if (t.indexOf(r) !== -1) continue;
            n[r] = e[r];
        }
    return n;
}
function V2(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function _2(e, t) {
    return e.button === 0 && (!t || t === "_self") && !V2(e);
}
const z2 = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "viewTransition",
    ],
    B2 = "6";
try {
    window.__reactRouterVersion = B2;
} catch {}
const $2 = "startTransition",
    ig = ov[$2];
function U2(e) {
    let { basename: t, children: n, future: r, window: s } = e,
        i = w.useRef();
    i.current == null && (i.current = WA({ window: s, v5Compat: !0 }));
    let o = i.current,
        [a, l] = w.useState({ action: o.action, location: o.location }),
        { v7_startTransition: u } = r || {},
        c = w.useCallback(
            (f) => {
                u && ig ? ig(() => l(f)) : l(f);
            },
            [l, u]
        );
    return (
        w.useLayoutEffect(() => o.listen(c), [o, c]),
        w.useEffect(() => O2(r), [r]),
        w.createElement(j2, {
            basename: t,
            children: n,
            location: a.location,
            navigationType: a.action,
            navigator: o,
            future: r,
        })
    );
}
const W2 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    H2 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    K2 = w.forwardRef(function (t, n) {
        let {
                onClick: r,
                relative: s,
                reloadDocument: i,
                replace: o,
                state: a,
                target: l,
                to: u,
                preventScrollReset: c,
                viewTransition: f,
            } = t,
            d = F2(t, z2),
            { basename: h } = w.useContext(ds),
            y,
            p = !1;
        if (typeof u == "string" && H2.test(u) && ((y = u), W2))
            try {
                let v = new URL(window.location.href),
                    S = u.startsWith("//") ? new URL(v.protocol + u) : new URL(u),
                    C = Ph(S.pathname, h);
                S.origin === v.origin && C != null ? (u = C + S.search + S.hash) : (p = !0);
            } catch {}
        let x = v2(u, { relative: s }),
            m = G2(u, { replace: o, state: a, target: l, preventScrollReset: c, relative: s, viewTransition: f });
        function g(v) {
            r && r(v), v.defaultPrevented || m(v);
        }
        return w.createElement("a", Ff({}, d, { href: y || x, onClick: p || i ? r : g, ref: n, target: l }));
    });
var og;
(function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
        (e.UseSubmit = "useSubmit"),
        (e.UseSubmitFetcher = "useSubmitFetcher"),
        (e.UseFetcher = "useFetcher"),
        (e.useViewTransitionState = "useViewTransitionState");
})(og || (og = {}));
var ag;
(function (e) {
    (e.UseFetcher = "useFetcher"), (e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
})(ag || (ag = {}));
function G2(e, t) {
    let {
            target: n,
            replace: r,
            state: s,
            preventScrollReset: i,
            relative: o,
            viewTransition: a,
        } = t === void 0 ? {} : t,
        l = x2(),
        u = Ko(),
        c = $w(e, { relative: o });
    return w.useCallback(
        (f) => {
            if (_2(f, n)) {
                f.preventDefault();
                let d = r !== void 0 ? r : Ml(u) === Ml(c);
                l(e, { replace: d, state: s, preventScrollReset: i, relative: o, viewTransition: a });
            }
        },
        [u, l, c, r, s, n, e, i, o, a]
    );
}
const Ah = w.createContext({});
function Ar(e) {
    const t = w.useRef(null);
    return t.current === null && (t.current = e()), t.current;
}
const Q2 = typeof window < "u",
    gu = Q2 ? w.useLayoutEffect : w.useEffect,
    yu = w.createContext(null);
function Rh(e, t) {
    e.indexOf(t) === -1 && e.push(t);
}
function Nl(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
}
const un = (e, t, n) => (n > t ? t : n < e ? e : n);
let Mh = () => {};
const Rr = {},
    Kw = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
    Gw = (e) => typeof e == "object" && e !== null,
    Qw = (e) => /^0[^.\s]+$/u.test(e);
function Yw(e) {
    let t;
    return () => (t === void 0 && (t = e()), t);
}
const ht = (e) => e,
    Go = (...e) => e.reduce((t, n) => (r) => n(t(r))),
    li = (e, t, n) => {
        const r = t - e;
        return r ? (n - e) / r : 1;
    };
class Nh {
    constructor() {
        this.subscriptions = [];
    }
    add(t) {
        return Rh(this.subscriptions, t), () => Nl(this.subscriptions, t);
    }
    notify(t, n, r) {
        const s = this.subscriptions.length;
        if (s)
            if (s === 1) this.subscriptions[0](t, n, r);
            else
                for (let i = 0; i < s; i++) {
                    const o = this.subscriptions[i];
                    o && o(t, n, r);
                }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
const Ct = (e) => e * 1e3,
    Lt = (e) => e / 1e3,
    Lh = (e, t) => (t ? e * (1e3 / t) : 0),
    Xw = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
    Y2 = 1e-7,
    X2 = 12;
function q2(e, t, n, r, s) {
    let i,
        o,
        a = 0;
    do (o = t + (n - t) / 2), (i = Xw(o, r, s) - e), i > 0 ? (n = o) : (t = o);
    while (Math.abs(i) > Y2 && ++a < X2);
    return o;
}
function Qo(e, t, n, r) {
    if (e === t && n === r) return ht;
    const s = (i) => q2(i, 0, 1, e, n);
    return (i) => (i === 0 || i === 1 ? i : Xw(s(i), t, r));
}
const qw = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
    Zw = (e) => (t) => 1 - e(1 - t),
    Jw = Qo(0.33, 1.53, 0.69, 0.99),
    Dh = Zw(Jw),
    e1 = qw(Dh),
    t1 = (e) => (e >= 1 ? 1 : (e *= 2) < 1 ? 0.5 * Dh(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))),
    Oh = (e) => 1 - Math.sin(Math.acos(e)),
    n1 = Zw(Oh),
    r1 = qw(Oh),
    Z2 = Qo(0.42, 0, 1, 1),
    J2 = Qo(0, 0, 0.58, 1),
    s1 = Qo(0.42, 0, 0.58, 1),
    eR = (e) => Array.isArray(e) && typeof e[0] != "number",
    i1 = (e) => Array.isArray(e) && typeof e[0] == "number",
    tR = {
        linear: ht,
        easeIn: Z2,
        easeInOut: s1,
        easeOut: J2,
        circIn: Oh,
        circInOut: r1,
        circOut: n1,
        backIn: Dh,
        backInOut: e1,
        backOut: Jw,
        anticipate: t1,
    },
    nR = (e) => typeof e == "string",
    lg = (e) => {
        if (i1(e)) {
            Mh(e.length === 4);
            const [t, n, r, s] = e;
            return Qo(t, n, r, s);
        } else if (nR(e)) return tR[e];
        return e;
    },
    ka = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function rR(e, t) {
    let n = new Set(),
        r = new Set(),
        s = !1,
        i = !1;
    const o = new WeakSet();
    let a = { delta: 0, timestamp: 0, isProcessing: !1 };
    function l(c) {
        o.has(c) && (u.schedule(c), e()), c(a);
    }
    const u = {
        schedule: (c, f = !1, d = !1) => {
            const y = d && s ? n : r;
            return f && o.add(c), y.add(c), c;
        },
        cancel: (c) => {
            r.delete(c), o.delete(c);
        },
        process: (c) => {
            if (((a = c), s)) {
                i = !0;
                return;
            }
            s = !0;
            const f = n;
            (n = r), (r = f), n.forEach(l), n.clear(), (s = !1), i && ((i = !1), u.process(c));
        },
    };
    return u;
}
const sR = 40;
function o1(e, t) {
    let n = !1,
        r = !0;
    const s = { delta: 0, timestamp: 0, isProcessing: !1 },
        i = () => (n = !0),
        o = ka.reduce((v, S) => ((v[S] = rR(i)), v), {}),
        { setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: f, preRender: d, render: h, postRender: y } = o,
        p = () => {
            const v = Rr.useManualTiming,
                S = v ? s.timestamp : performance.now();
            (n = !1),
                v || (s.delta = r ? 1e3 / 60 : Math.max(Math.min(S - s.timestamp, sR), 1)),
                (s.timestamp = S),
                (s.isProcessing = !0),
                a.process(s),
                l.process(s),
                u.process(s),
                c.process(s),
                f.process(s),
                d.process(s),
                h.process(s),
                y.process(s),
                (s.isProcessing = !1),
                n && t && ((r = !1), e(p));
        },
        x = () => {
            (n = !0), (r = !0), s.isProcessing || e(p);
        };
    return {
        schedule: ka.reduce((v, S) => {
            const C = o[S];
            return (v[S] = (T, b = !1, P = !1) => (n || x(), C.schedule(T, b, P))), v;
        }, {}),
        cancel: (v) => {
            for (let S = 0; S < ka.length; S++) o[ka[S]].cancel(v);
        },
        state: s,
        steps: o,
    };
}
const {
    schedule: re,
    cancel: It,
    state: Fe,
    steps: uc,
} = o1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ht, !0);
let Qa;
function iR() {
    Qa = void 0;
}
const tt = {
        now: () => (
            Qa === void 0 && tt.set(Fe.isProcessing || Rr.useManualTiming ? Fe.timestamp : performance.now()), Qa
        ),
        set: (e) => {
            (Qa = e), queueMicrotask(iR);
        },
    },
    a1 = (e) => (t) => typeof t == "string" && t.startsWith(e),
    l1 = a1("--"),
    oR = a1("var(--"),
    jh = (e) => (oR(e) ? aR.test(e.split("/*")[0].trim()) : !1),
    aR = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function ug(e) {
    return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--");
}
const vi = { test: (e) => typeof e == "number", parse: parseFloat, transform: (e) => e },
    Ao = { ...vi, transform: (e) => un(0, 1, e) },
    Aa = { ...vi, default: 1 },
    Zi = (e) => Math.round(e * 1e5) / 1e5,
    Ih = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function lR(e) {
    return e == null;
}
const uR =
        /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    Fh = (e, t) => (n) =>
        !!(
            (typeof n == "string" && uR.test(n) && n.startsWith(e)) ||
            (t && !lR(n) && Object.prototype.hasOwnProperty.call(n, t))
        ),
    u1 = (e, t, n) => (r) => {
        if (typeof r != "string") return r;
        const [s, i, o, a] = r.match(Ih);
        return { [e]: parseFloat(s), [t]: parseFloat(i), [n]: parseFloat(o), alpha: a !== void 0 ? parseFloat(a) : 1 };
    },
    cR = (e) => un(0, 255, e),
    cc = { ...vi, transform: (e) => Math.round(cR(e)) },
    Wr = {
        test: Fh("rgb", "red"),
        parse: u1("red", "green", "blue"),
        transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
            "rgba(" +
            cc.transform(e) +
            ", " +
            cc.transform(t) +
            ", " +
            cc.transform(n) +
            ", " +
            Zi(Ao.transform(r)) +
            ")",
    };
function fR(e) {
    let t = "",
        n = "",
        r = "",
        s = "";
    return (
        e.length > 5
            ? ((t = e.substring(1, 3)), (n = e.substring(3, 5)), (r = e.substring(5, 7)), (s = e.substring(7, 9)))
            : ((t = e.substring(1, 2)),
              (n = e.substring(2, 3)),
              (r = e.substring(3, 4)),
              (s = e.substring(4, 5)),
              (t += t),
              (n += n),
              (r += r),
              (s += s)),
        { red: parseInt(t, 16), green: parseInt(n, 16), blue: parseInt(r, 16), alpha: s ? parseInt(s, 16) / 255 : 1 }
    );
}
const Vf = { test: Fh("#"), parse: fR, transform: Wr.transform },
    Yo = (e) => ({
        test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
        parse: parseFloat,
        transform: (t) => `${t}${e}`,
    }),
    An = Yo("deg"),
    Cn = Yo("%"),
    z = Yo("px"),
    dR = Yo("vh"),
    hR = Yo("vw"),
    cg = { ...Cn, parse: (e) => Cn.parse(e) / 100, transform: (e) => Cn.transform(e * 100) },
    Ls = {
        test: Fh("hsl", "hue"),
        parse: u1("hue", "saturation", "lightness"),
        transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(e) +
            ", " +
            Cn.transform(Zi(t)) +
            ", " +
            Cn.transform(Zi(n)) +
            ", " +
            Zi(Ao.transform(r)) +
            ")",
    },
    ke = {
        test: (e) => Wr.test(e) || Vf.test(e) || Ls.test(e),
        parse: (e) => (Wr.test(e) ? Wr.parse(e) : Ls.test(e) ? Ls.parse(e) : Vf.parse(e)),
        transform: (e) => (typeof e == "string" ? e : e.hasOwnProperty("red") ? Wr.transform(e) : Ls.transform(e)),
        getAnimatableNone: (e) => {
            const t = ke.parse(e);
            return (t.alpha = 0), ke.transform(t);
        },
    },
    pR =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function mR(e) {
    var t, n;
    return (
        isNaN(e) &&
        typeof e == "string" &&
        (((t = e.match(Ih)) == null ? void 0 : t.length) || 0) +
            (((n = e.match(pR)) == null ? void 0 : n.length) || 0) >
            0
    );
}
const c1 = "number",
    f1 = "color",
    gR = "var",
    yR = "var(",
    fg = "${}",
    vR =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ui(e) {
    const t = e.toString(),
        n = [],
        r = { color: [], number: [], var: [] },
        s = [];
    let i = 0;
    const a = t
        .replace(
            vR,
            (l) => (
                ke.test(l)
                    ? (r.color.push(i), s.push(f1), n.push(ke.parse(l)))
                    : l.startsWith(yR)
                      ? (r.var.push(i), s.push(gR), n.push(l))
                      : (r.number.push(i), s.push(c1), n.push(parseFloat(l))),
                ++i,
                fg
            )
        )
        .split(fg);
    return { values: n, split: a, indexes: r, types: s };
}
function xR(e) {
    return ui(e).values;
}
function d1({ split: e, types: t }) {
    const n = e.length;
    return (r) => {
        let s = "";
        for (let i = 0; i < n; i++)
            if (((s += e[i]), r[i] !== void 0)) {
                const o = t[i];
                o === c1 ? (s += Zi(r[i])) : o === f1 ? (s += ke.transform(r[i])) : (s += r[i]);
            }
        return s;
    };
}
function wR(e) {
    return d1(ui(e));
}
const SR = (e) => (typeof e == "number" ? 0 : ke.test(e) ? ke.getAnimatableNone(e) : e),
    ER = (e, t) => (typeof e == "number" ? (t != null && t.trim().endsWith("/") ? e : 0) : SR(e));
function CR(e) {
    const t = ui(e);
    return d1(t)(t.values.map((r, s) => ER(r, t.split[s])));
}
const nn = { test: mR, parse: xR, createTransformer: wR, getAnimatableNone: CR };
function fc(e, t, n) {
    return (
        n < 0 && (n += 1),
        n > 1 && (n -= 1),
        n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    );
}
function bR({ hue: e, saturation: t, lightness: n, alpha: r }) {
    (e /= 360), (t /= 100), (n /= 100);
    let s = 0,
        i = 0,
        o = 0;
    if (!t) s = i = o = n;
    else {
        const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
            l = 2 * n - a;
        (s = fc(l, a, e + 1 / 3)), (i = fc(l, a, e)), (o = fc(l, a, e - 1 / 3));
    }
    return { red: Math.round(s * 255), green: Math.round(i * 255), blue: Math.round(o * 255), alpha: r };
}
function Ll(e, t) {
    return (n) => (n > 0 ? t : e);
}
const ae = (e, t, n) => e + (t - e) * n,
    dc = (e, t, n) => {
        const r = e * e,
            s = n * (t * t - r) + r;
        return s < 0 ? 0 : Math.sqrt(s);
    },
    TR = [Vf, Wr, Ls],
    PR = (e) => TR.find((t) => t.test(e));
function dg(e) {
    const t = PR(e);
    if (!t) return !1;
    let n = t.parse(e);
    return t === Ls && (n = bR(n)), n;
}
const hg = (e, t) => {
        const n = dg(e),
            r = dg(t);
        if (!n || !r) return Ll(e, t);
        const s = { ...n };
        return (i) => (
            (s.red = dc(n.red, r.red, i)),
            (s.green = dc(n.green, r.green, i)),
            (s.blue = dc(n.blue, r.blue, i)),
            (s.alpha = ae(n.alpha, r.alpha, i)),
            Wr.transform(s)
        );
    },
    _f = new Set(["none", "hidden"]);
function kR(e, t) {
    return _f.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function AR(e, t) {
    return (n) => ae(e, t, n);
}
function Vh(e) {
    return typeof e == "number"
        ? AR
        : typeof e == "string"
          ? jh(e)
              ? Ll
              : ke.test(e)
                ? hg
                : NR
          : Array.isArray(e)
            ? h1
            : typeof e == "object"
              ? ke.test(e)
                  ? hg
                  : RR
              : Ll;
}
function h1(e, t) {
    const n = [...e],
        r = n.length,
        s = e.map((i, o) => Vh(i)(i, t[o]));
    return (i) => {
        for (let o = 0; o < r; o++) n[o] = s[o](i);
        return n;
    };
}
function RR(e, t) {
    const n = { ...e, ...t },
        r = {};
    for (const s in n) e[s] !== void 0 && t[s] !== void 0 && (r[s] = Vh(e[s])(e[s], t[s]));
    return (s) => {
        for (const i in r) n[i] = r[i](s);
        return n;
    };
}
function MR(e, t) {
    const n = [],
        r = { color: 0, var: 0, number: 0 };
    for (let s = 0; s < t.values.length; s++) {
        const i = t.types[s],
            o = e.indexes[i][r[i]],
            a = e.values[o] ?? 0;
        (n[s] = a), r[i]++;
    }
    return n;
}
const NR = (e, t) => {
    const n = nn.createTransformer(t),
        r = ui(e),
        s = ui(t);
    return r.indexes.var.length === s.indexes.var.length &&
        r.indexes.color.length === s.indexes.color.length &&
        r.indexes.number.length >= s.indexes.number.length
        ? (_f.has(e) && !s.values.length) || (_f.has(t) && !r.values.length)
            ? kR(e, t)
            : Go(h1(MR(r, s), s.values), n)
        : Ll(e, t);
};
function p1(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ae(e, t, n) : Vh(e)(e, t);
}
const LR = (e) => {
        const t = ({ timestamp: n }) => e(n);
        return {
            start: (n = !0) => re.update(t, n),
            stop: () => It(t),
            now: () => (Fe.isProcessing ? Fe.timestamp : tt.now()),
        };
    },
    m1 = (e, t, n = 10) => {
        let r = "";
        const s = Math.max(Math.round(t / n), 2);
        for (let i = 0; i < s; i++) r += Math.round(e(i / (s - 1)) * 1e4) / 1e4 + ", ";
        return `linear(${r.substring(0, r.length - 2)})`;
    },
    Dl = 2e4;
function _h(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Dl; ) (t += n), (r = e.next(t));
    return t >= Dl ? 1 / 0 : t;
}
function DR(e, t = 100, n) {
    const r = n({ ...e, keyframes: [0, t] }),
        s = Math.min(_h(r), Dl);
    return { type: "keyframes", ease: (i) => r.next(s * i).value / t, duration: Lt(s) };
}
const Ce = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
};
function zf(e, t) {
    return e * Math.sqrt(1 - t * t);
}
const OR = 12;
function jR(e, t, n) {
    let r = n;
    for (let s = 1; s < OR; s++) r = r - e(r) / t(r);
    return r;
}
const hc = 0.001;
function IR({ duration: e = Ce.duration, bounce: t = Ce.bounce, velocity: n = Ce.velocity, mass: r = Ce.mass }) {
    let s,
        i,
        o = 1 - t;
    (o = un(Ce.minDamping, Ce.maxDamping, o)),
        (e = un(Ce.minDuration, Ce.maxDuration, Lt(e))),
        o < 1
            ? ((s = (u) => {
                  const c = u * o,
                      f = c * e,
                      d = c - n,
                      h = zf(u, o),
                      y = Math.exp(-f);
                  return hc - (d / h) * y;
              }),
              (i = (u) => {
                  const f = u * o * e,
                      d = f * n + n,
                      h = Math.pow(o, 2) * Math.pow(u, 2) * e,
                      y = Math.exp(-f),
                      p = zf(Math.pow(u, 2), o);
                  return ((-s(u) + hc > 0 ? -1 : 1) * ((d - h) * y)) / p;
              }))
            : ((s = (u) => {
                  const c = Math.exp(-u * e),
                      f = (u - n) * e + 1;
                  return -hc + c * f;
              }),
              (i = (u) => {
                  const c = Math.exp(-u * e),
                      f = (n - u) * (e * e);
                  return c * f;
              }));
    const a = 5 / e,
        l = jR(s, i, a);
    if (((e = Ct(e)), isNaN(l))) return { stiffness: Ce.stiffness, damping: Ce.damping, duration: e };
    {
        const u = Math.pow(l, 2) * r;
        return { stiffness: u, damping: o * 2 * Math.sqrt(r * u), duration: e };
    }
}
const FR = ["duration", "bounce"],
    VR = ["stiffness", "damping", "mass"];
function pg(e, t) {
    return t.some((n) => e[n] !== void 0);
}
function _R(e) {
    let t = {
        velocity: Ce.velocity,
        stiffness: Ce.stiffness,
        damping: Ce.damping,
        mass: Ce.mass,
        isResolvedFromDuration: !1,
        ...e,
    };
    if (!pg(e, VR) && pg(e, FR))
        if (((t.velocity = 0), e.visualDuration)) {
            const n = e.visualDuration,
                r = (2 * Math.PI) / (n * 1.2),
                s = r * r,
                i = 2 * un(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
            t = { ...t, mass: Ce.mass, stiffness: s, damping: i };
        } else {
            const n = IR({ ...e, velocity: 0 });
            (t = { ...t, ...n, mass: Ce.mass }), (t.isResolvedFromDuration = !0);
        }
    return t;
}
function Ol(e = Ce.visualDuration, t = Ce.bounce) {
    const n = typeof e != "object" ? { visualDuration: e, keyframes: [0, 1], bounce: t } : e;
    let { restSpeed: r, restDelta: s } = n;
    const i = n.keyframes[0],
        o = n.keyframes[n.keyframes.length - 1],
        a = { done: !1, value: i },
        {
            stiffness: l,
            damping: u,
            mass: c,
            duration: f,
            velocity: d,
            isResolvedFromDuration: h,
        } = _R({ ...n, velocity: -Lt(n.velocity || 0) }),
        y = d || 0,
        p = u / (2 * Math.sqrt(l * c)),
        x = o - i,
        m = Lt(Math.sqrt(l / c)),
        g = Math.abs(x) < 5;
    r || (r = g ? Ce.restSpeed.granular : Ce.restSpeed.default),
        s || (s = g ? Ce.restDelta.granular : Ce.restDelta.default);
    let v, S, C, T, b, P;
    if (p < 1)
        (C = zf(m, p)),
            (T = (y + p * m * x) / C),
            (v = (k) => {
                const L = Math.exp(-p * m * k);
                return o - L * (T * Math.sin(C * k) + x * Math.cos(C * k));
            }),
            (b = p * m * T + x * C),
            (P = p * m * x - T * C),
            (S = (k) => Math.exp(-p * m * k) * (b * Math.sin(C * k) + P * Math.cos(C * k)));
    else if (p === 1) {
        v = (L) => o - Math.exp(-m * L) * (x + (y + m * x) * L);
        const k = y + m * x;
        S = (L) => Math.exp(-m * L) * (m * k * L - y);
    } else {
        const k = m * Math.sqrt(p * p - 1);
        v = (O) => {
            const H = Math.exp(-p * m * O),
                _ = Math.min(k * O, 300);
            return o - (H * ((y + p * m * x) * Math.sinh(_) + k * x * Math.cosh(_))) / k;
        };
        const L = (y + p * m * x) / k,
            D = p * m * L - x * k,
            W = p * m * x - L * k;
        S = (O) => {
            const H = Math.exp(-p * m * O),
                _ = Math.min(k * O, 300);
            return H * (D * Math.sinh(_) + W * Math.cosh(_));
        };
    }
    const R = {
        calculatedDuration: (h && f) || null,
        velocity: (k) => Ct(S(k)),
        next: (k) => {
            if (!h && p < 1) {
                const D = Math.exp(-p * m * k),
                    W = Math.sin(C * k),
                    O = Math.cos(C * k),
                    H = o - D * (T * W + x * O),
                    _ = Ct(D * (b * W + P * O));
                return (a.done = Math.abs(_) <= r && Math.abs(o - H) <= s), (a.value = a.done ? o : H), a;
            }
            const L = v(k);
            if (h) a.done = k >= f;
            else {
                const D = Ct(S(k));
                a.done = Math.abs(D) <= r && Math.abs(o - L) <= s;
            }
            return (a.value = a.done ? o : L), a;
        },
        toString: () => {
            const k = Math.min(_h(R), Dl),
                L = m1((D) => R.next(k * D).value, k, 30);
            return k + "ms " + L;
        },
        toTransition: () => {},
    };
    return R;
}
Ol.applyToOptions = (e) => {
    const t = DR(e, 100, Ol);
    return (e.ease = t.ease), (e.duration = Ct(t.duration)), (e.type = "keyframes"), e;
};
const zR = 5;
function g1(e, t, n) {
    const r = Math.max(t - zR, 0);
    return Lh(n - e(r), t - r);
}
function Bf({
    keyframes: e,
    velocity: t = 0,
    power: n = 0.8,
    timeConstant: r = 325,
    bounceDamping: s = 10,
    bounceStiffness: i = 500,
    modifyTarget: o,
    min: a,
    max: l,
    restDelta: u = 0.5,
    restSpeed: c,
}) {
    const f = e[0],
        d = { done: !1, value: f },
        h = (P) => (a !== void 0 && P < a) || (l !== void 0 && P > l),
        y = (P) => (a === void 0 ? l : l === void 0 || Math.abs(a - P) < Math.abs(l - P) ? a : l);
    let p = n * t;
    const x = f + p,
        m = o === void 0 ? x : o(x);
    m !== x && (p = m - f);
    const g = (P) => -p * Math.exp(-P / r),
        v = (P) => m + g(P),
        S = (P) => {
            const R = g(P),
                k = v(P);
            (d.done = Math.abs(R) <= u), (d.value = d.done ? m : k);
        };
    let C, T;
    const b = (P) => {
        h(d.value) &&
            ((C = P),
            (T = Ol({
                keyframes: [d.value, y(d.value)],
                velocity: g1(v, P, d.value),
                damping: s,
                stiffness: i,
                restDelta: u,
                restSpeed: c,
            })));
    };
    return (
        b(0),
        {
            calculatedDuration: null,
            next: (P) => {
                let R = !1;
                return (
                    !T && C === void 0 && ((R = !0), S(P), b(P)),
                    C !== void 0 && P >= C ? T.next(P - C) : (!R && S(P), d)
                );
            },
        }
    );
}
function BR(e, t, n) {
    const r = [],
        s = n || Rr.mix || p1,
        i = e.length - 1;
    for (let o = 0; o < i; o++) {
        let a = s(e[o], e[o + 1]);
        if (t) {
            const l = Array.isArray(t) ? t[o] || ht : t;
            a = Go(l, a);
        }
        r.push(a);
    }
    return r;
}
function zh(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
    const i = e.length;
    if ((Mh(i === t.length), i === 1)) return () => t[0];
    if (i === 2 && t[0] === t[1]) return () => t[1];
    const o = e[0] === e[1];
    e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
    const a = BR(t, r, s),
        l = a.length,
        u = (c) => {
            if (o && c < e[0]) return t[0];
            let f = 0;
            if (l > 1) for (; f < e.length - 2 && !(c < e[f + 1]); f++);
            const d = li(e[f], e[f + 1], c);
            return a[f](d);
        };
    return n ? (c) => u(un(e[0], e[i - 1], c)) : u;
}
function $R(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const s = li(0, t, r);
        e.push(ae(n, 1, s));
    }
}
function y1(e) {
    const t = [0];
    return $R(t, e.length - 1), t;
}
function UR(e, t) {
    return e.map((n) => n * t);
}
function WR(e, t) {
    return e.map(() => t || s1).splice(0, e.length - 1);
}
function Ji({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
    const s = eR(r) ? r.map(lg) : lg(r),
        i = { done: !1, value: t[0] },
        o = UR(n && n.length === t.length ? n : y1(t), e),
        a = zh(o, t, { ease: Array.isArray(s) ? s : WR(t, s) });
    return { calculatedDuration: e, next: (l) => ((i.value = a(l)), (i.done = l >= e), i) };
}
const HR = (e) => e !== null;
function vu(e, { repeat: t, repeatType: n = "loop" }, r, s = 1) {
    const i = e.filter(HR),
        a = s < 0 || (t && n !== "loop" && t % 2 === 1) ? 0 : i.length - 1;
    return !a || r === void 0 ? i[a] : r;
}
const KR = { decay: Bf, inertia: Bf, tween: Ji, keyframes: Ji, spring: Ol };
function v1(e) {
    typeof e.type == "string" && (e.type = KR[e.type]);
}
class Bh {
    constructor() {
        this.updateFinished();
    }
    get finished() {
        return this._finished;
    }
    updateFinished() {
        this._finished = new Promise((t) => {
            this.resolve = t;
        });
    }
    notifyFinished() {
        this.resolve();
    }
    then(t, n) {
        return this.finished.then(t, n);
    }
}
const GR = (e) => e / 100;
class jl extends Bh {
    constructor(t) {
        super(),
            (this.state = "idle"),
            (this.startTime = null),
            (this.isStopped = !1),
            (this.currentTime = 0),
            (this.holdTime = null),
            (this.playbackSpeed = 1),
            (this.delayState = { done: !1, value: void 0 }),
            (this.stop = () => {
                var r, s;
                const { motionValue: n } = this.options;
                n && n.updatedAt !== tt.now() && this.tick(tt.now()),
                    (this.isStopped = !0),
                    this.state !== "idle" && (this.teardown(), (s = (r = this.options).onStop) == null || s.call(r));
            }),
            (this.options = t),
            this.initAnimation(),
            this.play(),
            t.autoplay === !1 && this.pause();
    }
    initAnimation() {
        const { options: t } = this;
        v1(t);
        const { type: n = Ji, repeat: r = 0, repeatDelay: s = 0, repeatType: i, velocity: o = 0 } = t;
        let { keyframes: a } = t;
        const l = n || Ji;
        l !== Ji && typeof a[0] != "number" && ((this.mixKeyframes = Go(GR, p1(a[0], a[1]))), (a = [0, 100]));
        const u = l({ ...t, keyframes: a });
        i === "mirror" && (this.mirroredGenerator = l({ ...t, keyframes: [...a].reverse(), velocity: -o })),
            u.calculatedDuration === null && (u.calculatedDuration = _h(u));
        const { calculatedDuration: c } = u;
        (this.calculatedDuration = c),
            (this.resolvedDuration = c + s),
            (this.totalDuration = this.resolvedDuration * (r + 1) - s),
            (this.generator = u);
    }
    updateTime(t) {
        const n = Math.round(t - this.startTime) * this.playbackSpeed;
        this.holdTime !== null ? (this.currentTime = this.holdTime) : (this.currentTime = n);
    }
    tick(t, n = !1) {
        const {
            generator: r,
            totalDuration: s,
            mixKeyframes: i,
            mirroredGenerator: o,
            resolvedDuration: a,
            calculatedDuration: l,
        } = this;
        if (this.startTime === null) return r.next(0);
        const {
            delay: u = 0,
            keyframes: c,
            repeat: f,
            repeatType: d,
            repeatDelay: h,
            type: y,
            onUpdate: p,
            finalKeyframe: x,
        } = this.options;
        this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 && (this.startTime = Math.min(t - s / this.speed, this.startTime)),
            n ? (this.currentTime = t) : this.updateTime(t);
        const m = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
            g = this.playbackSpeed >= 0 ? m < 0 : m > s;
        (this.currentTime = Math.max(m, 0)),
            this.state === "finished" && this.holdTime === null && (this.currentTime = s);
        let v = this.currentTime,
            S = r;
        if (f) {
            const P = Math.min(this.currentTime, s) / a;
            let R = Math.floor(P),
                k = P % 1;
            !k && P >= 1 && (k = 1),
                k === 1 && R--,
                (R = Math.min(R, f + 1)),
                !!(R % 2) && (d === "reverse" ? ((k = 1 - k), h && (k -= h / a)) : d === "mirror" && (S = o)),
                (v = un(0, 1, k) * a);
        }
        let C;
        g ? ((this.delayState.value = c[0]), (C = this.delayState)) : (C = S.next(v)),
            i && !g && (C.value = i(C.value));
        let { done: T } = C;
        !g && l !== null && (T = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
        const b = this.holdTime === null && (this.state === "finished" || (this.state === "running" && T));
        return b && y !== Bf && (C.value = vu(c, this.options, x, this.speed)), p && p(C.value), b && this.finish(), C;
    }
    then(t, n) {
        return this.finished.then(t, n);
    }
    get duration() {
        return Lt(this.calculatedDuration);
    }
    get iterationDuration() {
        const { delay: t = 0 } = this.options || {};
        return this.duration + Lt(t);
    }
    get time() {
        return Lt(this.currentTime);
    }
    set time(t) {
        (t = Ct(t)),
            (this.currentTime = t),
            this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0
                ? (this.holdTime = t)
                : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed),
            this.driver
                ? this.driver.start(!1)
                : ((this.startTime = 0), (this.state = "paused"), (this.holdTime = t), this.tick(t));
    }
    getGeneratorVelocity() {
        const t = this.currentTime;
        if (t <= 0) return this.options.velocity || 0;
        if (this.generator.velocity) return this.generator.velocity(t);
        const n = this.generator.next(t).value;
        return g1((r) => this.generator.next(r).value, t, n);
    }
    get speed() {
        return this.playbackSpeed;
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        n && this.driver && this.updateTime(tt.now()),
            (this.playbackSpeed = t),
            n && this.driver && (this.time = Lt(this.currentTime));
    }
    play() {
        var s, i;
        if (this.isStopped) return;
        const { driver: t = LR, startTime: n } = this.options;
        this.driver || (this.driver = t((o) => this.tick(o))), (i = (s = this.options).onPlay) == null || i.call(s);
        const r = this.driver.now();
        this.state === "finished"
            ? (this.updateFinished(), (this.startTime = r))
            : this.holdTime !== null
              ? (this.startTime = r - this.holdTime)
              : this.startTime || (this.startTime = n ?? r),
            this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
    }
    pause() {
        (this.state = "paused"), this.updateTime(tt.now()), (this.holdTime = this.currentTime);
    }
    complete() {
        this.state !== "running" && this.play(), (this.state = "finished"), (this.holdTime = null);
    }
    finish() {
        var t, n;
        this.notifyFinished(),
            this.teardown(),
            (this.state = "finished"),
            (n = (t = this.options).onComplete) == null || n.call(t);
    }
    cancel() {
        var t, n;
        (this.holdTime = null),
            (this.startTime = 0),
            this.tick(0),
            this.teardown(),
            (n = (t = this.options).onCancel) == null || n.call(t);
    }
    teardown() {
        (this.state = "idle"), this.stopDriver(), (this.startTime = this.holdTime = null);
    }
    stopDriver() {
        this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(t) {
        return (this.startTime = 0), this.tick(t, !0);
    }
    attachTimeline(t) {
        var n;
        return (
            this.options.allowFlatten &&
                ((this.options.type = "keyframes"), (this.options.ease = "linear"), this.initAnimation()),
            (n = this.driver) == null || n.stop(),
            t.observe(this)
        );
    }
}
function QR(e) {
    for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1]);
}
const Hr = (e) => (e * 180) / Math.PI,
    $f = (e) => {
        const t = Hr(Math.atan2(e[1], e[0]));
        return Uf(t);
    },
    YR = {
        x: 4,
        y: 5,
        translateX: 4,
        translateY: 5,
        scaleX: 0,
        scaleY: 3,
        scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
        rotate: $f,
        rotateZ: $f,
        skewX: (e) => Hr(Math.atan(e[1])),
        skewY: (e) => Hr(Math.atan(e[2])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2,
    },
    Uf = (e) => ((e = e % 360), e < 0 && (e += 360), e),
    mg = $f,
    gg = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
    yg = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
    XR = {
        x: 12,
        y: 13,
        z: 14,
        translateX: 12,
        translateY: 13,
        translateZ: 14,
        scaleX: gg,
        scaleY: yg,
        scale: (e) => (gg(e) + yg(e)) / 2,
        rotateX: (e) => Uf(Hr(Math.atan2(e[6], e[5]))),
        rotateY: (e) => Uf(Hr(Math.atan2(-e[2], e[0]))),
        rotateZ: mg,
        rotate: mg,
        skewX: (e) => Hr(Math.atan(e[4])),
        skewY: (e) => Hr(Math.atan(e[1])),
        skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2,
    };
function Wf(e) {
    return e.includes("scale") ? 1 : 0;
}
function Hf(e, t) {
    if (!e || e === "none") return Wf(t);
    const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let r, s;
    if (n) (r = XR), (s = n);
    else {
        const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
        (r = YR), (s = a);
    }
    if (!s) return Wf(t);
    const i = r[t],
        o = s[1].split(",").map(ZR);
    return typeof i == "function" ? i(o) : o[i];
}
const qR = (e, t) => {
    const { transform: n = "none" } = getComputedStyle(e);
    return Hf(n, t);
};
function ZR(e) {
    return parseFloat(e.trim());
}
const xi = [
        "transformPerspective",
        "x",
        "y",
        "z",
        "translateX",
        "translateY",
        "translateZ",
        "scale",
        "scaleX",
        "scaleY",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "skew",
        "skewX",
        "skewY",
    ],
    wi = new Set([...xi, "pathRotation"]),
    vg = (e) => e === vi || e === z,
    JR = new Set(["x", "y", "z"]),
    eM = xi.filter((e) => !JR.has(e));
function tM(e) {
    const t = [];
    return (
        eM.forEach((n) => {
            const r = e.getValue(n);
            r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
        }),
        t
    );
}
const dr = {
    width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0", boxSizing: r }) => {
        const s = e.max - e.min;
        return r === "border-box" ? s : s - parseFloat(t) - parseFloat(n);
    },
    height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0", boxSizing: r }) => {
        const s = e.max - e.min;
        return r === "border-box" ? s : s - parseFloat(t) - parseFloat(n);
    },
    top: (e, { top: t }) => parseFloat(t),
    left: (e, { left: t }) => parseFloat(t),
    bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
    right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
    x: (e, { transform: t }) => Hf(t, "x"),
    y: (e, { transform: t }) => Hf(t, "y"),
};
dr.translateX = dr.x;
dr.translateY = dr.y;
const es = new Set();
let Kf = !1,
    Gf = !1,
    Qf = !1;
function x1() {
    if (Gf) {
        const e = Array.from(es).filter((r) => r.needsMeasurement),
            t = new Set(e.map((r) => r.element)),
            n = new Map();
        t.forEach((r) => {
            const s = tM(r);
            s.length && (n.set(r, s), r.render());
        }),
            e.forEach((r) => r.measureInitialState()),
            t.forEach((r) => {
                r.render();
                const s = n.get(r);
                s &&
                    s.forEach(([i, o]) => {
                        var a;
                        (a = r.getValue(i)) == null || a.set(o);
                    });
            }),
            e.forEach((r) => r.measureEndState()),
            e.forEach((r) => {
                r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
            });
    }
    (Gf = !1), (Kf = !1), es.forEach((e) => e.complete(Qf)), es.clear();
}
function w1() {
    es.forEach((e) => {
        e.readKeyframes(), e.needsMeasurement && (Gf = !0);
    });
}
function nM() {
    (Qf = !0), w1(), x1(), (Qf = !1);
}
class $h {
    constructor(t, n, r, s, i, o = !1) {
        (this.state = "pending"),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = n),
            (this.name = r),
            (this.motionValue = s),
            (this.element = i),
            (this.isAsync = o);
    }
    scheduleResolve() {
        (this.state = "scheduled"),
            this.isAsync
                ? (es.add(this), Kf || ((Kf = !0), re.read(w1), re.resolveKeyframes(x1)))
                : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
        const { unresolvedKeyframes: t, name: n, element: r, motionValue: s } = this;
        if (t[0] === null) {
            const i = s == null ? void 0 : s.get(),
                o = t[t.length - 1];
            if (i !== void 0) t[0] = i;
            else if (r && n) {
                const a = r.readValue(n, o);
                a != null && (t[0] = a);
            }
            t[0] === void 0 && (t[0] = o), s && i === void 0 && s.set(t[0]);
        }
        QR(t);
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete(t = !1) {
        (this.state = "complete"), this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), es.delete(this);
    }
    cancel() {
        this.state === "scheduled" && (es.delete(this), (this.state = "pending"));
    }
    resume() {
        this.state === "pending" && this.scheduleResolve();
    }
}
const rM = (e) => e.startsWith("--");
function S1(e, t, n) {
    rM(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
}
const sM = {};
function Uh(e, t) {
    const n = Yw(e);
    return () => sM[t] ?? n();
}
const Wh = Uh(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
    E1 = Uh(() => window.ViewTimeline !== void 0, "viewTimeline"),
    C1 = Uh(() => {
        try {
            document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
        } catch {
            return !1;
        }
        return !0;
    }, "linearEasing"),
    _i = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
    xg = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: _i([0, 0.65, 0.55, 1]),
        circOut: _i([0.55, 0, 1, 0.45]),
        backIn: _i([0.31, 0.01, 0.66, -0.59]),
        backOut: _i([0.33, 1.53, 0.69, 0.99]),
    };
function b1(e, t) {
    if (e)
        return typeof e == "function"
            ? C1()
                ? m1(e, t)
                : "ease-out"
            : i1(e)
              ? _i(e)
              : Array.isArray(e)
                ? e.map((n) => b1(n, t) || xg.easeOut)
                : xg[e];
}
function iM(
    e,
    t,
    n,
    { delay: r = 0, duration: s = 300, repeat: i = 0, repeatType: o = "loop", ease: a = "easeOut", times: l } = {},
    u = void 0
) {
    const c = { [t]: n };
    l && (c.offset = l);
    const f = b1(a, s);
    Array.isArray(f) && (c.easing = f);
    const d = {
        delay: r,
        duration: s,
        easing: Array.isArray(f) ? "linear" : f,
        fill: "both",
        iterations: i + 1,
        direction: o === "reverse" ? "alternate" : "normal",
    };
    return u && (d.pseudoElement = u), e.animate(c, d);
}
function T1(e) {
    return typeof e == "function" && "applyToOptions" in e;
}
function oM({ type: e, ...t }) {
    return T1(e) && C1() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t);
}
class P1 extends Bh {
    constructor(t) {
        if ((super(), (this.finishedTime = null), (this.isStopped = !1), (this.manualStartTime = null), !t)) return;
        const {
            element: n,
            name: r,
            keyframes: s,
            pseudoElement: i,
            allowFlatten: o = !1,
            finalKeyframe: a,
            onComplete: l,
        } = t;
        (this.isPseudoElement = !!i), (this.allowFlatten = o), (this.options = t), Mh(typeof t.type != "string");
        const u = oM(t);
        (this.animation = iM(n, r, s, u, i)),
            u.autoplay === !1 && this.animation.pause(),
            (this.animation.onfinish = () => {
                if (((this.finishedTime = this.time), !i)) {
                    const c = vu(s, this.options, a, this.speed);
                    this.updateMotionValue && this.updateMotionValue(c), S1(n, r, c), this.animation.cancel();
                }
                l == null || l(), this.notifyFinished();
            });
    }
    play() {
        this.isStopped ||
            ((this.manualStartTime = null), this.animation.play(), this.state === "finished" && this.updateFinished());
    }
    pause() {
        this.animation.pause();
    }
    complete() {
        var t, n;
        (n = (t = this.animation).finish) == null || n.call(t);
    }
    cancel() {
        try {
            this.animation.cancel();
        } catch {}
    }
    stop() {
        if (this.isStopped) return;
        this.isStopped = !0;
        const { state: t } = this;
        t === "idle" ||
            t === "finished" ||
            (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
            this.isPseudoElement || this.cancel());
    }
    commitStyles() {
        var n, r, s;
        const t = (n = this.options) == null ? void 0 : n.element;
        !this.isPseudoElement &&
            t != null &&
            t.isConnected &&
            ((s = (r = this.animation).commitStyles) == null || s.call(r));
    }
    get duration() {
        var n, r;
        const t =
            ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null
                ? void 0
                : r.call(n).duration) || 0;
        return Lt(Number(t));
    }
    get iterationDuration() {
        const { delay: t = 0 } = this.options || {};
        return this.duration + Lt(t);
    }
    get time() {
        return Lt(Number(this.animation.currentTime) || 0);
    }
    set time(t) {
        const n = this.finishedTime !== null;
        (this.manualStartTime = null),
            (this.finishedTime = null),
            (this.animation.currentTime = Ct(t)),
            n && this.animation.pause();
    }
    get speed() {
        return this.animation.playbackRate;
    }
    set speed(t) {
        t < 0 && (this.finishedTime = null), (this.animation.playbackRate = t);
    }
    get state() {
        return this.finishedTime !== null ? "finished" : this.animation.playState;
    }
    get startTime() {
        return this.manualStartTime ?? Number(this.animation.startTime);
    }
    set startTime(t) {
        this.manualStartTime = this.animation.startTime = t;
    }
    attachTimeline({ timeline: t, rangeStart: n, rangeEnd: r, observe: s }) {
        var i;
        return (
            this.allowFlatten && ((i = this.animation.effect) == null || i.updateTiming({ easing: "linear" })),
            (this.animation.onfinish = null),
            t && Wh()
                ? ((this.animation.timeline = t),
                  n && (this.animation.rangeStart = n),
                  r && (this.animation.rangeEnd = r),
                  ht)
                : s(this)
        );
    }
}
const k1 = { anticipate: t1, backInOut: e1, circInOut: r1 };
function aM(e) {
    return e in k1;
}
function lM(e) {
    typeof e.ease == "string" && aM(e.ease) && (e.ease = k1[e.ease]);
}
const pc = 10;
class uM extends P1 {
    constructor(t) {
        lM(t),
            v1(t),
            super(t),
            t.startTime !== void 0 && t.autoplay !== !1 && (this.startTime = t.startTime),
            (this.options = t);
    }
    updateMotionValue(t) {
        const { motionValue: n, onUpdate: r, onComplete: s, element: i, ...o } = this.options;
        if (!n) return;
        if (t !== void 0) {
            n.set(t);
            return;
        }
        const a = new jl({ ...o, autoplay: !1 }),
            l = Math.max(pc, tt.now() - this.startTime),
            u = un(0, pc, l - pc),
            c = a.sample(l).value,
            { name: f } = this.options;
        i && f && S1(i, f, c), n.setWithVelocity(a.sample(Math.max(0, l - u)).value, c, u), a.stop();
    }
}
const wg = (e, t) =>
    t === "zIndex"
        ? !1
        : !!(
              typeof e == "number" ||
              Array.isArray(e) ||
              (typeof e == "string" && (nn.test(e) || e === "0") && !e.startsWith("url("))
          );
function cM(e) {
    const t = e[0];
    if (e.length === 1) return !0;
    for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function fM(e, t, n, r) {
    const s = e[0];
    if (s === null) return !1;
    if (t === "display" || t === "visibility") return !0;
    const i = e[e.length - 1],
        o = wg(s, t),
        a = wg(i, t);
    return !o || !a ? !1 : cM(e) || ((n === "spring" || T1(n)) && r);
}
function Yf(e) {
    (e.duration = 0), (e.type = "keyframes");
}
const A1 = new Set(["opacity", "clipPath", "filter", "transform"]),
    dM = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function hM(e) {
    for (let t = 0; t < e.length; t++) if (typeof e[t] == "string" && dM.test(e[t])) return !0;
    return !1;
}
const pM = new Set([
        "color",
        "backgroundColor",
        "outlineColor",
        "fill",
        "stroke",
        "borderColor",
        "borderTopColor",
        "borderRightColor",
        "borderBottomColor",
        "borderLeftColor",
    ]),
    mM = Yw(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function gM(e) {
    var f;
    const { motionValue: t, name: n, repeatDelay: r, repeatType: s, damping: i, type: o, keyframes: a } = e;
    if (!(((f = t == null ? void 0 : t.owner) == null ? void 0 : f.current) instanceof HTMLElement)) return !1;
    const { onUpdate: u, transformTemplate: c } = t.owner.getProps();
    return (
        mM() &&
        n &&
        (A1.has(n) || (pM.has(n) && hM(a))) &&
        (n !== "transform" || !c) &&
        !u &&
        !r &&
        s !== "mirror" &&
        i !== 0 &&
        o !== "inertia"
    );
}
const yM = 40;
class vM extends Bh {
    constructor({
        autoplay: t = !0,
        delay: n = 0,
        type: r = "keyframes",
        repeat: s = 0,
        repeatDelay: i = 0,
        repeatType: o = "loop",
        keyframes: a,
        name: l,
        motionValue: u,
        element: c,
        ...f
    }) {
        var y;
        super(),
            (this.stop = () => {
                var p, x;
                this._animation && (this._animation.stop(), (p = this.stopTimeline) == null || p.call(this)),
                    (x = this.keyframeResolver) == null || x.cancel();
            }),
            (this.createdAt = tt.now());
        const d = {
                autoplay: t,
                delay: n,
                type: r,
                repeat: s,
                repeatDelay: i,
                repeatType: o,
                name: l,
                motionValue: u,
                element: c,
                ...f,
            },
            h = (c == null ? void 0 : c.KeyframeResolver) || $h;
        (this.keyframeResolver = new h(a, (p, x, m) => this.onKeyframesResolved(p, x, d, !m), l, u, c)),
            (y = this.keyframeResolver) == null || y.scheduleResolve();
    }
    onKeyframesResolved(t, n, r, s) {
        var m, g;
        this.keyframeResolver = void 0;
        const { name: i, type: o, velocity: a, delay: l, isHandoff: u, onUpdate: c } = r;
        this.resolvedAt = tt.now();
        let f = !0;
        fM(t, i, o, a) ||
            ((f = !1),
            (Rr.instantAnimations || !l) && (c == null || c(vu(t, r, n))),
            (t[0] = t[t.length - 1]),
            Yf(r),
            (r.repeat = 0));
        const h = {
                startTime: s
                    ? this.resolvedAt
                        ? this.resolvedAt - this.createdAt > yM
                            ? this.resolvedAt
                            : this.createdAt
                        : this.createdAt
                    : void 0,
                finalKeyframe: n,
                ...r,
                keyframes: t,
            },
            y = f && !u && gM(h),
            p = (g = (m = h.motionValue) == null ? void 0 : m.owner) == null ? void 0 : g.current;
        let x;
        if (y)
            try {
                x = new uM({ ...h, element: p });
            } catch {
                x = new jl(h);
            }
        else x = new jl(h);
        x.finished
            .then(() => {
                this.notifyFinished();
            })
            .catch(ht),
            this.pendingTimeline &&
                ((this.stopTimeline = x.attachTimeline(this.pendingTimeline)), (this.pendingTimeline = void 0)),
            (this._animation = x);
    }
    get finished() {
        return this._animation ? this.animation.finished : this._finished;
    }
    then(t, n) {
        return this.finished.finally(t).then(() => {});
    }
    get animation() {
        var t;
        return this._animation || ((t = this.keyframeResolver) == null || t.resume(), nM()), this._animation;
    }
    get duration() {
        return this.animation.duration;
    }
    get iterationDuration() {
        return this.animation.iterationDuration;
    }
    get time() {
        return this.animation.time;
    }
    set time(t) {
        this.animation.time = t;
    }
    get speed() {
        return this.animation.speed;
    }
    get state() {
        return this.animation.state;
    }
    set speed(t) {
        this.animation.speed = t;
    }
    get startTime() {
        return this.animation.startTime;
    }
    attachTimeline(t) {
        return (
            this._animation ? (this.stopTimeline = this.animation.attachTimeline(t)) : (this.pendingTimeline = t),
            () => this.stop()
        );
    }
    play() {
        this.animation.play();
    }
    pause() {
        this.animation.pause();
    }
    complete() {
        this.animation.complete();
    }
    cancel() {
        var t;
        this._animation && this.animation.cancel(), (t = this.keyframeResolver) == null || t.cancel();
    }
}
function R1(e, t, n, r = 0, s = 1) {
    const i = Array.from(e)
            .sort((u, c) => u.sortNodePosition(c))
            .indexOf(t),
        o = e.size,
        a = (o - 1) * r;
    return typeof n == "function" ? n(i, o) : s === 1 ? i * r : a - i * r;
}
const Sg = 30,
    xM = (e) => !isNaN(parseFloat(e)),
    eo = { current: void 0 };
class wM {
    constructor(t, n = {}) {
        (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (r) => {
                var i;
                const s = tt.now();
                if (
                    (this.updatedAt !== s && this.setPrevFrameValue(),
                    (this.prev = this.current),
                    this.setCurrent(r),
                    this.current !== this.prev &&
                        ((i = this.events.change) == null || i.notify(this.current), this.dependents))
                )
                    for (const o of this.dependents) o.dirty();
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = n.owner);
    }
    setCurrent(t) {
        (this.current = t),
            (this.updatedAt = tt.now()),
            this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = xM(this.current));
    }
    setPrevFrameValue(t = this.current) {
        (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
    }
    onChange(t) {
        return this.on("change", t);
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new Nh());
        const r = this.events[t].add(n);
        return t === "change"
            ? () => {
                  r(),
                      re.read(() => {
                          this.events.change.getSize() || this.stop();
                      });
              }
            : r;
    }
    clearListeners() {
        for (const t in this.events) this.events[t].clear();
    }
    attach(t, n) {
        (this.passiveEffect = t), (this.stopPassiveEffect = n);
    }
    set(t) {
        this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
    }
    setWithVelocity(t, n, r) {
        this.set(n), (this.prev = void 0), (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt - r);
    }
    jump(t, n = !0) {
        this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            n && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
    }
    dirty() {
        var t;
        (t = this.events.change) == null || t.notify(this.current);
    }
    addDependent(t) {
        this.dependents || (this.dependents = new Set()), this.dependents.add(t);
    }
    removeDependent(t) {
        this.dependents && this.dependents.delete(t);
    }
    get() {
        return eo.current && eo.current.push(this), this.current;
    }
    getPrevious() {
        return this.prev;
    }
    getVelocity() {
        const t = tt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Sg) return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Sg);
        return Lh(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
    }
    start(t) {
        return (
            this.stop(),
            new Promise((n) => {
                (this.hasAnimated = !0),
                    (this.animation = t(n)),
                    this.events.animationStart && this.events.animationStart.notify();
            }).then(() => {
                this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
            })
        );
    }
    stop() {
        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()),
            this.clearAnimation();
    }
    isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    destroy() {
        var t, n;
        (t = this.dependents) == null || t.clear(),
            (n = this.events.destroy) == null || n.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
    }
}
function Jt(e, t) {
    return new wM(e, t);
}
function M1(e, t) {
    if (e != null && e.inherit && t) {
        const { inherit: n, ...r } = e;
        return { ...t, ...r };
    }
    return e;
}
function Hh(e, t) {
    const n = (e == null ? void 0 : e[t]) ?? (e == null ? void 0 : e.default) ?? e;
    return n !== e ? M1(n, e) : n;
}
const SM = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
    EM = (e) => ({ type: "spring", stiffness: 550, damping: e === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }),
    CM = { type: "keyframes", duration: 0.8 },
    bM = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
    TM = (e, { keyframes: t }) => (t.length > 2 ? CM : wi.has(e) ? (e.startsWith("scale") ? EM(t[1]) : SM) : bM),
    PM = new Set([
        "when",
        "delay",
        "delayChildren",
        "staggerChildren",
        "staggerDirection",
        "repeat",
        "repeatType",
        "repeatDelay",
        "from",
        "elapsed",
    ]);
function kM(e) {
    for (const t in e) if (!PM.has(t)) return !0;
    return !1;
}
const Kh =
        (e, t, n, r = {}, s, i) =>
        (o) => {
            const a = Hh(r, e) || {},
                l = a.delay || r.delay || 0;
            let { elapsed: u = 0 } = r;
            u = u - Ct(l);
            const c = {
                keyframes: Array.isArray(n) ? n : [null, n],
                ease: "easeOut",
                velocity: t.getVelocity(),
                ...a,
                delay: -u,
                onUpdate: (d) => {
                    t.set(d), a.onUpdate && a.onUpdate(d);
                },
                onComplete: () => {
                    o(), a.onComplete && a.onComplete();
                },
                name: e,
                motionValue: t,
                element: i ? void 0 : s,
            };
            kM(a) || Object.assign(c, TM(e, c)),
                c.duration && (c.duration = Ct(c.duration)),
                c.repeatDelay && (c.repeatDelay = Ct(c.repeatDelay)),
                c.from !== void 0 && (c.keyframes[0] = c.from);
            let f = !1;
            if (
                ((c.type === !1 || (c.duration === 0 && !c.repeatDelay)) && (Yf(c), c.delay === 0 && (f = !0)),
                (Rr.instantAnimations ||
                    Rr.skipAnimations ||
                    (s != null && s.shouldSkipAnimations) ||
                    a.skipAnimations) &&
                    ((f = !0), Yf(c), (c.delay = 0)),
                (c.allowFlatten = !a.type && !a.ease),
                f && !i && t.get() !== void 0)
            ) {
                const d = vu(c.keyframes, a);
                if (d !== void 0) {
                    re.update(() => {
                        c.onUpdate(d), c.onComplete();
                    });
                    return;
                }
            }
            return a.isSync ? new jl(c) : new vM(c);
        },
    AM = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function RM(e) {
    const t = AM.exec(e);
    if (!t) return [,];
    const [, n, r, s] = t;
    return [`--${n ?? r}`, s];
}
function N1(e, t, n = 1) {
    const [r, s] = RM(e);
    if (!r) return;
    const i = window.getComputedStyle(t).getPropertyValue(r);
    if (i) {
        const o = i.trim();
        return Kw(o) ? parseFloat(o) : o;
    }
    return jh(s) ? N1(s, t, n + 1) : s;
}
function Eg(e) {
    const t = [{}, {}];
    return (
        e == null ||
            e.values.forEach((n, r) => {
                (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
            }),
        t
    );
}
function Gh(e, t, n, r) {
    if (typeof t == "function") {
        const [s, i] = Eg(r);
        t = t(n !== void 0 ? n : e.custom, s, i);
    }
    if ((typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function")) {
        const [s, i] = Eg(r);
        t = t(n !== void 0 ? n : e.custom, s, i);
    }
    return t;
}
function ts(e, t, n) {
    const r = e.getProps();
    return Gh(r, t, n !== void 0 ? n : r.custom, e);
}
const L1 = new Set(["width", "height", "top", "left", "right", "bottom", ...xi]),
    Xf = (e) => Array.isArray(e);
function MM(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Jt(n));
}
function NM(e) {
    return Xf(e) ? e[e.length - 1] || 0 : e;
}
function LM(e, t) {
    const n = ts(e, t);
    let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
    i = { ...i, ...r };
    for (const o in i) {
        const a = NM(i[o]);
        MM(e, o, a);
    }
}
const $e = (e) => !!(e && e.getVelocity);
function DM(e) {
    return !!($e(e) && e.add);
}
function qf(e, t) {
    const n = e.getValue("willChange");
    if (DM(n)) return n.add(t);
    if (!n && Rr.WillChange) {
        const r = new Rr.WillChange("auto");
        e.addValue("willChange", r), r.add(t);
    }
}
function Qh(e) {
    return e.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
}
const OM = "framerAppearId",
    D1 = "data-" + Qh(OM);
function O1(e) {
    return e.props[D1];
}
function jM({ protectedKeys: e, needsAnimating: t }, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return (t[n] = !1), r;
}
function j1(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
    let { transition: i, transitionEnd: o, ...a } = t;
    const l = e.getDefaultTransition();
    i = i ? M1(i, l) : l;
    const u = i == null ? void 0 : i.reduceMotion,
        c = i == null ? void 0 : i.skipAnimations;
    r && (i = r);
    const f = [],
        d = s && e.animationState && e.animationState.getState()[s],
        h = i == null ? void 0 : i.path;
    h && h.animateVisualElement(e, a, i, n, f);
    for (const y in a) {
        const p = e.getValue(y, e.latestValues[y] ?? null),
            x = a[y];
        if (x === void 0 || (d && jM(d, y))) continue;
        const m = { delay: n, ...Hh(i || {}, y) };
        c && (m.skipAnimations = !0);
        const g = p.get();
        if (g !== void 0 && !p.isAnimating() && !Array.isArray(x) && x === g && !m.velocity) {
            re.update(() => p.set(x));
            continue;
        }
        let v = !1;
        if (window.MotionHandoffAnimation) {
            const T = O1(e);
            if (T) {
                const b = window.MotionHandoffAnimation(T, y, re);
                b !== null && ((m.startTime = b), (v = !0));
            }
        }
        qf(e, y);
        const S = u ?? e.shouldReduceMotion;
        p.start(Kh(y, p, x, S && L1.has(y) ? { type: !1 } : m, e, v));
        const C = p.animation;
        C && f.push(C);
    }
    if (o) {
        const y = () =>
            re.update(() => {
                o && LM(e, o);
            });
        f.length ? Promise.all(f).then(y) : y();
    }
    return f;
}
function Zf(e, t, n = {}) {
    var l;
    const r = ts(e, t, n.type === "exit" ? ((l = e.presenceContext) == null ? void 0 : l.custom) : void 0);
    let { transition: s = e.getDefaultTransition() || {} } = r || {};
    n.transitionOverride && (s = n.transitionOverride);
    const i = r ? () => Promise.all(j1(e, r, n)) : () => Promise.resolve(),
        o =
            e.variantChildren && e.variantChildren.size
                ? (u = 0) => {
                      const { delayChildren: c = 0, staggerChildren: f, staggerDirection: d } = s;
                      return IM(e, t, u, c, f, d, n);
                  }
                : () => Promise.resolve(),
        { when: a } = s;
    if (a) {
        const [u, c] = a === "beforeChildren" ? [i, o] : [o, i];
        return u().then(() => c());
    } else return Promise.all([i(), o(n.delay)]);
}
function IM(e, t, n = 0, r = 0, s = 0, i = 1, o) {
    const a = [];
    for (const l of e.variantChildren)
        l.notify("AnimationStart", t),
            a.push(
                Zf(l, t, {
                    ...o,
                    delay: n + (typeof r == "function" ? 0 : r) + R1(e.variantChildren, l, r, s, i),
                }).then(() => l.notify("AnimationComplete", t))
            );
    return Promise.all(a);
}
function FM(e, t, n = {}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const s = t.map((i) => Zf(e, i, n));
        r = Promise.all(s);
    } else if (typeof t == "string") r = Zf(e, t, n);
    else {
        const s = typeof t == "function" ? ts(e, t, n.custom) : t;
        r = Promise.all(j1(e, s, n));
    }
    return r.then(() => {
        e.notify("AnimationComplete", t);
    });
}
const VM = { test: (e) => e === "auto", parse: (e) => e },
    I1 = (e) => (t) => t.test(e),
    F1 = [vi, z, Cn, An, hR, dR, VM],
    Cg = (e) => F1.find(I1(e));
function _M(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Qw(e) : !0;
}
const zM = new Set(["brightness", "contrast", "saturate", "opacity"]);
function BM(e) {
    const [t, n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow") return e;
    const [r] = n.match(Ih) || [];
    if (!r) return e;
    const s = n.replace(r, "");
    let i = zM.has(t) ? 1 : 0;
    return r !== n && (i *= 100), t + "(" + i + s + ")";
}
const $M = /\b([a-z-]*)\(.*?\)/gu,
    Jf = {
        ...nn,
        getAnimatableNone: (e) => {
            const t = e.match($M);
            return t ? t.map(BM).join(" ") : e;
        },
    },
    ed = {
        ...nn,
        getAnimatableNone: (e) => {
            const t = nn.parse(e);
            return nn.createTransformer(e)(
                t.map((r) => (typeof r == "number" ? 0 : typeof r == "object" ? { ...r, alpha: 1 } : r))
            );
        },
    },
    bg = { ...vi, transform: Math.round },
    UM = {
        rotate: An,
        pathRotation: An,
        rotateX: An,
        rotateY: An,
        rotateZ: An,
        scale: Aa,
        scaleX: Aa,
        scaleY: Aa,
        scaleZ: Aa,
        skew: An,
        skewX: An,
        skewY: An,
        distance: z,
        translateX: z,
        translateY: z,
        translateZ: z,
        x: z,
        y: z,
        z,
        perspective: z,
        transformPerspective: z,
        opacity: Ao,
        originX: cg,
        originY: cg,
        originZ: z,
    },
    Il = {
        borderWidth: z,
        borderTopWidth: z,
        borderRightWidth: z,
        borderBottomWidth: z,
        borderLeftWidth: z,
        borderRadius: z,
        borderTopLeftRadius: z,
        borderTopRightRadius: z,
        borderBottomRightRadius: z,
        borderBottomLeftRadius: z,
        width: z,
        maxWidth: z,
        height: z,
        maxHeight: z,
        top: z,
        right: z,
        bottom: z,
        left: z,
        inset: z,
        insetBlock: z,
        insetBlockStart: z,
        insetBlockEnd: z,
        insetInline: z,
        insetInlineStart: z,
        insetInlineEnd: z,
        padding: z,
        paddingTop: z,
        paddingRight: z,
        paddingBottom: z,
        paddingLeft: z,
        paddingBlock: z,
        paddingBlockStart: z,
        paddingBlockEnd: z,
        paddingInline: z,
        paddingInlineStart: z,
        paddingInlineEnd: z,
        margin: z,
        marginTop: z,
        marginRight: z,
        marginBottom: z,
        marginLeft: z,
        marginBlock: z,
        marginBlockStart: z,
        marginBlockEnd: z,
        marginInline: z,
        marginInlineStart: z,
        marginInlineEnd: z,
        fontSize: z,
        backgroundPositionX: z,
        backgroundPositionY: z,
        ...UM,
        zIndex: bg,
        fillOpacity: Ao,
        strokeOpacity: Ao,
        numOctaves: bg,
    },
    WM = {
        ...Il,
        color: ke,
        backgroundColor: ke,
        outlineColor: ke,
        fill: ke,
        stroke: ke,
        borderColor: ke,
        borderTopColor: ke,
        borderRightColor: ke,
        borderBottomColor: ke,
        borderLeftColor: ke,
        filter: Jf,
        WebkitFilter: Jf,
        mask: ed,
        WebkitMask: ed,
    },
    V1 = (e) => WM[e],
    HM = new Set([Jf, ed]);
function _1(e, t) {
    let n = V1(e);
    return HM.has(n) || (n = nn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const KM = new Set(["auto", "none", "0"]);
function GM(e, t, n) {
    let r = 0,
        s;
    for (; r < e.length && !s; ) {
        const i = e[r];
        typeof i == "string" && !KM.has(i) && ui(i).values.length && (s = e[r]), r++;
    }
    if (s && n) for (const i of t) e[i] = _1(n, s);
}
class QM extends $h {
    constructor(t, n, r, s, i) {
        super(t, n, r, s, i, !0);
    }
    readKeyframes() {
        const { unresolvedKeyframes: t, element: n, name: r } = this;
        if (!n || !n.current) return;
        super.readKeyframes();
        for (let c = 0; c < t.length; c++) {
            let f = t[c];
            if (typeof f == "string" && ((f = f.trim()), jh(f))) {
                const d = N1(f, n.current);
                d !== void 0 && (t[c] = d), c === t.length - 1 && (this.finalKeyframe = f);
            }
        }
        if ((this.resolveNoneKeyframes(), !L1.has(r) || t.length !== 2)) return;
        const [s, i] = t,
            o = Cg(s),
            a = Cg(i),
            l = ug(s),
            u = ug(i);
        if (l !== u && dr[r]) {
            this.needsMeasurement = !0;
            return;
        }
        if (o !== a)
            if (vg(o) && vg(a))
                for (let c = 0; c < t.length; c++) {
                    const f = t[c];
                    typeof f == "string" && (t[c] = parseFloat(f));
                }
            else dr[r] && (this.needsMeasurement = !0);
    }
    resolveNoneKeyframes() {
        const { unresolvedKeyframes: t, name: n } = this,
            r = [];
        for (let s = 0; s < t.length; s++) (t[s] === null || _M(t[s])) && r.push(s);
        r.length && GM(t, r, n);
    }
    measureInitialState() {
        const { element: t, unresolvedKeyframes: n, name: r } = this;
        if (!t || !t.current) return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = dr[r](t.measureViewportBox(), window.getComputedStyle(t.current))),
            (n[0] = this.measuredOrigin);
        const s = n[n.length - 1];
        s !== void 0 && t.getValue(r, s).jump(s, !1);
    }
    measureEndState() {
        var a;
        const { element: t, name: n, unresolvedKeyframes: r } = this;
        if (!t || !t.current) return;
        const s = t.getValue(n);
        s && s.jump(this.measuredOrigin, !1);
        const i = r.length - 1,
            o = r[i];
        (r[i] = dr[n](t.measureViewportBox(), window.getComputedStyle(t.current))),
            o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o),
            (a = this.removedTransforms) != null &&
                a.length &&
                this.removedTransforms.forEach(([l, u]) => {
                    t.getValue(l).set(u);
                }),
            this.resolveNoneKeyframes();
    }
}
function Yh(e, t, n) {
    if (e == null) return [];
    if (e instanceof EventTarget) return [e];
    if (typeof e == "string") {
        const s = document.querySelectorAll(e);
        return s ? Array.from(s) : [];
    }
    return Array.from(e).filter((r) => r != null);
}
const td = (e, t) => (t && typeof e == "number" ? t.transform(e) : e);
function to(e) {
    return Gw(e) && "offsetHeight" in e && !("ownerSVGElement" in e);
}
const { schedule: ci, cancel: z1 } = o1(queueMicrotask, !1),
    Gt = { x: !1, y: !1 };
function B1() {
    return Gt.x || Gt.y;
}
function YM(e) {
    return e === "x" || e === "y"
        ? Gt[e]
            ? null
            : ((Gt[e] = !0),
              () => {
                  Gt[e] = !1;
              })
        : Gt.x || Gt.y
          ? null
          : ((Gt.x = Gt.y = !0),
            () => {
                Gt.x = Gt.y = !1;
            });
}
function $1(e, t) {
    const n = Yh(e),
        r = new AbortController(),
        s = { passive: !0, ...t, signal: r.signal };
    return [n, s, () => r.abort()];
}
function XM(e) {
    return !(e.pointerType === "touch" || B1());
}
function qM(e, t, n = {}) {
    const [r, s, i] = $1(e, n);
    return (
        r.forEach((o) => {
            let a = !1,
                l = !1,
                u;
            const c = () => {
                    o.removeEventListener("pointerleave", y);
                },
                f = (x) => {
                    u && (u(x), (u = void 0)), c();
                },
                d = (x) => {
                    (a = !1),
                        window.removeEventListener("pointerup", d),
                        window.removeEventListener("pointercancel", d),
                        l && ((l = !1), f(x));
                },
                h = () => {
                    (a = !0),
                        window.addEventListener("pointerup", d, s),
                        window.addEventListener("pointercancel", d, s);
                },
                y = (x) => {
                    if (x.pointerType !== "touch") {
                        if (a) {
                            l = !0;
                            return;
                        }
                        f(x);
                    }
                },
                p = (x) => {
                    if (!XM(x)) return;
                    l = !1;
                    const m = t(o, x);
                    typeof m == "function" && ((u = m), o.addEventListener("pointerleave", y, s));
                };
            o.addEventListener("pointerenter", p, s), o.addEventListener("pointerdown", h, s);
        }),
        i
    );
}
const U1 = (e, t) => (t ? (e === t ? !0 : U1(e, t.parentElement)) : !1),
    Xh = (e) => (e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1),
    ZM = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function JM(e) {
    return ZM.has(e.tagName) || e.isContentEditable === !0;
}
const eN = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function tN(e) {
    return eN.has(e.tagName) || e.isContentEditable === !0;
}
const Ya = new WeakSet();
function Tg(e) {
    return (t) => {
        t.key === "Enter" && e(t);
    };
}
function mc(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const nN = (e, t) => {
    const n = e.currentTarget;
    if (!n) return;
    const r = Tg(() => {
        if (Ya.has(n)) return;
        mc(n, "down");
        const s = Tg(() => {
                mc(n, "up");
            }),
            i = () => mc(n, "cancel");
        n.addEventListener("keyup", s, t), n.addEventListener("blur", i, t);
    });
    n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Pg(e) {
    return Xh(e) && !B1();
}
const kg = new WeakSet();
function rN(e, t, n = {}) {
    const [r, s, i] = $1(e, n),
        o = (a) => {
            const l = a.currentTarget;
            if (!Pg(a) || kg.has(a)) return;
            Ya.add(l), n.stopPropagation && kg.add(a);
            const u = t(l, a),
                c = (h, y) => {
                    window.removeEventListener("pointerup", f),
                        window.removeEventListener("pointercancel", d),
                        Ya.has(l) && Ya.delete(l),
                        Pg(h) && typeof u == "function" && u(h, { success: y });
                },
                f = (h) => {
                    c(h, l === window || l === document || n.useGlobalTarget || U1(l, h.target));
                },
                d = (h) => {
                    c(h, !1);
                };
            window.addEventListener("pointerup", f, s), window.addEventListener("pointercancel", d, s);
        };
    return (
        r.forEach((a) => {
            (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s),
                to(a) &&
                    (a.addEventListener("focus", (u) => nN(u, s)),
                    !JM(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
        }),
        i
    );
}
function qh(e) {
    return Gw(e) && "ownerSVGElement" in e;
}
const Xa = new WeakMap();
let Zn;
const W1 = (e, t, n) => (r, s) => (s && s[0] ? s[0][e + "Size"] : qh(r) && "getBBox" in r ? r.getBBox()[t] : r[n]),
    sN = W1("inline", "width", "offsetWidth"),
    iN = W1("block", "height", "offsetHeight");
function oN({ target: e, borderBoxSize: t }) {
    var n;
    (n = Xa.get(e)) == null ||
        n.forEach((r) => {
            r(e, {
                get width() {
                    return sN(e, t);
                },
                get height() {
                    return iN(e, t);
                },
            });
        });
}
function aN(e) {
    e.forEach(oN);
}
function lN() {
    typeof ResizeObserver > "u" || (Zn = new ResizeObserver(aN));
}
function uN(e, t) {
    Zn || lN();
    const n = Yh(e);
    return (
        n.forEach((r) => {
            let s = Xa.get(r);
            s || ((s = new Set()), Xa.set(r, s)), s.add(t), Zn == null || Zn.observe(r);
        }),
        () => {
            n.forEach((r) => {
                const s = Xa.get(r);
                s == null || s.delete(t), (s != null && s.size) || Zn == null || Zn.unobserve(r);
            });
        }
    );
}
const qa = new Set();
let Ds;
function cN() {
    (Ds = () => {
        const e = {
            get width() {
                return window.innerWidth;
            },
            get height() {
                return window.innerHeight;
            },
        };
        qa.forEach((t) => t(e));
    }),
        window.addEventListener("resize", Ds);
}
function fN(e) {
    return (
        qa.add(e),
        Ds || cN(),
        () => {
            qa.delete(e),
                !qa.size && typeof Ds == "function" && (window.removeEventListener("resize", Ds), (Ds = void 0));
        }
    );
}
function nd(e, t) {
    return typeof e == "function" ? fN(e) : uN(e, t);
}
function H1(e, t) {
    let n;
    const r = () => {
        const { currentTime: s } = t,
            o = (s === null ? 0 : s.value) / 100;
        n !== o && e(o), (n = o);
    };
    return re.preUpdate(r, !0), () => It(r);
}
function dN(e) {
    return qh(e) && e.tagName === "svg";
}
function hN(...e) {
    const t = !Array.isArray(e[0]),
        n = t ? 0 : -1,
        r = e[0 + n],
        s = e[1 + n],
        i = e[2 + n],
        o = e[3 + n],
        a = zh(s, i, o);
    return t ? a(r) : a;
}
const pN = [...F1, ke, nn],
    mN = (e) => pN.find(I1(e)),
    Ag = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
    Os = () => ({ x: Ag(), y: Ag() }),
    Rg = () => ({ min: 0, max: 0 }),
    Ne = () => ({ x: Rg(), y: Rg() }),
    gN = new WeakMap();
function xu(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Ro(e) {
    return typeof e == "string" || Array.isArray(e);
}
const Zh = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
    Jh = ["initial", ...Zh];
function wu(e) {
    return xu(e.animate) || Jh.some((t) => Ro(e[t]));
}
function K1(e) {
    return !!(wu(e) || e.variants);
}
function yN(e, t, n) {
    for (const r in t) {
        const s = t[r],
            i = n[r];
        if ($e(s)) e.addValue(r, s);
        else if ($e(i)) e.addValue(r, Jt(s, { owner: e }));
        else if (i !== s)
            if (e.hasValue(r)) {
                const o = e.getValue(r);
                o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
            } else {
                const o = e.getStaticValue(r);
                e.addValue(r, Jt(o !== void 0 ? o : s, { owner: e }));
            }
    }
    for (const r in n) t[r] === void 0 && e.removeValue(r);
    return t;
}
const rd = { current: null },
    G1 = { current: !1 },
    vN = typeof window < "u";
function xN() {
    if (((G1.current = !0), !!vN))
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)"),
                t = () => (rd.current = e.matches);
            e.addEventListener("change", t), t();
        } else rd.current = !1;
}
const Mg = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
];
let Fl = {};
function Q1(e) {
    Fl = e;
}
function wN() {
    return Fl;
}
class SN {
    scrapeMotionValuesFromProps(t, n, r) {
        return {};
    }
    constructor(
        {
            parent: t,
            props: n,
            presenceContext: r,
            reducedMotionConfig: s,
            skipAnimations: i,
            blockInitialAnimation: o,
            visualState: a,
        },
        l = {}
    ) {
        (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.shouldSkipAnimations = !1),
            (this.values = new Map()),
            (this.KeyframeResolver = $h),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.hasBeenMounted = !1),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
            (this.render = () => {
                this.current &&
                    (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
                const h = tt.now();
                this.renderScheduledAt < h && ((this.renderScheduledAt = h), re.render(this.render, !1, !0));
            });
        const { latestValues: u, renderState: c } = a;
        (this.latestValues = u),
            (this.baseTarget = { ...u }),
            (this.initialValues = n.initial ? { ...u } : {}),
            (this.renderState = c),
            (this.parent = t),
            (this.props = n),
            (this.presenceContext = r),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = s),
            (this.skipAnimationsConfig = i),
            (this.options = l),
            (this.blockInitialAnimation = !!o),
            (this.isControllingVariants = wu(n)),
            (this.isVariantNode = K1(n)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
        const { willChange: f, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const h in d) {
            const y = d[h];
            u[h] !== void 0 && $e(y) && y.set(u[h]);
        }
    }
    mount(t) {
        var n, r;
        if (this.hasBeenMounted)
            for (const s in this.initialValues)
                (n = this.values.get(s)) == null || n.jump(this.initialValues[s]),
                    (this.latestValues[s] = this.initialValues[s]);
        (this.current = t),
            gN.set(t, this),
            this.projection && !this.projection.instance && this.projection.mount(t),
            this.parent &&
                this.isVariantNode &&
                !this.isControllingVariants &&
                (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((s, i) => this.bindToMotionValue(i, s)),
            this.reducedMotionConfig === "never"
                ? (this.shouldReduceMotion = !1)
                : this.reducedMotionConfig === "always"
                  ? (this.shouldReduceMotion = !0)
                  : (G1.current || xN(), (this.shouldReduceMotion = rd.current)),
            (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
            (r = this.parent) == null || r.addChild(this),
            this.update(this.props, this.presenceContext),
            (this.hasBeenMounted = !0);
    }
    unmount() {
        var t;
        this.projection && this.projection.unmount(),
            It(this.notifyUpdate),
            It(this.render),
            this.valueSubscriptions.forEach((n) => n()),
            this.valueSubscriptions.clear(),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            (t = this.parent) == null || t.removeChild(this);
        for (const n in this.events) this.events[n].clear();
        for (const n in this.features) {
            const r = this.features[n];
            r && (r.unmount(), (r.isMounted = !1));
        }
        this.current = null;
    }
    addChild(t) {
        this.children.add(t),
            this.enteringChildren ?? (this.enteringChildren = new Set()),
            this.enteringChildren.add(t);
    }
    removeChild(t) {
        this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t);
    }
    bindToMotionValue(t, n) {
        if (
            (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
            n.accelerate && A1.has(t) && this.current instanceof HTMLElement)
        ) {
            const { factory: o, keyframes: a, times: l, ease: u, duration: c } = n.accelerate,
                f = new P1({ element: this.current, name: t, keyframes: a, times: l, ease: u, duration: Ct(c) }),
                d = o(f);
            this.valueSubscriptions.set(t, () => {
                d(), f.cancel();
            });
            return;
        }
        const r = wi.has(t);
        r && this.onBindTransform && this.onBindTransform();
        const s = n.on("change", (o) => {
            (this.latestValues[t] = o),
                this.props.onUpdate && re.preRender(this.notifyUpdate),
                r && this.projection && (this.projection.isTransformDirty = !0),
                this.scheduleRender();
        });
        let i;
        typeof window < "u" && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, n)),
            this.valueSubscriptions.set(t, () => {
                s(), i && i();
            });
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type
            ? 0
            : this.sortInstanceNodePosition(this.current, t.current);
    }
    updateFeatures() {
        let t = "animation";
        for (t in Fl) {
            const n = Fl[t];
            if (!n) continue;
            const { isEnabled: r, Feature: s } = n;
            if ((!this.features[t] && s && r(this.props) && (this.features[t] = new s(this)), this.features[t])) {
                const i = this.features[t];
                i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ne();
    }
    getStaticValue(t) {
        return this.latestValues[t];
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n;
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = n);
        for (let r = 0; r < Mg.length; r++) {
            const s = Mg[r];
            this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
            const i = "on" + s,
                o = t[i];
            o && (this.propEventSubscriptions[s] = this.on(s, o));
        }
        (this.prevMotionValues = yN(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
            this.prevMotionValues
        )),
            this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
        return this.props;
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0;
    }
    getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n) return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r &&
            (r && this.removeValue(t),
            this.bindToMotionValue(t, n),
            this.values.set(t, n),
            (this.latestValues[t] = n.get()));
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
    }
    hasValue(t) {
        return this.values.has(t);
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t]) return this.props.values[t];
        let r = this.values.get(t);
        return (
            r === void 0 && n !== void 0 && ((r = Jt(n === null ? void 0 : n, { owner: this })), this.addValue(t, r)), r
        );
    }
    readValue(t, n) {
        let r =
            this.latestValues[t] !== void 0 || !this.current
                ? this.latestValues[t]
                : (this.getBaseTargetFromProps(this.props, t) ??
                  this.readValueFromInstance(this.current, t, this.options));
        return (
            r != null &&
                (typeof r == "string" && (Kw(r) || Qw(r))
                    ? (r = parseFloat(r))
                    : !mN(r) && nn.test(n) && (r = _1(t, n)),
                this.setBaseTarget(t, $e(r) ? r.get() : r)),
            $e(r) ? r.get() : r
        );
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n;
    }
    getBaseTarget(t) {
        var i;
        const { initial: n } = this.props;
        let r;
        if (typeof n == "string" || typeof n == "object") {
            const o = Gh(this.props, n, (i = this.presenceContext) == null ? void 0 : i.custom);
            o && (r = o[t]);
        }
        if (n && r !== void 0) return r;
        const s = this.getBaseTargetFromProps(this.props, t);
        return s !== void 0 && !$e(s)
            ? s
            : this.initialValues[t] !== void 0 && r === void 0
              ? void 0
              : this.baseTarget[t];
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new Nh()), this.events[t].add(n);
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n);
    }
    scheduleRenderMicrotask() {
        ci.render(this.render);
    }
}
class Y1 extends SN {
    constructor() {
        super(...arguments), (this.KeyframeResolver = QM);
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(t, n) {
        const r = t.style;
        return r ? r[n] : void 0;
    }
    removeValueFromRenderState(t, { vars: n, style: r }) {
        delete n[t], delete r[t];
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
        const { children: t } = this.props;
        $e(t) &&
            (this.childSubscription = t.on("change", (n) => {
                this.current && (this.current.textContent = `${n}`);
            }));
    }
}
class Or {
    constructor(t) {
        (this.isMounted = !1), (this.node = t);
    }
    update() {}
}
function X1({ top: e, left: t, right: n, bottom: r }) {
    return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function EN({ x: e, y: t }) {
    return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function CN(e, t) {
    if (!t) return e;
    const n = t({ x: e.left, y: e.top }),
        r = t({ x: e.right, y: e.bottom });
    return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function gc(e) {
    return e === void 0 || e === 1;
}
function sd({ scale: e, scaleX: t, scaleY: n }) {
    return !gc(e) || !gc(t) || !gc(n);
}
function zr(e) {
    return sd(e) || q1(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function q1(e) {
    return Ng(e.x) || Ng(e.y);
}
function Ng(e) {
    return e && e !== "0%";
}
function Vl(e, t, n) {
    const r = e - n,
        s = t * r;
    return n + s;
}
function Lg(e, t, n, r, s) {
    return s !== void 0 && (e = Vl(e, s, r)), Vl(e, n, r) + t;
}
function id(e, t = 0, n = 1, r, s) {
    (e.min = Lg(e.min, t, n, r, s)), (e.max = Lg(e.max, t, n, r, s));
}
function Z1(e, { x: t, y: n }) {
    id(e.x, t.translate, t.scale, t.originPoint), id(e.y, n.translate, n.scale, n.originPoint);
}
const Dg = 0.999999999999,
    Og = 1.0000000000001;
function bN(e, t, n, r = !1) {
    var a;
    const s = n.length;
    if (!s) return;
    t.x = t.y = 1;
    let i, o;
    for (let l = 0; l < s; l++) {
        (i = n[l]), (o = i.projectionDelta);
        const { visualElement: u } = i.options;
        (u && u.props.style && u.props.style.display === "contents") ||
            (r &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                (yn(e.x, -i.scroll.offset.x), yn(e.y, -i.scroll.offset.y)),
            o && ((t.x *= o.x.scale), (t.y *= o.y.scale), Z1(e, o)),
            r && zr(i.latestValues) && Za(e, i.latestValues, (a = i.layout) == null ? void 0 : a.layoutBox));
    }
    t.x < Og && t.x > Dg && (t.x = 1), t.y < Og && t.y > Dg && (t.y = 1);
}
function yn(e, t) {
    (e.min += t), (e.max += t);
}
function jg(e, t, n, r, s = 0.5) {
    const i = ae(e.min, e.max, s);
    id(e, t, n, i, r);
}
function Ig(e, t) {
    return typeof e == "string" ? (parseFloat(e) / 100) * (t.max - t.min) : e;
}
function Za(e, t, n) {
    const r = n ?? e;
    jg(e.x, Ig(t.x, r.x), t.scaleX, t.scale, t.originX), jg(e.y, Ig(t.y, r.y), t.scaleY, t.scale, t.originY);
}
function J1(e, t) {
    return X1(CN(e.getBoundingClientRect(), t));
}
function TN(e, t, n) {
    const r = J1(e, n),
        { scroll: s } = t;
    return s && (yn(r.x, s.offset.x), yn(r.y, s.offset.y)), r;
}
const PN = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
    kN = xi.length;
function AN(e, t, n) {
    let r = "",
        s = !0;
    for (let o = 0; o < kN; o++) {
        const a = xi[o],
            l = e[a];
        if (l === void 0) continue;
        let u = !0;
        if (typeof l == "number") u = l === (a.startsWith("scale") ? 1 : 0);
        else {
            const c = parseFloat(l);
            u = a.startsWith("scale") ? c === 1 : c === 0;
        }
        if (!u || n) {
            const c = td(l, Il[a]);
            if (!u) {
                s = !1;
                const f = PN[a] || a;
                r += `${f}(${c}) `;
            }
            n && (t[a] = c);
        }
    }
    const i = e.pathRotation;
    return (
        i && ((s = !1), (r += `rotate(${td(i, Il.pathRotation)}) `)),
        (r = r.trim()),
        n ? (r = n(t, s ? "" : r)) : s && (r = "none"),
        r
    );
}
function ep(e, t, n) {
    const { style: r, vars: s, transformOrigin: i } = e;
    let o = !1,
        a = !1;
    for (const l in t) {
        const u = t[l];
        if (wi.has(l)) {
            o = !0;
            continue;
        } else if (l1(l)) {
            s[l] = u;
            continue;
        } else {
            const c = td(u, Il[l]);
            l.startsWith("origin") ? ((a = !0), (i[l] = c)) : (r[l] = c);
        }
    }
    if ((t.transform || (o || n ? (r.transform = AN(t, e.transform, n)) : r.transform && (r.transform = "none")), a)) {
        const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = i;
        r.transformOrigin = `${l} ${u} ${c}`;
    }
}
function eS(e, { style: t, vars: n }, r, s) {
    const i = e.style;
    let o;
    for (o in t) i[o] = t[o];
    s == null || s.applyProjectionStyles(i, r);
    for (o in n) i.setProperty(o, n[o]);
}
function Fg(e, t) {
    return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Oi = {
        correct: (e, t) => {
            if (!t.target) return e;
            if (typeof e == "string")
                if (z.test(e)) e = parseFloat(e);
                else return e;
            const n = Fg(e, t.target.x),
                r = Fg(e, t.target.y);
            return `${n}% ${r}%`;
        },
    },
    RN = {
        correct: (e, { treeScale: t, projectionDelta: n }) => {
            const r = e,
                s = nn.parse(e);
            if (s.length > 5) return r;
            const i = nn.createTransformer(e),
                o = typeof s[0] != "number" ? 1 : 0,
                a = n.x.scale * t.x,
                l = n.y.scale * t.y;
            (s[0 + o] /= a), (s[1 + o] /= l);
            const u = ae(a, l, 0.5);
            return typeof s[2 + o] == "number" && (s[2 + o] /= u), typeof s[3 + o] == "number" && (s[3 + o] /= u), i(s);
        },
    },
    od = {
        borderRadius: {
            ...Oi,
            applyTo: [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomLeftRadius",
                "borderBottomRightRadius",
            ],
        },
        borderTopLeftRadius: Oi,
        borderTopRightRadius: Oi,
        borderBottomLeftRadius: Oi,
        borderBottomRightRadius: Oi,
        boxShadow: RN,
    };
function tS(e, { layout: t, layoutId: n }) {
    return wi.has(e) || e.startsWith("origin") || ((t || n !== void 0) && (!!od[e] || e === "opacity"));
}
function tp(e, t, n) {
    var o;
    const r = e.style,
        s = t == null ? void 0 : t.style,
        i = {};
    if (!r) return i;
    for (const a in r)
        ($e(r[a]) ||
            (s && $e(s[a])) ||
            tS(a, e) ||
            ((o = n == null ? void 0 : n.getValue(a)) == null ? void 0 : o.liveStyle) !== void 0) &&
            (i[a] = r[a]);
    return i;
}
function MN(e) {
    return window.getComputedStyle(e);
}
class NN extends Y1 {
    constructor() {
        super(...arguments), (this.type = "html"), (this.renderInstance = eS);
    }
    readValueFromInstance(t, n) {
        var r;
        if (wi.has(n)) return (r = this.projection) != null && r.isProjecting ? Wf(n) : qR(t, n);
        {
            const s = MN(t),
                i = (l1(n) ? s.getPropertyValue(n) : s[n]) || 0;
            return typeof i == "string" ? i.trim() : i;
        }
    }
    measureInstanceViewportBox(t, { transformPagePoint: n }) {
        return J1(t, n);
    }
    build(t, n, r) {
        ep(t, n, r.transformTemplate);
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return tp(t, n, r);
    }
}
const LN = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
    DN = { offset: "strokeDashoffset", array: "strokeDasharray" };
function ON(e, t, n = 1, r = 0, s = !0) {
    e.pathLength = 1;
    const i = s ? LN : DN;
    (e[i.offset] = `${-r}`), (e[i.array] = `${t} ${n}`);
}
const jN = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function nS(
    e,
    { attrX: t, attrY: n, attrScale: r, pathLength: s, pathSpacing: i = 1, pathOffset: o = 0, ...a },
    l,
    u,
    c
) {
    if ((ep(e, a, u), l)) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return;
    }
    (e.attrs = e.style), (e.style = {});
    const { attrs: f, style: d } = e;
    f.transform && ((d.transform = f.transform), delete f.transform),
        (d.transform || f.transformOrigin) &&
            ((d.transformOrigin = f.transformOrigin ?? "50% 50%"), delete f.transformOrigin),
        d.transform && ((d.transformBox = (c == null ? void 0 : c.transformBox) ?? "fill-box"), delete f.transformBox);
    for (const h of jN) f[h] !== void 0 && ((d[h] = f[h]), delete f[h]);
    t !== void 0 && (f.x = t),
        n !== void 0 && (f.y = n),
        r !== void 0 && (f.scale = r),
        s !== void 0 && ON(f, s, i, o, !1);
}
const rS = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
    ]),
    sS = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function IN(e, t, n, r) {
    eS(e, t, void 0, r);
    for (const s in t.attrs) e.setAttribute(rS.has(s) ? s : Qh(s), t.attrs[s]);
}
function iS(e, t, n) {
    const r = tp(e, t, n);
    for (const s in e)
        if ($e(e[s]) || $e(t[s])) {
            const i = xi.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
            r[i] = e[s];
        }
    return r;
}
class FN extends Y1 {
    constructor() {
        super(...arguments), (this.type = "svg"), (this.isSVGTag = !1), (this.measureInstanceViewportBox = Ne);
    }
    getBaseTargetFromProps(t, n) {
        return t[n];
    }
    readValueFromInstance(t, n) {
        if (wi.has(n)) {
            const r = V1(n);
            return (r && r.default) || 0;
        }
        return (n = rS.has(n) ? n : Qh(n)), t.getAttribute(n);
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return iS(t, n, r);
    }
    build(t, n, r) {
        nS(t, n, this.isSVGTag, r.transformTemplate, r.style);
    }
    renderInstance(t, n, r, s) {
        IN(t, n, r, s);
    }
    mount(t) {
        (this.isSVGTag = sS(t.tagName)), super.mount(t);
    }
}
const VN = Jh.length;
function oS(e) {
    if (!e) return;
    if (!e.isControllingVariants) {
        const n = e.parent ? oS(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
    }
    const t = {};
    for (let n = 0; n < VN; n++) {
        const r = Jh[n],
            s = e.props[r];
        (Ro(s) || s === !1) && (t[r] = s);
    }
    return t;
}
function aS(e, t) {
    if (!Array.isArray(t)) return !1;
    const n = t.length;
    if (n !== e.length) return !1;
    for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
    return !0;
}
const _N = [...Zh].reverse(),
    zN = Zh.length;
function BN(e) {
    return (t) => Promise.all(t.map(({ animation: n, options: r }) => FM(e, n, r)));
}
function $N(e) {
    let t = BN(e),
        n = Vg(),
        r = !0,
        s = !1;
    const i = (u) => (c, f) => {
        var h;
        const d = ts(e, f, u === "exit" ? ((h = e.presenceContext) == null ? void 0 : h.custom) : void 0);
        if (d) {
            const { transition: y, transitionEnd: p, ...x } = d;
            c = { ...c, ...x, ...p };
        }
        return c;
    };
    function o(u) {
        t = u(e);
    }
    function a(u) {
        const { props: c } = e,
            f = oS(e.parent) || {},
            d = [],
            h = new Set();
        let y = {},
            p = 1 / 0;
        for (let m = 0; m < zN; m++) {
            const g = _N[m],
                v = n[g],
                S = c[g] !== void 0 ? c[g] : f[g],
                C = Ro(S),
                T = g === u ? v.isActive : null;
            T === !1 && (p = m);
            let b = S === f[g] && S !== c[g] && C;
            if (
                (b && (r || s) && e.manuallyAnimateOnMount && (b = !1),
                (v.protectedKeys = { ...y }),
                (!v.isActive && T === null) || (!S && !v.prevProp) || xu(S) || typeof S == "boolean")
            )
                continue;
            if (g === "exit" && v.isActive && T !== !0) {
                v.prevResolvedValues && (y = { ...y, ...v.prevResolvedValues });
                continue;
            }
            const P = UN(v.prevProp, S);
            let R = P || (g === u && v.isActive && !b && C) || (m > p && C),
                k = !1;
            const L = Array.isArray(S) ? S : [S];
            let D = L.reduce(i(g), {});
            T === !1 && (D = {});
            const { prevResolvedValues: W = {} } = v,
                O = { ...W, ...D },
                H = (A) => {
                    (R = !0), h.has(A) && ((k = !0), h.delete(A)), (v.needsAnimating[A] = !0);
                    const M = e.getValue(A);
                    M && (M.liveStyle = !1);
                };
            for (const A in O) {
                const M = D[A],
                    F = W[A];
                if (y.hasOwnProperty(A)) continue;
                let U = !1;
                Xf(M) && Xf(F) ? (U = !aS(M, F) || P) : (U = M !== F),
                    U ? (M != null ? H(A) : h.add(A)) : M !== void 0 && h.has(A) ? H(A) : (v.protectedKeys[A] = !0);
            }
            (v.prevProp = S),
                (v.prevResolvedValues = D),
                v.isActive && (y = { ...y, ...D }),
                (r || s) && e.blockInitialAnimation && (R = !1);
            const _ = b && P;
            R &&
                (!_ || k) &&
                d.push(
                    ...L.map((A) => {
                        const M = { type: g };
                        if (typeof A == "string" && (r || s) && !_ && e.manuallyAnimateOnMount && e.parent) {
                            const { parent: F } = e,
                                U = ts(F, A);
                            if (F.enteringChildren && U) {
                                const { delayChildren: $ } = U.transition || {};
                                M.delay = R1(F.enteringChildren, e, $);
                            }
                        }
                        return { animation: A, options: M };
                    })
                );
        }
        if (h.size) {
            const m = {};
            if (typeof c.initial != "boolean") {
                const g = ts(e, Array.isArray(c.initial) ? c.initial[0] : c.initial);
                g && g.transition && (m.transition = g.transition);
            }
            h.forEach((g) => {
                const v = e.getBaseTarget(g),
                    S = e.getValue(g);
                S && (S.liveStyle = !0), (m[g] = v ?? null);
            }),
                d.push({ animation: m });
        }
        let x = !!d.length;
        return (
            r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (x = !1),
            (r = !1),
            (s = !1),
            x ? t(d) : Promise.resolve()
        );
    }
    function l(u, c) {
        var d;
        if (n[u].isActive === c) return Promise.resolve();
        (d = e.variantChildren) == null ||
            d.forEach((h) => {
                var y;
                return (y = h.animationState) == null ? void 0 : y.setActive(u, c);
            }),
            (n[u].isActive = c);
        const f = a(u);
        for (const h in n) n[h].protectedKeys = {};
        return f;
    }
    return {
        animateChanges: a,
        setActive: l,
        setAnimateFunction: o,
        getState: () => n,
        reset: () => {
            (n = Vg()), (s = !0);
        },
    };
}
function UN(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !aS(t, e) : !1;
}
function Fr(e = !1) {
    return { isActive: e, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
}
function Vg() {
    return {
        animate: Fr(!0),
        whileInView: Fr(),
        whileHover: Fr(),
        whileTap: Fr(),
        whileDrag: Fr(),
        whileFocus: Fr(),
        exit: Fr(),
    };
}
function ad(e, t) {
    (e.min = t.min), (e.max = t.max);
}
function Kt(e, t) {
    ad(e.x, t.x), ad(e.y, t.y);
}
function _g(e, t) {
    (e.translate = t.translate), (e.scale = t.scale), (e.originPoint = t.originPoint), (e.origin = t.origin);
}
const lS = 1e-4,
    WN = 1 - lS,
    HN = 1 + lS,
    uS = 0.01,
    KN = 0 - uS,
    GN = 0 + uS;
function nt(e) {
    return e.max - e.min;
}
function QN(e, t, n) {
    return Math.abs(e - t) <= n;
}
function zg(e, t, n, r = 0.5) {
    (e.origin = r),
        (e.originPoint = ae(t.min, t.max, e.origin)),
        (e.scale = nt(n) / nt(t)),
        (e.translate = ae(n.min, n.max, e.origin) - e.originPoint),
        ((e.scale >= WN && e.scale <= HN) || isNaN(e.scale)) && (e.scale = 1),
        ((e.translate >= KN && e.translate <= GN) || isNaN(e.translate)) && (e.translate = 0);
}
function no(e, t, n, r) {
    zg(e.x, t.x, n.x, r ? r.originX : void 0), zg(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Bg(e, t, n, r = 0) {
    const s = r ? ae(n.min, n.max, r) : n.min;
    (e.min = s + t.min), (e.max = e.min + nt(t));
}
function YN(e, t, n, r) {
    Bg(e.x, t.x, n.x, r == null ? void 0 : r.x), Bg(e.y, t.y, n.y, r == null ? void 0 : r.y);
}
function $g(e, t, n, r = 0) {
    const s = r ? ae(n.min, n.max, r) : n.min;
    (e.min = t.min - s), (e.max = e.min + nt(t));
}
function _l(e, t, n, r) {
    $g(e.x, t.x, n.x, r == null ? void 0 : r.x), $g(e.y, t.y, n.y, r == null ? void 0 : r.y);
}
function Ug(e, t, n, r, s) {
    return (e -= t), (e = Vl(e, 1 / n, r)), s !== void 0 && (e = Vl(e, 1 / s, r)), e;
}
function XN(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
    if ((Cn.test(t) && ((t = parseFloat(t)), (t = ae(o.min, o.max, t / 100) - o.min)), typeof t != "number")) return;
    let a = ae(i.min, i.max, r);
    e === i && (a -= t), (e.min = Ug(e.min, t, n, a, s)), (e.max = Ug(e.max, t, n, a, s));
}
function Wg(e, t, [n, r, s], i, o) {
    XN(e, t[n], t[r], t[s], t.scale, i, o);
}
const qN = ["x", "scaleX", "originX"],
    ZN = ["y", "scaleY", "originY"];
function Hg(e, t, n, r) {
    Wg(e.x, t, qN, n ? n.x : void 0, r ? r.x : void 0), Wg(e.y, t, ZN, n ? n.y : void 0, r ? r.y : void 0);
}
function Kg(e) {
    return e.translate === 0 && e.scale === 1;
}
function cS(e) {
    return Kg(e.x) && Kg(e.y);
}
function Gg(e, t) {
    return e.min === t.min && e.max === t.max;
}
function JN(e, t) {
    return Gg(e.x, t.x) && Gg(e.y, t.y);
}
function Qg(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function fS(e, t) {
    return Qg(e.x, t.x) && Qg(e.y, t.y);
}
function Yg(e) {
    return nt(e.x) / nt(e.y);
}
function Xg(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
function hn(e) {
    return [e("x"), e("y")];
}
function eL(e, t, n) {
    let r = "";
    const s = e.x.translate / t.x,
        i = e.y.translate / t.y,
        o = (n == null ? void 0 : n.z) || 0;
    if (
        ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `),
        (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
        n)
    ) {
        const { transformPerspective: u, rotate: c, pathRotation: f, rotateX: d, rotateY: h, skewX: y, skewY: p } = n;
        u && (r = `perspective(${u}px) ${r}`),
            c && (r += `rotate(${c}deg) `),
            f && (r += `rotate(${f}deg) `),
            d && (r += `rotateX(${d}deg) `),
            h && (r += `rotateY(${h}deg) `),
            y && (r += `skewX(${y}deg) `),
            p && (r += `skewY(${p}deg) `);
    }
    const a = e.x.scale * t.x,
        l = e.y.scale * t.y;
    return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const dS = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"],
    tL = dS.length,
    qg = (e) => (typeof e == "string" ? parseFloat(e) : e),
    Zg = (e) => typeof e == "number" || z.test(e);
function nL(e, t, n, r, s, i) {
    s
        ? ((e.opacity = ae(0, n.opacity ?? 1, rL(r))), (e.opacityExit = ae(t.opacity ?? 1, 0, sL(r))))
        : i && (e.opacity = ae(t.opacity ?? 1, n.opacity ?? 1, r));
    for (let o = 0; o < tL; o++) {
        const a = dS[o];
        let l = Jg(t, a),
            u = Jg(n, a);
        if (l === void 0 && u === void 0) continue;
        l || (l = 0),
            u || (u = 0),
            l === 0 || u === 0 || Zg(l) === Zg(u)
                ? ((e[a] = Math.max(ae(qg(l), qg(u), r), 0)), (Cn.test(u) || Cn.test(l)) && (e[a] += "%"))
                : (e[a] = u);
    }
    (t.rotate || n.rotate) && (e.rotate = ae(t.rotate || 0, n.rotate || 0, r));
}
function Jg(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const rL = hS(0, 0.5, n1),
    sL = hS(0.5, 0.95, ht);
function hS(e, t, n) {
    return (r) => (r < e ? 0 : r > t ? 1 : n(li(e, t, r)));
}
function iL(e, t, n) {
    const r = $e(e) ? e : Jt(e);
    return r.start(Kh("", r, t, n)), r.animation;
}
function Mo(e, t, n, r = { passive: !0 }) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const oL = (e, t) => e.depth - t.depth;
class aL {
    constructor() {
        (this.children = []), (this.isDirty = !1);
    }
    add(t) {
        Rh(this.children, t), (this.isDirty = !0);
    }
    remove(t) {
        Nl(this.children, t), (this.isDirty = !0);
    }
    forEach(t) {
        this.isDirty && this.children.sort(oL), (this.isDirty = !1), this.children.forEach(t);
    }
}
function lL(e, t) {
    const n = tt.now(),
        r = ({ timestamp: s }) => {
            const i = s - n;
            i >= t && (It(r), e(i - t));
        };
    return re.setup(r, !0), () => It(r);
}
function Ja(e) {
    return $e(e) ? e.get() : e;
}
class uL {
    constructor() {
        this.members = [];
    }
    add(t) {
        Rh(this.members, t);
        for (let n = this.members.length - 1; n >= 0; n--) {
            const r = this.members[n];
            if (r === t || r === this.lead || r === this.prevLead) continue;
            const s = r.instance;
            (!s || s.isConnected === !1) && !r.snapshot && (Nl(this.members, r), r.unmount());
        }
        t.scheduleRender();
    }
    remove(t) {
        if ((Nl(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n);
        }
    }
    relegate(t) {
        var n;
        for (let r = this.members.indexOf(t) - 1; r >= 0; r--) {
            const s = this.members[r];
            if (s.isPresent !== !1 && ((n = s.instance) == null ? void 0 : n.isConnected) !== !1)
                return this.promote(s), !0;
        }
        return !1;
    }
    promote(t, n) {
        var s;
        const r = this.lead;
        if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
            r.updateSnapshot(), t.scheduleRender();
            const { layoutDependency: i } = r.options,
                { layoutDependency: o } = t.options;
            (i === void 0 || i !== o) &&
                ((t.resumeFrom = r),
                n && (r.preserveOpacity = !0),
                r.snapshot &&
                    ((t.snapshot = r.snapshot), (t.snapshot.latestValues = r.animationValues || r.latestValues)),
                (s = t.root) != null && s.isUpdating && (t.isLayoutDirty = !0)),
                t.options.crossfade === !1 && r.hide();
        }
    }
    exitAnimationComplete() {
        this.members.forEach((t) => {
            var n, r, s, i, o;
            (r = (n = t.options).onExitComplete) == null || r.call(n),
                (o = (s = t.resumingFrom) == null ? void 0 : (i = s.options).onExitComplete) == null || o.call(i);
        });
    }
    scheduleRender() {
        this.members.forEach((t) => t.instance && t.scheduleRender(!1));
    }
    removeLeadSnapshot() {
        var t;
        (t = this.lead) != null && t.snapshot && (this.lead.snapshot = void 0);
    }
}
const el = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
    yc = ["", "X", "Y", "Z"],
    cL = 1e3;
let fL = 0;
function vc(e, t, n, r) {
    const { latestValues: s } = t;
    s[e] && ((n[e] = s[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function pS(e) {
    if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
    const { visualElement: t } = e.options;
    if (!t) return;
    const n = O1(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const { layout: s, layoutId: i } = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", re, !(s || i));
    }
    const { parent: r } = e;
    r && !r.hasCheckedOptimisedAppear && pS(r);
}
function mS({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: s }) {
    return class {
        constructor(o = {}, a = t == null ? void 0 : t()) {
            (this.id = fL++),
                (this.animationId = 0),
                (this.animationCommitId = 0),
                (this.children = new Set()),
                (this.options = {}),
                (this.isTreeAnimating = !1),
                (this.isAnimationBlocked = !1),
                (this.isLayoutDirty = !1),
                (this.isProjectionDirty = !1),
                (this.isSharedProjectionDirty = !1),
                (this.isTransformDirty = !1),
                (this.updateManuallyBlocked = !1),
                (this.updateBlockedByResize = !1),
                (this.isUpdating = !1),
                (this.isSVG = !1),
                (this.needsReset = !1),
                (this.shouldResetTransform = !1),
                (this.hasCheckedOptimisedAppear = !1),
                (this.treeScale = { x: 1, y: 1 }),
                (this.eventHandlers = new Map()),
                (this.hasTreeAnimated = !1),
                (this.layoutVersion = 0),
                (this.updateScheduled = !1),
                (this.scheduleUpdate = () => this.update()),
                (this.projectionUpdateScheduled = !1),
                (this.checkUpdateFailed = () => {
                    this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
                }),
                (this.updateProjection = () => {
                    (this.projectionUpdateScheduled = !1),
                        this.nodes.forEach(pL),
                        this.nodes.forEach(wL),
                        this.nodes.forEach(SL),
                        this.nodes.forEach(mL);
                }),
                (this.resolvedRelativeTargetAt = 0),
                (this.linkedParentVersion = 0),
                (this.hasProjected = !1),
                (this.isVisible = !0),
                (this.animationProgress = 0),
                (this.sharedNodes = new Map()),
                (this.latestValues = o),
                (this.root = a ? a.root || a : this),
                (this.path = a ? [...a.path, a] : []),
                (this.parent = a),
                (this.depth = a ? a.depth + 1 : 0);
            for (let l = 0; l < this.path.length; l++) this.path[l].shouldResetTransform = !0;
            this.root === this && (this.nodes = new aL());
        }
        addEventListener(o, a) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Nh()), this.eventHandlers.get(o).add(a);
        }
        notifyListeners(o, ...a) {
            const l = this.eventHandlers.get(o);
            l && l.notify(...a);
        }
        hasListeners(o) {
            return this.eventHandlers.has(o);
        }
        mount(o) {
            if (this.instance) return;
            (this.isSVG = qh(o) && !dN(o)), (this.instance = o);
            const { layoutId: a, layout: l, visualElement: u } = this.options;
            if (
                (u && !u.current && u.mount(o),
                this.root.nodes.add(this),
                this.parent && this.parent.children.add(this),
                this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0),
                e)
            ) {
                let c,
                    f = 0;
                const d = () => (this.root.updateBlockedByResize = !1);
                re.read(() => {
                    f = window.innerWidth;
                }),
                    e(o, () => {
                        const h = window.innerWidth;
                        h !== f &&
                            ((f = h),
                            (this.root.updateBlockedByResize = !0),
                            c && c(),
                            (c = lL(d, 250)),
                            el.hasAnimatedSinceResize && ((el.hasAnimatedSinceResize = !1), this.nodes.forEach(ny)));
                    });
            }
            a && this.root.registerSharedNode(a, this),
                this.options.animate !== !1 &&
                    u &&
                    (a || l) &&
                    this.addEventListener(
                        "didUpdate",
                        ({ delta: c, hasLayoutChanged: f, hasRelativeLayoutChanged: d, layout: h }) => {
                            if (this.isTreeAnimationBlocked()) {
                                (this.target = void 0), (this.relativeTarget = void 0);
                                return;
                            }
                            const y = this.options.transition || u.getDefaultTransition() || PL,
                                { onLayoutAnimationStart: p, onLayoutAnimationComplete: x } = u.getProps(),
                                m = !this.targetLayout || !fS(this.targetLayout, h),
                                g = !f && d;
                            if (
                                this.options.layoutRoot ||
                                this.resumeFrom ||
                                g ||
                                (f && (m || !this.currentAnimation))
                            ) {
                                this.resumeFrom &&
                                    ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0));
                                const v = { ...Hh(y, "layout"), onPlay: p, onComplete: x };
                                (u.shouldReduceMotion || this.options.layoutRoot) && ((v.delay = 0), (v.type = !1)),
                                    this.startAnimation(v),
                                    this.setAnimationOrigin(c, g, v.path);
                            } else
                                f || ny(this),
                                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = h;
                        }
                    );
        }
        unmount() {
            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
                this.parent && this.parent.children.delete(this),
                (this.instance = void 0),
                this.eventHandlers.clear(),
                It(this.updateProjection);
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0;
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1;
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
        }
        startUpdate() {
            this.isUpdateBlocked() ||
                ((this.isUpdating = !0), this.nodes && this.nodes.forEach(EL), this.animationId++);
        }
        getTransformTemplate() {
            const { visualElement: o } = this.options;
            return o && o.getProps().transformTemplate;
        }
        willUpdate(o = !0) {
            if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
                this.options.onExitComplete && this.options.onExitComplete();
                return;
            }
            if (
                (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && pS(this),
                !this.root.isUpdating && this.root.startUpdate(),
                this.isLayoutDirty)
            )
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const f = this.path[c];
                (f.shouldResetTransform = !0),
                    (typeof f.latestValues.x == "string" || typeof f.latestValues.y == "string") &&
                        (f.isLayoutDirty = !0),
                    f.updateScroll("snapshot"),
                    f.options.layoutRoot && f.willUpdate(!1);
            }
            const { layoutId: a, layout: l } = this.options;
            if (a === void 0 && !l) return;
            const u = this.getTransformTemplate();
            (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
                this.updateSnapshot(),
                o && this.notifyListeners("willUpdate");
        }
        update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
                const l = this.updateBlockedByResize;
                this.unblockUpdate(),
                    (this.updateBlockedByResize = !1),
                    this.clearAllSnapshots(),
                    l && this.nodes.forEach(yL),
                    this.nodes.forEach(ey);
                return;
            }
            if (this.animationId <= this.animationCommitId) {
                this.nodes.forEach(ty);
                return;
            }
            (this.animationCommitId = this.animationId),
                this.isUpdating
                    ? ((this.isUpdating = !1),
                      this.nodes.forEach(vL),
                      this.nodes.forEach(xL),
                      this.nodes.forEach(dL),
                      this.nodes.forEach(hL))
                    : this.nodes.forEach(ty),
                this.clearAllSnapshots();
            const a = tt.now();
            (Fe.delta = un(0, 1e3 / 60, a - Fe.timestamp)),
                (Fe.timestamp = a),
                (Fe.isProcessing = !0),
                uc.update.process(Fe),
                uc.preRender.process(Fe),
                uc.render.process(Fe),
                (Fe.isProcessing = !1);
        }
        didUpdate() {
            this.updateScheduled || ((this.updateScheduled = !0), ci.read(this.scheduleUpdate));
        }
        clearAllSnapshots() {
            this.nodes.forEach(gL), this.sharedNodes.forEach(CL);
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
                ((this.projectionUpdateScheduled = !0), re.preRender(this.updateProjection, !1, !0));
        }
        scheduleCheckAfterUnmount() {
            re.postRender(() => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
            });
        }
        updateSnapshot() {
            this.snapshot ||
                !this.instance ||
                ((this.snapshot = this.measure()),
                this.snapshot &&
                    !nt(this.snapshot.measuredBox.x) &&
                    !nt(this.snapshot.measuredBox.y) &&
                    (this.snapshot = void 0));
        }
        updateLayout() {
            if (
                !this.instance ||
                (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)
            )
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
            const o = this.layout;
            (this.layout = this.measure(!1)),
                this.layoutVersion++,
                this.layoutCorrected || (this.layoutCorrected = Ne()),
                (this.isLayoutDirty = !1),
                (this.projectionDelta = void 0),
                this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement: a } = this.options;
            a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0);
        }
        updateScroll(o = "measure") {
            let a = !!(this.options.layoutScroll && this.instance);
            if (
                (this.scroll &&
                    this.scroll.animationId === this.root.animationId &&
                    this.scroll.phase === o &&
                    (a = !1),
                a && this.instance)
            ) {
                const l = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: l,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : l,
                };
            }
        }
        resetTransform() {
            if (!s) return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                a = this.projectionDelta && !cS(this.projectionDelta),
                l = this.getTransformTemplate(),
                u = l ? l(this.latestValues, "") : void 0,
                c = u !== this.prevTransformTemplateValue;
            o &&
                this.instance &&
                (a || zr(this.latestValues) || c) &&
                (s(this.instance, u), (this.shouldResetTransform = !1), this.scheduleRender());
        }
        measure(o = !0) {
            const a = this.measurePageBox();
            let l = this.removeElementScroll(a);
            return (
                o && (l = this.removeTransform(l)),
                kL(l),
                { animationId: this.root.animationId, measuredBox: a, layoutBox: l, latestValues: {}, source: this.id }
            );
        }
        measurePageBox() {
            var u;
            const { visualElement: o } = this.options;
            if (!o) return Ne();
            const a = o.measureViewportBox();
            if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(AL))) {
                const { scroll: c } = this.root;
                c && (yn(a.x, c.offset.x), yn(a.y, c.offset.y));
            }
            return a;
        }
        removeElementScroll(o) {
            var l;
            const a = Ne();
            if ((Kt(a, o), (l = this.scroll) != null && l.wasRoot)) return a;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u],
                    { scroll: f, options: d } = c;
                c !== this.root &&
                    f &&
                    d.layoutScroll &&
                    (f.wasRoot && Kt(a, o), yn(a.x, f.offset.x), yn(a.y, f.offset.y));
            }
            return a;
        }
        applyTransform(o, a = !1, l) {
            var c, f;
            const u = l || Ne();
            Kt(u, o);
            for (let d = 0; d < this.path.length; d++) {
                const h = this.path[d];
                !a &&
                    h.options.layoutScroll &&
                    h.scroll &&
                    h !== h.root &&
                    (yn(u.x, -h.scroll.offset.x), yn(u.y, -h.scroll.offset.y)),
                    zr(h.latestValues) && Za(u, h.latestValues, (c = h.layout) == null ? void 0 : c.layoutBox);
            }
            return (
                zr(this.latestValues) && Za(u, this.latestValues, (f = this.layout) == null ? void 0 : f.layoutBox), u
            );
        }
        removeTransform(o) {
            var l;
            const a = Ne();
            Kt(a, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                if (!zr(c.latestValues)) continue;
                let f;
                c.instance && (sd(c.latestValues) && c.updateSnapshot(), (f = Ne()), Kt(f, c.measurePageBox())),
                    Hg(a, c.latestValues, (l = c.snapshot) == null ? void 0 : l.layoutBox, f);
            }
            return zr(this.latestValues) && Hg(a, this.latestValues), a;
        }
        setTargetDelta(o) {
            (this.targetDelta = o), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0);
        }
        setOptions(o) {
            this.options = { ...this.options, ...o, crossfade: o.crossfade !== void 0 ? o.crossfade : !0 };
        }
        clearMeasurements() {
            (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent &&
                this.relativeParent.resolvedRelativeTargetAt !== Fe.timestamp &&
                this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta(o = !1) {
            var h;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
                this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
                this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const l = !!this.resumingFrom || this !== a;
            if (
                !(
                    o ||
                    (l && this.isSharedProjectionDirty) ||
                    this.isProjectionDirty ||
                    ((h = this.parent) != null && h.isProjectionDirty) ||
                    this.attemptToResolveRelativeTarget ||
                    this.root.updateBlockedByResize
                )
            )
                return;
            const { layout: c, layoutId: f } = this.options;
            if (!this.layout || !(c || f)) return;
            this.resolvedRelativeTargetAt = Fe.timestamp;
            const d = this.getClosestProjectingParent();
            d && this.linkedParentVersion !== d.layoutVersion && !d.options.layoutRoot && this.removeRelativeTarget(),
                !this.targetDelta &&
                    !this.relativeTarget &&
                    (this.options.layoutAnchor !== !1 && d && d.layout
                        ? this.createRelativeTarget(d, this.layout.layoutBox, d.layout.layoutBox)
                        : this.removeRelativeTarget()),
                !(!this.relativeTarget && !this.targetDelta) &&
                    (this.target || ((this.target = Ne()), (this.targetWithTransforms = Ne())),
                    this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target
                        ? (this.forceRelativeParentToResolveTarget(),
                          YN(
                              this.target,
                              this.relativeTarget,
                              this.relativeParent.target,
                              this.options.layoutAnchor || void 0
                          ))
                        : this.targetDelta
                          ? (this.resumingFrom
                                ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                                : Kt(this.target, this.layout.layoutBox),
                            Z1(this.target, this.targetDelta))
                          : Kt(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget &&
                        ((this.attemptToResolveRelativeTarget = !1),
                        this.options.layoutAnchor !== !1 &&
                        d &&
                        !!d.resumingFrom == !!this.resumingFrom &&
                        !d.options.layoutScroll &&
                        d.target &&
                        this.animationProgress !== 1
                            ? this.createRelativeTarget(d, this.target, d.target)
                            : (this.relativeParent = this.relativeTarget = void 0)));
        }
        getClosestProjectingParent() {
            if (!(!this.parent || sd(this.parent.latestValues) || q1(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
        }
        createRelativeTarget(o, a, l) {
            (this.relativeParent = o),
                (this.linkedParentVersion = o.layoutVersion),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Ne()),
                (this.relativeTargetOrigin = Ne()),
                _l(this.relativeTargetOrigin, a, l, this.options.layoutAnchor || void 0),
                Kt(this.relativeTarget, this.relativeTargetOrigin);
        }
        removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0;
        }
        calcProjection() {
            var y;
            const o = this.getLead(),
                a = !!this.resumingFrom || this !== o;
            let l = !0;
            if (
                ((this.isProjectionDirty || ((y = this.parent) != null && y.isProjectionDirty)) && (l = !1),
                a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1),
                this.resolvedRelativeTargetAt === Fe.timestamp && (l = !1),
                l)
            )
                return;
            const { layout: u, layoutId: c } = this.options;
            if (
                ((this.isTreeAnimating = !!(
                    (this.parent && this.parent.isTreeAnimating) ||
                    this.currentAnimation ||
                    this.pendingAnimation
                )),
                this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                !this.layout || !(u || c))
            )
                return;
            Kt(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x,
                d = this.treeScale.y;
            bN(this.layoutCorrected, this.treeScale, this.path, a),
                o.layout &&
                    !o.target &&
                    (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
                    ((o.target = o.layout.layoutBox), (o.targetWithTransforms = Ne()));
            const { target: h } = o;
            if (!h) {
                this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                return;
            }
            !this.projectionDelta || !this.prevProjectionDelta
                ? this.createProjectionDeltas()
                : (_g(this.prevProjectionDelta.x, this.projectionDelta.x),
                  _g(this.prevProjectionDelta.y, this.projectionDelta.y)),
                no(this.projectionDelta, this.layoutCorrected, h, this.latestValues),
                (this.treeScale.x !== f ||
                    this.treeScale.y !== d ||
                    !Xg(this.projectionDelta.x, this.prevProjectionDelta.x) ||
                    !Xg(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
                    ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners("projectionUpdate", h));
        }
        hide() {
            this.isVisible = !1;
        }
        show() {
            this.isVisible = !0;
        }
        scheduleRender(o = !0) {
            var a;
            if (((a = this.options.visualElement) == null || a.scheduleRender(), o)) {
                const l = this.getStack();
                l && l.scheduleRender();
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
        }
        createProjectionDeltas() {
            (this.prevProjectionDelta = Os()),
                (this.projectionDelta = Os()),
                (this.projectionDeltaWithTransform = Os());
        }
        setAnimationOrigin(o, a = !1, l) {
            const u = this.snapshot,
                c = u ? u.latestValues : {},
                f = { ...this.latestValues },
                d = Os();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
                (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !a);
            const h = Ne(),
                y = u ? u.source : void 0,
                p = this.layout ? this.layout.source : void 0,
                x = y !== p,
                m = this.getStack(),
                g = !m || m.members.length <= 1,
                v = !!(x && !g && this.options.crossfade === !0 && !this.path.some(TL));
            this.animationProgress = 0;
            let S;
            const C = l == null ? void 0 : l.interpolateProjection(o);
            (this.mixTargetDelta = (T) => {
                const b = T / 1e3,
                    P = C == null ? void 0 : C(b);
                P
                    ? ((d.x.translate = P.x),
                      (d.x.scale = ae(o.x.scale, 1, b)),
                      (d.x.origin = o.x.origin),
                      (d.x.originPoint = o.x.originPoint),
                      (d.y.translate = P.y),
                      (d.y.scale = ae(o.y.scale, 1, b)),
                      (d.y.origin = o.y.origin),
                      (d.y.originPoint = o.y.originPoint))
                    : (ry(d.x, o.x, b), ry(d.y, o.y, b)),
                    this.setTargetDelta(d),
                    this.relativeTarget &&
                        this.relativeTargetOrigin &&
                        this.layout &&
                        this.relativeParent &&
                        this.relativeParent.layout &&
                        (_l(
                            h,
                            this.layout.layoutBox,
                            this.relativeParent.layout.layoutBox,
                            this.options.layoutAnchor || void 0
                        ),
                        bL(this.relativeTarget, this.relativeTargetOrigin, h, b),
                        S && JN(this.relativeTarget, S) && (this.isProjectionDirty = !1),
                        S || (S = Ne()),
                        Kt(S, this.relativeTarget)),
                    x && ((this.animationValues = f), nL(f, c, this.latestValues, b, v, g)),
                    P &&
                        P.rotate !== void 0 &&
                        (this.animationValues || (this.animationValues = f),
                        (this.animationValues.pathRotation = P.rotate)),
                    this.root.scheduleUpdateProjection(),
                    this.scheduleRender(),
                    (this.animationProgress = b);
            }),
                this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
        }
        startAnimation(o) {
            var a, l, u;
            this.notifyListeners("animationStart"),
                (a = this.currentAnimation) == null || a.stop(),
                (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(),
                this.pendingAnimation && (It(this.pendingAnimation), (this.pendingAnimation = void 0)),
                (this.pendingAnimation = re.update(() => {
                    (el.hasAnimatedSinceResize = !0),
                        this.motionValue || (this.motionValue = Jt(0)),
                        this.motionValue.jump(0, !1),
                        (this.currentAnimation = iL(this.motionValue, [0, 1e3], {
                            ...o,
                            velocity: 0,
                            isSync: !0,
                            onUpdate: (c) => {
                                this.mixTargetDelta(c), o.onUpdate && o.onUpdate(c);
                            },
                            onStop: () => {},
                            onComplete: () => {
                                o.onComplete && o.onComplete(), this.completeAnimation();
                            },
                        })),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        (this.pendingAnimation = void 0);
                }));
        }
        completeAnimation() {
            this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0));
            const o = this.getStack();
            o && o.exitAnimationComplete(),
                (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
                this.notifyListeners("animationComplete");
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(cL), this.currentAnimation.stop()),
                this.completeAnimation();
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = o;
            if (!(!a || !l || !u)) {
                if (
                    this !== o &&
                    this.layout &&
                    u &&
                    gS(this.options.animationType, this.layout.layoutBox, u.layoutBox)
                ) {
                    l = this.target || Ne();
                    const f = nt(this.layout.layoutBox.x);
                    (l.x.min = o.target.x.min), (l.x.max = l.x.min + f);
                    const d = nt(this.layout.layoutBox.y);
                    (l.y.min = o.target.y.min), (l.y.max = l.y.min + d);
                }
                Kt(a, l), Za(a, c), no(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
            }
        }
        registerSharedNode(o, a) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new uL()), this.sharedNodes.get(o).add(a);
            const u = a.options.initialPromotionConfig;
            a.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0,
            });
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0;
        }
        getLead() {
            var a;
            const { layoutId: o } = this.options;
            return o ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this;
        }
        getPrevLead() {
            var a;
            const { layoutId: o } = this.options;
            return o ? ((a = this.getStack()) == null ? void 0 : a.prevLead) : void 0;
        }
        getStack() {
            const { layoutId: o } = this.options;
            if (o) return this.root.sharedNodes.get(o);
        }
        promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
            const u = this.getStack();
            u && u.promote(this, l),
                o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                a && this.setOptions({ transition: a });
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1;
        }
        resetSkewAndRotation() {
            const { visualElement: o } = this.options;
            if (!o) return;
            let a = !1;
            const { latestValues: l } = o;
            if (((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a))
                return;
            const u = {};
            l.z && vc("z", o, u, this.animationValues);
            for (let c = 0; c < yc.length; c++)
                vc(`rotate${yc[c]}`, o, u, this.animationValues), vc(`skew${yc[c]}`, o, u, this.animationValues);
            o.render();
            for (const c in u) o.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
            o.scheduleRender();
        }
        applyProjectionStyles(o, a) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
                o.visibility = "hidden";
                return;
            }
            const l = this.getTransformTemplate();
            if (this.needsReset) {
                (this.needsReset = !1),
                    (o.visibility = ""),
                    (o.opacity = ""),
                    (o.pointerEvents = Ja(a == null ? void 0 : a.pointerEvents) || ""),
                    (o.transform = l ? l(this.latestValues, "") : "none");
                return;
            }
            const u = this.getLead();
            if (!this.projectionDelta || !this.layout || !u.target) {
                this.options.layoutId &&
                    ((o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1),
                    (o.pointerEvents = Ja(a == null ? void 0 : a.pointerEvents) || "")),
                    this.hasProjected &&
                        !zr(this.latestValues) &&
                        ((o.transform = l ? l({}, "") : "none"), (this.hasProjected = !1));
                return;
            }
            o.visibility = "";
            const c = u.animationValues || u.latestValues;
            this.applyTransformsToTarget();
            let f = eL(this.projectionDeltaWithTransform, this.treeScale, c);
            l && (f = l(c, f)), (o.transform = f);
            const { x: d, y: h } = this.projectionDelta;
            (o.transformOrigin = `${d.origin * 100}% ${h.origin * 100}% 0`),
                u.animationValues
                    ? (o.opacity =
                          u === this
                              ? (c.opacity ?? this.latestValues.opacity ?? 1)
                              : this.preserveOpacity
                                ? this.latestValues.opacity
                                : c.opacityExit)
                    : (o.opacity =
                          u === this
                              ? c.opacity !== void 0
                                  ? c.opacity
                                  : ""
                              : c.opacityExit !== void 0
                                ? c.opacityExit
                                : 0);
            for (const y in od) {
                if (c[y] === void 0) continue;
                const { correct: p, applyTo: x, isCSSVariable: m } = od[y],
                    g = f === "none" ? c[y] : p(c[y], u);
                if (x) {
                    const v = x.length;
                    for (let S = 0; S < v; S++) o[x[S]] = g;
                } else m ? (this.options.visualElement.renderState.vars[y] = g) : (o[y] = g);
            }
            this.options.layoutId &&
                (o.pointerEvents = u === this ? Ja(a == null ? void 0 : a.pointerEvents) || "" : "none");
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
        }
        resetTree() {
            this.root.nodes.forEach((o) => {
                var a;
                return (a = o.currentAnimation) == null ? void 0 : a.stop();
            }),
                this.root.nodes.forEach(ey),
                this.root.sharedNodes.clear();
        }
    };
}
function dL(e) {
    e.updateLayout();
}
function hL(e) {
    var n;
    const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
        const { layoutBox: r, measuredBox: s } = e.layout,
            { animationType: i } = e.options,
            o = t.source !== e.layout.source;
        if (i === "size")
            hn((f) => {
                const d = o ? t.measuredBox[f] : t.layoutBox[f],
                    h = nt(d);
                (d.min = r[f].min), (d.max = d.min + h);
            });
        else if (i === "x" || i === "y") {
            const f = i === "x" ? "y" : "x";
            ad(o ? t.measuredBox[f] : t.layoutBox[f], r[f]);
        } else
            gS(i, t.layoutBox, r) &&
                hn((f) => {
                    const d = o ? t.measuredBox[f] : t.layoutBox[f],
                        h = nt(r[f]);
                    (d.max = d.min + h),
                        e.relativeTarget &&
                            !e.currentAnimation &&
                            ((e.isProjectionDirty = !0), (e.relativeTarget[f].max = e.relativeTarget[f].min + h));
                });
        const a = Os();
        no(a, r, t.layoutBox);
        const l = Os();
        o ? no(l, e.applyTransform(s, !0), t.measuredBox) : no(l, r, t.layoutBox);
        const u = !cS(a);
        let c = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const { snapshot: d, layout: h } = f;
                if (d && h) {
                    const y = e.options.layoutAnchor || void 0,
                        p = Ne();
                    _l(p, t.layoutBox, d.layoutBox, y);
                    const x = Ne();
                    _l(x, r, h.layoutBox, y),
                        fS(p, x) || (c = !0),
                        f.options.layoutRoot &&
                            ((e.relativeTarget = x), (e.relativeTargetOrigin = p), (e.relativeParent = f));
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: t,
            delta: l,
            layoutDelta: a,
            hasLayoutChanged: u,
            hasRelativeLayoutChanged: c,
        });
    } else if (e.isLead()) {
        const { onExitComplete: r } = e.options;
        r && r();
    }
    e.options.transition = void 0;
}
function pL(e) {
    e.parent &&
        (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
        e.isSharedProjectionDirty ||
            (e.isSharedProjectionDirty = !!(
                e.isProjectionDirty ||
                e.parent.isProjectionDirty ||
                e.parent.isSharedProjectionDirty
            )),
        e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function mL(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function gL(e) {
    e.clearSnapshot();
}
function ey(e) {
    e.clearMeasurements();
}
function yL(e) {
    (e.isLayoutDirty = !0), e.updateLayout();
}
function ty(e) {
    e.isLayoutDirty = !1;
}
function vL(e) {
    e.isAnimationBlocked && e.layout && !e.isLayoutDirty && ((e.snapshot = e.layout), (e.isLayoutDirty = !0));
}
function xL(e) {
    const { visualElement: t } = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function ny(e) {
    e.finishAnimation(), (e.targetDelta = e.relativeTarget = e.target = void 0), (e.isProjectionDirty = !0);
}
function wL(e) {
    e.resolveTargetDelta();
}
function SL(e) {
    e.calcProjection();
}
function EL(e) {
    e.resetSkewAndRotation();
}
function CL(e) {
    e.removeLeadSnapshot();
}
function ry(e, t, n) {
    (e.translate = ae(t.translate, 0, n)),
        (e.scale = ae(t.scale, 1, n)),
        (e.origin = t.origin),
        (e.originPoint = t.originPoint);
}
function sy(e, t, n, r) {
    (e.min = ae(t.min, n.min, r)), (e.max = ae(t.max, n.max, r));
}
function bL(e, t, n, r) {
    sy(e.x, t.x, n.x, r), sy(e.y, t.y, n.y, r);
}
function TL(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const PL = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
    iy = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
    oy = iy("applewebkit/") && !iy("chrome/") ? Math.round : ht;
function ay(e) {
    (e.min = oy(e.min)), (e.max = oy(e.max));
}
function kL(e) {
    ay(e.x), ay(e.y);
}
function gS(e, t, n) {
    return e === "position" || (e === "preserve-aspect" && !QN(Yg(t), Yg(n), 0.2));
}
function AL(e) {
    var t;
    return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const RL = mS({
        attachResizeListener: (e, t) => Mo(e, "resize", t),
        measureScroll: () => {
            var e, t;
            return {
                x: document.documentElement.scrollLeft || ((e = document.body) == null ? void 0 : e.scrollLeft) || 0,
                y: document.documentElement.scrollTop || ((t = document.body) == null ? void 0 : t.scrollTop) || 0,
            };
        },
        checkIsScrollRoot: () => !0,
    }),
    xc = { current: void 0 },
    yS = mS({
        measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
        defaultParent: () => {
            if (!xc.current) {
                const e = new RL({});
                e.mount(window), e.setOptions({ layoutScroll: !0 }), (xc.current = e);
            }
            return xc.current;
        },
        resetTransform: (e, t) => {
            e.style.transform = t !== void 0 ? t : "none";
        },
        checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
    }),
    Su = w.createContext({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: "never" });
function ly(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t);
}
function ML(...e) {
    return (t) => {
        let n = !1;
        const r = e.map((s) => {
            const i = ly(s, t);
            return !n && typeof i == "function" && (n = !0), i;
        });
        if (n)
            return () => {
                for (let s = 0; s < r.length; s++) {
                    const i = r[s];
                    typeof i == "function" ? i() : ly(e[s], null);
                }
            };
    };
}
function NL(...e) {
    return w.useCallback(ML(...e), e);
}
class LL extends w.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (to(n) && t.isPresent && !this.props.isPresent && this.props.pop !== !1) {
            const r = n.offsetParent,
                s = (to(r) && r.offsetWidth) || 0,
                i = (to(r) && r.offsetHeight) || 0,
                o = getComputedStyle(n),
                a = this.props.sizeRef.current;
            (a.height = parseFloat(o.height)),
                (a.width = parseFloat(o.width)),
                (a.top = n.offsetTop),
                (a.left = n.offsetLeft),
                (a.right = s - a.width - a.left),
                (a.bottom = i - a.height - a.top),
                (a.direction = o.direction);
        }
        return null;
    }
    componentDidUpdate() {}
    render() {
        return this.props.children;
    }
}
function DL({ children: e, isPresent: t, anchorX: n, anchorY: r, root: s, pop: i }) {
    var d;
    const o = w.useId(),
        a = w.useRef(null),
        l = w.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0, direction: "ltr" }),
        { nonce: u } = w.useContext(Su),
        c = ((d = e.props) == null ? void 0 : d.ref) ?? (e == null ? void 0 : e.ref),
        f = NL(a, c);
    return (
        w.useInsertionEffect(() => {
            const { width: h, height: y, top: p, left: x, right: m, bottom: g, direction: v } = l.current;
            if (t || i === !1 || !a.current || !h || !y) return;
            const S = v === "rtl",
                C = n === "left" ? (S ? `right: ${m}` : `left: ${x}`) : S ? `left: ${x}` : `right: ${m}`,
                T = r === "bottom" ? `bottom: ${g}` : `top: ${p}`;
            a.current.dataset.motionPopId = o;
            const b = document.createElement("style");
            u && (b.nonce = u);
            const P = s ?? document.head;
            return (
                P.appendChild(b),
                b.sheet &&
                    b.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${y}px !important;
            ${C}px !important;
            ${T}px !important;
          }
        `),
                () => {
                    var R;
                    (R = a.current) == null || R.removeAttribute("data-motion-pop-id"),
                        P.contains(b) && P.removeChild(b);
                }
            );
        }, [t]),
        E.jsx(LL, {
            isPresent: t,
            childRef: a,
            sizeRef: l,
            pop: i,
            children: i === !1 ? e : w.cloneElement(e, { ref: f }),
        })
    );
}
const OL = ({
    children: e,
    initial: t,
    isPresent: n,
    onExitComplete: r,
    custom: s,
    presenceAffectsLayout: i,
    mode: o,
    anchorX: a,
    anchorY: l,
    root: u,
}) => {
    const c = Ar(jL),
        f = w.useId();
    let d = !0,
        h = w.useMemo(
            () => (
                (d = !1),
                {
                    id: f,
                    initial: t,
                    isPresent: n,
                    custom: s,
                    onExitComplete: (y) => {
                        c.set(y, !0);
                        for (const p of c.values()) if (!p) return;
                        r && r();
                    },
                    register: (y) => (c.set(y, !1), () => c.delete(y)),
                }
            ),
            [n, c, r]
        );
    return (
        i && d && (h = { ...h }),
        w.useMemo(() => {
            c.forEach((y, p) => c.set(p, !1));
        }, [n]),
        w.useEffect(() => {
            !n && !c.size && r && r();
        }, [n]),
        (e = E.jsx(DL, { pop: o === "popLayout", isPresent: n, anchorX: a, anchorY: l, root: u, children: e })),
        E.jsx(yu.Provider, { value: h, children: e })
    );
};
function jL() {
    return new Map();
}
function vS(e = !0) {
    const t = w.useContext(yu);
    if (t === null) return [!0, null];
    const { isPresent: n, onExitComplete: r, register: s } = t,
        i = w.useId();
    w.useEffect(() => {
        if (e) return s(i);
    }, [e]);
    const o = w.useCallback(() => e && r && r(i), [i, r, e]);
    return !n && r ? [!1, o] : [!0];
}
const Ra = (e) => e.key || "";
function uy(e) {
    const t = [];
    return (
        w.Children.forEach(e, (n) => {
            w.isValidElement(n) && t.push(n);
        }),
        t
    );
}
const cy = ({
        children: e,
        custom: t,
        initial: n = !0,
        onExitComplete: r,
        presenceAffectsLayout: s = !0,
        mode: i = "sync",
        propagate: o = !1,
        anchorX: a = "left",
        anchorY: l = "top",
        root: u,
    }) => {
        const [c, f] = vS(o),
            d = w.useMemo(() => uy(e), [e]),
            h = o && !c ? [] : d.map(Ra),
            y = w.useRef(!0),
            p = w.useRef(d),
            x = Ar(() => new Map()),
            m = w.useRef(new Set()),
            [g, v] = w.useState(d),
            [S, C] = w.useState(d);
        gu(() => {
            (y.current = !1), (p.current = d);
            for (let P = 0; P < S.length; P++) {
                const R = Ra(S[P]);
                h.includes(R) ? (x.delete(R), m.current.delete(R)) : x.get(R) !== !0 && x.set(R, !1);
            }
        }, [S, h.length, h.join("-")]);
        const T = [];
        if (d !== g) {
            let P = [...d];
            for (let R = 0; R < S.length; R++) {
                const k = S[R],
                    L = Ra(k);
                h.includes(L) || (P.splice(R, 0, k), T.push(k));
            }
            return i === "wait" && T.length && (P = T), C(uy(P)), v(d), null;
        }
        const { forceRender: b } = w.useContext(Ah);
        return E.jsx(E.Fragment, {
            children: S.map((P) => {
                const R = Ra(P),
                    k = o && !c ? !1 : d === S || h.includes(R),
                    L = () => {
                        if (m.current.has(R)) return;
                        if (x.has(R)) m.current.add(R), x.set(R, !0);
                        else return;
                        let D = !0;
                        x.forEach((W) => {
                            W || (D = !1);
                        }),
                            D && (b == null || b(), C(p.current), o && (f == null || f()), r && r());
                    };
                return E.jsx(
                    OL,
                    {
                        isPresent: k,
                        initial: !y.current || n ? void 0 : !1,
                        custom: t,
                        presenceAffectsLayout: s,
                        mode: i,
                        root: u,
                        onExitComplete: k ? void 0 : L,
                        anchorX: a,
                        anchorY: l,
                        children: P,
                    },
                    R
                );
            }),
        });
    },
    xS = w.createContext({ strict: !1 }),
    fy = {
        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"],
    };
let dy = !1;
function IL() {
    if (dy) return;
    const e = {};
    for (const t in fy) e[t] = { isEnabled: (n) => fy[t].some((r) => !!n[r]) };
    Q1(e), (dy = !0);
}
function wS() {
    return IL(), wN();
}
function FL(e) {
    const t = wS();
    for (const n in e) t[n] = { ...t[n], ...e[n] };
    Q1(t);
}
const VL = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "propagate",
    "ignoreStrict",
    "viewport",
]);
function zl(e) {
    return (
        e.startsWith("while") ||
        (e.startsWith("drag") && e !== "draggable") ||
        e.startsWith("layout") ||
        e.startsWith("onTap") ||
        e.startsWith("onPan") ||
        e.startsWith("onLayout") ||
        VL.has(e)
    );
}
let SS = (e) => !zl(e);
function _L(e) {
    typeof e == "function" && (SS = (t) => (t.startsWith("on") ? !zl(t) : e(t)));
}
try {
    _L(require("@emotion/is-prop-valid").default);
} catch {}
function zL(e, t, n) {
    const r = {};
    for (const s in e)
        (s === "values" && typeof e.values == "object") ||
            $e(e[s]) ||
            ((SS(s) || (n === !0 && zl(s)) || (!t && !zl(s)) || (e.draggable && s.startsWith("onDrag"))) &&
                (r[s] = e[s]));
    return r;
}
const Eu = w.createContext({});
function BL(e, t) {
    if (wu(e)) {
        const { initial: n, animate: r } = e;
        return { initial: n === !1 || Ro(n) ? n : void 0, animate: Ro(r) ? r : void 0 };
    }
    return e.inherit !== !1 ? t : {};
}
function $L(e) {
    const { initial: t, animate: n } = BL(e, w.useContext(Eu));
    return w.useMemo(() => ({ initial: t, animate: n }), [hy(t), hy(n)]);
}
function hy(e) {
    return Array.isArray(e) ? e.join(" ") : e;
}
const np = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function ES(e, t, n) {
    for (const r in t) !$e(t[r]) && !tS(r, n) && (e[r] = t[r]);
}
function UL({ transformTemplate: e }, t) {
    return w.useMemo(() => {
        const n = np();
        return ep(n, t, e), Object.assign({}, n.vars, n.style);
    }, [t]);
}
function WL(e, t) {
    const n = e.style || {},
        r = {};
    return ES(r, n, e), Object.assign(r, UL(e, t)), r;
}
function HL(e, t) {
    const n = {},
        r = WL(e, t);
    return (
        e.drag &&
            e.dragListener !== !1 &&
            ((n.draggable = !1),
            (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
            (r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
        e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
        (n.style = r),
        n
    );
}
const CS = () => ({ ...np(), attrs: {} });
function KL(e, t, n, r) {
    const s = w.useMemo(() => {
        const i = CS();
        return nS(i, t, sS(r), e.transformTemplate, e.style), { ...i.attrs, style: { ...i.style } };
    }, [t]);
    if (e.style) {
        const i = {};
        ES(i, e.style, e), (s.style = { ...i, ...s.style });
    }
    return s;
}
const GL = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
];
function rp(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(GL.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function QL(e, t, n, { latestValues: r }, s, i = !1, o) {
    const l = ((o ?? rp(e)) ? KL : HL)(t, r, s, e),
        u = zL(t, typeof e == "string", i),
        c = e !== w.Fragment ? { ...u, ...l, ref: n } : {},
        { children: f } = t,
        d = w.useMemo(() => ($e(f) ? f.get() : f), [f]);
    return w.createElement(e, { ...c, children: d });
}
function YL({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, s) {
    return { latestValues: XL(n, r, s, e), renderState: t() };
}
function XL(e, t, n, r) {
    const s = {},
        i = r(e, {});
    for (const d in i) s[d] = Ja(i[d]);
    let { initial: o, animate: a } = e;
    const l = wu(e),
        u = K1(e);
    t && u && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || o === !1;
    const f = c ? a : o;
    if (f && typeof f != "boolean" && !xu(f)) {
        const d = Array.isArray(f) ? f : [f];
        for (let h = 0; h < d.length; h++) {
            const y = Gh(e, d[h]);
            if (y) {
                const { transitionEnd: p, transition: x, ...m } = y;
                for (const g in m) {
                    let v = m[g];
                    if (Array.isArray(v)) {
                        const S = c ? v.length - 1 : 0;
                        v = v[S];
                    }
                    v !== null && (s[g] = v);
                }
                for (const g in p) s[g] = p[g];
            }
        }
    }
    return s;
}
const bS = (e) => (t, n) => {
        const r = w.useContext(Eu),
            s = w.useContext(yu),
            i = () => YL(e, t, r, s);
        return n ? i() : Ar(i);
    },
    qL = bS({ scrapeMotionValuesFromProps: tp, createRenderState: np }),
    ZL = bS({ scrapeMotionValuesFromProps: iS, createRenderState: CS }),
    JL = Symbol.for("motionComponentSymbol");
function eD(e, t, n) {
    const r = w.useRef(n);
    w.useInsertionEffect(() => {
        r.current = n;
    });
    const s = w.useRef(null);
    return w.useCallback(
        (i) => {
            var a;
            i && ((a = e.onMount) == null || a.call(e, i)), t && (i ? t.mount(i) : t.unmount());
            const o = r.current;
            if (typeof o == "function")
                if (i) {
                    const l = o(i);
                    typeof l == "function" && (s.current = l);
                } else s.current ? (s.current(), (s.current = null)) : o(i);
            else o && (o.current = i);
        },
        [t]
    );
}
const TS = w.createContext({});
function xs(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function tD(e, t, n, r, s, i) {
    var v, S;
    const { visualElement: o } = w.useContext(Eu),
        a = w.useContext(xS),
        l = w.useContext(yu),
        u = w.useContext(Su),
        c = u.reducedMotion,
        f = u.skipAnimations,
        d = w.useRef(null),
        h = w.useRef(!1);
    (r = r || a.renderer),
        !d.current &&
            r &&
            ((d.current = r(e, {
                visualState: t,
                parent: o,
                props: n,
                presenceContext: l,
                blockInitialAnimation: l ? l.initial === !1 : !1,
                reducedMotionConfig: c,
                skipAnimations: f,
                isSVG: i,
            })),
            h.current && d.current && (d.current.manuallyAnimateOnMount = !0));
    const y = d.current,
        p = w.useContext(TS);
    y && !y.projection && s && (y.type === "html" || y.type === "svg") && nD(d.current, n, s, p);
    const x = w.useRef(!1);
    w.useInsertionEffect(() => {
        y && x.current && y.update(n, l);
    });
    const m = n[D1],
        g = w.useRef(
            !!m &&
                typeof window < "u" &&
                !((v = window.MotionHandoffIsComplete) != null && v.call(window, m)) &&
                ((S = window.MotionHasOptimisedAnimation) == null ? void 0 : S.call(window, m))
        );
    return (
        gu(() => {
            (h.current = !0),
                y &&
                    ((x.current = !0),
                    (window.MotionIsMounted = !0),
                    y.updateFeatures(),
                    y.scheduleRenderMicrotask(),
                    g.current && y.animationState && y.animationState.animateChanges());
        }),
        w.useEffect(() => {
            y &&
                (!g.current && y.animationState && y.animationState.animateChanges(),
                g.current &&
                    (queueMicrotask(() => {
                        var C;
                        (C = window.MotionHandoffMarkAsComplete) == null || C.call(window, m);
                    }),
                    (g.current = !1)),
                (y.enteringChildren = void 0));
        }),
        y
    );
}
function nD(e, t, n, r) {
    const {
        layoutId: s,
        layout: i,
        drag: o,
        dragConstraints: a,
        layoutScroll: l,
        layoutRoot: u,
        layoutAnchor: c,
        layoutCrossfade: f,
    } = t;
    (e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : PS(e.parent))),
        e.projection.setOptions({
            layoutId: s,
            layout: i,
            alwaysMeasureLayout: !!o || (a && xs(a)),
            visualElement: e,
            animationType: typeof i == "string" ? i : "both",
            initialPromotionConfig: r,
            crossfade: f,
            layoutScroll: l,
            layoutRoot: u,
            layoutAnchor: c,
        });
}
function PS(e) {
    if (e) return e.options.allowProjection !== !1 ? e.projection : PS(e.parent);
}
function wc(e, { forwardMotionProps: t = !1, type: n } = {}, r, s) {
    r && FL(r);
    const i = n ? n === "svg" : rp(e),
        o = i ? ZL : qL;
    function a(u, c) {
        let f;
        const d = { ...w.useContext(Su), ...u, layoutId: rD(u) },
            { isStatic: h } = d,
            y = $L(u),
            p = o(u, h);
        if (!h && typeof window < "u") {
            sD();
            const x = iD(d);
            (f = x.MeasureLayout), (y.visualElement = tD(e, p, d, s, x.ProjectionNode, i));
        }
        return E.jsxs(Eu.Provider, {
            value: y,
            children: [
                f && y.visualElement ? E.jsx(f, { visualElement: y.visualElement, ...d }) : null,
                QL(e, u, eD(p, y.visualElement, c), p, h, t, i),
            ],
        });
    }
    a.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
    const l = w.forwardRef(a);
    return (l[JL] = e), l;
}
function rD({ layoutId: e }) {
    const t = w.useContext(Ah).id;
    return t && e !== void 0 ? t + "-" + e : e;
}
function sD(e, t) {
    w.useContext(xS).strict;
}
function iD(e) {
    const t = wS(),
        { drag: n, layout: r } = t;
    if (!n && !r) return {};
    const s = { ...n, ...r };
    return {
        MeasureLayout: (n != null && n.isEnabled(e)) || (r != null && r.isEnabled(e)) ? s.MeasureLayout : void 0,
        ProjectionNode: s.ProjectionNode,
    };
}
function oD(e, t) {
    if (typeof Proxy > "u") return wc;
    const n = new Map(),
        r = (i, o) => wc(i, o, e, t),
        s = (i, o) => r(i, o);
    return new Proxy(s, {
        get: (i, o) => (o === "create" ? r : (n.has(o) || n.set(o, wc(o, void 0, e, t)), n.get(o))),
    });
}
const aD = (e, t) => ((t.isSVG ?? rp(e)) ? new FN(t) : new NN(t, { allowProjection: e !== w.Fragment }));
class lD extends Or {
    constructor(t) {
        super(t), t.animationState || (t.animationState = $N(t));
    }
    updateAnimationControlsSubscription() {
        const { animate: t } = this.node.getProps();
        xu(t) && (this.unmountControls = t.subscribe(this.node));
    }
    mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        const { animate: t } = this.node.getProps(),
            { animate: n } = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription();
    }
    unmount() {
        var t;
        this.node.animationState.reset(), (t = this.unmountControls) == null || t.call(this);
    }
}
let uD = 0;
class cD extends Or {
    constructor() {
        super(...arguments), (this.id = uD++), (this.isExitComplete = !1);
    }
    update() {
        var i;
        if (!this.node.presenceContext) return;
        const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
            { isPresent: r } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r) return;
        if (t && r === !1) {
            if (this.isExitComplete) {
                const { initial: o, custom: a } = this.node.getProps();
                if (typeof o == "string" || (typeof o == "object" && o !== null && !Array.isArray(o))) {
                    const l = ts(this.node, o, a);
                    if (l) {
                        const { transition: u, transitionEnd: c, ...f } = l;
                        for (const d in f) (i = this.node.getValue(d)) == null || i.jump(f[d]);
                    }
                }
                this.node.animationState.reset(), this.node.animationState.animateChanges();
            } else this.node.animationState.setActive("exit", !1);
            this.isExitComplete = !1;
            return;
        }
        const s = this.node.animationState.setActive("exit", !t);
        n &&
            !t &&
            s.then(() => {
                (this.isExitComplete = !0), n(this.id);
            });
    }
    mount() {
        const { register: t, onExitComplete: n } = this.node.presenceContext || {};
        n && n(this.id), t && (this.unmount = t(this.id));
    }
    unmount() {}
}
const fD = { animation: { Feature: lD }, exit: { Feature: cD } };
function Xo(e) {
    return { point: { x: e.pageX, y: e.pageY } };
}
const dD = (e) => (t) => Xh(t) && e(t, Xo(t));
function ro(e, t, n, r) {
    return Mo(e, t, dD(n), r);
}
const kS = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
    py = (e, t) => Math.abs(e - t);
function hD(e, t) {
    const n = py(e.x, t.x),
        r = py(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2);
}
const my = new Set(["auto", "scroll"]);
class AS {
    constructor(
        t,
        n,
        {
            transformPagePoint: r,
            contextWindow: s = window,
            dragSnapToOrigin: i = !1,
            distanceThreshold: o = 3,
            element: a,
        } = {}
    ) {
        if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.lastRawMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.scrollPositions = new Map()),
            (this.removeScrollListeners = null),
            (this.onElementScroll = (h) => {
                this.handleScroll(h.target);
            }),
            (this.onWindowScroll = () => {
                this.handleScroll(window);
            }),
            (this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                this.lastRawMoveEventInfo &&
                    (this.lastMoveEventInfo = Ma(this.lastRawMoveEventInfo, this.transformPagePoint));
                const h = Sc(this.lastMoveEventInfo, this.history),
                    y = this.startEvent !== null,
                    p = hD(h.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
                if (!y && !p) return;
                const { point: x } = h,
                    { timestamp: m } = Fe;
                this.history.push({ ...x, timestamp: m });
                const { onStart: g, onMove: v } = this.handlers;
                y || (g && g(this.lastMoveEvent, h), (this.startEvent = this.lastMoveEvent)),
                    v && v(this.lastMoveEvent, h);
            }),
            (this.handlePointerMove = (h, y) => {
                (this.lastMoveEvent = h),
                    (this.lastRawMoveEventInfo = y),
                    (this.lastMoveEventInfo = Ma(y, this.transformPagePoint)),
                    re.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (h, y) => {
                this.end();
                const { onEnd: p, onSessionEnd: x, resumeAnimation: m } = this.handlers;
                if (
                    ((this.dragSnapToOrigin || !this.startEvent) && m && m(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                )
                    return;
                const g = Sc(
                    h.type === "pointercancel" ? this.lastMoveEventInfo : Ma(y, this.transformPagePoint),
                    this.history
                );
                this.startEvent && p && p(h, g), x && x(h, g);
            }),
            !Xh(t))
        )
            return;
        (this.dragSnapToOrigin = i),
            (this.handlers = n),
            (this.transformPagePoint = r),
            (this.distanceThreshold = o),
            (this.contextWindow = s || window);
        const l = Xo(t),
            u = Ma(l, this.transformPagePoint),
            { point: c } = u,
            { timestamp: f } = Fe;
        this.history = [{ ...c, timestamp: f }];
        const { onSessionStart: d } = n;
        d && d(t, Sc(u, this.history)),
            (this.removeListeners = Go(
                ro(this.contextWindow, "pointermove", this.handlePointerMove),
                ro(this.contextWindow, "pointerup", this.handlePointerUp),
                ro(this.contextWindow, "pointercancel", this.handlePointerUp)
            )),
            a && this.startScrollTracking(a);
    }
    startScrollTracking(t) {
        let n = t.parentElement;
        for (; n; ) {
            const r = getComputedStyle(n);
            (my.has(r.overflowX) || my.has(r.overflowY)) &&
                this.scrollPositions.set(n, { x: n.scrollLeft, y: n.scrollTop }),
                (n = n.parentElement);
        }
        this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
            window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
            window.addEventListener("scroll", this.onWindowScroll),
            (this.removeScrollListeners = () => {
                window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }),
                    window.removeEventListener("scroll", this.onWindowScroll);
            });
    }
    handleScroll(t) {
        const n = this.scrollPositions.get(t);
        if (!n) return;
        const r = t === window,
            s = r ? { x: window.scrollX, y: window.scrollY } : { x: t.scrollLeft, y: t.scrollTop },
            i = { x: s.x - n.x, y: s.y - n.y };
        (i.x === 0 && i.y === 0) ||
            (r
                ? this.lastMoveEventInfo &&
                  ((this.lastMoveEventInfo.point.x += i.x), (this.lastMoveEventInfo.point.y += i.y))
                : this.history.length > 0 && ((this.history[0].x -= i.x), (this.history[0].y -= i.y)),
            this.scrollPositions.set(t, s),
            re.update(this.updatePoint, !0));
    }
    updateHandlers(t) {
        this.handlers = t;
    }
    end() {
        this.removeListeners && this.removeListeners(),
            this.removeScrollListeners && this.removeScrollListeners(),
            this.scrollPositions.clear(),
            It(this.updatePoint);
    }
}
function Ma(e, t) {
    return t ? { point: t(e.point) } : e;
}
function gy(e, t) {
    return { x: e.x - t.x, y: e.y - t.y };
}
function Sc({ point: e }, t) {
    return { point: e, delta: gy(e, RS(t)), offset: gy(e, pD(t)), velocity: mD(t, 0.1) };
}
function pD(e) {
    return e[0];
}
function RS(e) {
    return e[e.length - 1];
}
function mD(e, t) {
    if (e.length < 2) return { x: 0, y: 0 };
    let n = e.length - 1,
        r = null;
    const s = RS(e);
    for (; n >= 0 && ((r = e[n]), !(s.timestamp - r.timestamp > Ct(t))); ) n--;
    if (!r) return { x: 0, y: 0 };
    r === e[0] && e.length > 2 && s.timestamp - r.timestamp > Ct(t) * 2 && (r = e[1]);
    const i = Lt(s.timestamp - r.timestamp);
    if (i === 0) return { x: 0, y: 0 };
    const o = { x: (s.x - r.x) / i, y: (s.y - r.y) / i };
    return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function gD(e, { min: t, max: n }, r) {
    return (
        t !== void 0 && e < t
            ? (e = r ? ae(t, e, r.min) : Math.max(e, t))
            : n !== void 0 && e > n && (e = r ? ae(n, e, r.max) : Math.min(e, n)),
        e
    );
}
function yy(e, t, n) {
    return { min: t !== void 0 ? e.min + t : void 0, max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0 };
}
function yD(e, { top: t, left: n, bottom: r, right: s }) {
    return { x: yy(e.x, n, s), y: yy(e.y, t, r) };
}
function vy(e, t) {
    let n = t.min - e.min,
        r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function vD(e, t) {
    return { x: vy(e.x, t.x), y: vy(e.y, t.y) };
}
function xD(e, t) {
    let n = 0.5;
    const r = nt(e),
        s = nt(t);
    return s > r ? (n = li(t.min, t.max - r, e.min)) : r > s && (n = li(e.min, e.max - s, t.min)), un(0, 1, n);
}
function wD(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const ld = 0.35;
function SD(e = ld) {
    return e === !1 ? (e = 0) : e === !0 && (e = ld), { x: xy(e, "left", "right"), y: xy(e, "top", "bottom") };
}
function xy(e, t, n) {
    return { min: wy(e, t), max: wy(e, n) };
}
function wy(e, t) {
    return typeof e == "number" ? e : e[t] || 0;
}
const ED = new WeakMap();
class CD {
    constructor(t) {
        (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = Ne()),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null),
            (this.visualElement = t);
    }
    start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
        const { presenceContext: s } = this.visualElement;
        if (s && s.isPresent === !1) return;
        const i = (f) => {
                n && this.snapToCursor(Xo(f).point), this.stopAnimation();
            },
            o = (f, d) => {
                const { drag: h, dragPropagation: y, onDragStart: p } = this.getProps();
                if (
                    h &&
                    !y &&
                    (this.openDragLock && this.openDragLock(), (this.openDragLock = YM(h)), !this.openDragLock)
                )
                    return;
                (this.latestPointerEvent = f),
                    (this.latestPanInfo = d),
                    (this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                    this.visualElement.projection &&
                        ((this.visualElement.projection.isAnimationBlocked = !0),
                        (this.visualElement.projection.target = void 0)),
                    hn((m) => {
                        let g = this.getAxisMotionValue(m).get() || 0;
                        if (Cn.test(g)) {
                            const { projection: v } = this.visualElement;
                            if (v && v.layout) {
                                const S = v.layout.layoutBox[m];
                                S && (g = nt(S) * (parseFloat(g) / 100));
                            }
                        }
                        this.originPoint[m] = g;
                    }),
                    p && re.update(() => p(f, d), !1, !0),
                    qf(this.visualElement, "transform");
                const { animationState: x } = this.visualElement;
                x && x.setActive("whileDrag", !0);
            },
            a = (f, d) => {
                (this.latestPointerEvent = f), (this.latestPanInfo = d);
                const { dragPropagation: h, dragDirectionLock: y, onDirectionLock: p, onDrag: x } = this.getProps();
                if (!h && !this.openDragLock) return;
                const { offset: m } = d;
                if (y && this.currentDirection === null) {
                    (this.currentDirection = TD(m)), this.currentDirection !== null && p && p(this.currentDirection);
                    return;
                }
                this.updateAxis("x", d.point, m),
                    this.updateAxis("y", d.point, m),
                    this.visualElement.render(),
                    x && re.update(() => x(f, d), !1, !0);
            },
            l = (f, d) => {
                (this.latestPointerEvent = f),
                    (this.latestPanInfo = d),
                    this.stop(f, d),
                    (this.latestPointerEvent = null),
                    (this.latestPanInfo = null);
            },
            u = () => {
                const { dragSnapToOrigin: f } = this.getProps();
                (f || this.constraints) && this.startAnimation({ x: 0, y: 0 });
            },
            { dragSnapToOrigin: c } = this.getProps();
        this.panSession = new AS(
            t,
            { onSessionStart: i, onStart: o, onMove: a, onSessionEnd: l, resumeAnimation: u },
            {
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: c,
                distanceThreshold: r,
                contextWindow: kS(this.visualElement),
                element: this.visualElement.current,
            }
        );
    }
    stop(t, n) {
        const r = t || this.latestPointerEvent,
            s = n || this.latestPanInfo,
            i = this.isDragging;
        if ((this.cancel(), !i || !s || !r)) return;
        const { velocity: o } = s;
        this.startAnimation(o);
        const { onDragEnd: a } = this.getProps();
        a && re.postRender(() => a(r, s));
    }
    cancel() {
        this.isDragging = !1;
        const { projection: t, animationState: n } = this.visualElement;
        t && (t.isAnimationBlocked = !1), this.endPanSession();
        const { dragPropagation: r } = this.getProps();
        !r && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)), n && n.setActive("whileDrag", !1);
    }
    endPanSession() {
        this.panSession && this.panSession.end(), (this.panSession = void 0);
    }
    updateAxis(t, n, r) {
        const { drag: s } = this.getProps();
        if (!r || !Na(t, s, this.currentDirection)) return;
        const i = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = gD(o, this.constraints[t], this.elastic[t])), i.set(o);
    }
    resolveConstraints() {
        var i;
        const { dragConstraints: t, dragElastic: n } = this.getProps(),
            r =
                this.visualElement.projection && !this.visualElement.projection.layout
                    ? this.visualElement.projection.measure(!1)
                    : (i = this.visualElement.projection) == null
                      ? void 0
                      : i.layout,
            s = this.constraints;
        t && xs(t)
            ? this.constraints || (this.constraints = this.resolveRefConstraints())
            : t && r
              ? (this.constraints = yD(r.layoutBox, t))
              : (this.constraints = !1),
            (this.elastic = SD(n)),
            s !== this.constraints &&
                !xs(t) &&
                r &&
                this.constraints &&
                !this.hasMutatedConstraints &&
                hn((o) => {
                    this.constraints !== !1 &&
                        this.getAxisMotionValue(o) &&
                        (this.constraints[o] = wD(r.layoutBox[o], this.constraints[o]));
                });
    }
    resolveRefConstraints() {
        const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
        if (!t || !xs(t)) return !1;
        const r = t.current,
            { projection: s } = this.visualElement;
        if (!s || !s.layout) return !1;
        s.root && ((s.root.scroll = void 0), s.root.updateScroll());
        const i = TN(r, s.root, this.visualElement.getTransformPagePoint());
        let o = vD(s.layout.layoutBox, i);
        if (n) {
            const a = n(EN(o));
            (this.hasMutatedConstraints = !!a), a && (o = X1(a));
        }
        return o;
    }
    startAnimation(t) {
        const {
                drag: n,
                dragMomentum: r,
                dragElastic: s,
                dragTransition: i,
                dragSnapToOrigin: o,
                onDragTransitionEnd: a,
            } = this.getProps(),
            l = this.constraints || {},
            u = hn((c) => {
                if (!Na(c, n, this.currentDirection)) return;
                let f = (l && l[c]) || {};
                (o === !0 || o === c) && (f = { min: 0, max: 0 });
                const d = s ? 200 : 1e6,
                    h = s ? 40 : 1e7,
                    y = {
                        type: "inertia",
                        velocity: r ? t[c] : 0,
                        bounceStiffness: d,
                        bounceDamping: h,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...i,
                        ...f,
                    };
                return this.startAxisValueAnimation(c, y);
            });
        return Promise.all(u).then(a);
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return qf(this.visualElement, t), r.start(Kh(t, r, 0, n, this.visualElement, !1));
    }
    stopAnimation() {
        hn((t) => this.getAxisMotionValue(t).stop());
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`,
            s = this.visualElement.getProps()[n];
        return s || this.visualElement.getValue(t, this.visualElement.latestValues[t] ?? 0);
    }
    snapToCursor(t) {
        hn((n) => {
            const { drag: r } = this.getProps();
            if (!Na(n, r, this.currentDirection)) return;
            const { projection: s } = this.visualElement,
                i = this.getAxisMotionValue(n);
            if (s && s.layout) {
                const { min: o, max: a } = s.layout.layoutBox[n],
                    l = i.get() || 0;
                i.set(t[n] - ae(o, a, 0.5) + l);
            }
        });
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const { drag: t, dragConstraints: n } = this.getProps(),
            { projection: r } = this.visualElement;
        if (!xs(n) || !r || !this.constraints) return;
        this.stopAnimation();
        const s = { x: 0, y: 0 };
        hn((o) => {
            const a = this.getAxisMotionValue(o);
            if (a && this.constraints !== !1) {
                const l = a.get();
                s[o] = xD({ min: l, max: l }, this.constraints[o]);
            }
        });
        const { transformTemplate: i } = this.visualElement.getProps();
        (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            (this.constraints = !1),
            this.resolveConstraints(),
            hn((o) => {
                if (!Na(o, t, null)) return;
                const a = this.getAxisMotionValue(o),
                    { min: l, max: u } = this.constraints[o];
                a.set(ae(l, u, s[o]));
            }),
            this.visualElement.render();
    }
    addListeners() {
        if (!this.visualElement.current) return;
        ED.set(this.visualElement, this);
        const t = this.visualElement.current,
            n = ro(t, "pointerdown", (u) => {
                const { drag: c, dragListener: f = !0 } = this.getProps(),
                    d = u.target,
                    h = d !== t && tN(d);
                c && f && !h && this.start(u);
            });
        let r;
        const s = () => {
                const { dragConstraints: u } = this.getProps();
                xs(u) &&
                    u.current &&
                    ((this.constraints = this.resolveRefConstraints()),
                    r || (r = bD(t, u.current, () => this.scalePositionWithinConstraints())));
            },
            { projection: i } = this.visualElement,
            o = i.addEventListener("measure", s);
        i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), re.read(s);
        const a = Mo(window, "resize", () => this.scalePositionWithinConstraints()),
            l = i.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: c }) => {
                this.isDragging &&
                    c &&
                    (hn((f) => {
                        const d = this.getAxisMotionValue(f);
                        d && ((this.originPoint[f] += u[f].translate), d.set(d.get() + u[f].translate));
                    }),
                    this.visualElement.render());
            });
        return () => {
            a(), n(), o(), l && l(), r && r();
        };
    }
    getProps() {
        const t = this.visualElement.getProps(),
            {
                drag: n = !1,
                dragDirectionLock: r = !1,
                dragPropagation: s = !1,
                dragConstraints: i = !1,
                dragElastic: o = ld,
                dragMomentum: a = !0,
            } = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: s,
            dragConstraints: i,
            dragElastic: o,
            dragMomentum: a,
        };
    }
}
function Sy(e) {
    let t = !0;
    return () => {
        if (t) {
            t = !1;
            return;
        }
        e();
    };
}
function bD(e, t, n) {
    const r = nd(e, Sy(n)),
        s = nd(t, Sy(n));
    return () => {
        r(), s();
    };
}
function Na(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e);
}
function TD(e, t = 10) {
    let n = null;
    return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class PD extends Or {
    constructor(t) {
        super(t), (this.removeGroupControls = ht), (this.removeListeners = ht), (this.controls = new CD(t));
    }
    mount() {
        const { dragControls: t } = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || ht);
    }
    update() {
        const { dragControls: t } = this.node.getProps(),
            { dragControls: n } = this.node.prevProps || {};
        t !== n && (this.removeGroupControls(), t && (this.removeGroupControls = t.subscribe(this.controls)));
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
    }
}
const Ec = (e) => (t, n) => {
    e && re.update(() => e(t, n), !1, !0);
};
class kD extends Or {
    constructor() {
        super(...arguments), (this.removePointerDownListener = ht);
    }
    onPointerDown(t) {
        this.session = new AS(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: kS(this.node),
        });
    }
    createPanHandlers() {
        const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: s } = this.node.getProps();
        return {
            onSessionStart: Ec(t),
            onStart: Ec(n),
            onMove: Ec(r),
            onEnd: (i, o) => {
                delete this.session, s && re.postRender(() => s(i, o));
            },
        };
    }
    mount() {
        this.removePointerDownListener = ro(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end();
    }
}
let Cc = !1;
class AD extends w.Component {
    componentDidMount() {
        const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: s } = this.props,
            { projection: i } = t;
        i &&
            (n.group && n.group.add(i),
            r && r.register && s && r.register(i),
            Cc && i.root.didUpdate(),
            i.addEventListener("animationComplete", () => {
                this.safeToRemove();
            }),
            i.setOptions({
                ...i.options,
                layoutDependency: this.props.layoutDependency,
                onExitComplete: () => this.safeToRemove(),
            })),
            (el.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(t) {
        const { layoutDependency: n, visualElement: r, drag: s, isPresent: i } = this.props,
            { projection: o } = r;
        return (
            o &&
                ((o.isPresent = i),
                t.layoutDependency !== n && o.setOptions({ ...o.options, layoutDependency: n }),
                (Cc = !0),
                s || t.layoutDependency !== n || n === void 0 || t.isPresent !== i
                    ? o.willUpdate()
                    : this.safeToRemove(),
                t.isPresent !== i &&
                    (i
                        ? o.promote()
                        : o.relegate() ||
                          re.postRender(() => {
                              const a = o.getStack();
                              (!a || !a.members.length) && this.safeToRemove();
                          }))),
            null
        );
    }
    componentDidUpdate() {
        const { visualElement: t, layoutAnchor: n } = this.props,
            { projection: r } = t;
        r &&
            ((r.options.layoutAnchor = n),
            r.root.didUpdate(),
            ci.postRender(() => {
                !r.currentAnimation && r.isLead() && this.safeToRemove();
            }));
    }
    componentWillUnmount() {
        const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props,
            { projection: s } = t;
        (Cc = !0),
            s &&
                (s.scheduleCheckAfterUnmount(),
                n && n.group && n.group.remove(s),
                r && r.deregister && r.deregister(s));
    }
    safeToRemove() {
        const { safeToRemove: t } = this.props;
        t && t();
    }
    render() {
        return null;
    }
}
function MS(e) {
    const [t, n] = vS(),
        r = w.useContext(Ah);
    return E.jsx(AD, { ...e, layoutGroup: r, switchLayoutGroup: w.useContext(TS), isPresent: t, safeToRemove: n });
}
const RD = { pan: { Feature: kD }, drag: { Feature: PD, ProjectionNode: yS, MeasureLayout: MS } };
function Ey(e, t, n) {
    const { props: r } = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const s = "onHover" + n,
        i = r[s];
    i && re.postRender(() => i(t, Xo(t)));
}
class MD extends Or {
    mount() {
        const { current: t } = this.node;
        t && (this.unmount = qM(t, (n, r) => (Ey(this.node, r, "Start"), (s) => Ey(this.node, s, "End"))));
    }
    unmount() {}
}
class ND extends Or {
    constructor() {
        super(...arguments), (this.isActive = !1);
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible");
        } catch {
            t = !0;
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
    }
    onBlur() {
        !this.isActive ||
            !this.node.animationState ||
            (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
    }
    mount() {
        this.unmount = Go(
            Mo(this.node.current, "focus", () => this.onFocus()),
            Mo(this.node.current, "blur", () => this.onBlur())
        );
    }
    unmount() {}
}
function Cy(e, t, n) {
    const { props: r } = e;
    if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const s = "onTap" + (n === "End" ? "" : n),
        i = r[s];
    i && re.postRender(() => i(t, Xo(t)));
}
class LD extends Or {
    mount() {
        const { current: t } = this.node;
        if (!t) return;
        const { globalTapTarget: n, propagate: r } = this.node.props;
        this.unmount = rN(
            t,
            (s, i) => (Cy(this.node, i, "Start"), (o, { success: a }) => Cy(this.node, o, a ? "End" : "Cancel")),
            { useGlobalTarget: n, stopPropagation: (r == null ? void 0 : r.tap) === !1 }
        );
    }
    unmount() {}
}
const ud = new WeakMap(),
    bc = new WeakMap(),
    DD = (e) => {
        const t = ud.get(e.target);
        t && t(e);
    },
    OD = (e) => {
        e.forEach(DD);
    };
function jD({ root: e, ...t }) {
    const n = e || document;
    bc.has(n) || bc.set(n, {});
    const r = bc.get(n),
        s = JSON.stringify(t);
    return r[s] || (r[s] = new IntersectionObserver(OD, { root: e, ...t })), r[s];
}
function ID(e, t, n) {
    const r = jD(t);
    return (
        ud.set(e, n),
        r.observe(e),
        () => {
            ud.delete(e), r.unobserve(e);
        }
    );
}
const FD = { some: 0, all: 1 };
class VD extends Or {
    constructor() {
        super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
        var l;
        (l = this.stopObserver) == null || l.call(this);
        const { viewport: t = {} } = this.node.getProps(),
            { root: n, margin: r, amount: s = "some", once: i } = t,
            o = { root: n ? n.current : void 0, rootMargin: r, threshold: typeof s == "number" ? s : FD[s] },
            a = (u) => {
                const { isIntersecting: c } = u;
                if (this.isInView === c || ((this.isInView = c), i && !c && this.hasEnteredView)) return;
                c && (this.hasEnteredView = !0),
                    this.node.animationState && this.node.animationState.setActive("whileInView", c);
                const { onViewportEnter: f, onViewportLeave: d } = this.node.getProps(),
                    h = c ? f : d;
                h && h(u);
            };
        this.stopObserver = ID(this.node.current, o, a);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const { props: t, prevProps: n } = this.node;
        ["amount", "margin", "root"].some(_D(t, n)) && this.startObserver();
    }
    unmount() {
        var t;
        (t = this.stopObserver) == null || t.call(this), (this.hasEnteredView = !1), (this.isInView = !1);
    }
}
function _D({ viewport: e = {} }, { viewport: t = {} } = {}) {
    return (n) => e[n] !== t[n];
}
const zD = { inView: { Feature: VD }, tap: { Feature: LD }, focus: { Feature: ND }, hover: { Feature: MD } },
    BD = { layout: { ProjectionNode: yS, MeasureLayout: MS } },
    $D = { ...fD, ...zD, ...RD, ...BD },
    kt = oD($D, aD);
function Bl(e) {
    return typeof window > "u" ? !1 : e ? E1() : Wh();
}
const UD = 50,
    by = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0,
    }),
    WD = () => ({ time: 0, x: by(), y: by() }),
    HD = { x: { length: "Width", position: "Left" }, y: { length: "Height", position: "Top" } };
function Ty(e, t, n, r) {
    const s = n[t],
        { length: i, position: o } = HD[t],
        a = s.current,
        l = n.time;
    (s.current = Math.abs(e[`scroll${o}`])),
        (s.scrollLength = e[`scroll${i}`] - e[`client${i}`]),
        (s.offset.length = 0),
        (s.offset[0] = 0),
        (s.offset[1] = s.scrollLength),
        (s.progress = li(0, s.scrollLength, s.current));
    const u = r - l;
    s.velocity = u > UD ? 0 : Lh(s.current - a, u);
}
function KD(e, t, n) {
    Ty(e, "x", t, n), Ty(e, "y", t, n), (t.time = n);
}
function GD(e, t) {
    const n = { x: 0, y: 0 };
    let r = e;
    for (; r && r !== t; )
        if (to(r)) (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
        else if (r.tagName === "svg") {
            const s = r.getBoundingClientRect();
            r = r.parentElement;
            const i = r.getBoundingClientRect();
            (n.x += s.left - i.left), (n.y += s.top - i.top);
        } else if (r instanceof SVGGraphicsElement) {
            const { x: s, y: i } = r.getBBox();
            (n.x += s), (n.y += i);
            let o = null,
                a = r.parentNode;
            for (; !o; ) a.tagName === "svg" && (o = a), (a = r.parentNode);
            r = o;
        } else break;
    return n;
}
const cd = { start: 0, center: 0.5, end: 1 };
function Py(e, t, n = 0) {
    let r = 0;
    if ((e in cd && (e = cd[e]), typeof e == "string")) {
        const s = parseFloat(e);
        e.endsWith("px")
            ? (r = s)
            : e.endsWith("%")
              ? (e = s / 100)
              : e.endsWith("vw")
                ? (r = (s / 100) * document.documentElement.clientWidth)
                : e.endsWith("vh")
                  ? (r = (s / 100) * document.documentElement.clientHeight)
                  : (e = s);
    }
    return typeof e == "number" && (r = t * e), n + r;
}
const QD = [0, 0];
function YD(e, t, n, r) {
    let s = Array.isArray(e) ? e : QD,
        i = 0,
        o = 0;
    return (
        typeof e == "number"
            ? (s = [e, e])
            : typeof e == "string" &&
              ((e = e.trim()), e.includes(" ") ? (s = e.split(" ")) : (s = [e, cd[e] ? e : "0"])),
        (i = Py(s[0], n, r)),
        (o = Py(s[1], t)),
        i - o
    );
}
const zi = {
        Enter: [
            [0, 1],
            [1, 1],
        ],
        Exit: [
            [0, 0],
            [1, 0],
        ],
        Any: [
            [1, 0],
            [0, 1],
        ],
        All: [
            [0, 0],
            [1, 1],
        ],
    },
    XD = { x: 0, y: 0 };
function qD(e) {
    return "getBBox" in e && e.tagName !== "svg" ? e.getBBox() : { width: e.clientWidth, height: e.clientHeight };
}
function ZD(e, t, n) {
    const { offset: r = zi.All } = n,
        { target: s = e, axis: i = "y" } = n,
        o = i === "y" ? "height" : "width",
        a = s !== e ? GD(s, e) : XD,
        l = s === e ? { width: e.scrollWidth, height: e.scrollHeight } : qD(s),
        u = { width: e.clientWidth, height: e.clientHeight };
    t[i].offset.length = 0;
    let c = !t[i].interpolate;
    const f = r.length;
    for (let d = 0; d < f; d++) {
        const h = YD(r[d], u[o], l[o], a[i]);
        !c && h !== t[i].interpolatorOffsets[d] && (c = !0), (t[i].offset[d] = h);
    }
    c && ((t[i].interpolate = zh(t[i].offset, y1(r), { clamp: !1 })), (t[i].interpolatorOffsets = [...t[i].offset])),
        (t[i].progress = un(0, 1, t[i].interpolate(t[i].current)));
}
function JD(e, t = e, n) {
    if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
        let r = t;
        for (; r && r !== e; )
            (n.x.targetOffset += r.offsetLeft), (n.y.targetOffset += r.offsetTop), (r = r.offsetParent);
    }
    (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
        (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
        (n.x.containerLength = e.clientWidth),
        (n.y.containerLength = e.clientHeight);
}
function eO(e, t, n, r = {}) {
    return {
        measure: (s) => {
            JD(e, r.target, n), KD(e, n, s), (r.offset || r.target) && ZD(e, n, r);
        },
        notify: () => t(n),
    };
}
const vs = new WeakMap(),
    ky = new WeakMap(),
    Tc = new WeakMap(),
    Ay = new WeakMap(),
    La = new WeakMap(),
    Ry = (e) => (e === document.scrollingElement ? window : e);
function NS(e, { container: t = document.scrollingElement, trackContentSize: n = !1, ...r } = {}) {
    if (!t) return ht;
    let s = Tc.get(t);
    s || ((s = new Set()), Tc.set(t, s));
    const i = WD(),
        o = eO(t, e, i, r);
    if ((s.add(o), !vs.has(t))) {
        const l = () => {
                for (const d of s) d.measure(Fe.timestamp);
                re.preUpdate(u);
            },
            u = () => {
                for (const d of s) d.notify();
            },
            c = () => re.read(l);
        vs.set(t, c);
        const f = Ry(t);
        window.addEventListener("resize", c),
            t !== document.documentElement && ky.set(t, nd(t, c)),
            f.addEventListener("scroll", c),
            c();
    }
    if (n && !La.has(t)) {
        const l = vs.get(t),
            u = { width: t.scrollWidth, height: t.scrollHeight };
        Ay.set(t, u);
        const c = () => {
                const d = t.scrollWidth,
                    h = t.scrollHeight;
                (u.width !== d || u.height !== h) && (l(), (u.width = d), (u.height = h));
            },
            f = re.read(c, !0);
        La.set(t, f);
    }
    const a = vs.get(t);
    return (
        re.read(a, !1, !0),
        () => {
            var f;
            It(a);
            const l = Tc.get(t);
            if (!l || (l.delete(o), l.size)) return;
            const u = vs.get(t);
            vs.delete(t),
                u &&
                    (Ry(t).removeEventListener("scroll", u),
                    (f = ky.get(t)) == null || f(),
                    window.removeEventListener("resize", u));
            const c = La.get(t);
            c && (It(c), La.delete(t)), Ay.delete(t);
        }
    );
}
const tO = [
        [zi.Enter, "entry"],
        [zi.Exit, "exit"],
        [zi.Any, "cover"],
        [zi.All, "contain"],
    ],
    My = { start: 0, end: 1 };
function nO(e) {
    const t = e.trim().split(/\s+/);
    if (t.length !== 2) return;
    const n = My[t[0]],
        r = My[t[1]];
    if (!(n === void 0 || r === void 0)) return [n, r];
}
function rO(e) {
    if (e.length !== 2) return;
    const t = [];
    for (const n of e)
        if (Array.isArray(n)) t.push(n);
        else if (typeof n == "string") {
            const r = nO(n);
            if (!r) return;
            t.push(r);
        } else return;
    return t;
}
function sO(e, t) {
    const n = rO(e);
    if (!n) return !1;
    for (let r = 0; r < 2; r++) {
        const s = n[r],
            i = t[r];
        if (s[0] !== i[0] || s[1] !== i[1]) return !1;
    }
    return !0;
}
function sp(e) {
    if (!e) return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
    for (const [t, n] of tO) if (sO(e, t)) return { rangeStart: `${n} 0%`, rangeEnd: `${n} 100%` };
}
const Ny = new Map();
function Ly(e) {
    const t = { value: 0 },
        n = NS((r) => {
            t.value = r[e.axis].progress * 100;
        }, e);
    return { currentTime: t, cancel: n };
}
function LS({ source: e, container: t, ...n }) {
    const { axis: r } = n;
    e && (t = e);
    let s = Ny.get(t);
    s || ((s = new Map()), Ny.set(t, s));
    const i = n.target ?? "self";
    let o = s.get(i);
    o || ((o = {}), s.set(i, o));
    const a = r + (n.offset ?? []).join(",");
    return (
        o[a] ||
            (n.target && Bl(n.target)
                ? sp(n.offset)
                    ? (o[a] = new ViewTimeline({ subject: n.target, axis: r }))
                    : (o[a] = Ly({ container: t, ...n }))
                : Bl()
                  ? (o[a] = new ScrollTimeline({ source: t, axis: r }))
                  : (o[a] = Ly({ container: t, ...n }))),
        o[a]
    );
}
function iO(e, t) {
    const n = LS(t),
        r = t.target ? sp(t.offset) : void 0,
        s = t.target ? Bl(t.target) && !!r : Bl();
    return e.attachTimeline({
        timeline: s ? n : void 0,
        ...(r && s && { rangeStart: r.rangeStart, rangeEnd: r.rangeEnd }),
        observe: (i) => (
            i.pause(),
            H1((o) => {
                i.time = i.iterationDuration * o;
            }, n)
        ),
    });
}
function oO(e) {
    return e && (e.target || e.offset);
}
function aO(e) {
    return e.length === 2;
}
function lO(e, t) {
    return aO(e) || oO(t)
        ? NS((n) => {
              e(n[t.axis].progress, n);
          }, t)
        : H1(e, LS(t));
}
function DS(e, { axis: t = "y", container: n = document.scrollingElement, ...r } = {}) {
    if (!n) return ht;
    const s = { axis: t, container: n, ...r };
    return typeof e == "function" ? lO(e, s) : iO(e, s);
}
const uO = () => ({ scrollX: Jt(0), scrollY: Jt(0), scrollXProgress: Jt(0), scrollYProgress: Jt(0) }),
    js = (e) => (e ? !e.current : !1);
function Dy(e, t, n, r) {
    return {
        factory: (s) => {
            let i;
            const o = () => {
                if (js(n) || js(r)) {
                    ci.read(o);
                    return;
                }
                i = DS(s, {
                    ...t,
                    axis: e,
                    container: (n == null ? void 0 : n.current) || void 0,
                    target: (r == null ? void 0 : r.current) || void 0,
                });
            };
            return (
                ci.read(o),
                () => {
                    z1(o), i == null || i();
                }
            );
        },
        times: [0, 1],
        keyframes: [0, 1],
        ease: (s) => s,
        duration: 1,
    };
}
function cO(e, t) {
    return typeof window > "u" ? !1 : e ? E1() && !!sp(t) : Wh();
}
function fO({ container: e, target: t, ...n } = {}) {
    const r = Ar(uO);
    cO(t, n.offset) &&
        ((r.scrollXProgress.accelerate = Dy("x", n, e, t)), (r.scrollYProgress.accelerate = Dy("y", n, e, t)));
    const s = w.useRef(null),
        i = w.useRef(!1),
        o = w.useCallback(
            () => (
                (s.current = DS(
                    (a, { x: l, y: u }) => {
                        r.scrollX.set(l.current),
                            r.scrollXProgress.set(l.progress),
                            r.scrollY.set(u.current),
                            r.scrollYProgress.set(u.progress);
                    },
                    {
                        ...n,
                        container: (e == null ? void 0 : e.current) || void 0,
                        target: (t == null ? void 0 : t.current) || void 0,
                    }
                )),
                () => {
                    var a;
                    (a = s.current) == null || a.call(s);
                }
            ),
            [e, t, JSON.stringify(n.offset)]
        );
    return (
        gu(() => {
            if (((i.current = !1), js(e) || js(t))) {
                i.current = !0;
                return;
            } else return o();
        }, [o]),
        w.useEffect(() => {
            if (!i.current) return;
            let a;
            const l = () => {
                const u = js(e),
                    c = js(t);
                !u && !c && (a = o());
            };
            return (
                ci.read(l),
                () => {
                    z1(l), a == null || a();
                }
            );
        }, [o]),
        r
    );
}
function dO(e) {
    const t = Ar(() => Jt(e)),
        { isStatic: n } = w.useContext(Su);
    if (n) {
        const [, r] = w.useState(e);
        w.useEffect(() => t.on("change", r), []);
    }
    return t;
}
function OS(e, t) {
    const n = dO(t()),
        r = () => n.set(t());
    return (
        r(),
        gu(() => {
            const s = () => re.preRender(r, !1, !0),
                i = e.map((o) => o.on("change", s));
            return () => {
                i.forEach((o) => o()), It(r);
            };
        }),
        n
    );
}
function hO(e) {
    (eo.current = []), e();
    const t = OS(eo.current, e);
    return (eo.current = void 0), t;
}
function fd(e, t, n, r) {
    if (typeof e == "function") return hO(e);
    if (n !== void 0 && !Array.isArray(n) && typeof t != "function") return pO(e, t, n, r);
    const o = typeof t == "function" ? t : hN(t, n, r),
        a = Array.isArray(e) ? Oy(e, o) : Oy([e], ([u]) => o(u)),
        l = Array.isArray(e) ? void 0 : e.accelerate;
    return (
        l &&
            !l.isTransformed &&
            typeof t != "function" &&
            Array.isArray(n) &&
            (r == null ? void 0 : r.clamp) !== !1 &&
            (a.accelerate = { ...l, times: t, keyframes: n, isTransformed: !0 }),
        a
    );
}
function Oy(e, t) {
    const n = Ar(() => []);
    return OS(e, () => {
        n.length = 0;
        const r = e.length;
        for (let s = 0; s < r; s++) n[s] = e[s].get();
        return t(n);
    });
}
function pO(e, t, n, r) {
    const s = Ar(() => Object.keys(n)),
        i = Ar(() => ({}));
    for (const o of s) i[o] = fd(e, t, n[o], r);
    return i;
}
const mO = { some: 0, all: 1 };
function gO(e, t, { root: n, margin: r, amount: s = "some" } = {}) {
    const i = Yh(e),
        o = new WeakMap(),
        a = (u) => {
            u.forEach((c) => {
                const f = o.get(c.target);
                if (c.isIntersecting !== !!f)
                    if (c.isIntersecting) {
                        const d = t(c.target, c);
                        typeof d == "function" ? o.set(c.target, d) : l.unobserve(c.target);
                    } else typeof f == "function" && (f(c), o.delete(c.target));
            });
        },
        l = new IntersectionObserver(a, { root: n, rootMargin: r, threshold: typeof s == "number" ? s : mO[s] });
    return i.forEach((u) => l.observe(u)), () => l.disconnect();
}
function jS(e, { root: t, margin: n, amount: r, once: s = !1, initial: i = !1 } = {}) {
    const [o, a] = w.useState(i);
    return (
        w.useEffect(() => {
            if (!e.current || (s && o)) return;
            const l = () => (a(!0), s ? void 0 : () => a(!1)),
                u = { root: (t && t.current) || void 0, margin: n, amount: r };
            return gO(e.current, l, u);
        }, [t, e, n, s, r]),
        o
    );
}
function yO(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
function jy(e) {
    return yO(e) || Array.isArray(e);
}
function vO() {
    return !!(typeof window < "u" && window.document && window.document.createElement);
}
function ip(e, t) {
    const n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    const s = JSON.stringify(Object.keys(e.breakpoints || {})),
        i = JSON.stringify(Object.keys(t.breakpoints || {}));
    return s !== i
        ? !1
        : n.every((o) => {
              const a = e[o],
                  l = t[o];
              return typeof a == "function" ? `${a}` == `${l}` : !jy(a) || !jy(l) ? a === l : ip(a, l);
          });
}
function Iy(e) {
    return e
        .concat()
        .sort((t, n) => (t.name > n.name ? 1 : -1))
        .map((t) => t.options);
}
function xO(e, t) {
    if (e.length !== t.length) return !1;
    const n = Iy(e),
        r = Iy(t);
    return n.every((s, i) => {
        const o = r[i];
        return ip(s, o);
    });
}
function op(e) {
    return typeof e == "number";
}
function dd(e) {
    return typeof e == "string";
}
function Cu(e) {
    return typeof e == "boolean";
}
function Fy(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
function ye(e) {
    return Math.abs(e);
}
function ap(e) {
    return Math.sign(e);
}
function so(e, t) {
    return ye(e - t);
}
function wO(e, t) {
    if (e === 0 || t === 0 || ye(e) <= ye(t)) return 0;
    const n = so(ye(e), ye(t));
    return ye(n / e);
}
function SO(e) {
    return Math.round(e * 100) / 100;
}
function No(e) {
    return Lo(e).map(Number);
}
function rn(e) {
    return e[qo(e)];
}
function qo(e) {
    return Math.max(0, e.length - 1);
}
function lp(e, t) {
    return t === qo(e);
}
function Vy(e, t = 0) {
    return Array.from(Array(e), (n, r) => t + r);
}
function Lo(e) {
    return Object.keys(e);
}
function IS(e, t) {
    return [e, t].reduce(
        (n, r) => (
            Lo(r).forEach((s) => {
                const i = n[s],
                    o = r[s],
                    a = Fy(i) && Fy(o);
                n[s] = a ? IS(i, o) : o;
            }),
            n
        ),
        {}
    );
}
function hd(e, t) {
    return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function EO(e, t) {
    const n = { start: r, center: s, end: i };
    function r() {
        return 0;
    }
    function s(l) {
        return i(l) / 2;
    }
    function i(l) {
        return t - l;
    }
    function o(l, u) {
        return dd(e) ? n[e](l) : e(t, l, u);
    }
    return { measure: o };
}
function Do() {
    let e = [];
    function t(s, i, o, a = { passive: !0 }) {
        let l;
        if ("addEventListener" in s) s.addEventListener(i, o, a), (l = () => s.removeEventListener(i, o, a));
        else {
            const u = s;
            u.addListener(o), (l = () => u.removeListener(o));
        }
        return e.push(l), r;
    }
    function n() {
        e = e.filter((s) => s());
    }
    const r = { add: t, clear: n };
    return r;
}
function CO(e, t, n, r) {
    const s = Do(),
        i = 1e3 / 60;
    let o = null,
        a = 0,
        l = 0;
    function u() {
        s.add(e, "visibilitychange", () => {
            e.hidden && y();
        });
    }
    function c() {
        h(), s.clear();
    }
    function f(x) {
        if (!l) return;
        o || ((o = x), n(), n());
        const m = x - o;
        for (o = x, a += m; a >= i; ) n(), (a -= i);
        const g = a / i;
        r(g), l && (l = t.requestAnimationFrame(f));
    }
    function d() {
        l || (l = t.requestAnimationFrame(f));
    }
    function h() {
        t.cancelAnimationFrame(l), (o = null), (a = 0), (l = 0);
    }
    function y() {
        (o = null), (a = 0);
    }
    return { init: u, destroy: c, start: d, stop: h, update: n, render: r };
}
function bO(e, t) {
    const n = t === "rtl",
        r = e === "y",
        s = r ? "y" : "x",
        i = r ? "x" : "y",
        o = !r && n ? -1 : 1,
        a = c(),
        l = f();
    function u(y) {
        const { height: p, width: x } = y;
        return r ? p : x;
    }
    function c() {
        return r ? "top" : n ? "right" : "left";
    }
    function f() {
        return r ? "bottom" : n ? "left" : "right";
    }
    function d(y) {
        return y * o;
    }
    return { scroll: s, cross: i, startEdge: a, endEdge: l, measureSize: u, direction: d };
}
function ls(e = 0, t = 0) {
    const n = ye(e - t);
    function r(u) {
        return u < e;
    }
    function s(u) {
        return u > t;
    }
    function i(u) {
        return r(u) || s(u);
    }
    function o(u) {
        return i(u) ? (r(u) ? e : t) : u;
    }
    function a(u) {
        return n ? u - n * Math.ceil((u - t) / n) : u;
    }
    return { length: n, max: t, min: e, constrain: o, reachedAny: i, reachedMax: s, reachedMin: r, removeOffset: a };
}
function FS(e, t, n) {
    const { constrain: r } = ls(0, e),
        s = e + 1;
    let i = o(t);
    function o(d) {
        return n ? ye((s + d) % s) : r(d);
    }
    function a() {
        return i;
    }
    function l(d) {
        return (i = o(d)), f;
    }
    function u(d) {
        return c().set(a() + d);
    }
    function c() {
        return FS(e, a(), n);
    }
    const f = { get: a, set: l, add: u, clone: c };
    return f;
}
function TO(e, t, n, r, s, i, o, a, l, u, c, f, d, h, y, p, x, m, g) {
    const { cross: v, direction: S } = e,
        C = ["INPUT", "SELECT", "TEXTAREA"],
        T = { passive: !1 },
        b = Do(),
        P = Do(),
        R = ls(50, 225).constrain(h.measure(20)),
        k = { mouse: 300, touch: 400 },
        L = { mouse: 500, touch: 600 },
        D = y ? 43 : 25;
    let W = !1,
        O = 0,
        H = 0,
        _ = !1,
        K = !1,
        A = !1,
        M = !1;
    function F(B) {
        if (!g) return;
        function te(Me) {
            (Cu(g) || g(B, Me)) && we(Me);
        }
        const fe = t;
        b.add(fe, "dragstart", (Me) => Me.preventDefault(), T)
            .add(fe, "touchmove", () => {}, T)
            .add(fe, "touchend", () => {})
            .add(fe, "touchstart", te)
            .add(fe, "mousedown", te)
            .add(fe, "touchcancel", Se)
            .add(fe, "contextmenu", Se)
            .add(fe, "click", je, !0);
    }
    function U() {
        b.clear(), P.clear();
    }
    function $() {
        const B = M ? n : t;
        P.add(B, "touchmove", q, T).add(B, "touchend", Se).add(B, "mousemove", q, T).add(B, "mouseup", Se);
    }
    function X(B) {
        const te = B.nodeName || "";
        return C.includes(te);
    }
    function Q() {
        return (y ? L : k)[M ? "mouse" : "touch"];
    }
    function le(B, te) {
        const fe = f.add(ap(B) * -1),
            Me = c.byDistance(B, !y).distance;
        return y || ye(B) < R ? Me : x && te ? Me * 0.5 : c.byIndex(fe.get(), 0).distance;
    }
    function we(B) {
        const te = hd(B, r);
        (M = te),
            (A = y && te && !B.buttons && W),
            (W = so(s.get(), o.get()) >= 2),
            !(te && B.button !== 0) &&
                (X(B.target) ||
                    ((_ = !0),
                    i.pointerDown(B),
                    u.useFriction(0).useDuration(0),
                    s.set(o),
                    $(),
                    (O = i.readPoint(B)),
                    (H = i.readPoint(B, v)),
                    d.emit("pointerDown")));
    }
    function q(B) {
        if (!hd(B, r) && B.touches.length >= 2) return Se(B);
        const fe = i.readPoint(B),
            Me = i.readPoint(B, v),
            Xe = so(fe, O),
            mt = so(Me, H);
        if (!K && !M && (!B.cancelable || ((K = Xe > mt), !K))) return Se(B);
        const gt = i.pointerMove(B);
        Xe > p && (A = !0), u.useFriction(0.3).useDuration(0.75), a.start(), s.add(S(gt)), B.preventDefault();
    }
    function Se(B) {
        const fe = c.byDistance(0, !1).index !== f.get(),
            Me = i.pointerUp(B) * Q(),
            Xe = le(S(Me), fe),
            mt = wO(Me, Xe),
            gt = D - 10 * mt,
            qe = m + mt / 50;
        (K = !1),
            (_ = !1),
            P.clear(),
            u.useDuration(gt).useFriction(qe),
            l.distance(Xe, !y),
            (M = !1),
            d.emit("pointerUp");
    }
    function je(B) {
        A && (B.stopPropagation(), B.preventDefault(), (A = !1));
    }
    function Pe() {
        return _;
    }
    return { init: F, destroy: U, pointerDown: Pe };
}
function PO(e, t) {
    let r, s;
    function i(f) {
        return f.timeStamp;
    }
    function o(f, d) {
        const y = `client${(d || e.scroll) === "x" ? "X" : "Y"}`;
        return (hd(f, t) ? f : f.touches[0])[y];
    }
    function a(f) {
        return (r = f), (s = f), o(f);
    }
    function l(f) {
        const d = o(f) - o(s),
            h = i(f) - i(r) > 170;
        return (s = f), h && (r = f), d;
    }
    function u(f) {
        if (!r || !s) return 0;
        const d = o(s) - o(r),
            h = i(f) - i(r),
            y = i(f) - i(s) > 170,
            p = d / h;
        return h && !y && ye(p) > 0.1 ? p : 0;
    }
    return { pointerDown: a, pointerMove: l, pointerUp: u, readPoint: o };
}
function kO() {
    function e(n) {
        const { offsetTop: r, offsetLeft: s, offsetWidth: i, offsetHeight: o } = n;
        return { top: r, right: s + i, bottom: r + o, left: s, width: i, height: o };
    }
    return { measure: e };
}
function AO(e) {
    function t(r) {
        return e * (r / 100);
    }
    return { measure: t };
}
function RO(e, t, n, r, s, i, o) {
    const a = [e].concat(r);
    let l,
        u,
        c = [],
        f = !1;
    function d(x) {
        return s.measureSize(o.measure(x));
    }
    function h(x) {
        if (!i) return;
        (u = d(e)), (c = r.map(d));
        function m(g) {
            for (const v of g) {
                if (f) return;
                const S = v.target === e,
                    C = r.indexOf(v.target),
                    T = S ? u : c[C],
                    b = d(S ? e : r[C]);
                if (ye(b - T) >= 0.5) {
                    x.reInit(), t.emit("resize");
                    break;
                }
            }
        }
        (l = new ResizeObserver((g) => {
            (Cu(i) || i(x, g)) && m(g);
        })),
            n.requestAnimationFrame(() => {
                a.forEach((g) => l.observe(g));
            });
    }
    function y() {
        (f = !0), l && l.disconnect();
    }
    return { init: h, destroy: y };
}
function MO(e, t, n, r, s, i) {
    let o = 0,
        a = 0,
        l = s,
        u = i,
        c = e.get(),
        f = 0;
    function d() {
        const T = r.get() - e.get(),
            b = !l;
        let P = 0;
        return (
            b
                ? ((o = 0), n.set(r), e.set(r), (P = T))
                : (n.set(e), (o += T / l), (o *= u), (c += o), e.add(o), (P = c - f)),
            (a = ap(P)),
            (f = c),
            C
        );
    }
    function h() {
        const T = r.get() - t.get();
        return ye(T) < 0.001;
    }
    function y() {
        return l;
    }
    function p() {
        return a;
    }
    function x() {
        return o;
    }
    function m() {
        return v(s);
    }
    function g() {
        return S(i);
    }
    function v(T) {
        return (l = T), C;
    }
    function S(T) {
        return (u = T), C;
    }
    const C = {
        direction: p,
        duration: y,
        velocity: x,
        seek: d,
        settled: h,
        useBaseFriction: g,
        useBaseDuration: m,
        useFriction: S,
        useDuration: v,
    };
    return C;
}
function NO(e, t, n, r, s) {
    const i = s.measure(10),
        o = s.measure(50),
        a = ls(0.1, 0.99);
    let l = !1;
    function u() {
        return !(l || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
    }
    function c(h) {
        if (!u()) return;
        const y = e.reachedMin(t.get()) ? "min" : "max",
            p = ye(e[y] - t.get()),
            x = n.get() - t.get(),
            m = a.constrain(p / o);
        n.subtract(x * m), !h && ye(x) < i && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
    }
    function f(h) {
        l = !h;
    }
    return { shouldConstrain: u, constrain: c, toggleActive: f };
}
function LO(e, t, n, r, s) {
    const i = ls(-t + e, 0),
        o = f(),
        a = c(),
        l = d();
    function u(y, p) {
        return so(y, p) <= 1;
    }
    function c() {
        const y = o[0],
            p = rn(o),
            x = o.lastIndexOf(y),
            m = o.indexOf(p) + 1;
        return ls(x, m);
    }
    function f() {
        return n
            .map((y, p) => {
                const { min: x, max: m } = i,
                    g = i.constrain(y),
                    v = !p,
                    S = lp(n, p);
                return v ? m : S || u(x, g) ? x : u(m, g) ? m : g;
            })
            .map((y) => parseFloat(y.toFixed(3)));
    }
    function d() {
        if (t <= e + s) return [i.max];
        if (r === "keepSnaps") return o;
        const { min: y, max: p } = a;
        return o.slice(y, p);
    }
    return { snapsContained: l, scrollContainLimit: a };
}
function DO(e, t, n) {
    const r = t[0],
        s = n ? r - e : rn(t);
    return { limit: ls(s, r) };
}
function OO(e, t, n, r) {
    const i = t.min + 0.1,
        o = t.max + 0.1,
        { reachedMin: a, reachedMax: l } = ls(i, o);
    function u(d) {
        return d === 1 ? l(n.get()) : d === -1 ? a(n.get()) : !1;
    }
    function c(d) {
        if (!u(d)) return;
        const h = e * (d * -1);
        r.forEach((y) => y.add(h));
    }
    return { loop: c };
}
function jO(e) {
    const { max: t, length: n } = e;
    function r(i) {
        const o = i - t;
        return n ? o / -n : 0;
    }
    return { get: r };
}
function IO(e, t, n, r, s) {
    const { startEdge: i, endEdge: o } = e,
        { groupSlides: a } = s,
        l = f().map(t.measure),
        u = d(),
        c = h();
    function f() {
        return a(r)
            .map((p) => rn(p)[o] - p[0][i])
            .map(ye);
    }
    function d() {
        return r.map((p) => n[i] - p[i]).map((p) => -ye(p));
    }
    function h() {
        return a(u)
            .map((p) => p[0])
            .map((p, x) => p + l[x]);
    }
    return { snaps: u, snapsAligned: c };
}
function FO(e, t, n, r, s, i) {
    const { groupSlides: o } = s,
        { min: a, max: l } = r,
        u = c();
    function c() {
        const d = o(i),
            h = !e || t === "keepSnaps";
        return n.length === 1
            ? [i]
            : h
              ? d
              : d.slice(a, l).map((y, p, x) => {
                    const m = !p,
                        g = lp(x, p);
                    if (m) {
                        const v = rn(x[0]) + 1;
                        return Vy(v);
                    }
                    if (g) {
                        const v = qo(i) - rn(x)[0] + 1;
                        return Vy(v, rn(x)[0]);
                    }
                    return y;
                });
    }
    return { slideRegistry: u };
}
function VO(e, t, n, r, s) {
    const { reachedAny: i, removeOffset: o, constrain: a } = r;
    function l(y) {
        return y.concat().sort((p, x) => ye(p) - ye(x))[0];
    }
    function u(y) {
        const p = e ? o(y) : a(y),
            x = t.map((g, v) => ({ diff: c(g - p, 0), index: v })).sort((g, v) => ye(g.diff) - ye(v.diff)),
            { index: m } = x[0];
        return { index: m, distance: p };
    }
    function c(y, p) {
        const x = [y, y + n, y - n];
        if (!e) return y;
        if (!p) return l(x);
        const m = x.filter((g) => ap(g) === p);
        return m.length ? l(m) : rn(x) - n;
    }
    function f(y, p) {
        const x = t[y] - s.get(),
            m = c(x, p);
        return { index: y, distance: m };
    }
    function d(y, p) {
        const x = s.get() + y,
            { index: m, distance: g } = u(x),
            v = !e && i(x);
        if (!p || v) return { index: m, distance: y };
        const S = t[m] - g,
            C = y + c(S, 0);
        return { index: m, distance: C };
    }
    return { byDistance: d, byIndex: f, shortcut: c };
}
function _O(e, t, n, r, s, i, o) {
    function a(f) {
        const d = f.distance,
            h = f.index !== t.get();
        i.add(d),
            d && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())),
            h && (n.set(t.get()), t.set(f.index), o.emit("select"));
    }
    function l(f, d) {
        const h = s.byDistance(f, d);
        a(h);
    }
    function u(f, d) {
        const h = t.clone().set(f),
            y = s.byIndex(h.get(), d);
        a(y);
    }
    return { distance: l, index: u };
}
function zO(e, t, n, r, s, i, o, a) {
    const l = { passive: !0, capture: !0 };
    let u = 0;
    function c(h) {
        if (!a) return;
        function y(p) {
            if (new Date().getTime() - u > 10) return;
            o.emit("slideFocusStart"), (e.scrollLeft = 0);
            const g = n.findIndex((v) => v.includes(p));
            op(g) && (s.useDuration(0), r.index(g, 0), o.emit("slideFocus"));
        }
        i.add(document, "keydown", f, !1),
            t.forEach((p, x) => {
                i.add(
                    p,
                    "focus",
                    (m) => {
                        (Cu(a) || a(h, m)) && y(x);
                    },
                    l
                );
            });
    }
    function f(h) {
        h.code === "Tab" && (u = new Date().getTime());
    }
    return { init: c };
}
function Bi(e) {
    let t = e;
    function n() {
        return t;
    }
    function r(l) {
        t = o(l);
    }
    function s(l) {
        t += o(l);
    }
    function i(l) {
        t -= o(l);
    }
    function o(l) {
        return op(l) ? l : l.get();
    }
    return { get: n, set: r, add: s, subtract: i };
}
function VS(e, t) {
    const n = e.scroll === "x" ? o : a,
        r = t.style;
    let s = null,
        i = !1;
    function o(d) {
        return `translate3d(${d}px,0px,0px)`;
    }
    function a(d) {
        return `translate3d(0px,${d}px,0px)`;
    }
    function l(d) {
        if (i) return;
        const h = SO(e.direction(d));
        h !== s && ((r.transform = n(h)), (s = h));
    }
    function u(d) {
        i = !d;
    }
    function c() {
        i || ((r.transform = ""), t.getAttribute("style") || t.removeAttribute("style"));
    }
    return { clear: c, to: l, toggleActive: u };
}
function BO(e, t, n, r, s, i, o, a, l) {
    const c = No(s),
        f = No(s).reverse(),
        d = m().concat(g());
    function h(b, P) {
        return b.reduce((R, k) => R - s[k], P);
    }
    function y(b, P) {
        return b.reduce((R, k) => (h(R, P) > 0 ? R.concat([k]) : R), []);
    }
    function p(b) {
        return i.map((P, R) => ({ start: P - r[R] + 0.5 + b, end: P + t - 0.5 + b }));
    }
    function x(b, P, R) {
        const k = p(P);
        return b.map((L) => {
            const D = R ? 0 : -n,
                W = R ? n : 0,
                O = R ? "end" : "start",
                H = k[L][O];
            return {
                index: L,
                loopPoint: H,
                slideLocation: Bi(-1),
                translate: VS(e, l[L]),
                target: () => (a.get() > H ? D : W),
            };
        });
    }
    function m() {
        const b = o[0],
            P = y(f, b);
        return x(P, n, !1);
    }
    function g() {
        const b = t - o[0] - 1,
            P = y(c, b);
        return x(P, -n, !0);
    }
    function v() {
        return d.every(({ index: b }) => {
            const P = c.filter((R) => R !== b);
            return h(P, t) <= 0.1;
        });
    }
    function S() {
        d.forEach((b) => {
            const { target: P, translate: R, slideLocation: k } = b,
                L = P();
            L !== k.get() && (R.to(L), k.set(L));
        });
    }
    function C() {
        d.forEach((b) => b.translate.clear());
    }
    return { canLoop: v, clear: C, loop: S, loopPoints: d };
}
function $O(e, t, n) {
    let r,
        s = !1;
    function i(l) {
        if (!n) return;
        function u(c) {
            for (const f of c)
                if (f.type === "childList") {
                    l.reInit(), t.emit("slidesChanged");
                    break;
                }
        }
        (r = new MutationObserver((c) => {
            s || ((Cu(n) || n(l, c)) && u(c));
        })),
            r.observe(e, { childList: !0 });
    }
    function o() {
        r && r.disconnect(), (s = !0);
    }
    return { init: i, destroy: o };
}
function UO(e, t, n, r) {
    const s = {};
    let i = null,
        o = null,
        a,
        l = !1;
    function u() {
        (a = new IntersectionObserver(
            (y) => {
                l ||
                    (y.forEach((p) => {
                        const x = t.indexOf(p.target);
                        s[x] = p;
                    }),
                    (i = null),
                    (o = null),
                    n.emit("slidesInView"));
            },
            { root: e.parentElement, threshold: r }
        )),
            t.forEach((y) => a.observe(y));
    }
    function c() {
        a && a.disconnect(), (l = !0);
    }
    function f(y) {
        return Lo(s).reduce((p, x) => {
            const m = parseInt(x),
                { isIntersecting: g } = s[m];
            return ((y && g) || (!y && !g)) && p.push(m), p;
        }, []);
    }
    function d(y = !0) {
        if (y && i) return i;
        if (!y && o) return o;
        const p = f(y);
        return y && (i = p), y || (o = p), p;
    }
    return { init: u, destroy: c, get: d };
}
function WO(e, t, n, r, s, i) {
    const { measureSize: o, startEdge: a, endEdge: l } = e,
        u = n[0] && s,
        c = y(),
        f = p(),
        d = n.map(o),
        h = x();
    function y() {
        if (!u) return 0;
        const g = n[0];
        return ye(t[a] - g[a]);
    }
    function p() {
        if (!u) return 0;
        const g = i.getComputedStyle(rn(r));
        return parseFloat(g.getPropertyValue(`margin-${l}`));
    }
    function x() {
        return n
            .map((g, v, S) => {
                const C = !v,
                    T = lp(S, v);
                return C ? d[v] + c : T ? d[v] + f : S[v + 1][a] - g[a];
            })
            .map(ye);
    }
    return { slideSizes: d, slideSizesWithGaps: h, startGap: c, endGap: f };
}
function HO(e, t, n, r, s, i, o, a, l) {
    const { startEdge: u, endEdge: c, direction: f } = e,
        d = op(n);
    function h(m, g) {
        return No(m)
            .filter((v) => v % g === 0)
            .map((v) => m.slice(v, v + g));
    }
    function y(m) {
        return m.length
            ? No(m)
                  .reduce((g, v, S) => {
                      const C = rn(g) || 0,
                          T = C === 0,
                          b = v === qo(m),
                          P = s[u] - i[C][u],
                          R = s[u] - i[v][c],
                          k = !r && T ? f(o) : 0,
                          L = !r && b ? f(a) : 0,
                          D = ye(R - L - (P + k));
                      return S && D > t + l && g.push(v), b && g.push(m.length), g;
                  }, [])
                  .map((g, v, S) => {
                      const C = Math.max(S[v - 1] || 0);
                      return m.slice(C, g);
                  })
            : [];
    }
    function p(m) {
        return d ? h(m, n) : y(m);
    }
    return { groupSlides: p };
}
function KO(e, t, n, r, s, i, o) {
    const {
            align: a,
            axis: l,
            direction: u,
            startIndex: c,
            loop: f,
            duration: d,
            dragFree: h,
            dragThreshold: y,
            inViewThreshold: p,
            slidesToScroll: x,
            skipSnaps: m,
            containScroll: g,
            watchResize: v,
            watchSlides: S,
            watchDrag: C,
            watchFocus: T,
        } = i,
        b = 2,
        P = kO(),
        R = P.measure(t),
        k = n.map(P.measure),
        L = bO(l, u),
        D = L.measureSize(R),
        W = AO(D),
        O = EO(a, D),
        H = !f && !!g,
        _ = f || !!g,
        { slideSizes: K, slideSizesWithGaps: A, startGap: M, endGap: F } = WO(L, R, k, n, _, s),
        U = HO(L, D, x, f, R, k, M, F, b),
        { snaps: $, snapsAligned: X } = IO(L, O, R, k, U),
        Q = -rn($) + rn(A),
        { snapsContained: le, scrollContainLimit: we } = LO(D, Q, X, g, b),
        q = H ? le : X,
        { limit: Se } = DO(Q, q, f),
        je = FS(qo(q), c, f),
        Pe = je.clone(),
        se = No(n),
        B = ({ dragHandler: _t, scrollBody: Ei, scrollBounds: ms, options: { loop: Un } }) => {
            Un || ms.constrain(_t.pointerDown()), Ei.seek();
        },
        te = (
            {
                scrollBody: _t,
                translate: Ei,
                location: ms,
                offsetLocation: Un,
                previousLocation: Wn,
                scrollLooper: ea,
                slideLooper: Hn,
                dragHandler: Tu,
                animation: Pu,
                eventHandler: Ci,
                scrollBounds: ta,
                options: { loop: na },
            },
            gs
        ) => {
            const zt = _t.settled(),
                ku = !ta.shouldConstrain(),
                Y = na ? zt : zt && ku,
                ie = Y && !Tu.pointerDown();
            ie && Pu.stop();
            const ue = ms.get() * gs + Wn.get() * (1 - gs);
            Un.set(ue),
                na && (ea.loop(_t.direction()), Hn.loop()),
                Ei.to(Un.get()),
                ie && Ci.emit("settle"),
                Y || Ci.emit("scroll");
        },
        fe = CO(
            r,
            s,
            () => B(Si),
            (_t) => te(Si, _t)
        ),
        Me = 0.68,
        Xe = q[je.get()],
        mt = Bi(Xe),
        gt = Bi(Xe),
        qe = Bi(Xe),
        cn = Bi(Xe),
        Ft = MO(mt, qe, gt, cn, d, Me),
        ps = VO(f, q, Q, Se, cn),
        Vt = _O(fe, je, Pe, Ft, ps, cn, o),
        Zo = jO(Se),
        Jo = Do(),
        ot = UO(t, n, o, p),
        { slideRegistry: Tn } = FO(H, g, q, we, U, se),
        bu = zO(e, n, Tn, Vt, Ft, Jo, o, T),
        Si = {
            ownerDocument: r,
            ownerWindow: s,
            eventHandler: o,
            containerRect: R,
            slideRects: k,
            animation: fe,
            axis: L,
            dragHandler: TO(L, e, r, s, cn, PO(L, s), mt, fe, Vt, Ft, ps, je, o, W, h, y, m, Me, C),
            eventStore: Jo,
            percentOfView: W,
            index: je,
            indexPrevious: Pe,
            limit: Se,
            location: mt,
            offsetLocation: qe,
            previousLocation: gt,
            options: i,
            resizeHandler: RO(t, o, s, n, L, v, P),
            scrollBody: Ft,
            scrollBounds: NO(Se, qe, cn, Ft, W),
            scrollLooper: OO(Q, Se, qe, [mt, qe, gt, cn]),
            scrollProgress: Zo,
            scrollSnapList: q.map(Zo.get),
            scrollSnaps: q,
            scrollTarget: ps,
            scrollTo: Vt,
            slideLooper: BO(L, D, Q, K, A, $, q, qe, n),
            slideFocus: bu,
            slidesHandler: $O(t, o, S),
            slidesInView: ot,
            slideIndexes: se,
            slideRegistry: Tn,
            slidesToScroll: U,
            target: cn,
            translate: VS(L, t),
        };
    return Si;
}
function GO() {
    let e = {},
        t;
    function n(u) {
        t = u;
    }
    function r(u) {
        return e[u] || [];
    }
    function s(u) {
        return r(u).forEach((c) => c(t, u)), l;
    }
    function i(u, c) {
        return (e[u] = r(u).concat([c])), l;
    }
    function o(u, c) {
        return (e[u] = r(u).filter((f) => f !== c)), l;
    }
    function a() {
        e = {};
    }
    const l = { init: n, emit: s, off: o, on: i, clear: a };
    return l;
}
const QO = {
    align: "center",
    axis: "x",
    container: null,
    slides: null,
    containScroll: "trimSnaps",
    direction: "ltr",
    slidesToScroll: 1,
    inViewThreshold: 0,
    breakpoints: {},
    dragFree: !1,
    dragThreshold: 10,
    loop: !1,
    skipSnaps: !1,
    duration: 25,
    startIndex: 0,
    active: !0,
    watchDrag: !0,
    watchResize: !0,
    watchSlides: !0,
    watchFocus: !0,
};
function YO(e) {
    function t(i, o) {
        return IS(i, o || {});
    }
    function n(i) {
        const o = i.breakpoints || {},
            a = Lo(o)
                .filter((l) => e.matchMedia(l).matches)
                .map((l) => o[l])
                .reduce((l, u) => t(l, u), {});
        return t(i, a);
    }
    function r(i) {
        return i
            .map((o) => Lo(o.breakpoints || {}))
            .reduce((o, a) => o.concat(a), [])
            .map(e.matchMedia);
    }
    return { mergeOptions: t, optionsAtMedia: n, optionsMediaQueries: r };
}
function XO(e) {
    let t = [];
    function n(i, o) {
        return (
            (t = o.filter(({ options: a }) => e.optionsAtMedia(a).active !== !1)),
            t.forEach((a) => a.init(i, e)),
            o.reduce((a, l) => Object.assign(a, { [l.name]: l }), {})
        );
    }
    function r() {
        t = t.filter((i) => i.destroy());
    }
    return { init: n, destroy: r };
}
function $l(e, t, n) {
    const r = e.ownerDocument,
        s = r.defaultView,
        i = YO(s),
        o = XO(i),
        a = Do(),
        l = GO(),
        { mergeOptions: u, optionsAtMedia: c, optionsMediaQueries: f } = i,
        { on: d, off: h, emit: y } = l,
        p = L;
    let x = !1,
        m,
        g = u(QO, $l.globalOptions),
        v = u(g),
        S = [],
        C,
        T,
        b;
    function P() {
        const { container: se, slides: B } = v;
        T = (dd(se) ? e.querySelector(se) : se) || e.children[0];
        const fe = dd(B) ? T.querySelectorAll(B) : B;
        b = [].slice.call(fe || T.children);
    }
    function R(se) {
        const B = KO(e, T, b, r, s, se, l);
        if (se.loop && !B.slideLooper.canLoop()) {
            const te = Object.assign({}, se, { loop: !1 });
            return R(te);
        }
        return B;
    }
    function k(se, B) {
        x ||
            ((g = u(g, se)),
            (v = c(g)),
            (S = B || S),
            P(),
            (m = R(v)),
            f([g, ...S.map(({ options: te }) => te)]).forEach((te) => a.add(te, "change", L)),
            v.active &&
                (m.translate.to(m.location.get()),
                m.animation.init(),
                m.slidesInView.init(),
                m.slideFocus.init(Pe),
                m.eventHandler.init(Pe),
                m.resizeHandler.init(Pe),
                m.slidesHandler.init(Pe),
                m.options.loop && m.slideLooper.loop(),
                T.offsetParent && b.length && m.dragHandler.init(Pe),
                (C = o.init(Pe, S))));
    }
    function L(se, B) {
        const te = U();
        D(), k(u({ startIndex: te }, se), B), l.emit("reInit");
    }
    function D() {
        m.dragHandler.destroy(),
            m.eventStore.clear(),
            m.translate.clear(),
            m.slideLooper.clear(),
            m.resizeHandler.destroy(),
            m.slidesHandler.destroy(),
            m.slidesInView.destroy(),
            m.animation.destroy(),
            o.destroy(),
            a.clear();
    }
    function W() {
        x || ((x = !0), a.clear(), D(), l.emit("destroy"), l.clear());
    }
    function O(se, B, te) {
        !v.active ||
            x ||
            (m.scrollBody.useBaseFriction().useDuration(B === !0 ? 0 : v.duration), m.scrollTo.index(se, te || 0));
    }
    function H(se) {
        const B = m.index.add(1).get();
        O(B, se, -1);
    }
    function _(se) {
        const B = m.index.add(-1).get();
        O(B, se, 1);
    }
    function K() {
        return m.index.add(1).get() !== U();
    }
    function A() {
        return m.index.add(-1).get() !== U();
    }
    function M() {
        return m.scrollSnapList;
    }
    function F() {
        return m.scrollProgress.get(m.offsetLocation.get());
    }
    function U() {
        return m.index.get();
    }
    function $() {
        return m.indexPrevious.get();
    }
    function X() {
        return m.slidesInView.get();
    }
    function Q() {
        return m.slidesInView.get(!1);
    }
    function le() {
        return C;
    }
    function we() {
        return m;
    }
    function q() {
        return e;
    }
    function Se() {
        return T;
    }
    function je() {
        return b;
    }
    const Pe = {
        canScrollNext: K,
        canScrollPrev: A,
        containerNode: Se,
        internalEngine: we,
        destroy: W,
        off: h,
        on: d,
        emit: y,
        plugins: le,
        previousScrollSnap: $,
        reInit: p,
        rootNode: q,
        scrollNext: H,
        scrollPrev: _,
        scrollProgress: F,
        scrollSnapList: M,
        scrollTo: O,
        selectedScrollSnap: U,
        slideNodes: je,
        slidesInView: X,
        slidesNotInView: Q,
    };
    return k(t, n), setTimeout(() => l.emit("init"), 0), Pe;
}
$l.globalOptions = void 0;
function up(e = {}, t = []) {
    const n = w.useRef(e),
        r = w.useRef(t),
        [s, i] = w.useState(),
        [o, a] = w.useState(),
        l = w.useCallback(() => {
            s && s.reInit(n.current, r.current);
        }, [s]);
    return (
        w.useEffect(() => {
            ip(n.current, e) || ((n.current = e), l());
        }, [e, l]),
        w.useEffect(() => {
            xO(r.current, t) || ((r.current = t), l());
        }, [t, l]),
        w.useEffect(() => {
            if (vO() && o) {
                $l.globalOptions = up.globalOptions;
                const u = $l(o, n.current, r.current);
                return i(u), () => u.destroy();
            } else i(void 0);
        }, [o, i]),
        [a, s]
    );
}
up.globalOptions = void 0;
const qO = [
        {
            icon: "🦷",
            title: "Лечение зубов",
            desc: "Современные методы лечения кариеса, пульпита и заболеваний периодонта с использованием передовых современных материалов.",
            img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_db74ef7b98_0af09242dbc01c52.png",
        },
        {
            icon: "✨",
            title: "Профессиональная чистка",
            desc: "Ультразвуковое удаление зубного камня и Air Flow полировка для безупречно чистой улыбки после каждого визита.",
            img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_790a091a0d_a20ee837702b56bf.png",
        },
        {
            icon: "🔩",
            title: "Имплантация",
            desc: "Швейцарские и немецкие имплантаты с пожизненной гарантией. Полное восстановление функции и эстетики зубного ряда.",
            img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_a9d3c23836_8c18afe2f864daf1.png",
        },
        {
            icon: "⭐",
            title: "Отбеливание зубов",
            desc: "Система Zoom 4 и Beyond для достижения белоснежной улыбки до 8 оттенков светлее всего за один визит.",
            img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_115b7c05ec_43449788e8c293ba.png",
        },
        {
            icon: "🧸",
            title: "Детская стоматология",
            desc: "Бережный и безболезненный подход к лечению зубов у детей. Создаём позитивный опыт с самого первого визита.",
            img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_1e816ca8c1_5c2e1b31b4359289.png",
        },
        {
            icon: "😁",
            title: "Ортодонтия",
            desc: "Элайнеры Invisalign и эстетические брекеты для идеального прикуса. Незаметное исправление в любом возрасте.",
            img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_7a4a0e542e_1a4faff951a17a4f.png",
        },
    ],
    ZO = [
        { value: 2, suffix: "+", label: "Лет опыта" },
        { value: 300, suffix: "+", label: "Пациентов" },
        { value: 98, suffix: "%", label: "Довольных клиентов" },
        { value: 15, suffix: "+", label: "Наград" },
    ],
    _y = [
        {
            name: "Анастасия К.",
            role: "Пациент, 3 года",
            text: "Сагида Эльдаровна — настоящий профессионал. Очень внимательный врач, объяснила каждый шаг лечения. Впервые не боюсь идти к стоматологу!",
            rating: 5,
            avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg",
        },
        {
            name: "Михаил Р.",
            role: "Пациент, 1 год",
            text: "Сделал имплантацию двух зубов. Результат превзошёл все ожидания — выглядит абсолютно естественно. Клиника высшего класса.",
            rating: 5,
            avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg",
        },
        {
            name: "Елена В.",
            role: "Пациент, 2 года",
            text: "Провела отбеливание по системе Zoom. Результат потрясающий! Зубы на 7 оттенков светлее. Рекомендую всем своим друзьям.",
            rating: 5,
            avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg",
        },
        {
            name: "Дмитрий П.",
            role: "Пациент, 4 года",
            text: "Привожу всю семью включая детей. Ребёнок сам просится к Сагиде Эльдаровне — это ли не лучшая рекомендация!",
            rating: 5,
            avatar: "https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg",
        },
    ],
    JO = [
        {
            q: "Больно ли делать имплантацию зубов?",
            a: "Нет. Имплантация проводится под местной анестезией. Современные анестетики обеспечивают полное отсутствие боли во время процедуры. После операции возможен умеренный дискомфорт на 1–2 дня.",
        },
        {
            q: "Сколько времени занимает отбеливание Zoom?",
            a: "Процедура отбеливания Zoom 4 занимает около 90 минут. Результат виден сразу — зубы становятся на 6–8 оттенков светлее. Эффект сохраняется до 2 лет при соблюдении рекомендаций.",
        },
        {
            q: "Можно ли лечить зубы во время беременности?",
            a: "Да, лечение зубов безопасно и даже рекомендовано во втором триместре. Мы используем безопасные анестетики и методы, одобрённые для беременных. Обязательно сообщите о беременности перед визитом.",
        },
        {
            q: "Как записаться на первичный приём?",
            a: "Вы можете записаться по телефону +7 (747) 123-45-67, через WhatsApp или оставив заявку на сайте. Первичная консультация занимает 30–45 минут. Мы работаем ежедневно с 9:00 до 20:00.",
        },
        {
            q: "Принимаете ли вы детей?",
            a: "Да, мы принимаем детей с 3 лет. Наш подход основан на позитивном первом опыте — никакого страха и принуждения. Для маленьких пациентов предусмотрены специальные игровые методики.",
        },
    ];
function ej({ target: e, suffix: t }) {
    const [n, r] = w.useState(0),
        s = w.useRef(null),
        i = jS(s, { once: !0, margin: "0px" });
    return (
        w.useEffect(() => {
            if (!i) return;
            let o = 0;
            const l = e / (3e3 / 16),
                u = setInterval(() => {
                    (o += l), o >= e ? (r(e), clearInterval(u)) : r(Math.floor(o));
                }, 16);
            return () => clearInterval(u);
        }, [i, e]),
        E.jsxs("span", {
            ref: s,
            className: "font-cormorant text-5xl lg:text-6xl font-bold text-teal",
            children: [n.toLocaleString("ru-RU"), t],
        })
    );
}
const tj = {
    hidden: { opacity: 0, y: 40 },
    visible: (e = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: e * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
};
function Ze({ children: e, className: t = "", delay: n = 0 }) {
    const r = w.useRef(null),
        s = jS(r, { once: !0, margin: "-80px" });
    return E.jsx(kt.div, {
        ref: r,
        initial: "hidden",
        animate: s ? "visible" : "hidden",
        custom: n,
        variants: tj,
        className: t,
        children: e,
    });
}
function nj() {
    const [e, t] = w.useState(!1),
        [n, r] = w.useState(!1),
        [s, i] = w.useState(null),
        o = w.useRef(null),
        { scrollY: a } = fO(),
        l = fd(a, [0, 700], [1, 1.08]),
        u = fd(a, [0, 500], [1, 0.5]),
        [c, f] = up({ loop: !0, align: "center" }),
        [d, h] = w.useState(0);
    w.useEffect(() => {
        f && f.on("select", () => h(f.selectedScrollSnap()));
    }, [f]),
        w.useEffect(() => {
            const p = setInterval(() => {
                f == null || f.scrollNext();
            }, 5e3);
            return () => clearInterval(p);
        }, [f]),
        w.useEffect(() => {
            const p = () => t(window.scrollY > 80);
            return window.addEventListener("scroll", p), () => window.removeEventListener("scroll", p);
        }, []);
    const y = [
        { href: "#services", label: "Услуги" },
        { href: "#about", label: "О враче" },
        { href: "#advantages", label: "Преимущества" },
        { href: "#testimonials", label: "Отзывы" },
        { href: "#faq", label: "FAQ" },
    ];
    return E.jsxs("div", {
        className: "w-full overflow-x-hidden",
        style: { backgroundColor: "#F8FAFC" },
        children: [
            E.jsxs("header", {
                className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${e ? "glass-nav py-3 shadow-lg" : "bg-transparent py-5"}`,
                children: [
                    E.jsxs("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",
                        children: [
                            E.jsxs("a", {
                                href: "#hero",
                                className: "flex items-center gap-2",
                                children: [
                                    E.jsx("span", { className: "text-teal text-2xl", children: "✦" }),
                                    E.jsx("span", {
                                        className: "font-cormorant text-xl font-semibold text-white tracking-wide",
                                        children: "Dr. Сагида",
                                    }),
                                ],
                            }),
                            E.jsx("nav", {
                                className: "hidden md:flex items-center gap-7",
                                children: y.map((p) =>
                                    E.jsx(
                                        "a",
                                        {
                                            href: p.href,
                                            className:
                                                "font-karla text-sm font-medium text-white/80 hover:text-teal transition-colors duration-200",
                                            children: p.label,
                                        },
                                        p.href
                                    )
                                ),
                            }),
                            E.jsxs("a", {
                                href: "tel:+77471234567",
                                className:
                                    "hidden md:flex items-center gap-2 bg-teal text-white font-karla text-sm font-medium px-4 py-2 rounded-full hover:bg-[#0c8f8f] transition-colors duration-200",
                                children: [E.jsx(Ca, { className: "w-3.5 h-3.5" }), "Записаться"],
                            }),
                            E.jsx("button", {
                                className: "md:hidden text-white p-2",
                                onClick: () => r(!n),
                                "aria-label": "Меню",
                                children: n ? E.jsx(_x, { className: "w-6 h-6" }) : E.jsx(mT, { className: "w-6 h-6" }),
                            }),
                        ],
                    }),
                    E.jsx(cy, {
                        children:
                            n &&
                            E.jsx(kt.div, {
                                initial: { opacity: 0, height: 0 },
                                animate: { opacity: 1, height: "auto" },
                                exit: { opacity: 0, height: 0 },
                                className: "md:hidden glass-nav border-t border-white/10",
                                children: E.jsxs("div", {
                                    className: "px-4 py-4 flex flex-col gap-4",
                                    children: [
                                        y.map((p) =>
                                            E.jsx(
                                                "a",
                                                {
                                                    href: p.href,
                                                    onClick: () => r(!1),
                                                    className:
                                                        "font-karla text-base text-white/90 hover:text-teal transition-colors",
                                                    children: p.label,
                                                },
                                                p.href
                                            )
                                        ),
                                        E.jsxs("a", {
                                            href: "tel:+77471234567",
                                            className:
                                                "flex items-center gap-2 bg-teal text-white font-karla text-sm font-medium px-4 py-2.5 rounded-full w-fit",
                                            children: [
                                                E.jsx(Ca, { className: "w-4 h-4" }),
                                                "Записаться на прием",
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                    }),
                ],
            }),
            E.jsxs("section", {
                id: "hero",
                ref: o,
                className: "relative min-h-screen flex items-center justify-center overflow-hidden",
                style: { backgroundColor: "#0F172A" },
                children: [
                    E.jsxs(kt.div, {
                        className: "absolute inset-0 z-0",
                        style: { scale: l, opacity: u },
                        children: [
                            E.jsx("img", {
                                className: "w-full h-full object-cover",
                                src: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_3416b8d339_bd6dad8e8b68b834.png",
                                alt: "luxury dental clinic interior dark navy teal lighting modern european medical aesthetic professional",
                            }),
                            E.jsx("div", {
                                className:
                                    "absolute inset-0 bg-gradient-to-b from-[#0F172A]/60 via-[#0F172A]/40 to-[#0F172A]/90",
                            }),
                        ],
                    }),
                    E.jsx("div", {
                        className:
                            "absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none",
                        style: { background: "radial-gradient(circle, #0EA5A4, transparent)" },
                    }),
                    E.jsxs("div", {
                        className: "relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto",
                        children: [
                            E.jsx(kt.p, {
                                initial: { opacity: 0, letterSpacing: "0.5em" },
                                animate: { opacity: 1, letterSpacing: "0.3em" },
                                transition: { duration: 1.2, ease: "easeOut" },
                                className:
                                    "font-karla text-xs sm:text-sm font-medium text-teal uppercase tracking-[0.3em] mb-6",
                                children: "Стоматологическая клиника",
                            }),
                            E.jsx(kt.h1, {
                                initial: { opacity: 0, y: 60 },
                                animate: { opacity: 1, y: 0 },
                                transition: { duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
                                className:
                                    "font-cormorant text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light text-white leading-none mb-4",
                                children: "Сагида",
                            }),
                            E.jsx(kt.h1, {
                                initial: { opacity: 0, y: 60 },
                                animate: { opacity: 1, y: 0 },
                                transition: { duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] },
                                className:
                                    "font-cormorant text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light italic text-teal leading-none mb-8",
                                children: "Эльдаровна",
                            }),
                            E.jsx(kt.p, {
                                initial: { opacity: 0, y: 30 },
                                animate: { opacity: 1, y: 0 },
                                transition: { duration: 0.8, delay: 0.9, ease: "easeOut" },
                                className:
                                    "font-karla text-base sm:text-lg text-white/70 max-w-xl mx-auto mb-10 font-light",
                                children:
                                    "Профессиональный стоматолог с заботой о вашей улыбке.",
                            }),
                            E.jsxs(kt.div, {
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0 },
                                transition: { duration: 0.8, delay: 1.1 },
                                className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
                                children: [
                                    E.jsxs("a", {
                                        href: "tel:+77471234567",
                                        className:
                                            "flex items-center gap-2.5 bg-teal text-white font-karla font-medium px-7 py-3.5 rounded-full hover:bg-[#0c8f8f] transition-all duration-300 hover:shadow-lg hover:shadow-teal/30 text-sm sm:text-base",
                                        children: [
                                            E.jsx(Ca, { className: "w-4 h-4" }),
                                            "Записаться на прием",
                                        ],
                                    }),
                                    E.jsxs("a", {
                                        href: "https://wa.me/77471234567",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className:
                                            "flex items-center gap-2.5 bg-white/10 backdrop-blur-sm text-white font-karla font-medium px-7 py-3.5 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm sm:text-base",
                                        children: [
                                            E.jsx(Am, { className: "w-4 h-4 text-teal" }),
                                            "Связаться в WhatsApp",
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                    E.jsxs(kt.div, {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        transition: { delay: 2 },
                        className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
                        children: [
                            E.jsx("span", {
                                className: "font-karla text-xs text-white/40 tracking-widest uppercase",
                                children: "Прокрутите",
                            }),
                            E.jsx(kt.div, {
                                animate: { y: [0, 8, 0] },
                                transition: { repeat: 1 / 0, duration: 1.8, ease: "easeInOut" },
                                children: E.jsx(km, { className: "w-5 h-5 text-teal/60" }),
                            }),
                        ],
                    }),
                ],
            }),
            E.jsx("section", {
                id: "services",
                className: "py-24 lg:py-32",
                style: { backgroundColor: "#0F172A" },
                children: E.jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        E.jsxs(Ze, {
                            className: "text-center mb-16",
                            children: [
                                E.jsx("p", {
                                    className: "font-karla text-xs text-teal uppercase tracking-[0.3em] mb-3",
                                    children: "Что мы предлагаем",
                                }),
                                E.jsxs("h2", {
                                    className: "font-cormorant text-4xl sm:text-5xl lg:text-6xl font-light text-white",
                                    children: [
                                        "Наши ",
                                        E.jsx("span", { className: "italic text-teal", children: "Услуги" }),
                                    ],
                                }),
                                E.jsx("div", { className: "w-16 h-0.5 bg-teal mx-auto mt-6" }),
                            ],
                        }),
                        E.jsx("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                            children: qO.map((p, x) =>
                                E.jsx(
                                    Ze,
                                    {
                                        delay: x * 0.08,
                                        children: E.jsxs("div", {
                                            className:
                                                "group relative glass-card rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:teal-glow border-b-2 border-b-transparent hover:border-b-teal",
                                            children: [
                                                E.jsxs("div", {
                                                    className: "h-44 overflow-hidden",
                                                    children: [
                                                        E.jsx("img", {
                                                            src: p.img_url,
                                                            alt: p.title,
                                                            className:
                                                                "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                                                        }),
                                                        E.jsx("div", {
                                                            className:
                                                                "absolute inset-0 bg-gradient-to-b from-transparent to-[#0F172A]/80",
                                                        }),
                                                    ],
                                                }),
                                                E.jsxs("div", {
                                                    className: "p-6",
                                                    children: [
                                                        E.jsx("span", {
                                                            className: "text-2xl mb-3 block",
                                                            children: p.icon,
                                                        }),
                                                        E.jsx("h3", {
                                                            className:
                                                                "font-cormorant text-xl font-semibold text-white mb-2",
                                                            children: p.title,
                                                        }),
                                                        E.jsx("p", {
                                                            className:
                                                                "font-karla text-sm text-white/60 leading-relaxed",
                                                            children: p.desc,
                                                        }),
                                                        E.jsxs("div", {
                                                            className:
                                                                "mt-4 flex items-center gap-2 text-teal text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                            children: [
                                                                "Подробнее ",
                                                                E.jsx(hT, { className: "w-3.5 h-3.5" }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    },
                                    p.title
                                )
                            ),
                        }),
                    ],
                }),
            }),
            E.jsx("section", {
                id: "about",
                className: "py-24 lg:py-32 relative overflow-hidden",
                style: { backgroundColor: "#F8FAFC" },
                children: E.jsxs("div", {
                    className:
                        "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
                    children: [
                        E.jsxs(Ze, {
                            className: "relative",
                            children: [
                                E.jsxs("div", {
                                    className: "relative rounded-3xl overflow-hidden aspect-[4/5]",
                                    children: [
                                        E.jsx("img", {
                                            className: "w-full h-full object-cover",
                                            src: "https://drive.google.com/thumbnail?id=1Jbye56LzIG_0b5A2CDp_Fuoey2RWcXQx&sz=w800",
                                            alt: "elegant female dentist doctor white coat professional portrait dark navy teal background luxury Euro",
                                        }),
                                        E.jsx("div", {
                                            className:
                                                "absolute inset-0 bg-gradient-to-t from-[#0F172A]/30 to-transparent",
                                        }),
                                    ],
                                }),
                                E.jsxs("div", {
                                    className:
                                        "absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6 glass-card rounded-2xl p-5 border border-teal/30",
                                    style: { background: "rgba(14,165,164,0.12)", backdropFilter: "blur(16px)" },
                                    children: [
                                        E.jsx("p", {
                                            className: "font-cormorant text-4xl font-bold text-teal leading-none",
                                            children: "2+",
                                        }),
                                        E.jsx("p", {
                                            className: "font-karla text-xs text-white/70 mt-1",
                                            children: "лет практики",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        E.jsxs("div", {
                            children: [
                                E.jsxs(Ze, {
                                    children: [
                                        E.jsx("p", {
                                            className: "font-karla text-xs text-teal uppercase tracking-[0.3em] mb-4",
                                            children: "О враче",
                                        }),
                                        E.jsxs("h2", {
                                            className:
                                                "font-cormorant text-4xl sm:text-5xl font-light text-[#0F172A] leading-tight mb-6",
                                            children: [
                                                "Профессионализм ",
                                                E.jsx("br", {}),
                                                E.jsx("span", {
                                                    className: "italic text-teal",
                                                    children: "и забота",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                E.jsxs(Ze, {
                                    delay: 0.1,
                                    children: [
                                        E.jsx("p", {
                                            className: "font-karla text-base text-[#0F172A]/70 leading-relaxed mb-5",
                                            children:
                                                "Сагида Эльдаровна — сертифицированный стоматолог с опытом работы более 2 лет. Обучалась в ведущих клиниках Дагестана и России, является действующим членом Европейской ассоциации стоматологов.",
                                        }),
                                        E.jsx("p", {
                                            className: "font-karla text-base text-[#0F172A]/70 leading-relaxed mb-8",
                                            children:
                                                "Её подход сочетает высочайший медицинский стандарт с индивидуальным вниманием к каждому пациенту. Специализируется на эстетической стоматологии, имплантации и лечении пациентов с дентофобией.",
                                        }),
                                    ],
                                }),
                                E.jsx(Ze, {
                                    delay: 0.2,
                                    children: E.jsx("div", {
                                        className: "grid grid-cols-2 gap-4",
                                        children: [
                                            "Диплом МГМСУ",
                                            "Стажировка в Дагестане",
                                            "Член EDA",
                                            "Сертификат Invisalign",
                                        ].map((p) =>
                                            E.jsxs(
                                                "div",
                                                {
                                                    className: "flex items-center gap-2.5",
                                                    children: [
                                                        E.jsx(pT, { className: "w-4 h-4 text-teal flex-shrink-0" }),
                                                        E.jsx("span", {
                                                            className: "font-karla text-sm text-[#0F172A]/80",
                                                            children: p,
                                                        }),
                                                    ],
                                                },
                                                p
                                            )
                                        ),
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            }),
            E.jsx("section", {
                id: "advantages",
                className: "py-24 lg:py-32",
                style: { backgroundColor: "#0F172A" },
                children: E.jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        E.jsxs(Ze, {
                            className: "text-center mb-16",
                            children: [
                                E.jsx("p", {
                                    className: "font-karla text-xs text-teal uppercase tracking-[0.3em] mb-3",
                                    children: "Цифры говорят",
                                }),
                                E.jsxs("h2", {
                                    className: "font-cormorant text-4xl sm:text-5xl lg:text-6xl font-light text-white",
                                    children: [
                                        "Наши ",
                                        E.jsx("span", {
                                            className: "italic text-teal",
                                            children: "Преимущества",
                                        }),
                                    ],
                                }),
                                E.jsx("div", { className: "w-16 h-0.5 bg-teal mx-auto mt-6" }),
                            ],
                        }),
                        E.jsx("div", {
                            className: "grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16",
                            children: ZO.map((p, x) =>
                                E.jsx(
                                    Ze,
                                    {
                                        delay: x * 0.1,
                                        children: E.jsxs("div", {
                                            className:
                                                "rounded-2xl p-6 lg:p-8 text-center border border-white/5 hover:border-teal/30 transition-colors duration-300",
                                            style: { backgroundColor: "#1e293b" },
                                            children: [
                                                E.jsx(ej, { target: p.value, suffix: p.suffix }),
                                                E.jsx("p", {
                                                    className: "font-karla text-sm text-white/50 mt-2",
                                                    children: p.label,
                                                }),
                                            ],
                                        }),
                                    },
                                    p.label
                                )
                            ),
                        }),
                        E.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                            children: [
                                {
                                    icon: "🏥",
                                    title: "Современный стандарт",
                                    desc: "Оборудование и материалы ведущих мировых производителей.",
                                },
                                {
                                    icon: "💉",
                                    title: "Безболезненное лечение",
                                    desc: "Современные анестетики и технологии sedation dentistry для комфортного лечения.",
                                },
                                {
                                    icon: "🔬",
                                    title: "Цифровая диагностика",
                                    desc: "3D-томография, цифровые слепки и планирование улыбки в программе smile design.",
                                },
                            ].map((p, x) =>
                                E.jsx(
                                    Ze,
                                    {
                                        delay: x * 0.1,
                                        children: E.jsxs("div", {
                                            className:
                                                "glass-card rounded-2xl p-6 border border-teal/10 hover:border-teal/30 transition-colors duration-300",
                                            children: [
                                                E.jsx("span", { className: "text-3xl block mb-4", children: p.icon }),
                                                E.jsx("h3", {
                                                    className: "font-cormorant text-xl font-semibold text-white mb-2",
                                                    children: p.title,
                                                }),
                                                E.jsx("p", {
                                                    className: "font-karla text-sm text-white/60 leading-relaxed",
                                                    children: p.desc,
                                                }),
                                            ],
                                        }),
                                    },
                                    p.title
                                )
                            ),
                        }),
                    ],
                }),
            }),
            E.jsx("section", {
                id: "testimonials",
                className: "py-24 lg:py-32 overflow-hidden",
                style: { backgroundColor: "#F8FAFC" },
                children: E.jsxs("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        E.jsxs(Ze, {
                            className: "text-center mb-16",
                            children: [
                                E.jsx("p", {
                                    className: "font-karla text-xs text-teal uppercase tracking-[0.3em] mb-3",
                                    children: "Они нам доверяют",
                                }),
                                E.jsxs("h2", {
                                    className:
                                        "font-cormorant text-4xl sm:text-5xl lg:text-6xl font-light text-[#0F172A]",
                                    children: [
                                        "Отзывы ",
                                        E.jsx("span", {
                                            className: "italic text-teal",
                                            children: "пациентов",
                                        }),
                                    ],
                                }),
                                E.jsx("div", { className: "w-16 h-0.5 bg-teal mx-auto mt-6" }),
                            ],
                        }),
                        E.jsx("div", {
                            className: "overflow-hidden",
                            ref: c,
                            children: E.jsx("div", {
                                className: "flex gap-4 lg:gap-6",
                                children: [..._y, ..._y, ..._y].map((p, x) =>
                                    E.jsx(
                                        "div",
                                        {
                                            className:
                                                "flex-none w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw] transition-all duration-500",
                                            style: {
                                                opacity: d % _y.length === x % _y.length ? 1 : 0.4,
                                                transform: `scale(${d % _y.length === x % _y.length ? 1 : 0.96})`,
                                            },
                                            children: E.jsxs("div", {
                                                className: "rounded-2xl p-6 lg:p-8 h-full border border-teal/10",
                                                style: {
                                                    backgroundColor: "#fff",
                                                    boxShadow: d % _y.length === x % _y.length ? "0 8px 40px rgba(14,165,164,0.12)" : "none",
                                                },
                                                children: [
                                                    E.jsx("div", {
                                                        className: "flex gap-1 mb-4",
                                                        children: Array.from({ length: p.rating }).map((m, g) =>
                                                            E.jsx(gT, { className: "w-4 h-4 fill-teal text-teal" }, g)
                                                        ),
                                                    }),
                                                    E.jsxs("p", {
                                                        className:
                                                            "font-karla text-[#0F172A]/80 text-sm leading-relaxed mb-6 italic",
                                                        children: ["«", p.text, "»"],
                                                    }),
                                                    E.jsxs("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            E.jsx("img", {
                                                                src: p.avatar,
                                                                alt: p.name,
                                                                className: "w-10 h-10 rounded-full object-cover",
                                                            }),
                                                            E.jsxs("div", {
                                                                children: [
                                                                    E.jsx("p", {
                                                                        className:
                                                                            "font-karla font-semibold text-sm text-[#0F172A]",
                                                                        children: p.name,
                                                                    }),
                                                                    E.jsx("p", {
                                                                        className:
                                                                            "font-karla text-xs text-[#0F172A]/50",
                                                                        children: p.role,
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        },
                                        `${p.name}-${x}`
                                    )
                                ),
                            }),
                        }),
                        E.jsx("div", {
                            className: "flex justify-center gap-2 mt-8",
                            children: _y.map((p, x) =>
                                E.jsx(
                                    "button",
                                    {
                                        onClick: () => (f == null ? void 0 : f.scrollTo(x)),
                                        className: "w-2 h-2 rounded-full transition-all duration-300",
                                        style: {
                                            backgroundColor: "#0EA5A4",
                                            opacity: d % _y.length === x ? 1 : 0.3,
                                            transform: d % _y.length === x ? "scale(1.4)" : "scale(1)",
                                        },
                                    },
                                    x
                                )
                            ),
                        }),
                    ],
                }),
            }),
            E.jsx("section", {
                id: "faq",
                className: "py-24 lg:py-32",
                style: { backgroundColor: "#0F172A" },
                children: E.jsxs("div", {
                    className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: [
                        E.jsxs(Ze, {
                            className: "text-center mb-16",
                            children: [
                                E.jsx("p", {
                                    className: "font-karla text-xs text-teal uppercase tracking-[0.3em] mb-3",
                                    children: "Частые вопросы",
                                }),
                                E.jsxs("h2", {
                                    className: "font-cormorant text-4xl sm:text-5xl font-light text-white",
                                    children: [
                                        "Вопросы ",
                                        E.jsx("span", { className: "italic text-teal", children: "и ответы" }),
                                    ],
                                }),
                                E.jsx("div", { className: "w-16 h-0.5 bg-teal mx-auto mt-6" }),
                            ],
                        }),
                        E.jsx("div", {
                            className: "space-y-3",
                            children: JO.map((p, x) =>
                                E.jsx(
                                    Ze,
                                    {
                                        delay: x * 0.06,
                                        children: E.jsxs("div", {
                                            className:
                                                "rounded-xl border overflow-hidden transition-colors duration-300",
                                            style: {
                                                borderColor:
                                                    s === x ? "rgba(14,165,164,0.4)" : "rgba(255,255,255,0.06)",
                                                backgroundColor:
                                                    s === x ? "rgba(14,165,164,0.06)" : "rgba(255,255,255,0.03)",
                                            },
                                            children: [
                                                E.jsxs("button", {
                                                    className:
                                                        "w-full flex items-center justify-between px-6 py-4 text-left",
                                                    onClick: () => i(s === x ? null : x),
                                                    children: [
                                                        E.jsx("span", {
                                                            className:
                                                                "font-karla font-medium text-white text-sm sm:text-base pr-4",
                                                            children: p.q,
                                                        }),
                                                        E.jsx(kt.div, {
                                                            animate: { rotate: s === x ? 180 : 0 },
                                                            transition: { duration: 0.3 },
                                                            className: "flex-shrink-0",
                                                            children: E.jsx(km, { className: "w-4 h-4 text-teal" }),
                                                        }),
                                                    ],
                                                }),
                                                E.jsx(cy, {
                                                    initial: !1,
                                                    children:
                                                        s === x &&
                                                        E.jsx(
                                                            kt.div,
                                                            {
                                                                initial: { height: 0, opacity: 0 },
                                                                animate: { height: "auto", opacity: 1 },
                                                                exit: { height: 0, opacity: 0 },
                                                                transition: {
                                                                    duration: 0.35,
                                                                    ease: [0.22, 1, 0.36, 1],
                                                                },
                                                                className: "overflow-hidden",
                                                                children: E.jsx("p", {
                                                                    className:
                                                                        "font-karla text-sm text-white/60 leading-relaxed px-6 pb-5",
                                                                    children: p.a,
                                                                }),
                                                            },
                                                            "content"
                                                        ),
                                                }),
                                            ],
                                        }),
                                    },
                                    x
                                )
                            ),
                        }),
                    ],
                }),
            }),
            E.jsxs("section", {
                className: "py-20 lg:py-28 relative overflow-hidden",
                style: { backgroundColor: "#0EA5A4" },
                children: [
                    E.jsxs("div", {
                        className: "absolute inset-0 pointer-events-none",
                        children: [
                            E.jsx("div", {
                                className: "absolute -top-32 -right-32 w-80 h-80 rounded-full opacity-20",
                                style: { background: "radial-gradient(circle, #fff, transparent)" },
                            }),
                            E.jsx("div", {
                                className: "absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-10",
                                style: { background: "radial-gradient(circle, #0F172A, transparent)" },
                            }),
                        ],
                    }),
                    E.jsxs("div", {
                        className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10",
                        children: [
                            E.jsxs(Ze, {
                                children: [
                                    E.jsx("p", {
                                        className: "font-karla text-xs text-white/70 uppercase tracking-[0.3em] mb-4",
                                        children: "Начните сейчас",
                                    }),
                                    E.jsxs("h2", {
                                        className:
                                            "font-cormorant text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-4",
                                        children: [
                                            "Ваша улыбка — ",
                                            E.jsx("span", {
                                                className: "italic",
                                                children: "наш приоритет",
                                            }),
                                        ],
                                    }),
                                    E.jsx("p", {
                                        className: "font-karla text-base text-white/80 max-w-xl mx-auto mb-10",
                                        children:
                                            "Запишитесь на первичную консультацию прямо сейчас. Мы работаем ежедневно с 9:00 до 20:00.",
                                    }),
                                ],
                            }),
                            E.jsx(Ze, {
                                delay: 0.1,
                                children: E.jsxs("div", {
                                    className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
                                    children: [
                                        E.jsxs("a", {
                                            href: "tel:+77471234567",
                                            className:
                                                "group flex items-center gap-3 bg-white text-[#0EA5A4] font-karla font-semibold px-8 py-4 rounded-full hover:bg-[#0F172A] hover:text-white transition-all duration-300 text-base shadow-xl",
                                            children: [
                                                E.jsx(Ca, { className: "w-5 h-5" }),
                                                E.jsx("span", { children: "+7 (747) 123-45-67" }),
                                            ],
                                        }),
                                        E.jsxs("a", {
                                            href: "https://wa.me/77471234567",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className:
                                                "flex items-center gap-3 bg-[#0F172A]/20 text-white font-karla font-semibold px-8 py-4 rounded-full border-2 border-white/30 hover:bg-[#0F172A] transition-all duration-300 text-base backdrop-blur-sm",
                                            children: [
                                                E.jsx(Am, { className: "w-5 h-5" }),
                                                "Написать в WhatsApp",
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                            E.jsx(Ze, {
                                delay: 0.2,
                                children: E.jsx("div", {
                                    className: "mt-12 flex flex-wrap justify-center gap-6 lg:gap-12",
                                    children: [
                                        { label: "Пн–Пт", value: "09:00–20:00" },
                                        { label: "Суббота", value: "10:00–18:00" },
                                        { label: "Воскресенье", value: "По записи" },
                                    ].map((p) =>
                                        E.jsxs(
                                            "div",
                                            {
                                                className: "text-center",
                                                children: [
                                                    E.jsx("p", {
                                                        className:
                                                            "font-karla text-xs text-white/60 uppercase tracking-widest",
                                                        children: p.label,
                                                    }),
                                                    E.jsx("p", {
                                                        className: "font-cormorant text-xl font-semibold text-white",
                                                        children: p.value,
                                                    }),
                                                ],
                                            },
                                            p.label
                                        )
                                    ),
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            E.jsx("footer", {
                style: { backgroundColor: "#0F172A", borderTop: "1px solid rgba(14,165,164,0.15)" },
                children: E.jsx("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10",
                    children: E.jsxs("div", {
                        className: "flex flex-col sm:flex-row justify-between items-center gap-4",
                        children: [
                            E.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    E.jsx("span", { className: "text-teal text-xl", children: "✦" }),
                                    E.jsx("span", {
                                        className: "font-cormorant text-lg font-semibold text-white",
                                        children: "Dr. Сагида Эльдаровна",
                                    }),
                                ],
                            }),
                            E.jsxs("p", {
                                className: "font-karla text-xs text-white/30 text-center",
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " Стоматологическая клиника. Все права защищены.",
                                ],
                            }),
                            E.jsx("div", {
                                className: "flex gap-5",
                                children: y
                                    .slice(0, 3)
                                    .map((p) =>
                                        E.jsx(
                                            "a",
                                            {
                                                href: p.href,
                                                className:
                                                    "font-karla text-xs text-white/40 hover:text-teal transition-colors",
                                                children: p.label,
                                            },
                                            p.href
                                        )
                                    ),
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
const rj = () => {
        const e = Ko();
        return (
            w.useEffect(() => {
                console.error("404 Error: User tried to access a missing page:", e.pathname);
            }, [e.pathname]),
            E.jsx("div", {
                className: "flex justify-center items-center min-h-screen bg-background",
                children: E.jsxs("div", {
                    className: "px-4 text-center",
                    children: [
                        E.jsx("h1", { className: "mb-2 text-6xl font-extrabold text-primary", children: "404" }),
                        E.jsx("p", {
                            className: "mb-6 text-2xl text-muted-foreground",
                            children: "Sorry, we couldn't find that page.",
                        }),
                        E.jsxs("span", {
                            className:
                                "inline-block px-3 py-1 mb-6 text-sm rounded shadow bg-accent text-accent-foreground",
                            children: [
                                "The page ",
                                E.jsx("span", { className: "font-mono", children: e.pathname }),
                                " does not exist.",
                            ],
                        }),
                        E.jsx("div", {
                            children: E.jsx(K2, {
                                to: "/",
                                className:
                                    "inline-block px-6 py-2 mt-6 font-semibold rounded shadow transition bg-primary text-primary-foreground hover:bg-primary/90",
                                children: "Go Home",
                            }),
                        }),
                    ],
                }),
            })
        );
    },
    sj = new BA(),
    ij = () =>
        E.jsx(UA, {
            client: sj,
            children: E.jsxs(fA, {
                children: [
                    E.jsx(ZT, {}),
                    E.jsx(MP, {}),
                    E.jsx(U2, {
                        basename: "/",
                        children: E.jsxs(I2, {
                            children: [
                                E.jsx(jf, { path: "/", element: E.jsx(nj, {}) }),
                                E.jsx(jf, { path: "*", element: E.jsx(rj, {}) }),
                            ],
                        }),
                    }),
                ],
            }),
        });
cx(document.getElementById("root")).render(E.jsx(ij, {}));
