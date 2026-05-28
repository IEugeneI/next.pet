import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Address hub highlights",
    description: "Address hub highlights",
};

export default function Highlights() {
    return (
        <section className="w-full px-6 py-20 text-white">
            <div className="mx-auto max-w-4xl">
                <div className="text-center">
                    <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                        Coming soon
                    </h1>
                </div>
            </div>
        </section>
    );
}