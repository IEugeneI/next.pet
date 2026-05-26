"use client";


export default function SnowAnimation() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 36 }).map((_, index) => (
                <span
                    key={index}
                    className="absolute h-2 w-2 animate-bounce rounded-full bg-white/80"
                    style={{
                        left: `${index * 3}%`,
                        top: `${(index % 8) * 22}px`,
                        animationDelay: `${index * 0.12}s`,
                        animationDuration: "2.5s",
                    }}
                />
            ))}
        </div>
    );
}