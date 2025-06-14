import React from "react";
import { Navigate } from "./ui/navigte/Navigate";
import { SearchBlock } from "./ui/search-block/SearchBlock";
import { Logo } from "@/shared/components/logo/Logo";
import { ContactCart } from "./ui/contact-cart/ContactCart";
import "./styles.scss";

export const Header: React.FC<{ isBlock: boolean }> = ({
	isBlock,
}): React.JSX.Element => {
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
