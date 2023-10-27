import { xata } from "@/lib/xata_client";

import { useQuery } from "@tanstack/react-query";
import { SiteCountQueryKey } from "../query-keys";
import axios from "axios";

export async function directDB_getSiteCount() {
    const record = await xata.db.Site.filter({
        field_name: "Sitevisit_count",
    }).getFirst();
    return [record?.field_value, record?.id];
}

export function getSiteCount() {
    return useQuery({
        queryKey: [SiteCountQueryKey],
        queryFn: async () => {
            const resp = await axios.get("/api/site");
            console.log(resp);
            return resp;
        },
        enabled: false,
    });
}

export async function directDB_getSubmitCount() {
    const record = await xata.db.Site.filter({
        field_name: "Landingpage_submit_count",
    }).getFirst();
    return record?.field_value;
}

/*
Note that we're using strings instead of numbers in the field_count column. 
Because this table "Site" will hold all our present and future "site related" information. And thus we need something more robust like a string for the field_value column. 
*/
export async function directDB_incrementSiteCount(
    id: string,
    currFieldValue: string
) {
    const increment = (parseInt(currFieldValue, 10) + 1).toString();
    await xata.db.Site.update(id, {
        field_value: increment,
    });
}
