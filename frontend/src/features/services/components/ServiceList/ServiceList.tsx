import { formatCurrency } from "@shared/utils/formatNumbers";
import { Link } from "react-router";
import type { IServiceItem } from "../../types";
import styles from "./ServiceList.module.scss";

/** Пропсы компонента списка услуг. */
interface IServiceListProps {
	/** Массив объектов услуг, которые необходимо отобразить в списке. */
	items: IServiceItem[];
}

/**
 * Компонент отображения списка услуг.
 *
 * Рендерит список элементов (`<li>`), каждый из которых представляет собой
 * ссылку на страницу деталей конкретной услуги. Отображает название и цену 
 * услуги. Используется на главной странице для навигации по услугам.
 *
 * @param items - Массив услуг типа {@link IServiceItem}, которые нужно 
 * отобразить.
 *
 * @example
 * ```tsx
 * <ServiceList items={services} />
 * ```
 */
export default function ServiceList({ items }: IServiceListProps) {
	return (
		<ul className={styles.list}>
			{items.map((item) => (
				<li key={item.id} className={styles.item}>
					<Link
						to={`/${item.id}/details`}
						className={styles.link}
						title="Перейти на страницу услуги"
					>
						<p className={styles.name}>{item.name}</p>
						<p className={styles.price}>{formatCurrency(item.price, "₽")}</p>
					</Link>
				</li>
			))}
		</ul>
	);
}
