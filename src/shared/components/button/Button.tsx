import React from "react";

export const Button: React.FC<{
	children: string;
	btnName: string;
	onClick: ()=>void;
}> = ({ children, btnName, onClick }): React.JSX.Element => {
	return (
		<button className={btnName} onClick={() => onClick()}>
			{children}
		</button>
	);
};
