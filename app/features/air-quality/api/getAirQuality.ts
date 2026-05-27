import {getAirQualityProps} from "../types";

export async function getAirQuality(props: getAirQualityProps): Promise<string[]> {
    if (!props.lon.trim()) {
        return [];
    }

    if (!props.lat.trim()) {
        return [];
    }

    const params = new URLSearchParams({
        lat: String(props.lat),
        lon: String(props.lon),
    });

    const response = await fetch(`/api/air-quality?${params}`);

    if (!response.ok) {
        throw new Error("Failed to fetch address suggestions");
    }

    return response.json();
}