import React from "react";
import "./styles.scss";

export const Address: React.FC = (): React.JSX.Element => {
	return (
		<div className="address">
			<h2 className="address__title">ул. Тимирязева 67</h2>
			<div className="address__subtitle">
				<span>10:00 до 21:00</span>
				<span>без выходных</span>
			</div>
		</div>
	);
};
