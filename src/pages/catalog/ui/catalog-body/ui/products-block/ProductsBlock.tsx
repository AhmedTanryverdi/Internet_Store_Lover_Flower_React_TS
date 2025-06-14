import React from "react";
import { ProductCard } from "@/shared/components/product-card/ProductCard";
import type { ApiSchemas } from "@/shared/api/schema/index";
import "./styles.scss";

type FlowerType = ApiSchemas["flower"];

export const ProductsBlock: React.FC<{ flowers: FlowerType[] }> = ({
	flowers,
}): React.JSX.Element => {
	if (!flowers.length) {
		return <h2>loading...</h2>;
	}
	return (
		<div className="product-block">
			{flowers.map((item: FlowerType) => {
				return <ProductCard key={item.id} flower={item} />
			})}
		</div>
	);
};
