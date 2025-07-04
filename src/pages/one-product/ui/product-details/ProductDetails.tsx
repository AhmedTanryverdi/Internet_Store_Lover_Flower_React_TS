import React, { useState } from "react";
import "./styles.scss";
import { Button } from "@/shared/components/button/Button";

export const ProductDetails: React.FC<{
	name: string | undefined;
	price: number | undefined;
}> = ({ name, price }): React.JSX.Element => {
	const [counter, setCounter] = useState(1);

	return (
		<div className="product-details">
			<h2 className="name">{name}</h2>
			<p className="price">{price} &#8381;</p>
			<div className="product-details__btns">
				<Button
					children="В корзину"
					btnName="product-details__btn_add"
					onClick={() => console.log("test")}
				/>
				<div className="product-details__counter">
					<button
						type="button"
						onClick={() => setCounter((counter) => counter + 1)}
					>
						+
					</button>
					<span>{counter}</span>
					<button
						type="button"
						onClick={() => setCounter((prev) => Math.max(prev - 1, 1))}
					>
						-
					</button>
				</div>
			</div>
		</div>
	);
};
