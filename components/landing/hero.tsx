import { ArrowHead } from "@/components/ui/arrow";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import { Shell } from "lucide-react";
import { HeroSubText } from "../ui/typewriter-effect";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const Hero = () => {
    return (
        <div className='space-y-5 py-36 text-center font-bold text-white'>
            <h1
                className={cn(
                    "inline-flex items-center text-8xl font-bold text-white",
                    font.className
                )}
                style={{
                    textShadow:
                        "0px 0px 10px rgba(128, 128, 128, 0.5), 0px 0px 20px rgba(128, 128, 128, 0.5), 0px 0px 30px rgba(128, 128, 128, 0.5)",
                }}
            >
                <div className='inline-flex items-center'>
                    <div className='z-[0] mr-3 h-[4rem] w-[4rem] animate-spin'>
                        <Shell className='h-full w-full text-green-500' />
                    </div>
                    <span className='text-green-300'>Tailspin</span>
                </div>
            </h1>
            <div className='bg-gradient-to-r from-green-800 to-yellow-200 bg-clip-text text-xl font-semibold text-transparent'>
                <HeroSubText />
            </div>
            <a
                href='#tabsSection'
                className='flex cursor-pointer flex-col items-center'
            >
                <div className='h-12 w-12 animate-bounce'>
                    <ArrowHead
                        className='h-12 w-12 text-green-200'
                        strokeWidth='4'
                    />
                </div>
                <div className='h-16 w-16 animate-bounce delay-100'>
                    <ArrowHead
                        className='h-16 w-16 text-green-600'
                        strokeWidth='4'
                    />
                </div>
                <div className='h-20 w-20 animate-bounce delay-200'>
                    <ArrowHead
                        className='h-20 w-20  text-green-900'
                        strokeWidth='4'
                    />
                </div>
            </a>
        </div>
    );
};
