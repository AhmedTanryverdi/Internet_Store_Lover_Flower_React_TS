import { ROUTES } from "@/shared/model/routes";
import { createBrowserRouter } from "react-router-dom";
import App from "@/app/ui/App";

export const router = createBrowserRouter([
	{
		element: <App />,
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
		],
	},
]);
