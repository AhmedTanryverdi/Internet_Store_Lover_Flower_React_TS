import React from "react";
import { Button } from "@/shared/components/button/Button";
import { Background } from "./ui/background/Background";
import { RightContactBlock } from "../../../../shared/components/right-contact-block/RightContactBlock";
import { FirstSectionHomeTitle } from "./ui/title/FirstSectionHomeTitle";
import "./styles.scss";

export const FirstSection: React.FC = (): React.JSX.Element => {
	return (
		<div className="first-section">
			<div className="container">
				<RightContactBlock />
				<div className="content">
					<Background />
					<FirstSectionHomeTitle />
					<Button
						children="смотреть каталог"
						btnName="home__viewCatalog"
					/>
				</div>
			</div>
		</div>
	);
};
