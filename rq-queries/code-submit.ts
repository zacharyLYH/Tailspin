"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { CodeSubmitQueryKey } from "../client-side-queries/query-keys";
import axios from "axios";

export function getCodeSubmitCount() {
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

    const submitCount = data?.data.fieldVal;

    return submitCount;
}

export function putSiteCount() {
    return useMutation({
        mutationFn: () => {
            console.log(
                "mutationFn of putSiteCount() called... calling axios.."
            );
            return axios.put("/api/site");
        },
    });
}
