import React, { type ChangeEvent } from "react";
import { useAppDispatch } from "@/app/store";
import { sort } from "@/features/slices/sort/sort";
import "./styles.scss";

export const CatalogFilter: React.FC = (): React.JSX.Element => {
	const dispatch = useAppDispatch();

	const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value.toLocaleLowerCase();
		const selectedValue =
			value === "по рейтингу"
				? "rating"
				: value === "сначала дорогие"
				? "desc"
				: "asc";

		dispatch(sort(selectedValue));
	};

	return (
		<div className="catalog-filter">
			<div className="container">
				<div className="catalog-filter__content">
					<label
						htmlFor="catalog-filter-search"
						className="catalog-filter__label"
					>
						<select
							name="catalog-filter__select"
							id="catalog-filter-search"
							className="catalog-filter__select"
							onChange={handleChange}
						>
							<option value="По популярности">
								По популярности
							</option>
							<option value="сначала дорогие">
								сначала дорогие
							</option>
							<option value="сначала дешевые">
								сначала дешевые
							</option>
						</select>
					</label>
				</div>
			</div>
		</div>
	);
};
