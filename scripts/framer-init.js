// Framer Initialization Script
// Checks for editor mode and loads necessary modules

try {
    if (typeof localStorage !== 'undefined') {
        if (localStorage.getItem("__framer_force_showing_editorbar_since")) {
            const n = document.createElement("link");
            n.rel = "modulepreload";
            n.href = "https://framer.com/edit/init.mjs";
            document.head.appendChild(n);
        }
    }
} catch (e) {
    console.warn("localStorage not available:", e.message);
}
