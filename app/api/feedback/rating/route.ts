import { NextResponse } from "next/server";
import { xata } from "@/lib/xata_client";

/*
When speaking about ratings, ordering matters because we are not going to send key value pairs in the request.
They will always be in this order: [uxRating, overallRating, funRating]
*/

const RatingChart = new Map<string, number>([
    ["Ux_Rating", 0],
    ["Overall_Rating", 1],
    ["Fun_Rating", 2],
]);

const order = ["Ux_Rating", "Overall_Rating", "Fun_Rating"];

async function directDB_submitRating(newRating: Map<string, string>) {
    const operations: any[] = [];

    newRating.forEach((value, key) => {
        operations.push({
            update: {
                table: "Site",
                id: key,
                fields: {
                    field_value: value,
                },
            },
        });
    });

    const result = await xata.transactions.run(operations);
    return result;
}

async function directDB_getAllRatings() {
    const record = await xata.db.Site.filter({
        $any: [
            { field_name: "Overall_Rating" },
            { field_name: "Ux_Rating" },
            { field_name: "Fun_Rating" },
        ],
    }).getMany();
    return record;
}

/*
Ratings are stored as per the following schema:
<Name of rating> : <Total Score-Number of rates>

For example:
- Overall_Rating : 500-100
    - This states that we currently have a total score of 500 over 100 ratings. Which means, on average, we get 5 stars from every rating.
- Ux_Rating : 100-30
    - Implies we have about 3.3333333... stars per rate
- Fun_Rating : 0-2345
    - We got 0 stars on average
*/
export async function PUT(req: Request) {
    const body = await req.json();

    const { payload }: { payload: number[] } = body;

    const currentRatings = await directDB_getAllRatings();

    const newRatings = new Map<string, string>();

    for (let i = 0; i < currentRatings.length; i++) {
        const id: string = currentRatings[i].id;
        let newValues: string;
        const [currSum, numOfRaters] = currentRatings[i]
            .field_value!.split("-")
            .map(Number);

        if (RatingChart.has(currentRatings[i].field_name!)) {
            const chartValue = RatingChart.get(currentRatings[i].field_name!);
            newValues = `${String(currSum + payload[chartValue!])}-${String(
                numOfRaters + 1
            )}`;
        } else {
            return NextResponse.json(
                { message: "Payload didn't add up" },
                { status: 400 }
            );
        }
        newRatings.set(id, newValues);
    }

    const resp = await directDB_submitRating(newRatings);
    if (!resp?.results || resp.results.length === 0) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
        );
    }

    return NextResponse.json({ message: "Success" }, { status: 200 });
}

export async function GET() {
    const currentRatings = await directDB_getAllRatings();
    const resp: { field_name: string; field_value: string }[] = [];

    for (const fieldName of order) {
        const ratingObj = currentRatings.find(
            (r) => r.field_name === fieldName
        );
        if (ratingObj) {
            resp.push({
                field_name: ratingObj.field_name!,
                field_value: ratingObj.field_value!,
            });
        } else {
            return NextResponse.json(
                { message: "Something went wrong" },
                { status: 500 }
            );
        }
    }

    if (!resp || resp.length === 0) {
        return NextResponse.json(
            { message: "Something went wrong" },
            { status: 500 }
        );
    }

    return NextResponse.json(
        { message: "Success", data: resp },
        { status: 200 }
    );
}
