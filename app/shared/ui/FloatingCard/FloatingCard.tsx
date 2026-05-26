"use client";

import {FloatingCardProps} from "./types";
import {ReactElement} from "react";


export default function FloatingCard(props: FloatingCardProps): ReactElement {
    return (
        <>
            <div
                className={`absolute flex h-16 w-16 animate-bounce items-center justify-center rounded-2xl border 
                            border-white/60 bg-white/40 text-2xl shadow-xl backdrop-blur-md ${props.className}`}
            >
                {props.icon}
            </div>
        </>
    )
}