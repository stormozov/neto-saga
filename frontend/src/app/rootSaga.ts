import { all } from "redux-saga/effects";
import { servicesSaga } from "@/features/services";

/**
 * Корневая сага приложения.
 *
 * Объединяет все отдельные саги (в данном случае — только `servicesSaga`)
 * в один поток с помощью `all`, чтобы запустить их одновременно при 
 * инициализации приложения. Используется как точка входа для управления всеми 
 * асинхронными процессами через `redux-saga`.
 *
 * @yields {Object} - Массив саг, запускаемых параллельно.
 *
 * @example
 * ```ts
 * // В настройке стора:
 * sagaMiddleware.run(rootSaga);
 * ```
 */
export default function* rootSaga() {
	yield all([servicesSaga()]);
}
