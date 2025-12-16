import { RouterProvider } from "react-router";
import router from "@/routes";
import styles from "./ReduxSagaDemoPage.module.scss";

/**
 * Демо-страница Redux Saga
 *
 * Страница демонстрирует работу Redux Saga вместе с React Router 
 * и Redux Toolkit.
 */
export default function ReduxSagaDemoPage() {
	return (
		<div className={styles["demo-page"]}>
			<RouterProvider router={router} />
		</div>
	);
}
