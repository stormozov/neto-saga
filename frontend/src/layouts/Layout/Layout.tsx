import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";
import styles from "./Layout.module.scss";

/**
 * Основной компонент макета приложения (Layout).
 *
 * Формирует общую структуру страницы, включающую шапку (Header), основное
 * содержимое (Main) и нижний колонтитул (Footer). Используется как обёртка для
 * всех страниц приложения, обеспечивая единое оформление и навигацию.
 */
export default function Layout() {
	return (
		<div className={styles.layout}>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
