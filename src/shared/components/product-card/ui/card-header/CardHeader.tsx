import React from "react";

export const CardHeader: React.FC<{ headerElement: React.ReactNode }> = ({
	headerElement,
}): React.JSX.Element => {
	return <div className="card-header">{headerElement}</div>;
};
