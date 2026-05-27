"use client";

import {QuickLocationButton} from "@/app/shared/ui/QuickLocationButton";
import {useState} from "react";
import {getAddressSuggestions} from "@/app/features/search/api/getAddressSuggestions";
import {searchProps} from "@/app/features/search/types";

export default function Search({onPlaceSelect, onSearchStart}: searchProps) {
    const [location, setLocation] = useState('');
    const [suggestions, setSuggestions] = useState<any[]>([]);
    const [isResultOpen, setIsResultOpen] = useState(false);
    const handleSearch = async () => {
        onSearchStart();
        const suggestions = await getAddressSuggestions(location);

        setSuggestions(suggestions);
        setIsResultOpen(true);
    };

    const handleSetPlace = async (item: any) => {
        if (item.address.city == "Kyiv") {
            item.address.state = "Kyiv Oblast";
        }

        onPlaceSelect({
            lat: item.lat,
            long: item.lon,
            country: item.address.country,
            state: item.address.state,
        })
    };
    return (
        <div>
            <div className="rounded-[32px] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-2xl">
                <div className="flex flex-col gap-4 md:flex-row">
                    <div className="flex flex-1 items-center gap-4 rounded-2xl bg-white/95 px-5 py-5 shadow-lg">
                        <div
                            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6d5dfc]/10 text-2xl">
                            📍
                        </div>

                        <input
                            type="text"
                            placeholder="Enter address..."
                            className="w-full bg-transparent text-base font-medium text-[#111827] outline-none placeholder:text-gray-400"
                            // className="relative flex flex-1 items-center gap-4 rounded-2xl bg-white/95 px-5 py-5 shadow-lg"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                        {isResultOpen && (
                            <div
                                className="absolute left-0 right-0 top-[calc(100%+12px)] z-50 max-h-80 overflow-y-auto rounded-3xl border border-white/20 bg-white/95 p-2 shadow-2xl backdrop-blur-xl">
                                {suggestions.length > 0 ? (
                                    suggestions.map((item) => (
                                        <button
                                            key={item.place_id}
                                            onClick={() => {
                                                setLocation(item.display_name);
                                                setIsResultOpen(false);
                                                handleSetPlace(item)
                                            }}
                                            className="w-full rounded-2xl px-4 py-3 text-left transition hover:bg-[#6d5dfc]/10 cursor-pointer"
                                        >
                                            <p className="text-sm font-semibold text-[#111827]">
                                                {item.name || item.display_name}
                                            </p>

                                            <p className="mt-1 line-clamp-2 text-xs leading-5 text-gray-500">
                                                {item.display_name}
                                            </p>

                                            <div className="mt-2 flex gap-3 text-[11px] text-gray-400">
                                                <span>Lat: {item.lat}</span>
                                                <span>Lng: {item.lon}</span>
                                            </div>
                                        </button>
                                    ))
                                ) : (
                                    <div className="px-4 py-5 text-center">
                                        <p className="text-sm font-semibold text-[#111827]">
                                            Nothing found
                                        </p>
                                        <p className="mt-1 text-xs text-gray-500">
                                            Try another address or city.
                                        </p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <button
                        onClick={handleSearch}
                        className="rounded-2xl bg-[#6d5dfc] px-8 py-5 text-sm font-semibold text-white shadow-xl shadow-[#6d5dfc]/30 transition hover:-translate-y-1 hover:bg-[#5d4ef5] cursor-pointer">
                        Search Address
                    </button>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                    <QuickLocationButton label={"Kyiv"} onSelect={setLocation}/>
                    <QuickLocationButton label={"Lviv"} onSelect={setLocation}/>
                    <QuickLocationButton label={"Odesa"} onSelect={setLocation}/>
                    <QuickLocationButton label={"Kharkiv"} onSelect={setLocation}/>
                </div>
            </div>
        </div>
    )
}