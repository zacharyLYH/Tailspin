"use client";

import { FeedbackModal } from "@/components/landing/feedback/feedback-modal";
import { Button } from "@/components/ui/button";
import useSessionStore from "@/data-store/session-store";
import LandingPageCode from "./test-challenges/placeholder-code";
import { useRouter } from "next/navigation";

export const TabSection = () => {
    const { setCode } = useSessionStore();
    const router = useRouter();
    const tryItOutHandler = () => {
        setCode(LandingPageCode());
        router.push("/code-area");
    };
    return (
        <div id='tabsSection'>
            <h1 className='mt-2 flex flex-wrap items-center justify-center text-center font-semibold italic text-green-500'>
                🔈 Tailspin is still in development! Click on the face
                <span className='mx-1 block min-w-[30px] hover:cursor-pointer'>
                    <FeedbackModal />
                </span>
                and help make Tailspin great!
            </h1>

            <div className='relative'>
                <div className='pointer-events-auto absolute inset-0 z-20 bg-white bg-opacity-50 xl:hidden' />
                <div className='absolute inset-0 z-30 flex items-center justify-center xl:hidden'>
                    <div className='w-3/4 max-w-lg rounded-xl bg-black p-6 shadow-lg'>
                        <h2 className='mb-4 text-center text-xl font-bold text-white'>
                            It looks like you&quot;re on a small screen
                        </h2>
                        <p className='text-sm font-semibold text-gray-400'>
                            We hate to be non-inclusive towards phones and
                            tablets, however we want to provide you with the
                            best experience possible!
                        </p>
                    </div>
                </div>
                <div className='items-cetner flex justify-center'>
                    <Button onClick={tryItOutHandler}>Try it out!</Button>
                </div>
            </div>
        </div>
    );
};
