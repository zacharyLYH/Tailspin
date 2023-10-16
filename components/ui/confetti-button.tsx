"use client";

import ConfettiExplosion, { ConfettiProps } from "react-confetti-explosion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { handleSubmitIncrement } from "../landing/handlers/submitIncrementHandler";

const smallProps: ConfettiProps = {
    force: 0.6,
    duration: 1900,
    particleCount: 200,
    width: 500,
};

const ConfettiButton = (props: any, className: string) => {
    const [isSmallExploding, setIsSmallExploding] = useState(false);

    const handleButtonClick = () => {
        handleSubmitIncrement();
        setIsSmallExploding(true);
        setTimeout(() => setIsSmallExploding(false), 1200);
    };

    return (
        <Button
            onClick={handleButtonClick}
            className='bg-purple-500 text-white'
        >
            {isSmallExploding && <ConfettiExplosion {...smallProps} />}
            {props.children}
        </Button>
    );
};

export default ConfettiButton;
