import { NextResponse } from "next/server";
import { xata } from "@/lib/xata_client";

export async function GET() {
    const record = await xata.db.Site.filter({
        field_name: "Landingpage_submit_count",
    }).getFirst();

    const fieldVal = record?.field_value;
    const id = record?.id;

    return NextResponse.json(
        { message: "Success", fieldVal, id },
        { status: 200 }
    );
}

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

export async function PUT(req: Request) {
    const landingPageSubmitCount = await directDB_getSubmitCount();

    await directDB_incrementSubmitCount(
        landingPageSubmitCount[1]!,
        landingPageSubmitCount[0]!
    );

    return NextResponse.json({ message: "Success" }, { status: 200 });
}
