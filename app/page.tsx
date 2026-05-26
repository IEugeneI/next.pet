import { FloatingCard } from "@/app/shared/ui/FloatingCard";
import Link from 'next/link'

export default function Home() {
  return (
      <main className="relative min-h-screen overflow-hidden bg-[#f8e4da]">
        <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/background.png')",
            }}
        />

        <div className="absolute inset-0 bg-[#1a1333]/40" />

        <div className="relative z-10">
          <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
            <div className="flex items-center gap-2 font-semibold">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#111827] text-white">
                ⌖
              </div>
              AddressHub
            </div>

            <div className="hidden items-center gap-10 text-sm md:flex">
              <a href="#">Features</a>
              <a href="#">How it works</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>

            <button className="rounded-xl bg-[#111827] px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-105 cursor-pointer">
              <Link href={'/dashboard'}>Get Started</Link>
            </button>
          </nav>

          <section className="relative mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center px-6 pb-16 md:grid-cols-2">
            <div className="z-10 max-w-xl">
              <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
                Everything you <br />
                need for{" "}
                <span className="text-[#6d5dfc]">your address</span>, <br />
                in one place
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-gray-700">
                Weather, alarms, news and traffic — all personalized for the place
                that matters to you.
              </p>

              <div className="mt-10 flex items-center gap-5">
                <button className="rounded-xl bg-[#111827] px-7 py-4 text-sm font-semibold text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl cursor-pointer">
                  <Link href={'/dashboard'}>Get Started</Link>
                </button>

                <button className="flex items-center gap-2 text-sm font-medium text-[#111827]">
                  Learn more
                  <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#111827]">
                  →
                </span>
                </button>
              </div>
            </div>

            <div className="relative mt-16 h-[480px] md:mt-0">
              <div className="absolute inset-x-0 bottom-0 h-72 rounded-[50%] bg-[#6d5dfc]/20 blur-3xl" />

              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[#7c6cff]/30 blur-3xl" />

              <div className="absolute bottom-16 left-1/2 h-44 w-28 -translate-x-1/2 rounded-full bg-[#6d5dfc] shadow-2xl shadow-[#6d5dfc]/50">
                <div className="absolute left-1/2 top-10 h-12 w-12 -translate-x-1/2 rounded-full bg-[#f8e4da]" />
                <div className="absolute -bottom-10 left-1/2 h-20 w-20 -translate-x-1/2 rotate-45 bg-[#6d5dfc]" />
              </div>

              <div className="absolute bottom-24 left-8 h-1 w-[520px] rotate-[-12deg] rounded-full bg-gradient-to-r from-transparent via-[#7c6cff] to-transparent shadow-[0_0_25px_#7c6cff]" />
              <div className="absolute bottom-36 left-0 h-1 w-[600px] rotate-[8deg] rounded-full bg-gradient-to-r from-transparent via-[#7c6cff] to-transparent shadow-[0_0_25px_#7c6cff]" />

              <FloatingCard className="left-20 top-16" icon="☁️" />
              <FloatingCard className="right-20 top-10" icon="🔔" />
              <FloatingCard className="left-4 top-44" icon="🚗" />
              <FloatingCard className="right-8 top-56" icon="📰" />
            </div>
          </section>
        </div>
      </main>
  );
}