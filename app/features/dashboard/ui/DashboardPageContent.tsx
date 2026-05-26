"use client";

import Link from "next/link";
import {Weather} from "@/app/features/weather";
import {useState} from "react";
import {PlaceProps, WeatherProps} from "../types";
import {Search} from "@/app/features/search";
import {WeatherWidget} from "@/app/widgets/weather";

export default function DashboardPageContent() {
    const [place, setPlace] = useState<PlaceProps | null>(null)
    const [weather, setWeather] = useState<WeatherProps | null>(null)

    return (
        <main className="relative flex min-h-screen items-start justify-center overflow-hidden bg-[#f8e4da] px-6 ">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/background.png')",
                }}
            />

            <div className="absolute inset-0 bg-[#1a1333]/50"/>

            <div className="relative z-10 w-full max-w-4xl">
                {weather && (
                    <WeatherWidget location={weather.location} temp_c={weather.temp_c} condition={weather.condition} icon={weather.icon}/>
                )}

                <div className="mb-10 text-center">
                    <Link
                        href="/"
                        className="mb-6 inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
                    >
                        ← Back to home
                    </Link>

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
                }}/>

                {place && (
                    <Weather lat={place.lat} long={place.long} onWeatherSelect={setWeather}/>
                )}
            </div>

        </main>
    )
}