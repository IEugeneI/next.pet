import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Address hub contacts",
    description: "Address hub contacts",
};
export default function Contact() {
    return (
        <>
            <section className="w-full px-6 py-20 text-white">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                            For Contact
                        </h1>
                        <p className="mx-auto mt-8 max-w-3xl text-white/70">
    <span className="break-all text-lg text-[#6d5dfc] sm:text-xl md:text-2xl">
        eugenetrytobecomedeveloper@gmail.com
    </span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}