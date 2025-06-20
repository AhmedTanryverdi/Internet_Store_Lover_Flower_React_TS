import { useAppDispatch, type RooteState } from "@/app/store";
import { setCheckboxFilter } from "@/features/slices/sidebar-filter/sidebarFilterSlice";
import type { CheckboxFilterType, OptionsType } from "@/shared/lib/types";
import { useSelector } from "react-redux";

export const useSettingFilter = () => {
	const filters = useSelector<RooteState, CheckboxFilterType[]>(
		(state) => state.sideBarFilter.checkboxFilters
	);

	const rangeFilter = useSelector<RooteState, { min: number; max: number }>(
		(state) => state.sideBarFilter.rangeFilter
	);

	const dispatch = useAppDispatch();

	const handleCheckboxChange = (option: OptionsType) => {
		const updatedFilters: CheckboxFilterType[] = filters.map((section) => ({
			...section,
			options: section.options.map((opt) =>
				opt.id === option.id ? { ...opt, checked: !opt.checked } : opt
			),
		}));

		dispatch(setCheckboxFilter(updatedFilters));
	};

	return {
		min: rangeFilter.min,
		max: rangeFilter.max,
		handleCheckboxChange,
        filters
	};
};
