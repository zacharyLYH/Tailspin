"use client";

import { Button } from "@/components/ui/button";
import useCodeStore from "@/data-store/code-store";
import {useFormatCode } from "@/lib/codeFormatter";
import { useState, useEffect } from "react";
import ReactAce from "react-ace/lib/ace";

const Editor = () => {
    const { code, setCode } = useCodeStore();
    const { handleFormatCode } = useFormatCode();
    const [AceEditor, setAceEditor] = useState<typeof ReactAce>();

    useEffect(() => {
        const loadAce = async () => {
            // dynamically load the Ace Editor component
            const aceEditorModule = await import("react-ace");
            const AceEditor = aceEditorModule.default;

            // dynamically load modes and themes
            await import("ace-builds/src-noconflict/mode-html");
            await import("ace-builds/src-noconflict/theme-monokai");
            await import("ace-builds/src-noconflict/ext-language_tools");

            // set Ace Editor component state
            setAceEditor(() => AceEditor);
        };

        loadAce();
    }, []);

    if (!AceEditor) return <div>Loading...</div>;

    return (
        <div className="flex flex-col">
            <Button onClick={handleFormatCode} variant="default">Format code</Button>
            <AceEditor
                wrapEnabled
                width="100%"
                placeholder="Placeholder Text"
                mode="html"
                theme="monokai"
                name="editor"
                onChange={(newCode: string) => setCode(newCode)}
                fontSize={14}
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={code}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2,
                }}
            />
        </div>
    );
};

export default Editor;
