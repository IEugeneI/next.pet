import {WeatherProps} from "@/app/features/weather/types";

export type getAirQualityProps = {
    lat: string,
    lon: string,
    onSelect: (props: WeatherProps) => void;
}

export type AirQualityProps = {
    place: string,
    quality_number: string,
    quality: string,
    aqi_us: string,
    aqi_cn: string,
    main: string,
    humidity: string,
}