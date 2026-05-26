"use client";


export default function StormAnimation() {
    return (
        <div className="absolute inset-0 bg-[#0b1026]/30">
            <div className="absolute right-24 top-10 h-28 w-28 animate-pulse rounded-full bg-purple-500/30 blur-2xl" />

            <div className="absolute right-28 top-12 animate-[flash_3s_ease-in-out_infinite] text-7xl text-yellow-200 drop-shadow-[0_0_30px_rgba(254,240,138,0.9)]">
                ⚡
            </div>
        </div>
    );
}