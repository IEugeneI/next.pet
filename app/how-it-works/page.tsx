import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Address hub how it works",
    description: "Address hub  how it works",
};

export default function HowItWorks() {
    return (
        <section className="w-full px-6 py-20 text-white">
            <div className="mx-auto max-w-4xl">
                <div className="text-center">
                    <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                        How it works
                    </h1>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70">
                        AddressHub helps users quickly access important local
                        information by combining several data sources into one
                        clean and modern interface.
                    </p>
                </div>

                <div className="mt-20 space-y-12">
                    <div>
                        <h2 className="text-3xl font-bold text-[#6d5dfc]">
                            Search any location
                        </h2>

                        <p className="mt-4 text-lg leading-8 text-white/70">
                            Enter a city, address or any place in the search
                            field. The application automatically detects the
                            location and prepares local information for the
                            selected area.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-[#6d5dfc]">
                            Weather and air quality
                        </h2>

                        <p className="mt-4 text-lg leading-8 text-white/70">
                            AddressHub loads current weather conditions,
                            temperature, humidity and air quality indicators so
                            users can better understand environmental conditions
                            around them.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-[#6d5dfc]">
                            Emergency alerts
                        </h2>

                        <p className="mt-4 text-lg leading-8 text-white/70">
                            For supported regions, the application can display
                            emergency and alarm information in real time,
                            helping users stay informed about important local
                            events.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-[#6d5dfc]">
                            Clean experience
                        </h2>

                        <p className="mt-4 text-lg leading-8 text-white/70">
                            All information is presented in responsive glass
                            styled widgets designed for desktop and mobile
                            devices using modern technologies such as Next.js,
                            React, TypeScript and Tailwind CSS.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}