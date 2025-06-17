import React from "react";
import { FilterSection } from "./ui/FilterSection";
import { RangeSlider } from "./ui/range-slider/RangeSlider";
import { useSelector } from "react-redux";
import { useAppDispatch, type RooteState } from "@/app/store";
import type { CheckboxFilterType, OptionsType } from "@/shared/lib/types";
import { changeFilter } from "@/features/slices/sidebar-filter/sidebarFilterSlice";
import "./styles.scss";

export const SidebarProductsFilter: React.FC = (): React.JSX.Element => {
	const filters = useSelector<RooteState, CheckboxFilterType[]>(
		(state) => state.sideBarFilter.checkboxFilters
	);

	const dispatch = useAppDispatch();

	const handleCheckboxChange = (option: OptionsType) => {
		const updatedFilters: CheckboxFilterType[] = filters.map((section) => ({
			...section,
			options: section.options.map((opt) =>
				opt.id === option.id ? { ...opt, checked: !opt.checked } : opt
			),
		}));

		dispatch(changeFilter(updatedFilters));
	};

	return (
		<aside className="aside-product-filter">
			<div className="aside-product-filter__content">
				{filters.map((item, index) => {
					return (
						<FilterSection
							key={index}
							title={item.title}
							options={item.options}
							onChange={handleCheckboxChange}
						/>
					);
				})}
				<RangeSlider />
			</div>
		</aside>
	);
};
