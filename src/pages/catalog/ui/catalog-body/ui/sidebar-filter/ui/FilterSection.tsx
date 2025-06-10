import React from "react";
import "./styles.scss";

type OptionsType = {
	id: string;
	label: string;
	checked: boolean;
};

export const FilterSection: React.FC<{
	title: string;
	options: OptionsType[];
	onChange: (options: OptionsType) => void;
}> = ({ title, options, onChange }): React.JSX.Element => {
	return (
		<div className="filter-section">
			<h3 className="filter-section__title">{title}</h3>
			<ul>
				{options.map((option) => {
					return (
						<li key={option.id}>
							<input
								type="checkbox"
								id={option.id}
								checked={option.checked}
								onChange={() => onChange(option)}
							/>
							{option.label}
						</li>
					);
				})}
			</ul>
		</div>
	);
};
