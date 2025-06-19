import type { CheckboxFilterType } from "@/shared/lib/types";

export function buildUrlWithFilter(filters: CheckboxFilterType[]) {
	const params = new URLSearchParams();

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
	return `/catalog?${params}`;
}
