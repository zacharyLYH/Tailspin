"use client";

import TypewriterComponent from "typewriter-effect";

export const HeroSubText = () => {
    return (
        <TypewriterComponent
            options={{
                strings: [
                    "Powered by GPT",
                    "Customizable Experience",
                    "Community Driven",
                    "Free to Use",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 50,
            }}
        />
    );
};
