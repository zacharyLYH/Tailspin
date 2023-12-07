import Link from "next/link";
import { TailspinLogo } from "../ui/spinning-logo";
import { Button } from "../ui/button";
import { FeedbackModal } from "./feedback/feedback-modal";

const Footer = () => {
    return (
        <footer className='rounded-lg bg-white shadow dark:bg-gray-900'>
            <div className='mx-auto w-full max-w-screen-xl p-4 md:py-8'>
                <div className='sm:flex sm:items-center sm:justify-between'>
                    <Link
                        href='/'
                        className='mb-4 flex items-center space-x-3 rtl:space-x-reverse sm:mb-0'
                    >
                        <TailspinLogo outershellClassname='w-6 h-6' />
                        <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
                            Tailspin
                        </span>
                    </Link>
                    <ul className='mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mb-0'>
                        <li>
                            <Button variant='ghost'>
                                <Link href='#about-section'>About</Link>
                            </Button>
                        </li>
                        <li>
                            <Button variant='ghost'>
                                <FeedbackModal buttonName='Contact' />
                            </Button>
                        </li>
                    </ul>
                </div>
                <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
                <span className='block text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
                    Built because we love it. Source code available in{" "}
                    <Link
                        href='https://github.com/zacharyLYH/Tailspin'
                        className='underline'
                    >
                        Github
                    </Link>
                </span>
            </div>
        </footer>
    );
};

export default Footer;
