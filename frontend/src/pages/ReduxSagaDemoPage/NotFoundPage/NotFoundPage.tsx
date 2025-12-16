import { FaBug, FaHome } from "react-icons/fa";
import { Link } from "react-router";
import styles from "./NotFoundPage.module.scss";

/**
 * Страница 404 (Not Found) - "Страница не найдена"
 */
export default function NotFoundPage() {
	return (
		<div className={styles["not-found-page"]}>
			<h1 className={styles.title}>404</h1>
			<p className={styles.text}>Страница не найдена</p>
			<Link to="/" className={styles.link}>
				<FaHome />
				На главную
			</Link>
			<Link
				to="https://github.com/stormozov/neto-saga/issues/new"
				target="_blank"
				rel="noreferrer"
				className={styles.link}
			>
				<FaBug />
				Сообщить об ошибке
			</Link>
		</div>
	);
}
