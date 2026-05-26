import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
    const query = request.nextUrl.searchParams.get("q");

    if (!query) {
        return NextResponse.json([]);
    }

    const params = new URLSearchParams({
        key: process.env.WEATHER_API_KEY,
        q: query,
    });

    const response = await fetch(
        `${process.env.BASE_WEATHER_URL}?${params.toString()}`,
        {
            headers: {
                "User-Agent": "AddressHub/1.0",
            },
        }
    );

    const data = await response.json();

    return NextResponse.json(data);
}