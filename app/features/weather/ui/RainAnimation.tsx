"use client";



export default function RainAnimation() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 32 }).map((_, index) => (
                <span
                    key={index}
                    className="absolute h-12 w-px animate-bounce bg-blue-200/70"
                    style={{
                        left: `${index * 3.5}%`,
                        top: `${(index % 6) * 24}px`,
                        animationDelay: `${index * 0.08}s`,
                        animationDuration: "0.8s",
                    }}
                />
            ))}
        </div>
    );
}