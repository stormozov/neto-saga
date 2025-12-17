import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { withSuspense } from "./hocs";

const Layout = lazy(() => import("@/layouts/Layout/Layout"));

const Homepage = lazy(
	() => import("@pages/ReduxSagaDemoPage/HomePage/HomePage"),
);
const ServiceDetailsPage = lazy(
	() =>
		import("@pages/ReduxSagaDemoPage/ServiceDetailsPage/ServiceDetailsPage"),
);
const NotFound = lazy(
	() => import("@pages/ReduxSagaDemoPage/NotFoundPage/NotFoundPage"),
);

const router = createBrowserRouter([
	{
		path: "/",
		element: withSuspense(Layout),
		children: [
			{
				index: true,
				element: withSuspense(Homepage),
			},
			{
				path: "/:id/details",
				element: withSuspense(ServiceDetailsPage),
			},
			{
				path: "*",
				element: withSuspense(NotFound),
			},
		],
	},
]);

export default router;
