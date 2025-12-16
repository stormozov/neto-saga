import { Outlet } from "react-router";
import styles from "./Main.module.scss";

/**
 * Компонент основного содержимого страницы.
 *
 * Представляет собой контейнер для динамического контента, отображаемого 
 * по текущему маршруту. Использует `Outlet` из React Router для вставки 
 * соответствующей страницы. Обернут в контейнер для соблюдения единого отступа 
 * и стилизации по всему приложению.
 */
export default function Main() {
	return (
		<main className={styles.main}>
			<div className="container">
				<Outlet />
			</div>
		</main>
	);
}
