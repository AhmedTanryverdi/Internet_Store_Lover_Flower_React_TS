import React from "react";
import { SidebarProductsFilter } from "./ui/sidebar-filter/SidebarProductsFilter";
import { CatalogBackground } from "./ui/background/CatalogBackground";
import { CatalogFilter } from "./ui/catalog-filter/CatalogFilter";
import { ProductsBlock } from "./ui/products-block/ProductsBlock";
import { useFetchFlowers } from "./utils/customHooks";
import "./styles.scss";

export const CatalogBody: React.FC = (): React.JSX.Element => {
	const { isPending, error, data } = useFetchFlowers();
	
	if (isPending) {
		return <h1>loading..</h1>;
	}
	if (error) {
	}
	return (
		<div className="catalog-body">
			<div className="container">
				<CatalogBackground />
				<CatalogFilter />
				<div className="catalog-body__content">
					<SidebarProductsFilter />
					<ProductsBlock flowers={data ?? []} />
				</div>
			</div>
		</div>
	);
};
