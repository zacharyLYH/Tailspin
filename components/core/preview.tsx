"use client";

import useSessionStore from "@/data-store/session-store";
import { BrowserMockup } from "@/components/ui/browserMockup";
import Iframe from "@/components/ui/iframe";
import completeCode from "@/lib/code-complete";

const Preview = () => {
    const { code, userIframeSession } = useSessionStore();

    return (
        <div className='flex h-screen flex-col rounded-lg'>
            <BrowserMockup>
                <Iframe
                    userIframeSession={userIframeSession}
                    title='Preview'
                    completedCode={completeCode(code)}
                    className='pointer-events-none w-full flex-grow rounded-b-lg border-t border-gray-300'
                />
            </BrowserMockup>
        </div>
    );
};

export default Preview;
