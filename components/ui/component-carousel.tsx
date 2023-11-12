"use client";

import { useState } from "react";
import { Button } from "./button";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

interface ComponentCarouselProps {
    nodes: React.ReactNode[];
    title?: string;
}

const ComponentCarousel: React.FC<ComponentCarouselProps> = ({
    nodes,
    title,
}) => {
    const [page, setPage] = useState(0);

    return (
        <div className='flex min-h-[60vh] flex-col items-center justify-center rounded-lg p-6 shadow-lg lg:m-6'>
            <p className='mb-4 text-2xl font-semibold italic'>{title}</p>
            <div className='flex w-2/3 flex-row items-center space-x-4'>
                <Button
                    className='ml-4 inline-flex items-center justify-center rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2'
                    onClick={() =>
                        setPage(
                            (page) => (page - 1 + nodes.length) % nodes.length
                        )
                    }
                >
                    <ArrowBigLeft className='h-6 w-6' />
                </Button>
                <div className='flex flex-grow flex-col rounded-xl border border-orange-400 p-4'>
                    {nodes[page]}
                    <p className='mt-4 text-center text-sm text-muted-foreground'>
                        {page + 1}/2
                    </p>
                </div>
                <Button
                    className='ml-4 inline-flex items-center justify-center rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2'
                    onClick={() => setPage((page) => (page + 1) % nodes.length)}
                >
                    <ArrowBigRight className='h-6 w-6' />
                </Button>
            </div>
        </div>
    );
};

export default ComponentCarousel;
