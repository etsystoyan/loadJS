export default function loadJS(src: string, cb?: () => void): HTMLScriptElement {
    "use strict";
    const ref = document.getElementsByTagName("script")[0];
    const script = document.createElement("script");
    if (!ref || !ref.parentNode) { // TS BS
        return script;
    }
    script.src = src;
    script.defer = true;
    ref.parentNode.insertBefore(script, ref);

    if (cb && typeof cb === "function") {
        script.onload = cb;
    }
    return script;
}
