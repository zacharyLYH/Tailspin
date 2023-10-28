"use client";

import { getCodeSubmitCount } from "@/rq-queries/code-submit";
import { Box } from "../stat-box";
import { useQuery } from "@tanstack/react-query";
import { CodeSubmitQueryKey } from "@/client-side-queries/query-keys";
import axios from "axios";

export const CodeSubmitCountBox = (props: any) => {
    const { isLoading, isError, data, error, refetch } = useQuery({
        queryKey: [CodeSubmitQueryKey],
        queryFn: async () => {
            console.log(
                "queryFn of getCodeSubmitCount() called, calling axios"
            );
            const resp = await axios.get("/api/code/submit");
            console.log("response is...", resp);
            return resp;
        },
    });

    if (isLoading) {
        console.log("isLoading: ", isLoading);
    }

    if (isError) {
        console.log("error is:", error);
    }
    return (
        <Box>
            How many people have submitted their code : {data?.data.fieldVal}
        </Box>
    );
};
