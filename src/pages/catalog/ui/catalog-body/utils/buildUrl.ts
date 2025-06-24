import type { CheckboxFilterType, TagType } from "@/shared/lib/types";

export function buildUrlWithFilter(
	filters: CheckboxFilterType[],
	min: number,
	max: number,
	tags: TagType
) {
	const params = new URLSearchParams();
	params.set("price_min", `${min}&`);
	params.set("price_max", `${max}&`);
	params.set("tags", `${tags}&`);

	filters.forEach((filter) => {
		const selectedOptions = filter.options.filter(
			(option) => option.checked
		);
		if (selectedOptions.length > 0) {
			params.set(
				filter.title.toLocaleLowerCase().replace(/ /g, ""),
				selectedOptions.map((opt) => opt?.label).join(",")
			);
		}
	});
	return `http://localhost:3000/catalog?${params}`;
}

export function createUrl(
	filterSetting: CheckboxFilterType[],
	min: number,
	max: number,
	tags: TagType
) {
	return decodeURIComponent(
		buildUrlWithFilter(filterSetting, min, max, tags)
	);
}
