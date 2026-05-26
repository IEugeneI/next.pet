"use client";

import {QuickLocationButtonProps} from "@/app/shared/ui/QuickLocationButton/types";
import {ReactElement} from "react";

export default function QuickLocationButton(props: QuickLocationButtonProps): ReactElement {
    return (
        <>
            <button
                onClick={() => props.onSelect(props.label)}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md transition hover:bg-white/20 cursor-pointer">
                {props.label}
            </button>
        </>
    )
}