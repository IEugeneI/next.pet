import {GetWeatherProps} from "../types";

export async function getWeather(props: GetWeatherProps): Promise<string[]> {
    if (!props.long.trim()) {
        return [];
    }

    if (!props.lat.trim()) {
        return [];
    }

    const params = new URLSearchParams({
        q: props.lat + ','+props.long,
    });

    const response = await fetch(`/api/weather?${params}`);

    if (!response.ok) {
        throw new Error("Failed to fetch address suggestions");
    }

    return response.json();
}