import { ArrowHead } from "@/components/ui/arrow";
import { HeroSubText } from "@/components/ui/typewriter-effect";
import HeroPageToast from "./hero-page-toast";
import { Button } from "../ui/button";
import Link from "next/link";

export const Hero = () => {
    return (
        <div className='relative space-y-5 py-36 text-center font-bold text-white'>
            <div className='space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl'>
                <h1>Competitive TailwindCSS Developer centric</h1>
                <div className='bg-gradient-to-r from-orange-200 to-orange-900 bg-clip-text text-transparent'>
                    <HeroSubText />
                </div>
            </div>
            <div className='text-sm font-light text-zinc-400 md:text-xl'>
                Show off your Tailwind skills and build community.
            </div>
            <div>
                <Link href='#tabsSection'>
                    <Button className='rounded-full border-0 bg-gradient-to-r from-orange-500 via-yellow-700 to-pink-500 p-4 font-semibold text-white md:p-6 md:text-lg'>
                        Try our Playground
                    </Button>
                </Link>
            </div>
            <div className='text-xs font-normal text-zinc-400 md:text-sm'>
                Forever free. Not affiliated with{" "}
                <Link
                    href='https://tailwindcss.com'
                    className='text-blue-500 underline'
                >
                    The Tailwind Org
                </Link>
            </div>
            <Link
                href='#tabsSection'
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
            </Link>
            <HeroPageToast />
        </div>
    );
};
