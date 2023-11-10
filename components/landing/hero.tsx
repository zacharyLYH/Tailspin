import { ArrowHead } from "@/components/ui/arrow";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import { HeroSubText } from "@/components/ui/typewriter-effect";
import { TailspinLogo } from "@/components/ui/spinning-logo";
import HeroPageToast from "./hero-page-toast";

const font = Montserrat({ weight: "700", subsets: ["latin"] });

export const Hero = () => {
    return (
        <div className='relative space-y-5 py-36 text-center font-bold text-white'>
            <h1
                className={cn(
                    "font-bol inline-flex items-center text-9xl",
                    font.className
                )}
                style={{
                    textShadow:
                        "0px 0px 10px rgba(128, 128, 128, 0.5), 0px 0px 20px rgba(128, 128, 128, 0.5), 0px 0px 30px rgba(128, 128, 128, 0.5)",
                }}
            >
                <div className='inline-flex items-center'>
                    <TailspinLogo outershellClassname='z-[0] mr-3 h-[4rem] w-[4rem] animate-spin hidden md:block' />
                    <span className='text-orange-400'>Tailspin</span>
                </div>
            </h1>
            <div className='bg-clip-text text-xl font-semibold text-orange-700'>
                <HeroSubText />
            </div>
            <a
                href='#stepper'
                className='flex cursor-pointer flex-col items-center'
            >
                <div className='h-12 w-12 animate-bounce'>
                    <ArrowHead
                        className='h-12 w-12 text-orange-200'
                        strokeWidth='4'
                    />
                </div>
                <div className='h-16 w-16 animate-bounce delay-100'>
                    <ArrowHead
                        className='h-16 w-16 text-orange-600'
                        strokeWidth='4'
                    />
                </div>
                <div className='h-20 w-20 animate-bounce delay-200'>
                    <ArrowHead
                        className='h-20 w-20  text-orange-900'
                        strokeWidth='4'
                    />
                </div>
            </a>
            <HeroPageToast />
        </div>
    );
};
