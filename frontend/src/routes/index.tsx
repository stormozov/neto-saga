import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { withSuspense } from "./hocs";

const HomePageLayout = lazy(() => import("@/layouts/HomePageLayout/HomePageLayout"));
const ServiceDetailsLayout = lazy(() => import("@/layouts/ServiceDetailsLayout/ServiceDetailsLayout"));

const Homepage = lazy(() => import("@/pages/ReduxSagaDemoPage/HomePage/HomePage"));
const ServiceDetailsPage = lazy(() => import("@/pages/ReduxSagaDemoPage/ServiceDetailsPage/ServiceDetailsPage"));
const NotFound = lazy(() => import("@/pages/ReduxSagaDemoPage/NotFoundPage/NotFoundPage"));

const router = createBrowserRouter([
	{
		path: "/",
		element: withSuspense(HomePageLayout),
		children: [
			{
				index: true,
				element: withSuspense(Homepage),
			},
		],
	},
	{
		path: "/:id/details",
		element: withSuspense(ServiceDetailsLayout),
		children: [
			{
				index: true,
				element: withSuspense(ServiceDetailsPage),
			},
		],
	},
	{
		path: "*",
		element: withSuspense(NotFound),
	},
]);

export default router;
