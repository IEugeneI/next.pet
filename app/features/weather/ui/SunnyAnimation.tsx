"use client";

export default function SunnyAnimation() {
    return (
        <div className="absolute right-16 top-10">
            <div className="relative h-28 w-28 animate-pulse rounded-full bg-yellow-300 shadow-[0_0_80px_rgba(253,224,71,0.8)]">
                <div className="absolute inset-[-24px] animate-spin rounded-full border border-yellow-200/40" />
                <div className="absolute inset-[-44px] animate-spin rounded-full border border-yellow-200/20 [animation-duration:10s]" />
            </div>
        </div>
    );
}