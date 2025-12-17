import { ErrorView, LoadingFallback } from "@shared/ui";
import { formatCurrency } from "@shared/utils";
import classNames from "classnames";
import { useCallback, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { Link, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
	type ServiceId,
	selectDetailsError,
	selectDetailsItem,
	selectDetailsLoading,
	serviceDetailsRequested,
} from "@/features";
import styles from "./ServiceDetailsPage.module.scss";

/**
 * Страница детальной информации о услуге
 */
export default function ServiceDetailsPage() {
	const { id } = useParams<ServiceId>();

	const dispatch = useAppDispatch();
	const item = useAppSelector(selectDetailsItem);
	const isLoading = useAppSelector(selectDetailsLoading);
	const error = useAppSelector(selectDetailsError);

	const fetchServices = useCallback(() => {
		if (id) dispatch(serviceDetailsRequested({ id }));
	}, [dispatch, id]);

	useEffect(() => {
		if (id) fetchServices();
	}, [fetchServices, id]);

	const handleRetry = () => fetchServices();

	return (
		<div className={styles.service}>
			{isLoading && <LoadingFallback />}
			{error && <ErrorView message={error} onRetry={handleRetry} />}

			{!isLoading && !error && item && (
				<div className={styles.service__content}>
					<span className={styles.service__label}>Услуга:</span>
					<h1 className={styles.service__name}>{item.name}</h1>

					<div className={styles.service__details}>
						<p className={styles.service__price}>
							<strong>Стоимость услуги: </strong>
							{formatCurrency(item.price)}
						</p>
						<p className={styles.service__description}>
							<strong>Описание услуги: </strong>
							{item.content}
						</p>
					</div>

					<Link
						to="/"
						className={classNames("with-icon", styles.service__back)}
					>
						<FaHome />
						На главную
					</Link>
				</div>
			)}
		</div>
	);
}
