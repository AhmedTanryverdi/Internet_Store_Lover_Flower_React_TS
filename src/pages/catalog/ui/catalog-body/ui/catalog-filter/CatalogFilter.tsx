import React from "react";
import "./styles.scss";

export const CatalogFilter: React.FC = (): React.JSX.Element => {
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
						>
							<option value="По популярности">
								По популярности
							</option>
						</select>
					</label>
				</div>
			</div>
		</div>
	);
};
