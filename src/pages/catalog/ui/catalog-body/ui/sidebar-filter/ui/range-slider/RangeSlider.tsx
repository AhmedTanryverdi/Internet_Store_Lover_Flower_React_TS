import React, { useRef, useState } from "react";
import "./styles.scss";

export const RangeSlider: React.FC = (): React.JSX.Element => {
	const [value1, setValue1] = useState(40);
	const [value2, setValue2] = useState(400);
	const sliderOneRef = useRef<HTMLInputElement>(null);
	const sliderTwoRef = useRef<HTMLInputElement>(null);

    const handleSliderOneChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const newValue = Number(event.target.value);
		if (newValue > value2) return;
		setValue1(newValue);
	};

	const handleSliderTwoChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		const newValue = Number(event.target.value);
		if (newValue < value1) return; 
		setValue2(newValue);
	};
	return (
		<div className="range-slider">
			<div className="range-slider__wrapper">
				<div className="range-slider__content">
					<div className="slider-track"></div>
					<input
						type="range"
						ref={sliderOneRef}
						min={40}
						max={400}
						value={value1}
						onChange={handleSliderOneChange}
						id="slider-1"
					/>
					<input
						type="range"
						ref={sliderTwoRef}
						min={40}
						max={400}
						value={value2}
						onChange={handleSliderTwoChange}
						id="slider-2"
					/>
				</div>
				<div className="range-slider__price-block">
					<span>Цена:</span>
					<span>{value1}</span>
					<span>-</span>
					<span>{value2}</span>
				</div>
			</div>
		</div>
	);
};
