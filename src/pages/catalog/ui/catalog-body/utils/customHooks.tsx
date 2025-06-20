import type { RooteState } from "@/app/store";
import type { ApiSchemas } from "@/shared/api/schema";
import type { CheckboxFilterType, TagType } from "@/shared/lib/types";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { buildUrlWithFilter } from "./buildUrl";

type FlowerType = ApiSchemas["flower"];

export const useFetchFlowers = () => {
	const filterSetting = useSelector<RooteState, CheckboxFilterType[]>(
		(state) => state.sideBarFilter.checkboxFilters
	);

	const rangeFilter = useSelector<RooteState, { min: number; max: number }>(
		(state) => state.sideBarFilter.rangeFilter
	);

	const tags = useSelector<RooteState, TagType>(
		(state) => state.sideBarFilter.tags
	);

	const { isPending, error, data }: UseQueryResult<FlowerType[]> = useQuery({
		queryKey: ["products", filterSetting, rangeFilter, tags],
		queryFn: async () => {
			const URL = decodeURIComponent(
				buildUrlWithFilter(
					filterSetting,
					rangeFilter.min,
					rangeFilter.max,
					tags
				)
			);
			const response = await fetch(URL);
			const responseData = (await response.json()) as FlowerType[];
			return responseData;
		},
	});
	return { isPending, error, data };
};
