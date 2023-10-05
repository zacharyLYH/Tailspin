import { Button } from "@/components/ui/button";
import { Shell } from "lucide-react";

// TODO: Add better responsiveness and mobile design, refactor Button into the button component

export const Navigation = () => {
    return (
        <nav className='sticky top-0 z-[1] flex h-16 items-center bg-[#181818]'>
            <a href='#landing'>
                <Shell className='mx-5 h-full w-10 text-green-500'></Shell>
            </a>
            <Button className='mx-3 bg-green-500'>About</Button>
            <a href='#tabsSection'>
                <Button className='mx-3 bg-green-500'>Code</Button>
            </a>
            <Button className='mx-3 bg-green-500'>Tutorial</Button>
        </nav>
    );
};

//green-800
