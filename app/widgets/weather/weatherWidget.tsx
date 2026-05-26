"use client";

import {WeatherWidgetProps} from "@/app/widgets/weather/types";


export default function weatherWidget(props: WeatherWidgetProps) {
    return (
        <aside
            className="absolute right-full top-32 mr-6 hidden w-[300px] rounded-[32px] border border-white/15 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-2xl xl:block">
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-white/60">Current weather</p>
                    <h2 className="mt-1 text-2xl font-bold">{props.location}</h2>
                </div>

                <div className="text-5xl">{props.icon}</div>
            </div>

            <div className="mt-8">
                <p className="text-6xl font-bold">{props.temp_c}°</p>
                <p className="mt-2 text-sm text-white/70">{props.condition}</p>
            </div>
        </aside>
    )
}