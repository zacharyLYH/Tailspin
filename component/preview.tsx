"use client";

interface PreviewProps {
    code: string;
}

{
    /* <div class='bg-blue-500'>Hello</div>
<h1 class="text-slate-200">Hola</h1> */
}

const Preview: React.FC<PreviewProps> = ({ code }) => {
    const completedCode = `<!doctype html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body>
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
