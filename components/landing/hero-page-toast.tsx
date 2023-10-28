"use client";

import { useEffect, useState } from "react";

const HeroPageToast = () => {
    const [showToast, setShowToast] = useState(false);
    useEffect(() => {
        setShowToast(true);

        const timer = setTimeout(() => {
            setShowToast(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            {showToast && (
                <div className='fixed bottom-4 right-4'>
                    <p
                        className='flex w-full max-w-md items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400'
                        role='alert'
                    >
                        🔥 We&apos;re looking for contributers!
                    </p>
                </div>
            )}
        </>
    );
};

export default HeroPageToast;
