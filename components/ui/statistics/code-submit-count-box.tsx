"use client";

import { getCodeSubmitCount } from "@/client-side-queries/rq-queries/code-submit";
import StatBox from "../stat-box";
import { CheckCheckIcon } from "lucide-react";

export const CodeSubmitCountBox = (props: any) => {
    const value = getCodeSubmitCount();
    return (
        <StatBox
            icon={<CheckCheckIcon className='h-6 w-6' />}
            content={`Submissions to date: ${value}`}
        />
    );
};
