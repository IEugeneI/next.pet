import {WeatherType} from "../types";

export function mapWeatherConditionToType(
    condition: string
): WeatherType {
    const value = condition.toLowerCase();

    if (value.includes("thunder")) {
        return WeatherType.STORMY;
    }

    if (value.includes("snow") || value.includes("sleet") || value.includes("blizzard")) {
        return WeatherType.SNOWY;
    }

    if (value.includes("rain") || value.includes("drizzle") || value.includes("shower")) {
        return WeatherType.RAINY;
    }

    if (value.includes("fog") || value.includes("mist") || value.includes("haze")) {
        return WeatherType.FOGGY;
    }

    if (value.includes("cloud") || value.includes("overcast")) {
        return WeatherType.CLOUDY;
    }

    if (value.includes("sunny") || value.includes("clear")) {
        return WeatherType.SUNNY;
    }

    return WeatherType.CLOUDY;
}