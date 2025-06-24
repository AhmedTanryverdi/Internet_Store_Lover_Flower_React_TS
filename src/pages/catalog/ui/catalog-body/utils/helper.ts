import type { ApiSchemas } from "@/shared/api/schema";

type FlowerType = ApiSchemas["flower"];

export function sortFlowers(data: FlowerType[], sortOrder: string) {
    const sortedArray = [...data];
	sortedArray.sort((a, b) => {
		const priceA = a.price ?? Number.MAX_SAFE_INTEGER;
		const priceB = b.price ?? Number.MAX_SAFE_INTEGER;
		const ratingA = a.rating ?? 5;
		const ratingB = b.rating ?? 5;

		if (sortOrder === "rating") {
			return ratingB - ratingA;
		} else if (sortOrder === "asc") {
			return priceA - priceB;
		} else if (sortOrder === "desc") {
			return priceB - priceA;
		}

		return 0;
	});

	return sortedArray;
}

