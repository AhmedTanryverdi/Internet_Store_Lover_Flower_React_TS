import React from "react";
import { CardHeader } from "./ui/card-header/CardHeader";
import { CardBody } from "./ui/card-body/CardBody";
import { CardFooter } from "./ui/card-footer/CardFooter";
import "./styles.scss";

export const ProductCard: React.FC<{
	cardHeaderElement: React.ReactNode;
	cardBody: React.ReactNode;
}> = ({ cardHeaderElement, cardBody }): React.JSX.Element => {
	return (
		<div className="product-card">
			<CardHeader headerElement={cardHeaderElement} />
			<CardBody bodyElement={cardBody} />
			<CardFooter />
		</div>
	);
};
