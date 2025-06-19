import React from "react";
import { SidebarProductsFilter } from "./ui/sidebar-filter/SidebarProductsFilter";
import { CatalogBackground } from "./ui/background/CatalogBackground";
import { CatalogFilter } from "./ui/catalog-filter/CatalogFilter";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { ProductsBlock } from "./ui/products-block/ProductsBlock";
import { useSelector } from "react-redux";
import type { CheckboxFilterType } from "@/shared/lib/types";
import type { RooteState } from "@/app/store";
import type { ApiSchemas } from "@/shared/api/schema/index";
import { buildUrlWithFilter } from "./utils/buildUrl";
import "./styles.scss";

type FlowerType = ApiSchemas["flower"];


export const CatalogBody: React.FC = (): React.JSX.Element => {
	const filterSetting = useSelector<RooteState, CheckboxFilterType[]>(
		(state) => state.sideBarFilter.checkboxFilters
	);
	const { isPending, error, data }: UseQueryResult<FlowerType[]> = useQuery({
		queryKey: ["products", filterSetting],
		queryFn: async () => {
			const URL = decodeURIComponent(buildUrlWithFilter(filterSetting));
			console.log("http://localhost:3000/" + URL);
			const response = await fetch(`http://localhost:3000${URL}`);
			return await response.json() as FlowerType[];
		},
	});
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
