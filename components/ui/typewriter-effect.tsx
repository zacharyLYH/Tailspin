"use client";

import TypewriterComponent from "typewriter-effect";

export const HeroSubText = () => {
    return (
        <TypewriterComponent
            options={{
                strings: ["Competitive TailwindCSS."],
                autoStart: true,
                loop: true,
            }}
        />
    );
};
