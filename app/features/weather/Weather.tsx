"use client";

import SunnyAnimation from "./ui/SunnyAnimation";
import CloudyAnimation from "./ui/CloudyAnimation";
import FogAnimation from "./ui/FogAnimation";
import RainAnimation from "./ui/RainAnimation";
import SnowAnimation from "./ui/SnowAnimation";
import StormAnimation from "./ui/StormAnimation";
import {getWeather} from "./api/getWeather";
import {GetWeatherProps, WeatherType} from "./types";
import {useEffect, useState} from "react";
import {mapWeatherConditionToType} from "./model/mapWeatherConditionToType";

export const weatherAnimationMap = {
    [WeatherType.SUNNY]: SunnyAnimation,
    [WeatherType.CLOUDY]: CloudyAnimation,
    [WeatherType.RAINY]: RainAnimation,
    [WeatherType.SNOWY]: SnowAnimation,
    [WeatherType.STORMY]: StormAnimation,
    [WeatherType.FOGGY]: FogAnimation,
};

export const WEATHER_ICONS: Record<WeatherType, string> = {
    [WeatherType.SUNNY]: "☀️",
    [WeatherType.CLOUDY]: "⛅",
    [WeatherType.RAINY]: "🌧️",
    [WeatherType.SNOWY]: "❄️",
    [WeatherType.STORMY]: "⛈️",
    [WeatherType.FOGGY]: "🌫️",
};
export default function Weather(props: GetWeatherProps) {
    const [weatherType, setWeatherType] = useState<WeatherType | null>(null);

    useEffect(() => {
        const loadWeather = async () => {
            const weather = await getWeather(props);

            const weatherType = mapWeatherConditionToType(
                weather.current.condition.text
            );
            props.onWeatherSelect({
                location: weather.location.name,
                temp_c: weather.current.temp_c,
                condition: weather.current.condition.text,
                icon: WEATHER_ICONS[weatherType],
            })
            setWeatherType(weatherType);
        };

        loadWeather();
    }, [props.lat, props.long]);

    const AnimationComponent = weatherType ? weatherAnimationMap[weatherType] : null;

    return (
        <>
            <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-56 overflow-hidden">
                {AnimationComponent && <AnimationComponent/>}
            </div>
        </>
    )
}