"use client";




export default function FogAnimation() {
    return (
        <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
            <div className="absolute left-[-20%] top-8 h-16 w-[140%] animate-pulse rounded-full bg-white/40 blur-xl" />

            <div className="absolute left-[-30%] top-24 h-20 w-[160%] animate-bounce rounded-full bg-white/30 blur-2xl" />

            <div className="absolute left-[-10%] top-44 h-14 w-[130%] animate-pulse rounded-full bg-white/25 blur-xl" />
        </div>
    );
}