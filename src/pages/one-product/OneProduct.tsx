import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductImages } from "./ui/product-images/ProductImages";
import { ProductDetails } from "./ui/product-details/ProductDetails";
import type { ApiSchemas } from "@/shared/api/schema";
import "./styles.scss";

type FlowerType = ApiSchemas["flower"];

const OneProduct: React.FC = (): React.JSX.Element => {
	const { flowerId } = useParams();
	const [flower, setFlower] = useState<FlowerType>({});

	useEffect(() => {
		fetch(`http://localhost:3000/catalog/${flowerId}`)
			.then((res) => res.json())
			.then((data) => setFlower(data));
	}, [flowerId]);

	return (
		<div className="one-product">
			<div className="container">
				<div className="content">
					<div className="one-product__background"></div>
					<ProductImages images={flower.images} />
					<ProductDetails name={flower.name} price={flower.price} />
				</div>
			</div>
		</div>
	);
};

export default OneProduct;
