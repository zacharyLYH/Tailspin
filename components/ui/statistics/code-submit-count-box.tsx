"use client";

import { getCodeSubmitCount } from "@/rq-queries/code-submit";
import { Box } from "../stat-box";

export const CodeSubmitCountBox = (props: any) => {
    const landingPageSubmitCount = getCodeSubmitCount();
    return (
        <Box>
            How many people have submitted their code : {landingPageSubmitCount}
        </Box>
    );
};
