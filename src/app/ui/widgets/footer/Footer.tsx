import { Logo } from "@/shared/components/logo/Logo";
import React from "react";
import { FOOTER_MENU } from "@/shared/lib/constants";
import "./styles.scss";

export const Footer: React.FC = (): React.JSX.Element => {
	return (
		<div className="footer">
			<div className="container">
				<div className="footer__content">
					<div className="footer__column">
						<Logo />
						<h2 className="footer__column_title">реквизиты</h2>
						<p className="footer__column_text-content">
							ООО «Ловефлове» 220035, Республика Беларусь, г.
							Минск, ул. Тимирязева д. 67, комн. 112 (пом.11) УНП
							193263781, р/с BY55MTBK30120001093300096372 ЗАО
							«МТБанк», БИК MTBKBY22 220007, г. Минск, улица
							Толстого
						</p>
					</div>
					{FOOTER_MENU.map((item, index) => {
						return (
							<div key={index} className="footer__column">
								<h2 className="footer__column_title">
									{item.label}
								</h2>
								{item.category.map((element, idx) => {
									return (
										<p
											key={idx}
											className="footer__column_text-content"
										>
											{element}
										</p>
									);
								})}
							</div>
						);
					})}
					<div className="footer__column">
						<p className="title">Доставка и оплата</p>
						<p className="title">О нас</p>
						<p className="title">FAQ</p>
						<p className="title">Контакты</p>
						<p className="title">для корпоративных клиентов</p>
					</div>

					<div className="footer__column">
						<h2 className="our-email">zakaz@loverflower.by</h2>
						<p>Доставка 24/7 по договоренности с оператором</p>
					</div>
				</div>
			</div>
		</div>
	);
};
