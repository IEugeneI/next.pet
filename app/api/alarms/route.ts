import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
    const response = await fetch(
        `${process.env.ALARMS_URL}`,
        {
            headers: {
                "User-Agent": "AddressHub/1.0",
            },
        }
    );

    const data = await response.json();

    return NextResponse.json(data);
}