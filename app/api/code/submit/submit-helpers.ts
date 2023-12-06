import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import isHtml from "is-html";

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

// Sanitizer function
export const validateHTML = (html: string): boolean => {
    html = html.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
    if (!isHtml(html)) {
        return false;
    }

    const cleanHTML = DOMPurify.sanitize(html, {
        ALLOWED_ATTR: ["href", "src", "alt", "title", "style", "class"],
        FORBID_TAGS: [
            "script",
            "iframe",
            "object",
            "embed",
            "link",
            "style",
            "form",
        ],
        FORBID_ATTR: [
            "onerror",
            "onload",
            "onclick",
            "onmouseover",
            "onfocus",
            "onblur",
            "onchange",
            "onsubmit",
        ],
    });

    if (cleanHTML !== html) {
        return false;
    }

    return isHtml(cleanHTML);
};
