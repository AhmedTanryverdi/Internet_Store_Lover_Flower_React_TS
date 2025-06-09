import React from "react";
import { Background } from "./ui/background/Background";
import { Title } from "./ui/title/Title";
import { RightContactBlock } from "@/shared/components/right-contact-block/RightContactBlock";
import "./styles.scss";

export const CatalogHeader: React.FC = (): React.JSX.Element => {
	return (
		<div className="catalog-header">
			<Background />
			<Title />
			<RightContactBlock />
		</div>
	);
};
