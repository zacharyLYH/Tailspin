import Link from "next/link";
import { TailspinLogo } from "../ui/spinning-logo";

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
                            <a
                                href='#about-section'
                                className='me-4 hover:underline md:me-6'
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a href='#' className='hover:underline'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
                <span className='block text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
                    No © 2023{" "}
                    <Link href='/' className='hover:underline'>
                        Tailspin
                    </Link>
                    . No Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
