import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "About Address hub",
    description: "About Address hub",
};

const items = [
    {
        icon: "🌤️",
        title: "Weather",
        text: "Real-time weather information with current temperature, conditions and local environment data.",
    },
    {
        icon: "🌫️",
        title: "Air Quality",
        text: "Monitor AQI levels, pollution indicators and humidity to better understand local environmental conditions.",
    },
    {
        icon: "🚨",
        title: "Emergency Alerts",
        text: "Regional alert monitoring for supported countries with real-time emergency status updates.",
    },
];
export default function About() {
    return (
        <section className="w-full px-6 py-16 text-white">
            <div className="mx-auto w-full max-w-4xl px-6">
                <div className=" mb-10  text-center">
                    <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                        About AddressHub
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
                        AddressHub helps you quickly check weather, air quality
                        and emergency alerts for any selected location.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 pb-32 lg:grid-cols-3">
                    {items.map((item) => (
                        <div key={item.title}>
                            <div className="text-5xl">
                                {item.icon}
                            </div>

                            <h2 className="mt-6 text-2xl font-bold text-[#6d5dfc]">
                                {item.title}
                            </h2>

                            <p className="mt-4 leading-7 text-white/70">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mx-auto mt-8 max-w-3xl rounded-[32px] border border-white/15 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-2xl">
                    <h2 className="text-2xl font-bold">
                        Built for simplicity
                    </h2>

                    <p className="mt-4 leading-7 text-white/70">
                        A clean local dashboard built with Next.js, React,
                        TypeScript and Tailwind CSS.
                    </p>
                </div>
            </div>
        </section>
    );
}