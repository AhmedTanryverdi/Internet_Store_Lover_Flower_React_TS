import React, { useCallback, useState } from "react";
import "./styles.scss";

export const ProductImages: React.FC<{ images: string[] | undefined }> = ({
	images,
}): React.JSX.Element => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNextImage = useCallback(() => {
		if (currentIndex < images!.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	}, [currentIndex, images]);

	const handlePrevImage = useCallback(() => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	}, [currentIndex]);

	return (
		<div className="product-images">
			<div className="list-images">
				<button type="button" onClick={handlePrevImage} className="move-btn">
					{"<"}
				</button>
				<div className="images-wrapper">
					<div
						className="images"
						style={{
							transform: `translateY(-${currentIndex * 205}px)`,
							transition: "0.7s ease-in-out",
						}}
					>
						{images?.map((item, key) => {
							return (
								<img
									src={item}
									key={key}
									className="image"
									alt="image"
								/>
							);
						})}
					</div>
				</div>
				<button type="button" onClick={handleNextImage} className="move-btn">
					{"<"}
				</button>
			</div>
			<img src={`${images?.[currentIndex]}`} alt="images" className="main-img" />
		</div>
	);
};
