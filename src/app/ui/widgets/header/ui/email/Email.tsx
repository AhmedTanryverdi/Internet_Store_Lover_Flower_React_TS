import React from "react";

export const Email: React.FC = (): React.JSX.Element => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "flex-end",
			}}
		>
			<span className="our-email" style={{ alignSelf: "flex-end" }}>
				zakaz@loverflower.by
			</span>
			<span style={{ fontSize: "10px", color: "#fff", opacity: 0.8, marginTop: "4px" }}>
				Доставка 24/7 по договоренности с оператором
			</span>
		</div>
	);
};
