import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { useLocation } from "react-router-dom";

export const HeaderContainer: React.FC = () => {
	const location = useLocation();

	const [isBlock, setIsBlock] = useState(setBlock(location.pathname));

	useEffect(() => {
		setIsBlock(setBlock(location.pathname));
	}, [location.pathname]);
	return <Header isBlock={isBlock} />;
};

function setBlock(path: string) {
	return path === "/" || path === "/catalog" ? false : true;
}
