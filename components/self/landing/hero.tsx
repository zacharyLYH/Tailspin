import { ArrowHead } from "@/components/self/arrow";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import { Shell } from "lucide-react";
import { HeroSubText } from "./typewriter-effect";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const Hero = () => {
    return (
        <div className="text-white font-bold py-36 text-center space-y-5">
            <h1
                className={cn(
                    "text-8xl font-bold inline-flex items-center text-white",
                    font.className
                )}
                style={{
                    textShadow:
                        "0px 0px 10px rgba(128, 128, 128, 0.5), 0px 0px 20px rgba(128, 128, 128, 0.5), 0px 0px 30px rgba(128, 128, 128, 0.5)",
                }}
            >
                <div className="inline-flex items-center">
                    <div className="animate-spin mr-3 h-[4rem] w-[4rem]">
                        <Shell className="text-amber-600 h-full w-full" />
                    </div>
                    Tailspin
                </div>
            </h1>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-xl font-semibold">
                <HeroSubText />
            </div>
            <a
                href="#tabsSection"
                className="flex flex-col items-center cursor-pointer"
            >
                <div className="animate-bounce w-12 h-12">
                    <ArrowHead className="w-12 h-12" strokeWidth="4" />
                </div>
                <div className="animate-bounce delay-100 w-16 h-16">
                    <ArrowHead className="w-16 h-16" strokeWidth="4" />
                </div>
                <div className="animate-bounce delay-200 w-20 h-20">
                    <ArrowHead className="w-20 h-20" strokeWidth="4" />
                </div>
            </a>
        </div>
    );
};
