import React from "react";

export const Email: React.FC = (): React.JSX.Element => {
	return (
		<div className="email">
			<h2 className="email__title" style={{ alignSelf: "flex-end" }}>
				zakaz@loverflower.by
			</h2>
			<span className="email__subtitle">
				Доставка 24/7 по договоренности с оператором
			</span>
		</div>
	);
};
