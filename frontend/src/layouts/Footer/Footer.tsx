import { getCurrentYear } from "@/shared/utils/dataUtils";
import styles from "./Footer.module.scss";

/**
 * Компонент футера приложения.
 *
 * Отображает копирайт с текущим годом и ссылкой на профиль автора на GitHub.
 * Ссылка открывается в новой вкладке с безопасными атрибутами.
 */
export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className="container">
				<p className={styles.copyright}>
					© {getCurrentYear()}{" "}
					<a
						href="https://github.com/stormozov"
						target="_blank"
						rel="noreferrer"
					>
						stormozov
					</a>
				</p>
			</div>
		</footer>
	);
}
