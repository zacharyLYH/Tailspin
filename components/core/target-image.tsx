"use client";

import Iframe from "@/components/ui/iframe";
import useSessionStore from "@/data-store/session-store";
import completeCode from "@/lib/code-complete";
import { useEffect } from "react";

interface StaticPromptProps {
    code: string;
}

const StaticPrompt: React.FC<StaticPromptProps> = ({ code }) => {
    const { promptIframeSession } = useSessionStore();
    useEffect(() => {
        const preventContextMenu = (e: Event) => {
            e.preventDefault();
        };

        // Disable right-click in the component
        document.addEventListener("contextmenu", preventContextMenu);

        const iframe = promptIframeSession.current;

        // Ensure iframe is loaded before attaching event
        iframe?.addEventListener("load", () => {
            iframe.contentWindow?.document.addEventListener(
                "contextmenu",
                preventContextMenu
            );
        });

        // Cleanup
        return () => {
            document.removeEventListener("contextmenu", preventContextMenu);
            iframe?.contentWindow?.document.removeEventListener(
                "contextmenu",
                preventContextMenu
            );
        };
    }, [promptIframeSession]);

    return (
        <div className='pointer-events-none relative h-full w-full'>
            <Iframe
                userIframeSession={promptIframeSession}
                completedCode={completeCode(code)}
                title={"Prompt"}
                className='pointer-events-none'
            />
        </div>
    );
};

export default StaticPrompt;
