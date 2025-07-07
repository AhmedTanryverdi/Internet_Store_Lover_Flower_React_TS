import React from "react";
import { useForm } from "react-hook-form";
import "./styles.scss";

interface IProductReviewForm {
	reviews: string;
	username: string;
	email: string;
}

export const ProductReviews: React.FC = (): React.JSX.Element => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IProductReviewForm>({ mode: "onBlur" });

	const actionSubmit = (data: IProductReviewForm) => {
		console.log(data);
	};

	return (
		<div className="product-reviews">
			<div className="container">
				<div className="content">
					<form onSubmit={handleSubmit(actionSubmit)}>
						<label
							htmlFor="reviews"
							className="reviews-label label"
						>
							<p>Ваш отзыв*</p>
							<textarea
								id="reviews"
								placeholder="Введите комментарий"
								{...register("reviews", {
									required: {
										message:
											"напишити отзыв, чтобы отравить",
										value: true,
									},
								})}
								style={
									errors.reviews && {
										boxShadow: "0px 0 3px 3px red",
									}
								}
							/>
							{errors.reviews && (
								<span
									style={{ color: "red", display: "block" }}
								>
									{errors.reviews.message}
								</span>
							)}
						</label>
						<label htmlFor="name" className="name-label label">
							<p>Имя*</p>
							<input
								type="text"
								id="username"
								className="username"
								placeholder="Введите ваше имя"
								{...register("username", {
									required: {
										message:
											"Имя обязательно для отправки отзыва",
										value: true,
									},
									minLength: {
										value: 2,
										message:
											"Имя должно содержать не менее двух символов",
									},
									maxLength: {
										value: 20,
										message:
											"Имя должно содержать не более 20 символов",
									},
									pattern: {
										value: /^[A-Za-zА-Яа-яЁё]+$/,
										message:
											"Имя не может начинаться с цифр",
									},
								})}
								style={
									errors.username && {
										boxShadow: "0px 0 3px 3px red",
										color: "#fff",
									}
								}
							/>
							{errors.username && (
								<span
									style={{ color: "red", display: "block" }}
								>
									{errors.username.message}
								</span>
							)}
						</label>
						<label htmlFor="email" className="email-label label">
							<p>E-mail*</p>
							<input
								type="email"
								id="email"
								className="email"
								placeholder="Введите ваше имя"
								{...register("email", {
									required: {
										message: "Введите email",
										value: true,
									},
								})}
								style={
									errors.email && {
										boxShadow: "0px 0 3px 3px red",
									}
								}
							/>
							{errors.email && (
								<span
									style={{ color: "red", display: "block" }}
								>
									{errors.email.message}
								</span>
							)}
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
