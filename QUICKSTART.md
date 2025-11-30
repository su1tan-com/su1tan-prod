# Quick Reference Guide

## File Organization

```
Your Website Root
│
├── 📄 index.html ← NEW ENTRY POINT (use this!)
│
├── 📁 styles/ ← All CSS files
│   ├── fonts.css (typography)
│   ├── breakpoints.css (responsive)
│   └── main.css (core styles)
│
├── 📁 scripts/ ← All JavaScript files
│   ├── framer-init.js (setup)
│   ├── locale-override.js (formatting)
│   └── environment-setup.js (config)
│
└── 📁 work/, blog/, cdn-cgi/ ← Existing pages
```

## What Changed

### Before (Original)
- Single 12,452-line `page.html` file
- All styles, scripts, and HTML in one file
- Hard to find and edit specific code
- Large file size

### After (Modularized)
- Clean `index.html` with external references
- Separate CSS files by concern
- Separate JavaScript files by function
- Much smaller, focused files
- Same functionality, better organization

## For Developers

### To Edit Fonts
→ Open `styles/fonts.css`

### To Edit Colors or Base Styles
→ Open `styles/main.css`

### To Add Responsive Styles
→ Open `styles/breakpoints.css`

### To Change Initialization Logic
→ Open `scripts/framer-init.js`

### To Modify Locale Formatting
→ Open `scripts/locale-override.js`

### To Change Environment Variables
→ Open `scripts/environment-setup.js`

## Browser Loading Order

1. HTML loads (`index.html`)
2. Fonts load (`styles/fonts.css`)
3. Base styles load (`styles/breakpoints.css`, `styles/main.css`)
4. Scripts execute (`scripts/*.js`)
5. Framer modules load (from CDN)

## Performance Tips

- CSS files are separate → better caching
- Scripts are deferred → non-blocking load
- Font preloading → faster text rendering
- Module preloads → faster Framer initialization

## Troubleshooting

**Q: Is the old page.html still there?**
A: Yes, it's kept as backup/reference. Once you confirm index.html works, you can delete it.

**Q: Will existing links to page.html break?**
A: You can set up a redirect, or use index.html as your main file.

**Q: Can I still edit in Framer?**
A: The Framer editor will still work. The structure doesn't affect editing capability.

**Q: Do I need to update the styles for each page?**
A: The styles/scripts in `index.html` reference are global. Page-specific styles can override them.

---

For full details, see `STRUCTURE.md` and `MIGRATION.md`
