import React from "react";
import { Navigate } from "./ui/navigte/Navigate";
import { SearchBlock } from "./ui/search-block/SearchBlock";
import { Logo } from "./ui/logo/Logo";
import { useLocation } from "react-router-dom";
import "./styles.scss";
import { Email } from "./ui/email/Email";

export const Header: React.FC = (): React.JSX.Element => {
	const location = useLocation();
	console.log(location.pathname);

	return (
		<div className="header">
			<div className="container">
				<div className="header__content">
					<Logo />
					<Navigate />
					<SearchBlock />
					{location.pathname === "/" && <Email />}
				</div>
			</div>
		</div>
	);
};
