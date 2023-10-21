"use client";

import useSessionStore from "@/data-store/session-store";
import { useState, useEffect } from "react";
import ReactAce from "react-ace/lib/ace";
import GlobalLoadingUI from "@/components/ui/global-loading-ui";
import CodeAreaActions from "./code-area-actions";

const Editor = () => {
    const { code, setCode } = useSessionStore();
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

            setAceEditor(() => AceEditor);
        };

        loadAce();
    }, []);

    if (!AceEditor) return <GlobalLoadingUI />;

    return (
        <div className='h-screen'>
            <CodeAreaActions />
            {AceEditor && (
                <AceEditor
                    wrapEnabled={true}
                    width='100%'
                    placeholder='Placeholder Text'
                    mode='html'
                    theme='monokai'
                    name='editor'
                    height='100%'
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
                        wrapBehavioursEnabled: true,
                        wrap: true,
                    }}
                />
            )}
        </div>
    );
};

export default Editor;
