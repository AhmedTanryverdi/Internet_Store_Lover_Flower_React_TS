import React from "react";
import { Link } from "react-router-dom";
import { MENU_NAVIGATE } from "@/shared/lib/constants";
import "./styles.scss";


export const Navigate: React.FC = (): React.JSX.Element => {
	return (
		<nav>
			<ul className="header__menuNavigate">
				{MENU_NAVIGATE.map((item, index) => {
					return (
						<li key={index} className="header__menuNavigate_item">
							<Link to={item.link}>{item.label}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
