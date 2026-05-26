

export async function getAddressSuggestions(placeName:string): Promise<string[]> {
    if (!placeName.trim()) {
        return [];
    }

    const params = new URLSearchParams({
        q: placeName,
    });

    const response = await fetch(`/api/address-suggestions?${params}`);

    if (!response.ok) {
        throw new Error("Failed to fetch address suggestions");
    }

    return response.json();
}