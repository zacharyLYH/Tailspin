"use client";

import { useQuery } from "@tanstack/react-query";
import { SiteCountQueryKey } from "../client-side-queries/query-keys";
import axios from "axios";

export function getSiteCount() {
    return useQuery({
        queryKey: [SiteCountQueryKey],
        queryFn: async () => {
            console.log("queryFn of getSiteCount() called, calling axios");
            const resp = await axios.get("/api/site");
            console.log("response is...", resp);
            return resp;
        },
        enabled: false,
    });
}
