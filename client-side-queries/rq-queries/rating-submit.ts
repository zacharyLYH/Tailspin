import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { RatingQuerykey } from "../query-keys";
import axios from "axios";

export function useGetRating() {
    const { data } = useQuery({
        queryKey: [RatingQuerykey],
        queryFn: async () => {
            const resp = await axios.get("/api/feedback/rating");
            return resp;
        },
    });
    const resp = data?.data.data;
    return resp;
}

/*
data is in this format: [uxRating, overallRating, funRating]
*/
export function usePutRating(payload: number[]) {
    const queryClient = useQueryClient();
    return useMutation(
        async () => await axios.put("/api/feedback/rating", { payload }),
        {
            onError: (error) => {
                throw Error;
            },
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: [RatingQuerykey],
                });
            },
        }
    );
}
