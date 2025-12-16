import classNames from "classnames";
import { NavLink } from "react-router";
import styles from "./Nav.module.scss";

/** Интерфейс, описывающий свойства компонента {@link Nav}. */
interface INavProps {
	items: {
		id: number;
		name: string;
		price: number;
		content: string;
	}[];
}

/**
 * Компонент навигационного меню.
 *
 * Отображает список ссылок, основанный на конфигурации {@link NAV_ITEMS}.
 * Подсвечивает активный маршрут с помощью `NavLink` и CSS-классов.
 *
 * @example
 * ```tsx
 * <Nav />
 * ```
 */
export default function Nav({ items }: INavProps) {
	return (
		<nav className={styles.nav}>
			<ul className={styles.nav__list}>
				{items.map((item) => (
					<li key={item.id} className={styles.nav__item}>
						<NavLink
							to={`/services/${item.id}/details`}
							className={({ isActive }) =>
								classNames(styles.nav__link, {
									[styles["nav__link--active"]]: isActive,
								})
							}
						>
							{item.name}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}
