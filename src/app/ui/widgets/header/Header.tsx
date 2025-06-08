import React from "react";
import { Navigate } from "./ui/navigte/Navigate";
import { SearchBlock } from "./ui/search-block/SearchBlock";
import { Logo } from "@/shared/components/logo/Logo";
import "./styles.scss";

export const Header: React.FC = (): React.JSX.Element => {
	return (
		<div className="header">
			<div className="container">
				<div className="header__content">
					<Logo />
					<Navigate />
					<SearchBlock />
				</div>
			</div>
		</div>
	);
};
