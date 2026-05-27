

export async function getAlarms(): Promise<string[]> {

    const response = await fetch(`/api/alarms`);

    if (!response.ok) {
        throw new Error("Failed to fetch address suggestions");
    }

    return response.json();
}