import { LoadingFallback } from "@shared/ui";
import React from "react";

/**
 * Компонент высшего порядка (HOC), оборачивающая компонент в React.Suspense.
 *
 * Предоставляет fallback-компонент (индикатор загрузки) на время,
 * пока указанный компонент загружается (например, при ленивой загрузке через 
 * `React.lazy`).
 *
 * @param Component - Компонент React, который должен быть обёрнут в `Suspense`.
 * @returns Обёрнутый компонент с возможностью отображения заглушки во время 
 * ожидания.
 *
 * @example
 * ```tsx
 * const LazyHome = React.lazy(() => import('./Home'));
 * const HomeWithSuspense = withSuspense(LazyHome);
 * ```
 */
const withSuspense = (Component: React.ComponentType) => {
	return (
		<React.Suspense fallback={<LoadingFallback />}>
			<Component />
		</React.Suspense>
	);
};

export default withSuspense;
