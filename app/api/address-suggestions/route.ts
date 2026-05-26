import {NextRequest, NextResponse} from "next/server";

export async function GET(request: NextRequest) {
    const query = request.nextUrl.searchParams.get("q");

    if (!query) {
        return NextResponse.json([]);
    }

    const params = new URLSearchParams({
        q: query,
        format: "jsonv2",
        addressdetails: "1",
        limit: "5",
        "accept-language": "en",
    });

    const response = await fetch(
        process.env.BASE_GEOCODE_URL + `?${params.toString()}`,
        {
            headers: {
                "User-Agent": "AddressHub/1.0",
            },
        }
    );

    const data = await response.json();

    return NextResponse.json(data);
}