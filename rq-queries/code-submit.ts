import {
    useMutation,
    useQuery,
    QueryClient,
    useQueryClient,
} from "@tanstack/react-query";
import { CodeSubmitQueryKey } from "../client-side-queries/query-keys";
import axios from "axios";

export function getCodeSubmitCount() {
    const { data } = useQuery({
        queryKey: [CodeSubmitQueryKey],
        queryFn: async () => {
            const resp = await axios.get("/api/code/submit");
            return resp;
        },
    });

    const submitCount = data?.data.fieldVal;

    return submitCount;
}

export function usePutSubmitCount() {
    const queryClient = useQueryClient();
    return useMutation(async () => await axios.put("/api/code/submit", {}), {
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [CodeSubmitQueryKey] });
        },
    });
}
