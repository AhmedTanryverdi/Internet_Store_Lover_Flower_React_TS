import { ROUTES } from "@/shared/model/routes";
import { createBrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import App from "@/app/ui/App";
import { CONFIG } from "@/shared/model/config";
import { queryClient } from "@/shared/api/query_client";
import OneProduct from "@/pages/one-product/OneProduct";

export const router = createBrowserRouter(
	[
		{
			element: (
				<QueryClientProvider client={queryClient}>
					<App />
				</QueryClientProvider>
			),
			children: [
				{
					path: ROUTES.HOME,
					lazy: () => import("../pages/home/Home"),
				},
				{
					path: ROUTES.ABOUT,
					lazy: () => import("../pages/about/About"),
				},
				{
					path: ROUTES.CATALOG,
					lazy: () => import("../pages/catalog/Catalog"),
				},
				{
					path: ROUTES.CONTACTS,
					lazy: () => import("../pages/contacts/Contacts"),
				},
				{
					path: ROUTES.FLOWER,
					element: <OneProduct />
				},
			],
		},
	],
	{ basename: CONFIG.BASE_URL }
);
