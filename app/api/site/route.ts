import { NextResponse } from "next/server";
import { xata } from "@/lib/xata_client";
import { useQuery } from "@tanstack/react-query";

export async function GET() {
    const record = await xata.db.Site.filter({
        field_name: "Sitevisit_count",
    }).getFirst();
    //return [record?.field_value, record?.id];

    const fieldVal = record?.field_value;
    const id = record?.id;

    return NextResponse.json(
        { message: "Success", fieldVal, id },
        { status: 200 }
    );
}
