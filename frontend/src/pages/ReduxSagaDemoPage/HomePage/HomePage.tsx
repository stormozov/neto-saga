import { ErrorView, LoadingFallback } from "@shared/ui";
import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import {
	ServiceList,
	selectListError,
	selectListItems,
	selectListLoading,
	servicesListRequested,
} from "@/features";
import styles from "./HomePage.module.scss";

/**
 * Главная страница приложения
 */
export default function HomePage() {
	const dispatch = useAppDispatch();
	const items = useAppSelector(selectListItems);
	const isLoading = useAppSelector(selectListLoading);
	const error = useAppSelector(selectListError);

	const fetchServices = useCallback(() => {
		dispatch(servicesListRequested());
	}, [dispatch]);

	useEffect(() => {
		fetchServices();
	}, [fetchServices]);

	const handleRetry = () => fetchServices();

	return (
		<div className={styles.homePage}>
			<h1 className={styles.title}>Список услуг</h1>

			{isLoading && <LoadingFallback />}
			{error && <ErrorView message={error} onRetry={handleRetry} />}

			{!isLoading && !error && items.length === 0 && (
				<div>Список услуг пуст</div>
			)}
			{!isLoading && !error && items.length > 0 && (
				<ServiceList items={items} />
			)}
		</div>
	);
}
