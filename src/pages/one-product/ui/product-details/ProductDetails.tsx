import React from "react";

export const ProductDetails: React.FC<{
	name: string | undefined;
	price: number | undefined;
}> = ({ name, price }): React.JSX.Element => {
	return (
		<div className="product-details">
			<h2 className="name">{name}</h2>
			<p className="price">{price}</p>
		</div>
	);
};
