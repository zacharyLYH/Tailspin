"use client";

import { useQuery } from "@tanstack/react-query";
import { SampleQueryKey } from "../query-keys";
import axios from "axios";

export function getSample() {
    return useQuery({
        queryKey: [SampleQueryKey],
        queryFn: async () => {
            const resp = await axios.get("/api/sample");
            console.log(resp);
            return resp;
        },
        enabled: false, // Ensure the query does not run automatically on mount
    });
}
