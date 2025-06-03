import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const MENU_NAVIGATE = [
	{ label: "Каталог", link: "/catalog" },
	{ label: "Доставка и оплата", link: "/payment" },
	{ label: "О нас", link: "/about" },
	{ label: "Контакты", link: "/contacts" },
	{ label: "FAQ", link: "/faq" },
];

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
