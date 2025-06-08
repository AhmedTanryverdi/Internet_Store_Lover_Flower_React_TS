import React from "react";
import bgImage from "@/shared/assets/image/bg.png";
import "./styles.scss";

export const Background: React.FC = (): React.JSX.Element => {
	return (
		<div className="home__background">
			<img src={bgImage} alt="background image" className="background" />
		</div>
	);
};
