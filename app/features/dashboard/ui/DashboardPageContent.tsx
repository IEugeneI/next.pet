"use client";

import Link from "next/link";
import {Weather} from "@/app/features/weather";
import {useState} from "react";
import {PlaceProps, WeatherProps, AirQualityProps, AlarmProps} from "../types";
import {Search} from "@/app/features/search";
import {WeatherWidget} from "@/app/widgets/weather";
import {AirQuality} from "@/app/features/air-quality";
import {AirQualityWidget} from "@/app/widgets/airQualityWidget";
import {Alarm} from "@/app/features/alarm";
import {AlarmWidget} from "@/app/widgets/alarmWidget";

export default function DashboardPageContent() {
    const [place, setPlace] = useState<PlaceProps | null>(null);
    const [weather, setWeather] = useState<WeatherProps | null>(null);
    const [airQuality, setAirQuality] = useState<AirQualityProps | null>(null);
    const [alarm, setAlarm] = useState<AlarmProps | null>(null);

    const isLoading =
        place &&
        (
            !weather ||
            !airQuality ||
            (place.country === "Ukraine" && !alarm)
        );


    return (
        <section className="w-full">
            <div className="mx-auto w-full max-w-4xl px-6">
                <div className="mb-10 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                        Search your address
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
                        Get weather, alarms, traffic and local information for
                        any address in one place.
                    </p>
                </div>

                <Search onPlaceSelect={setPlace} onSearchStart={() => {
                    setPlace(null);
                    setWeather(null);
                    setAirQuality(null);
                    setAlarm(null);
                }}/>

                {!isLoading && weather && (
                    <WeatherWidget
                        location={weather.location}
                        temp_c={weather.temp_c}
                        condition={weather.condition}
                        icon={weather.icon}
                    />
                )}

                {!isLoading && airQuality && (
                    <AirQualityWidget
                        place={airQuality.place}
                        quality_number={airQuality.quality_number}
                        quality={airQuality.quality}
                        aqi_us={airQuality.aqi_us}
                        aqi_cn={airQuality.aqi_cn}
                        main={airQuality.main}
                        humidity={airQuality.humidity}
                    />
                )}

                {!isLoading && alarm && (
                    <AlarmWidget
                        region={alarm.region}
                        now={alarm.now}
                        changed={alarm.changed}
                    />
                )}

                {place && (
                    <Weather lat={place.lat} long={place.long} onWeatherSelect={setWeather}/>
                )}

                {place && (
                    <AirQuality lat={place.lat} lon={place.long} onSelect={setAirQuality}/>
                )}

                {place && place.country === "Ukraine" && (
                    <Alarm state={place.state} onSelect={setAlarm}/>
                )}
            </div>
        </section>
    )
}