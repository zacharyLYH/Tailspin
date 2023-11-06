"use client";
import Link from "next/link";
import { Navigation } from "@/components/landing/navigation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
    const router = useRouter();

    useEffect(() => {
        const delay = 5000;

        const redirectTimer = setTimeout(() => {
            router.push("/");
        }, delay);
        return () => clearTimeout(redirectTimer);
    }, [router]);

    return (
        <main className='mx-auto flex h-screen w-full flex-col overflow-clip bg-gradient-to-b from-[#493b6c] via-[#14243a] to-[#000000]'>
            <Navigation />

            <section className='m-auto flex max-w-screen-lg flex-col items-center px-4'>
                <h1 className='mb-8 text-4xl font-bold !leading-[1.208]  text-orange-500 sm:text-[42px] lg:text-[40px] xl:text-5xl'>
                    404 - Page Not Found
                </h1>
                <p className='text-body-color dark:text-dark-6 mb-4 text-base'>
                    The page you are looking for either does not exist, or you
                    are not allowed to access it!
                </p>
                <p className='text-body-color dark:text-dark-6 mb-14 text-base'>
                    You should be auto-redirect within the next 5 seconds. If
                    you are not, click the button below.
                </p>

                <Link href='/'>
                    <Button>Return Home</Button>
                </Link>
            </section>
        </main>
    );
}
