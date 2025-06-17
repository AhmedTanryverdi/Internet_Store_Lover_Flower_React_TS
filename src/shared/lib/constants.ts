import type { CheckboxFilterType, RangeFilterType } from "./types";

export const MENU_NAVIGATE = [
	{ label: "Каталог", link: "/catalog" },
	{ label: "Доставка и оплата", link: "/payment" },
	{ label: "О нас", link: "/about" },
	{ label: "Контакты", link: "/contacts" },
	{ label: "FAQ", link: "/faq" },
];

export const FOOTER_MENU = [
	{
		label: "Каталог",
		category: [
			"Популярное",
			"Сухоцветы",
			"Букеты роз",
			"Композиции из цветов",
			"Индивидуальный букет",
			"Букет на праздник",
			"Упаковка подарков",
			"Шары",
			"Открытки",
			"Конверты",
		],
	},
	{
		label: "Букет",
		category: [
			"Для девушки",
			"Для мужчины",
			"Для жены",
			"Для мамы",
			"Для коллеги",
			"Для начальника",
			"Для дочки",
			"Для детей",
			"Для женщины",
		],
	},
];

export const CHECKBOX_FILTERS: CheckboxFilterType[] = [
	{
		title: "по свету",
		options: [
			{ id: "gentle", label: "нежные", checked: false },
			{ id: "bright", label: "яркие", checked: false },
		],
	},
	{
		title: "По цвету",
		options: [
			{ id: "white", label: "белый", checked: false },
			{ id: "yellow", label: "желтый", checked: false },
			{ id: "green", label: "зеленый", checked: false },
			{ id: "red", label: "красный", checked: false },
			{ id: "orange", label: "оранжевый", checked: false },
			{ id: "pink", label: "розовый", checked: false },
			{ id: "blue", label: "синий", checked: false },
		],
	},
	{
		title: "по формату",
		options: [
			{ id: "bouquet", label: "букет", checked: false },
			{ id: "inTheVase", label: "в вазе", checked: false },
			{ id: "inTheEnvelope", label: "в конверте", checked: false },
			{ id: "inTheShoppingCart", label: "в корзине", checked: false },
			{ id: "InTheHatbox", label: "в шляпной коробке", checked: false },
			{ id: "inTheMailbox", label: "в ящике", checked: false },
		],
	},
	{
		title: "по цветку",
		options: [
			{ id: "Alstroemeria", label: "Альстромерия", checked: false },
			{ id: "Anthurium", label: "Антуриум", checked: false },
			{ id: "Asparagus", label: "Аспарагус", checked: false },
			{ id: "Astilba", label: "Астильба", checked: false },
			{ id: "Astrancia", label: "Астранция", checked: false },
		],
	},
];

export const RANGE_FILTER: RangeFilterType = {
	min: 40,
	max: 400,
};
