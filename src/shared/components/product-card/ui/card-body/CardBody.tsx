import React from "react";

export const CardBody: React.FC<{ bodyElement: React.ReactNode }> = ({
	bodyElement,
}): React.JSX.Element => {
	return <div className="card-body">{bodyElement}</div>;
};
