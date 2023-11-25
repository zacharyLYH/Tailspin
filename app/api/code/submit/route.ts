import { NextResponse } from "next/server";
import { xata } from "@/lib/xata_client";
import axios from "axios";

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

/*
This is the entry point after code gets submitted. At the moment, this endpoint and its children endpoints are not protected. In the future, these routes need to be protected from DOS or spam attacks. 

Warning: 
This endpoint can get confusing because we've decoupled the functionalities we require into their own endpoints. The benefits of this approach is a decoupled service and easier debugging efforts. The downside is that it might be harder to reason with its correctness because of added complexity. Moreover, another downside is that every endpoint will need to be protected against DOS and spam attacks as mentioned above, which is a small overhead to the entire process. 

Flow:
User makes request
↓ User's wait ends in this step.
Increment the submit counter (api)
↓ 
Make the call to the OpenAI wrapper (api)
↓ 
On a successful OpenAI call, call the email generator (api)
*/

export async function POST(req: Request) {
    try {
        // Extract the host and protocol from the incoming request
        const url = new URL(req.url);
        const baseUrl = `${url.protocol}//${url.host}`;

        // Use the base URL for Axios requests
        axios.put(`${baseUrl}/api/increment/submit`, {});
        const body = await req.json();

        axios.post(`${baseUrl}/api/code/score`, body);

        return NextResponse.json({ message: "Accepted" }, { status: 202 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "Error occurred" },
            { status: 500 }
        );
    }
}
