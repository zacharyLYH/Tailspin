"use client";

import ConfettiExplosion, { ConfettiProps } from "react-confetti-explosion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { usePutSubmitCount } from "../../rq-queries/code-submit";

const smallProps: ConfettiProps = {
    force: 0.6,
    duration: 1900,
    particleCount: 200,
    width: 500,
};

const ConfettiButton = (props: any, className: string) => {
    const [isSmallExploding, setIsSmallExploding] = useState(false);

    const mutation = usePutSubmitCount();

    const handleButtonClick = () => {
        mutation.mutate();
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
