"use client";



export default function CloudyAnimation() {
    return (
        <div className="absolute inset-0">
            <Cloud className="left-10 top-12 animate-[cloud_12s_ease-in-out_infinite]" />
            <Cloud className="right-20 top-20 scale-125 animate-[cloud_16s_ease-in-out_infinite]" />
            <Cloud className="left-1/2 top-8 scale-75 animate-[cloud_14s_ease-in-out_infinite]" />
        </div>
    );
}

function Cloud({ className }: { className: string }) {
    return (
        <div className={`absolute h-16 w-40 rounded-full bg-white/40 blur-sm ${className}`}>
            <div className="absolute -top-6 left-8 h-20 w-20 rounded-full bg-white/50" />
            <div className="absolute -top-4 right-8 h-16 w-16 rounded-full bg-white/50" />
        </div>
    );
}