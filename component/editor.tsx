"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";
import ReactAce from "react-ace/lib/ace";

interface EditorProps {
    code: string;
    setCode: Dispatch<SetStateAction<string>>;
}

const Editor: React.FC<EditorProps> = ({ code, setCode }) => {
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
        <AceEditor
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
    );
};

export default Editor;
