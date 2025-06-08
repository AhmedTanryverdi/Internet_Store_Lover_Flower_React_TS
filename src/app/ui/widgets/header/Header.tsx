import React, { useEffect, useState } from "react";
import { Navigate } from "./ui/navigte/Navigate";
import { SearchBlock } from "./ui/search-block/SearchBlock";
import { Logo } from "@/shared/components/logo/Logo";
import { useLocation } from "react-router-dom";
import { ContactCart } from "./ui/contact-cart/ContactCart";
import "./styles.scss";

export const Header: React.FC = (): React.JSX.Element => {
	const location = useLocation();

	const [isBlock, setIsBlock] = useState(setBlock(location.pathname));

	useEffect(() => {
		console.log(location.pathname, isBlock);
		setIsBlock(setBlock(location.pathname));
	}, [location.pathname]);

	return (
		<div
			className="header"
			style={
				(isBlock && {
					backgroundColor: "#000",
				}) ||
				{}
			}
		>
			<div className="container">
				<div className="header__content">
					<Logo />
					<Navigate />
					<SearchBlock />
					{isBlock && <ContactCart />}
				</div>
			</div>
		</div>
	);
};

function setBlock(path: string) {
	return path === "/" || path === "/catalog" ? false : true;
}
