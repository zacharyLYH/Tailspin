"use client";

import useSessionStore from "@/data-store/session-store";
import { useState, useEffect } from "react";
import ReactAce from "react-ace/lib/ace";
import GlobalLoadingUI from "@/components/ui/global-loading-ui";
import CodeAreaActions from "./code-area-actions/code-area-sheet";
import useCodeAreaStore from "@/data-store/code-area-store";
import { Button } from "../ui/button";
import StaticPrompt from "./target-image";
import LandingPageChallengeCode from "../landing/test-challenges/challenge-code";
import { useStepperStore } from "@/data-store/stepper-store";
import { loadFromLocalStorage, saveToLocalStorage } from "@/lib/localStorage";
import { cn } from "@/lib/utils";

const Editor = () => {
    const { code, setCode } = useSessionStore();
    const { aceEditorTheme, fontSize, tabSize } = useCodeAreaStore();
    const [AceEditor, setAceEditor] = useState<typeof ReactAce>();
    const [targetImage, toggleTargetImage] = useState(false);
    const { challenge } = useStepperStore();

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
        const localStorageCode = loadFromLocalStorage("code");
        if (code.length === 0 && localStorageCode.length > 0) {
            setCode(localStorageCode);
        }
    }, []);

    if (!AceEditor) return <GlobalLoadingUI />;

    const onType = (newCode: string) => {
        setCode(newCode);
        saveToLocalStorage("code", code);
    };

    return (
        <div className='flex h-screen flex-col'>
            <div className='flex flex-row'>
                <div className={`${targetImage ? "hidden" : "flex w-1/2"}`}>
                    <CodeAreaActions />
                </div>
                <div
                    className={`${targetImage ? "flex w-full" : "flex w-1/2"}`}
                >
                    <Button
                        variant='secondary'
                        className='w-full text-black'
                        onClick={() => toggleTargetImage(!targetImage)}
                    >
                        {targetImage ? "Close" : "Open"} prompt
                    </Button>
                </div>
            </div>
            {targetImage ? (
                <StaticPrompt code={LandingPageChallengeCode(challenge)} />
            ) : (
                AceEditor && (
                    <AceEditor
                        wrapEnabled={true}
                        width='100%'
                        placeholder='Placeholder Text'
                        mode='html'
                        theme={aceEditorTheme}
                        name='editor'
                        height='100%'
                        onChange={(newCode: string) => onType(newCode)}
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
                            tabSize: tabSize,
                            wrapBehavioursEnabled: true,
                            wrap: true,
                        }}
                    />
                )
            )}
        </div>
    );
};

export default Editor;
