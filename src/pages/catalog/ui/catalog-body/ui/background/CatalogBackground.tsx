import React from "react";
import "./styles.scss";

export const CatalogBackground: React.FC = (): React.JSX.Element => {
	return (
		<div className="catalog-background">
			<div className="gradient top-left"></div>
			<div className="gradient top-right"></div>
			<div className="gradient middle-left"></div>
		</div>
	);
};
