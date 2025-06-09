import React from "react";
import "./styles.scss";

const TAGS = [
	"Букеты из гипсофил",
	"Букеты из ромашек",
	"Букеты из хризантем",
	"Комнатные цветы в горшках",
	"Монобукеты",
	"Сборные букеты",
	"Букет на праздник",
	"Композиции из цветов",
	"Конверты",
	"Открытки",
	"Подарки",
	"Букеты из сухоцветов",
	"Шары",
	"Популярное",
	"Букеты роз",
	"Цветы на похороны",
	"Упаковка подарков",
];

export const Title: React.FC = (): React.JSX.Element => {
	return (
		<div className="title-block">
			<div className="title">
				<h2>каталог</h2>
				<h2>букетов</h2>
			</div>
			<div className="subtitle">
				В нашем магазине самый большой выбор букетов для любых событий:
			</div>
			<div className="tags">
				{TAGS.map((item, index)=>{
					return <span key={index}>{item}</span>
				})}
			</div>
		</div>
	);
};
