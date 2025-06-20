import React from "react";
import { FilterSection } from "./ui/FilterSection";
import { RangeSlider } from "./ui/range-slider/RangeSlider";
import { useSettingFilter } from "./utils/customHooks";
import "./styles.scss";

export const SidebarProductsFilter: React.FC = (): React.JSX.Element => {
	const { min, max, handleCheckboxChange, filters } = useSettingFilter();

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
				<RangeSlider min={min} max={max} />
			</div>
		</aside>
	);
};
