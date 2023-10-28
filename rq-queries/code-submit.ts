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

export function putSubmitCount() {
    const { isIdle, isLoading, isError, data, error } = useMutation({
        mutationFn: () => {
            console.log(
                "mutationFn of putSiteCount() called... calling axios.."
            );
            return axios.put("/api/code/submit");
        },
    });

    console.log("called putSubmitCount()");

    if (isIdle) {
        console.log("idle");
    }

    if (isLoading) {
        console.log("loading..........");
    }

    if (isError) {
        console.log("ERROR....", error);
    }

    console.log("data for putsubmitcount...", data);

    return;
}
