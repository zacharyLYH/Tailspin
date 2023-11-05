"use client";

import { getCodeSubmitCount } from "@/client-side-queries/rq-queries/code-submit";
import { Box } from "../stat-box";

export const CodeSubmitCountBox = (props: any) => {
    const value = getCodeSubmitCount();
    return <Box>How many people have submitted their code : {value}</Box>;
};
