"use client";

import {AirQualityWidgetProps} from "@/app/widgets/airQualityWidget/types";

export default function AirQualityWidget(props:AirQualityWidgetProps) {
    return (
        <aside
            className="mt-6 w-full rounded-[32px] border border-white/15 bg-white/10 p-6 text-white shadow-2xl backdrop-blur-2xl lg:absolute lg:right-full lg:top-32 lg:mr-6 lg:mt-0 lg:w-[300px]">
            <div>
                <p className="text-sm text-white/60">Air quality</p>
                <h2 className="mt-1 text-2xl font-bold">{props.place}</h2>
            </div>

            <div className="mt-8">
                <p className="text-6xl font-bold">{props.quality_number}</p>
                <p className="mt-2 text-sm text-white/70">{props.quality}</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-white/50">AQI US</p>
                    <p className="mt-1 font-semibold">{props.aqi_us}</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-white/50">AQI CN</p>
                    <p className="mt-1 font-semibold">{props.aqi_cn}</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-white/50">Main</p>
                    <p className="mt-1 font-semibold">{props.main}.5</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-white/50">Humidity</p>
                    <p className="mt-1 font-semibold">{props.humidity}%</p>
                </div>
            </div>
        </aside>
    )
}