"use client";

import * as React from "react";
import { useScroll, animated } from "@react-spring/web";

const X_LINES = 40;
const PAGE_COUNT = 5;
const INITIAL_WIDTH_VW = 5; // Set initial width as a percentage of viewport width

const WavyScrollProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null!);

    const { scrollYProgress } = useScroll({
        container: containerRef,
        default: {
            immediate: true,
        },
    });

    return (
        <div
            ref={containerRef}
            className='h-screen w-full overflow-y-scroll bg-[#171717]'
        >
            <div className='pointer-events-none fixed inset-0 z-0'>
                <div className='pointer-events-none fixed inset-0 z-10 flex flex-col items-end justify-between'>
                    {Array.from({ length: X_LINES }).map((_, i) => (
                        <animated.div
                            key={i}
                            className='h-1 bg-white bg-opacity-40'
                            style={{
                                width: scrollYProgress.to((scrollP) => {
                                    const percentilePosition =
                                        (i + 1) / X_LINES;
                                    return `${
                                        INITIAL_WIDTH_VW / 4 +
                                        10 *
                                            Math.cos(
                                                ((percentilePosition -
                                                    scrollP) *
                                                    Math.PI) /
                                                    1.5
                                            ) **
                                                32
                                    }vw`;
                                }),
                            }}
                        />
                    ))}
                </div>
                <div className='pointer-events-none fixed inset-0 z-10 flex flex-col items-start justify-between'>
                    {Array.from({ length: X_LINES }).map((_, i) => (
                        <animated.div
                            key={i}
                            className='h-1 bg-white bg-opacity-40'
                            style={{
                                width: scrollYProgress.to((scrollP) => {
                                    const percentilePosition =
                                        1 - (i + 1) / X_LINES;
                                    return `${
                                        INITIAL_WIDTH_VW / 4 +
                                        10 *
                                            Math.cos(
                                                ((percentilePosition -
                                                    scrollP) *
                                                    Math.PI) /
                                                    1.5
                                            ) **
                                                32
                                    }vw`;
                                }),
                            }}
                        />
                    ))}
                </div>
            </div>
            {children}
            {Array.from({ length: PAGE_COUNT }, (_, index) => (
                <div className='h-screen w-screen' key={index} />
            ))}
        </div>
    );
};

export default WavyScrollProvider;
