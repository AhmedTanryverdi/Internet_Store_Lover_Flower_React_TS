import React from "react";
import "./styles.scss";

export const CardBody: React.FC<{
	name: string | undefined;
	price: number | undefined;
}> = ({ name, price }): React.JSX.Element => {
	return (
		<div className="card-body">
			<p className="flower-name">{name}</p>
			<p className="flower-price">{price}.000 Р</p>
		</div>
	);
};
