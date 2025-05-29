import "react-router-dom";

export const ROUTES = {
	HOME: "/",
	CONTACTS: "/contacts",
	PAYMENT: "/payment",
	CART: "/cart",
	FAVORITE: "/favorite",
	FAQ: "faq",
	ABOUT: "/about",
	CATALOG: "/catalog",
	FLOWER: "/catalog/:flowerId",
} as const;

export type PathParams = {
	[ROUTES.FLOWER]: {
		flowerId: string;
	};
};
