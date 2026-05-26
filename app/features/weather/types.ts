export type GetWeatherProps = {
    lat: string,
    long: string,
    onWeatherSelect: (geo: WeatherProps) => void;
}

export enum WeatherType {
    SUNNY = "sunny",
    CLOUDY = "cloudy",
    RAINY = "rainy",
    SNOWY = "snowy",
    STORMY = "stormy",
    FOGGY = "foggy",
}

export type WeatherProps = {
    location: string;
    temp_c: number;
    condition: string;
    icon: string;
}