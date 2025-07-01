import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OneProduct: React.FC = (): React.JSX.Element => {
	const { flowerId } = useParams();
	const [flower, setFlower] = useState({});

	useEffect(() => {
		fetch(`http://localhost:3000/catalog/${flowerId}`)
			.then((res) => res.json())
			.then((data) => setFlower(data));
	}, [flowerId]);

	return (
		<div className="one-product">
			<div className="container">{flowerId}</div>
		</div>
	);
};

export default OneProduct;
