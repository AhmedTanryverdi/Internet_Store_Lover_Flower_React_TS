import React, { memo } from "react";
import { CardHeader } from "./ui/card-header/CardHeader";
import { CardBody } from "./ui/card-body/CardBody";
import { CardFooter } from "./ui/card-footer/CardFooter";
import type { ApiSchemas } from "@/shared/api/schema";
import { useNavigate } from "react-router-dom";
import {ROUTES} from "@/shared/model/routes"
import "./styles.scss";

type FlowerType = ApiSchemas["flower"];

export const ProductCard: React.FC<{ flower: FlowerType }> = memo(
	({ flower }): React.JSX.Element => {
		const navigate = useNavigate();
		return (
			<div
				className="product-card"
				onClick={() => navigate(`/${ROUTES.CATALOG}/${flower.id}`)}
			>
				<CardHeader path={flower.image_url} />
				<CardBody name={flower.name} price={flower.price} />
				<CardFooter />
			</div>
		);
	}
);
