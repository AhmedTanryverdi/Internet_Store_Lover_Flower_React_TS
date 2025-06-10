import React from "react";
import { CatalogHeader } from "./ui/catalog-header/CatalogHeader";
import { CatalogBody } from "./ui/catalog-body/CatalogBody";
import "./styles.scss";

export const Catalog: React.FC = (): React.JSX.Element => {
	return (
		<div className="catalog">
			<div className="container">
				<div className="content">
					<CatalogHeader />
					<CatalogBody />
				</div>
			</div>
		</div>
	);
};

export const Component = Catalog;
