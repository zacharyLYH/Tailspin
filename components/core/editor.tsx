"use client";

import useSessionStore from "@/data-store/session-store";
import { useState, useEffect } from "react";
import ReactAce from "react-ace/lib/ace";
import GlobalLoadingUI from "@/components/ui/global-loading-ui";
import CodeAreaActions from "./code-area-actions/code-area-sheet";
import useCodeAreaStore from "@/data-store/code-area-store";

const Editor = () => {
    const { code, setCode } = useSessionStore();
    const { aceEditorTheme, fontSize } = useCodeAreaStore();
    const [AceEditor, setAceEditor] = useState<typeof ReactAce>();

    useEffect(() => {
        const loadAce = async () => {
            const aceEditorModule = await import("react-ace");
            const AceEditor = aceEditorModule.default;

            // dynamically load modes and other essential extensions
            await import("ace-builds/src-noconflict/mode-html");
            await import("ace-builds/src-noconflict/ext-language_tools");
            await import(`ace-builds/src-noconflict/theme-monokai`);
            await import(`ace-builds/src-noconflict/theme-terminal`);
            await import(`ace-builds/src-noconflict/theme-github_dark`);
            await import(`ace-builds/src-noconflict/theme-tomorrow_night`);
            await import(`ace-builds/src-noconflict/theme-kuroir`);
            await import(`ace-builds/src-noconflict/theme-xcode`);
            await import("ace-builds/src-noconflict/theme-solarized_dark");
            await import("ace-builds/src-noconflict/theme-solarized_light");

            setAceEditor(() => AceEditor);
        };

        loadAce();
    }, []);

    if (!AceEditor) return <GlobalLoadingUI />;

    return (
        <div className='flex h-screen flex-col'>
            <CodeAreaActions />
            {AceEditor && (
                <AceEditor
                    wrapEnabled={true}
                    width='100%'
                    placeholder='Placeholder Text'
                    mode='html'
                    theme={aceEditorTheme}
                    name='editor'
                    height='100%'
                    onChange={(newCode: string) => setCode(newCode)}
                    fontSize={fontSize}
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
