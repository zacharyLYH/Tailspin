import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TailspinLogo } from "../ui/spinning-logo";

// TODO: Add better responsiveness and mobile design, refactor Button into the button component

export const Navigation = () => {
    return (
        <nav className='sticky top-0 z-[1] flex h-16 items-center'>
            <Link href='#landing'>
                <div className='mx-5'>
                    <TailspinLogo outershellClassname='animate-spin h-10 w-10' />
                </div>
            </Link>
            <Button
                variant='ghost'
                className='mx-3 font-semibold text-muted-foreground'
            >
                About
            </Button>
            <Link href='#tabsSection'>
                <Button
                    variant='ghost'
                    className='mx-3 font-semibold text-muted-foreground'
                >
                    Code
                </Button>
            </Link>
            <Button
                variant='ghost'
                className='mx-3 font-semibold text-muted-foreground'
            >
                Tutorial
            </Button>
        </nav>
    );
};

//green-800
