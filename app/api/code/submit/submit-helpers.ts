import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";
import isHtml from "is-html";

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window);

// Sanitizer function
export const validateHTML = (html: string): string => {
    html = html.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
    html = html.replace(/<!--.*?-->/g, "");
    if (!isHtml(html)) {
        return "";
    }

    const cleanHTML = DOMPurify.sanitize(html, {
        ALLOWED_ATTR: ["style", "class"],
        FORBID_TAGS: [
            "script",
            "iframe",
            "object",
            "embed",
            "link",
            "style",
            "form",
            "img",
            "a",
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
        return "";
    }

    if (isHtml(cleanHTML)) {
        return cleanHTML;
    } else {
        return "";
    }
};
