"use client";

import useCodeStore from "@/data-store/code-store";

const Preview = () => {
    const { code } = useCodeStore();

    const completedCode = `<!doctype html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-white">
      ${code}
    </body>
    </html>`;
    return (
        <iframe
            title="Preview"
            srcDoc={completedCode}
            width="100%"
            height="400"
            allowFullScreen
            style={{ border: "1px solid #ccc" }}
        />
    );
};

export default Preview;
