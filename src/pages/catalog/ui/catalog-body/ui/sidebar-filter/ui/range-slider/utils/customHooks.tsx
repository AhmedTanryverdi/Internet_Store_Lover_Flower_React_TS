import { useCallback, useRef, useState } from "react";

export const useRange = (min: number, max: number) => {
	const sliderOneRef = useRef<HTMLInputElement>(null);
	const sliderTwoRef = useRef<HTMLInputElement>(null);
	const [localMin, setLocalMin] = useState(min);
	const [localMax, setLocalMax] = useState(max);

	const handleSliderOneChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = Number(event.target.value);
			if (newValue > localMax) return;
			setLocalMin(newValue);
		},
		[]
	);

	const handleSliderTwoChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = Number(event.target.value);
			if (newValue < localMin) return;
			setLocalMax(newValue);
		},
		[]
	);

	return {
		sliderOneRef,
		sliderTwoRef,
		handleSliderOneChange,
		handleSliderTwoChange,
		localMin,
		localMax,
	};
};
