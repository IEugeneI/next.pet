"use client";

import {useEffect} from "react";
import {getAirQuality} from "./api/getAirQuality";
import {getAirQualityProps} from "./types";

function getAirQualityLabel(aqi: number): string {
    if (aqi <= 50) return "Good";
    if (aqi <= 100) return "Moderate";
    if (aqi <= 150) return "Unhealthy for Sensitive Groups";
    if (aqi <= 200) return "Unhealthy";
    if (aqi <= 300) return "Very Unhealthy";

    return "Hazardous";
}

export default function AirQuality(props: getAirQualityProps) {
    useEffect(() => {
        const loadAirQuality = async () => {
            const airQuality = await getAirQuality(props);
            // console.log(airQuality);
            if (airQuality.status == 'success') {
                props.onSelect({
                    place: airQuality.data.city,
                    quality_number: airQuality.data.current.pollution.aqicn,
                    quality: getAirQualityLabel(airQuality.data.current.pollution.aqicn),
                    aqi_us: airQuality.data.current.pollution.aqius,
                    aqi_cn: airQuality.data.current.pollution.aqicn,
                    main: airQuality.data.current.pollution.maincn,
                    humidity: airQuality.data.current.weather.hu,
                });
            }
        };

        loadAirQuality();
    }, [props.lat, props.long]);
}