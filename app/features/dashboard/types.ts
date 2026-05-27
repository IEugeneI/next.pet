export type PlaceProps = {
    lat: string,
    long: string,
    state: string,
    country: string,
}

export type WeatherProps = {
    location: string;
    temp_c: number;
    condition: string;
    icon: string;
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

export type AlarmProps = {
    state: string,
    now: boolean,
    changed: string,
}