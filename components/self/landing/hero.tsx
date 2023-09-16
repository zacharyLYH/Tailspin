import { ArrowHead } from "@/components/self/arrow";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

export const Hero = () => {
    return (
        <div className="text-white font-bold py-36 text-center space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
                <h1
                    className={cn(
                        "text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600",
                        font.className
                    )}
                >
                    Tailspin
                </h1>
            </div>
            <div className="text-zinc-400 text-xl font-normal">
                Competitive Tailwind CSS
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
