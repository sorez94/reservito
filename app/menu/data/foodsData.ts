export async function fetchFoods() {
    const response = await fetch("http://localhost:3001/foods", {
        cache: "no-store", // ✅ Caches the request
        next: { revalidate: 24*60*60 },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch foods");
    }
    return response.json();
}
