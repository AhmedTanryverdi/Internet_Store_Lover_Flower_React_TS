import React from "react";

export const Button: React.FC<{
	children: string;
	btnName: string;
}> = ({ children, btnName }): React.JSX.Element => {
	return <button className={btnName}>{children}</button>;
};
