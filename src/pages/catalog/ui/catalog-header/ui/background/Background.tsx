import React from "react";
import bgFlower1 from "@/pages/catalog/assets/images/bgFlower1.png";
import bgFlower2 from "@/pages/catalog/assets/images/bgFlower2.png";
import "./styles.scss";

export const Background: React.FC = (): React.JSX.Element => {
	return (
		<div className="background">
			<img src={bgFlower1} alt="flower image" className="left-flower" />
			<img src={bgFlower2} alt="flower image" className="right-flower" />
			<div className="left-gradient"></div>
			<div className="right-gradient"></div>
		</div>
	);
};
