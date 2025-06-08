import React from "react";
import { Button } from "@/shared/components/button/Button";
import { Background } from "./ui/background/Background";
import { RightBlock } from "./ui/right-block/RightBlock";
import "./styles.scss";

export const FirstSection: React.FC = (): React.JSX.Element => {
	return (
		<div className="first-section">
			<Background />
			<div className="title">
				<p>LOVER</p>
				<p>flower</p>
			</div>
			<div className="subtitle">
				<p>Создаём для тех, кто ценит свежесть и изящество цветка</p>
			</div>
			<Button children="смотреть каталог" btnName="home__viewCatalog" />
			<RightBlock />
		</div>
	);
};
