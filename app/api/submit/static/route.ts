import { NextResponse } from "next/server";
import { xata } from "@/lib/xata_client";

async function directDB_incrementSubmitCount(
    id: string,
    currFieldValue: string
) {
    const increment = (parseInt(currFieldValue, 10) + 1).toString();
    await xata.db.Site.update(id, {
        field_value: increment,
    });
}

async function directDB_getSubmitCount() {
    const record = await xata.db.Site.filter({
        field_name: "Landingpage_submit_count",
    }).getFirst();
    return [record?.field_value, record?.id];
}

export async function POST(req: Request) {
    const body = await req.json();

    const { field_value, id }: { field_value: string; id: string } = body;

    const landingPageSubmitCount = await directDB_getSubmitCount();

    directDB_incrementSubmitCount(
        landingPageSubmitCount[1]!,
        landingPageSubmitCount[0]!
    );

    return NextResponse.json({ message: "Success" }, { status: 200 });
}
