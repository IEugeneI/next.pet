import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
    const lat = request.nextUrl.searchParams.get("lat");
    const lon = request.nextUrl.searchParams.get("lon");

    if (!lat || !lon) {
        return NextResponse.json([]);
    }

    const params = new URLSearchParams({
        lat:lat,
        lon:lon,
        key: process.env.WEATHER_QUALITY_API_KEY,
    });

    const response = await fetch(
        `${process.env.WEATHER_QUALITY_URL}?${params.toString()}`,
        {
            headers: {
                "User-Agent": "AddressHub/1.0",
            },
        }
    );

    const data = await response.json();

    return NextResponse.json(data);
}