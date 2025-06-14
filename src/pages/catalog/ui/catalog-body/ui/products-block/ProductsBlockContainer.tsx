import type { ApiSchemas } from "@/shared/api/schema";
import React, { useEffect, useState } from "react";
import { ProductsBlock } from "./ProductsBlock";

type FlowerType = ApiSchemas["flower"];

export const ProductsBlockContainer: React.FC = () => {
	const [flowers, setFlowers] = useState<FlowerType[] | []>([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch("http://localhost:3000/catalog");

				if (!response.ok) throw new Error(response.statusText);

				const products = await response.json();
				setFlowers(products);
			} catch (error) {
				console.error("Ошибка:", error);
			}
		};

		fetchProducts();
	}, []);
	return <ProductsBlock flowers={flowers} />;
};
