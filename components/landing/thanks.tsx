import axios from "axios";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import React from "react";

const ThanksPage = async () => {
    //TODO: Implement ETag into github to reduce new requests
    const fetchContributors = async () => {
        try {
            const devContributorsResponse = await axios.get(
                "https://api.github.com/repos/zacharyLYH/Tailspin/pulls?state=closed&base=dev",
                {
                    headers: {
                        Authorization: `token ${process.env.PRIVATE_GITHUB_THANKS_TOKEN}`,
                    },
                }
            );

            const allPRs = [...devContributorsResponse.data];
            const mergedPRs = allPRs.filter((pr: any) => pr.merged_at);

            const contributorsMap = new Map<
                string,
                {
                    login: string;
                    avatar_url: string;
                    github_url: string;
                    completedPRs: number;
                }
            >();

            for (const pr of mergedPRs) {
                const { login, avatar_url, html_url } = pr.user;
                const contributor = contributorsMap.get(login);
                if (contributor) {
                    contributor.completedPRs += 1;
                } else {
                    contributorsMap.set(login, {
                        login,
                        avatar_url,
                        github_url: html_url,
                        completedPRs: 1,
                    });
                }
            }
            return Array.from(contributorsMap.values());
        } catch (error) {
            console.error("Failed to fetch contributors:", error);
            return [];
        }
    };

    const contributors = await fetchContributors();

    const techs = new Map<string, string>([
        ["https://nextjs.org/favicon.ico", "Next.JS"],
        [
            "https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg",
            "TaildwindCSS",
        ],
        ["https://ui.shadcn.com/favicon.ico", "ShadCN UI"],
        ["https://xata.io/icon.svg?9d7a66ec4c0ad6b1", "Xata.io"],
        [
            "https://flowbite.s3.amazonaws.com/brand/logo-dark/mark/flowbite-logo.png",
            "Flowbite",
        ],
        ["https://tanstack.com/favicon.ico", "ReactQuery"],
    ]);
    return (
        <div className='flex items-center justify-center lg:m-6'>
            <div className='flex flex-shrink-0 flex-col gap-4 md:flex-row'>
                <div className='w-full max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8 md:w-1/2'>
                    <div className='mb-4 flex items-center justify-between'>
                        <h5 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
                            Our noble contributors
                        </h5>
                    </div>
                    <div className='flow-root h-full'>
                        <ul
                            role='list'
                            className='h-full gap-y-1 divide-y divide-gray-200 overflow-y-auto dark:divide-gray-700'
                        >
                            {contributors.map((contributor: any) => (
                                <li
                                    className='py-3 sm:py-4'
                                    key={contributor.login}
                                >
                                    <div className='flex flex-col space-y-1 rounded-lg border border-green-200 p-2'>
                                        <div className='flex items-center space-x-4'>
                                            <div className='flex-shrink-0'>
                                                <Avatar>
                                                    <AvatarImage
                                                        src={
                                                            contributor.avatar_url
                                                        }
                                                    />
                                                    <AvatarFallback>
                                                        👑
                                                    </AvatarFallback>
                                                </Avatar>
                                            </div>
                                            <div className='min-w-0'>
                                                <p className='truncate text-sm font-medium text-gray-900 dark:text-white'>
                                                    {contributor.login}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='flex items-center space-x-4'>
                                            <div className='inline-flex items-center text-base font-semibold text-gray-900 dark:text-white'>
                                                Contributions:{" "}
                                                <span className='ml-1 text-green-500'>
                                                    {contributor.completedPRs}
                                                </span>
                                            </div>
                                            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-black p-1'>
                                                <Link
                                                    href={
                                                        contributor.github_url
                                                    }
                                                    target='_blank'
                                                    rel='noopener noreferrer'
                                                >
                                                    <GithubIcon className='h-4 w-4 text-white' />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='w-full max-w-md rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8 md:w-1/2'>
                    <div className='mb-4 flex items-center justify-between'>
                        <h5 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
                            Tech that made this possible! ({techs.size})
                        </h5>
                    </div>
                    <div className='rounded-lg border border-green-200'>
                        <ScrollArea className='h-72 w-48 rounded-md border'>
                            {Array.from(techs.entries()).map(([url, name]) => (
                                <React.Fragment key={name}>
                                    <div className='mx-1 flex flex-row items-center rounded-lg p-2 transition-colors duration-150 hover:bg-gray-100 dark:hover:bg-gray-800'>
                                        <Avatar className='mr-3'>
                                            <AvatarImage src={url} />
                                            <AvatarFallback>👑</AvatarFallback>
                                        </Avatar>
                                        <p className='text-sm font-medium'>
                                            {name}
                                        </p>
                                    </div>
                                    <Separator className='border border-gray-300 dark:border-gray-700' />
                                </React.Fragment>
                            ))}
                        </ScrollArea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThanksPage;
