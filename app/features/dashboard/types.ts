export type PlaceProps = {
    lat: string,
    long: string,
}

export type WeatherProps = {
    location: string;
    temp_c: number;
    condition: string;
    icon: string;
}