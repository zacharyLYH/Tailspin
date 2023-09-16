"use client";

import useCodeStore from "@/data-store/code-store";
import beautify from "js-beautify";

export const useFormatCode = () => {
    const { code, setCode } = useCodeStore();

    const handleFormatCode = () => {
        const formattedCode = beautify.html(code, {
            indent_size: 2,
            wrap_line_length: 80,
            preserve_newlines: true,
            max_preserve_newlines: 5,
            indent_inner_html: true,
            unformatted: ["span", "i", "b", "u"],
        });

        setCode(formattedCode);
    };

    return { handleFormatCode };
};
