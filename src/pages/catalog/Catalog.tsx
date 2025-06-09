import React from "react";
import { CatalogHeader } from "./ui/catalog-header/CatalogHeader";
import "./styles.scss";

export const Catalog: React.FC = (): React.JSX.Element => {
	return (
		<div className="catalog">
			<div className="container">
				<div className="content">
					<CatalogHeader />
				</div>
			</div>
		</div>
	);
};

export const Component = Catalog;
