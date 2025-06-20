import React, { memo } from "react";
import { useAppDispatch } from "@/app/store";
import {
	setRangeMaxFilter,
	setRangeMinFilter,
} from "@/features/slices/sidebar-filter/sidebarFilterSlice";
import { useRange } from "./utils/customHooks";
import "./styles.scss";

export const RangeSlider: React.FC<{
	min: number;
	max: number;
}> = memo(({ min, max }): React.JSX.Element => {
	const dispatch = useAppDispatch();
	const {
		sliderOneRef,
		sliderTwoRef,
		handleSliderOneChange,
		handleSliderTwoChange,
		localMin,
		localMax,
	} = useRange(min, max);

	return (
		<div className="range-slider">
			<div className="range-slider__wrapper">
				<div className="range-slider__content">
					<div className="slider-track"></div>
					<input
						type="range"
						ref={sliderOneRef}
						min={100}
						max={2000}
						value={localMin}
						onChange={handleSliderOneChange}
						onMouseUp={(event: any) =>
							dispatch(setRangeMinFilter(event.target.value))
						}
						id="slider-1"
					/>
					<input
						type="range"
						ref={sliderTwoRef}
						min={100}
						max={2000}
						value={localMax}
						onChange={handleSliderTwoChange}
						onMouseUp={(event: any) =>
							dispatch(setRangeMaxFilter(event.target.value))
						}
						id="slider-2"
					/>
				</div>
				<div className="range-slider__price-block">
					<span>Цена:</span>
					<span>{localMin}</span>
					<span>-</span>
					<span>{localMax}</span>
				</div>
			</div>
		</div>
	);
});
