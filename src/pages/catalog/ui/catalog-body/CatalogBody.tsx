import React from "react";
import { SidebarProductsFilter } from "./ui/sidebar-filter/SidebarProductsFilter";
import { CatalogBackground } from "./ui/background/CatalogBackground";
import { CatalogFilter } from "./ui/catalog-filter/CatalogFilter";
import { ProductsBlockContainer } from "./ui/products-block/ProductsBlockContainer";
import "./styles.scss";


export const CatalogBody: React.FC = (): React.JSX.Element => {
	return (
		<div className="catalog-body">
			<div className="container">
				<CatalogBackground />
				<CatalogFilter />
				<div className="catalog-body__content">
					<SidebarProductsFilter />
					<ProductsBlockContainer />
				</div>
			</div>
		</div>
	);
};
