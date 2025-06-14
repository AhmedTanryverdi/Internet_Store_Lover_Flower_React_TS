import React, { memo } from "react";
import { CardHeader } from "./ui/card-header/CardHeader";
import { CardBody } from "./ui/card-body/CardBody";
import { CardFooter } from "./ui/card-footer/CardFooter";
import "./styles.scss";
import type { ApiSchemas } from "@/shared/api/schema";

type FlowerType = ApiSchemas["flower"];

export const ProductCard: React.FC<{flower: FlowerType}> = memo(
	({ flower }): React.JSX.Element => {
		return (
			<div className="product-card">
				<CardHeader path={flower.image_url} />
				<CardBody name={flower.name} price={flower.price} />
				<CardFooter />
			</div>
		);
	}
);
