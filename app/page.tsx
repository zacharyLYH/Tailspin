"use client";

import Editor from "@/component/editor";
import Preview from "@/component/preview";
import { useState } from "react";

export default function Home() {
    const [code, setCode] = useState("<div class='bg-blue-500'>Hello</div>");
    return (
        <div className="grid grid-cols-2 gap-4 bg-white">
            <Editor code={code} setCode={setCode} />
            <Preview code={code} />
        </div>
    );
}
