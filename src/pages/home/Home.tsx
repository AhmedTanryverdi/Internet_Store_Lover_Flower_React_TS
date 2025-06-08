import React from "react";
import { FirstSection } from "./ui/first-section/FirstSection";
import "./styles.scss";

export const Home: React.FC = (): React.JSX.Element => {
	return (
		<div className="home">
			<div className="container">
				<FirstSection />
			</div>
		</div>
	);
};

export const Component = Home;
