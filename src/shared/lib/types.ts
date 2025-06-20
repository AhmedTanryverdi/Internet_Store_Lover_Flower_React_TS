export type OptionsType = {
	id: string;
	label: string;
	checked: boolean;
};

export type CheckboxFilterType = {
	title: string;
	options: OptionsType[];
};

export type RangeFilterType = {
	min: number;
	max: number;
};

export type TagType = string[] | undefined;
