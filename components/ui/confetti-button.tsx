"use client";

import ConfettiExplosion, { ConfettiProps } from "react-confetti-explosion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
//import { handleSubmitIncrement } from "../landing/handlers/submitIncrementHandler";
import { usePutSubmitCount } from "../../rq-queries/code-submit";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CodeSubmitQueryKey } from "@/client-side-queries/query-keys";
import axios from "axios";

const smallProps: ConfettiProps = {
    force: 0.6,
    duration: 1900,
    particleCount: 200,
    width: 500,
};

const ConfettiButton = (props: any, className: string) => {
    const queryClient = useQueryClient();
    const [isSmallExploding, setIsSmallExploding] = useState(false);

    const mutation = useMutation(() => axios.put("/api/code/submit"), {
        onError: (error) => {
            console.log("error", error);
        },
        onSuccess: () => {
            console.log("success");
            queryClient.invalidateQueries({ queryKey: [CodeSubmitQueryKey] });
        },
    });

    const handleButtonClick = () => {
        console.log("button clicked");
        console.log(mutation);
        mutation.mutate();
        console.log("putSubmitCount Passed");
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
