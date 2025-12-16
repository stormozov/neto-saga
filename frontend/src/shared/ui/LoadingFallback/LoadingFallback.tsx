import "./LoadingFallback.scss";

/**
 * Допустимые размеры индикатора загрузки.
 */
type LoadingSize = "small" | "medium" | "large";

/**
 * Интерфейс, описывающий свойства компонента `LoadingFallback`.
 */
interface ILoadingFallbackProps {
	message?: string;
	size?: LoadingSize;
}

/**
 * Компонент-заглушка, отображающий индикатор загрузки и опциональное сообщение.
 * 
 * Используется в качестве `fallback` в `React.Suspense` или при ожидании данных.
 *
 * @example 
 * ```tsx
 * <LoadingFallback message="Загружаем данные..." size="large" />
 * ```
 */
function LoadingFallback({
	message = "Загрузка...",
	size = "medium",
}: ILoadingFallbackProps) {
	const sizeClass = `spinner-${size}`;

	return (
		<div className="loading-fallback">
			<div className={`spinner ${sizeClass}`}></div>
			{message && <p className="loading-message">{message}</p>}
		</div>
	);
}

export default LoadingFallback;
