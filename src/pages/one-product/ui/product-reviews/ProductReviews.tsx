import React from "react";
import "./styles.scss";

export const ProductReviews: React.FC = (): React.JSX.Element => {
	return (
		<div className="product-reviews">
			<div className="container">
				<div className="content">
					<form action="">
						<label
							htmlFor="reviews"
							className="reviews-label label"
						>
							<p>Ваш отзыв*</p>
							<textarea
								name="reviews"
								id="reviews"
								placeholder="Введите комментарий"
							/>
						</label>
						<label htmlFor="name" className="name-label label">
							<p>Имя*</p>
							<input
								type="text"
								id="name"
								className="name"
								placeholder="Введите ваше имя"
							/>
						</label>
						<label htmlFor="email" className="email-label label">
							<p>E-mail*</p>
							<input
								type="email"
								id="email"
								className="email"
								placeholder="Введите ваше имя"
							/>
						</label>

						<button type="submit" className="send-reviews__btn">
							отправить
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};
