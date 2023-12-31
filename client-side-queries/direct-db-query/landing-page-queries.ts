import { xata } from "@/lib/xata_client";

export async function directDB_getSiteCount() {
    const record = await xata.db.Site.filter({
        field_name: "Sitevisit_count",
    }).getFirst();
    return [record?.field_value, record?.id];
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
