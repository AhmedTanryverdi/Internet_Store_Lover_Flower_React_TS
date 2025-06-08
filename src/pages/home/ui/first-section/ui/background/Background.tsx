import React from "react";
import bgImage from "@/shared/assets/image/bgImage.png";
import "./styles.scss";

export const Background: React.FC = (): React.JSX.Element => {
	return (
		<div className="home__background">
			<figure className="img-container">
				<img
					src={bgImage}
					alt="background image"
					className="background"
				/>
			</figure>
			<div className="left-gradient"></div>
			<div className="right-gradient"></div>
		</div>
	);
};
