import {
    useMutation,
    useQuery,
    QueryClient,
    useQueryClient,
} from "@tanstack/react-query";
import { CodeSubmitQueryKey } from "../client-side-queries/query-keys";
import axios from "axios";

export function getCodeSubmitCount() {
    const { isLoading, isSuccess, isError, isFetching, data, error, refetch } =
        useQuery({
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
        console.log("submit counter is loading.....");
    }

    if (isError) {
        console.log("submit counter error is:", error);
    }

    if (isFetching) {
        //console.log("submit count is fetching data");
    }

    if (isSuccess) {
        console.log("getting submit count success");
    }

    const submitCount = data?.data.fieldVal;

    return submitCount;
}

export function usePutSubmitCount() {
    const queryClient = useQueryClient();
    console.log("before mutate", queryClient);
    return useMutation(async () => await axios.put("/api/code/submit", {}), {
        onError: (error) => {
            console.log("error mutating submit count", error);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [CodeSubmitQueryKey] });
            console.log("after mutate", queryClient);
        },
    });
}
