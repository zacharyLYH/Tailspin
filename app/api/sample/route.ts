import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        message: 'Succesfully called sample API route, "/api/sample".',
    });
}
