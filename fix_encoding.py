with open('/home/akshat/coding/sigada-russia/assets/index-Dv3RKDhp.js', 'r', encoding='utf-8') as f:
    content = f.read()

changes = []

# === FIX 1: DOTS - opacity active check ===
old = 'opacity: d === x ? 1 : 0.3,'
new = 'opacity: d % _y.length === x ? 1 : 0.3,'
if old in content:
    content = content.replace(old, new, 1)
    changes.append('✓ Dots opacity: d % _y.length === x')
else:
    changes.append('✗ Dots opacity not found')

# === FIX 2: DOTS - transform active check ===
old = 'transform: d === x ? "scale(1.4)" : "scale(1)",'
new = 'transform: d % _y.length === x ? "scale(1.4)" : "scale(1)",'
if old in content:
    content = content.replace(old, new, 1)
    changes.append('✓ Dots transform: d % _y.length === x')
else:
    changes.append('✗ Dots transform not found')

# === FIX 3: CARDS - fix active card check (was d === x % _y.length, should be d % _y.length === x % _y.length) ===
old = 'opacity: d === x % _y.length ? 1 : 0.4,'
new = 'opacity: d % _y.length === x % _y.length ? 1 : 0.4,'
if old in content:
    content = content.replace(old, new, 1)
    changes.append('✓ Card opacity: both modulo')
else:
    changes.append('✗ Card opacity not found')

old = 'transform: `scale(${d === x % _y.length ? 1 : 0.96})`,'
new = 'transform: `scale(${d % _y.length === x % _y.length ? 1 : 0.96})`,'
if old in content:
    content = content.replace(old, new, 1)
    changes.append('✓ Card scale: both modulo')
else:
    changes.append('✗ Card scale not found')

old = 'boxShadow: d === x % _y.length ? "0 8px 40px rgba(14,165,164,0.12)" : "none",'
new = 'boxShadow: d % _y.length === x % _y.length ? "0 8px 40px rgba(14,165,164,0.12)" : "none",'
if old in content:
    content = content.replace(old, new, 1)
    changes.append('✓ Card shadow: both modulo')
else:
    changes.append('✗ Card shadow not found')

# === FIX 4: DOCTOR IMAGE - use real Sagida photo ===
# Google Drive direct image URL for file ID 1Jbye56LzIG_0b5A2CDp_Fuoey2RWcXQx
DRIVE_FILE_ID = '1Jbye56LzIG_0b5A2CDp_Fuoey2RWcXQx'
new_img_url = f'https://drive.google.com/thumbnail?id={DRIVE_FILE_ID}&sz=w800'

old_img = 'https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_0721e7d9f0_727f88d86f00b195.png'
if old_img in content:
    content = content.replace(old_img, new_img_url)
    changes.append(f'✓ Doctor image → Google Drive thumbnail')
else:
    changes.append('✗ Doctor image URL not found')

# === FIX 5: Dots scrollTo - when clicking dot, scroll to nearest correct position ===
# Currently f.scrollTo(x) - this is fine since Embla handles loop positioning
# But we should also update the 'select' event handler to normalize d
# Currently: h(f.selectedScrollSnap()) - change to h(f.selectedScrollSnap() % _y.length)
old_select = 'f.on("select", () => h(f.selectedScrollSnap()))'
new_select = 'f.on("select", () => h(f.selectedScrollSnap()))'
# Actually keep d as raw index and use modulo in render - already done above

print('\n'.join(changes))

with open('/home/akshat/coding/sigada-russia/assets/index-Dv3RKDhp.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('\nSaved!')
