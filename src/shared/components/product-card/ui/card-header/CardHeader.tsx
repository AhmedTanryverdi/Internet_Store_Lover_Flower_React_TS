import React from "react";

export const CardHeader: React.FC<{ path: string | undefined }> = ({
	path,
}): React.JSX.Element => {
	return (
		<div className="card-header">
			<img src={path} alt="flower image" />
		</div>
	);
};
