import React, { useState } from "react";
import { FilterSection } from "./ui/FilterSection";
import "./styles.scss";
import { RangeSlider } from "./ui/range-slider/RangeSlider";

type OptionsType = {
	id: string;
	label: string;
	checked: boolean;
};

const initialFilters = [
	{
		title: "по свету",
		options: [
			{ id: "gentle", label: "нежные", checked: false },
			{ id: "bright", label: "яркие", checked: false },
		],
	},
	{
		title: "По цвету",
		options: [
			{ id: "white", label: "белый", checked: false },
			{ id: "yellow", label: "желтый", checked: false },
			{ id: "green", label: "зеленый", checked: false },
			{ id: "red", label: "красный", checked: false },
			{ id: "orange", label: "оранжевый", checked: false },
			{ id: "pink", label: "розовый", checked: false },
			{ id: "blue", label: "синий", checked: false },
		],
	},
	{
		title: "по формату",
		options: [
			{ id: "bouquet", label: "букет", checked: false },
			{ id: "inTheVase", label: "в вазе", checked: false },
			{ id: "inTheEnvelope", label: "в конверте", checked: false },
			{ id: "inTheShoppingCart", label: "в корзине", checked: false },
			{ id: "InTheHatbox", label: "в шляпной коробке", checked: false },
			{ id: "inTheMailbox", label: "в ящике", checked: false },
		],
	},
	{
		title: "по цвету",
		options: [
			{ id: "Alstroemeria", label: "Альстромерия", checked: false },
			{ id: "Anthurium", label: "Антуриум", checked: false },
			{ id: "Asparagus", label: "Аспарагус", checked: false },
			{ id: "Astilba", label: "Астильба", checked: false },
			{ id: "Astrancia", label: "Астранция", checked: false },
		],
	},
];

export const SidebarProductsFilter: React.FC = (): React.JSX.Element => {
	const [filters, setFilters] = useState(initialFilters);
	const handleCheckboxChange = (changedOption: OptionsType) => {
		const updatedFilters = filters.map((section) => ({
			...section,
			options: section.options.map((opt) =>
				opt.id === changedOption.id
					? { ...opt, checked: !opt.checked }
					: opt
			),
		}));

		setFilters(updatedFilters);
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
