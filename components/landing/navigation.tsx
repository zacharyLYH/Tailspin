"use client";

import Link from "next/link";
import { TailspinLogo } from "../ui/spinning-logo";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";

interface ListItemProps {
    className?: string;
    title: string;
    children: React.ReactNode;
    href: string;
}

const ListItem: React.FC<ListItemProps> = ({
    className,
    title,
    children,
    href,
}) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                >
                    <div className='text-sm font-medium leading-none'>
                        {title}
                    </div>
                    <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
};

export const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='fixed left-0 right-0 top-0 z-50 ml-3 mt-2 flex flex-row gap-8'>
            <Button
                className='flex items-center justify-center rounded bg-white hover:cursor-pointer hover:bg-orange-500 md:hidden'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <Menu className='h-4 w-4 ' />
            </Button>
            <div
                className={`${isMenuOpen ? "flex" : "hidden"} flex-row md:flex`}
            >
                <TailspinLogo outershellClassname='h-10 w-10 animate-spin hidden md:flex' />
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className='bg-transparent font-bold text-muted-foreground '>
                                Getting started
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                                    <li className='row-span-3'>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                className='flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md'
                                                href='/'
                                            >
                                                <TailspinLogo outershellClassname='h-6 w-6' />
                                                <div className='mb-2 mt-4 text-lg font-medium'>
                                                    Tailspin
                                                </div>
                                                <p className='text-sm leading-tight text-muted-foreground'>
                                                    Competitive TailwindCSS
                                                    built for the community by
                                                    the community.
                                                </p>
                                            </Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href='/#about' title='About'>
                                        See what Tailspin is all about.
                                    </ListItem>
                                    <ListItem
                                        href='/#stepper'
                                        title='Try it out!'
                                    >
                                        Try out Tailspin. Just follow the steps
                                        and happy coding!
                                    </ListItem>
                                    <ListItem href='' title='Tutorial'>
                                        Need a little help? We got you.
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href='/#stepper' legacyBehavior passHref>
                                <NavigationMenuLink
                                    className={cn(
                                        navigationMenuTriggerStyle(),
                                        "bg-transparent font-bold text-muted-foreground"
                                    )}
                                >
                                    Let&apos;s write some code!
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    );
};
