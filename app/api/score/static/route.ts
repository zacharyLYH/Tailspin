import { NextResponse } from "next/server";
import resemble from "resemblejs";

export async function POST(req: Request) {
    const body = await req.json();
    const { img1, img2 }: { img1: string; img2: string } = body;
    if (!img1) {
        return NextResponse.json(
            { message: "No prompt image given" },
            { status: 400 }
        );
    }
    if (!img2) {
        return NextResponse.json(
            { message: "No user generated image given" },
            { status: 400 }
        );
    }
    let res: resemble.ComparisonResult = {} as resemble.ComparisonResult;
    resemble(img2)
        .compareTo(img1)
        .outputSettings({
            largeImageThreshold: 1200,
        })
        .onComplete((data) => {
            res = data;
            console.log(res);
        });
    return NextResponse.json(res);
}
