"use client";

import { FeedbackModal } from "@/components/landing/feedback/feedback-modal";
import { Button } from "@/components/ui/button";
import useSessionStore from "@/data-store/session-store";
import LandingPageCode from "./test-challenges/placeholder-code";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const TabSection = () => {
    return (
        <div id='tabsSection'>
            <h1 className='mt-2 flex flex-wrap items-center justify-center text-center font-semibold italic text-green-500'>
                🔈 Tailspin is still in development! Click on the face
                <span className='mx-1 block min-w-[30px] hover:cursor-pointer'>
                    <FeedbackModal buttonName='🌝' />
                </span>
                and help make Tailspin great!
            </h1>

            <div className='relative'>
                <div className='items-cetner flex justify-center'>
                    <Link href='#stepper'>
                        <Button>Try it out!</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
