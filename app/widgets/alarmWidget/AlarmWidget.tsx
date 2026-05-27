"use client";

import {AlarmWidgetProps} from "./types";

export default function AlarmWidget(props: AlarmWidgetProps) {
    return (
        <aside
            className={`
                mt-6 w-full rounded-[32px] border p-6 text-white shadow-2xl backdrop-blur-2xl
                lg:absolute lg:left-full lg:top-32 lg:ml-6 lg:mt-0 lg:w-[300px]
                ${
                props.now
                    ? "animate-pulse border-red-400/40 bg-red-500/20"
                    : "border-green-400/30 bg-green-500/15"
            }
            `}
        >
            <div>
                <p className="text-sm text-white/60">Air alarm</p>

                <h2 className="mt-1 text-2xl font-bold">
                    {props.region}
                </h2>
            </div>

            <div className="mt-8">
                <p className="text-5xl font-bold">
                    {props.now ? "ALARM" : "SAFE"}
                </p>

                <p className="mt-2 text-sm text-white/70">
                    {props.now
                        ? "Air alarm is active"
                        : "No active alarm"}
                </p>
            </div>

            <div className="mt-8 rounded-2xl bg-white/10 p-4 text-sm">
                <p className="text-white/50">Changed</p>
                <p className="mt-1 font-semibold">
                    {props.changed}
                </p>
            </div>
        </aside>
    );
}