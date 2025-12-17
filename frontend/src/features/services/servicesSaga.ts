import type { PayloadAction } from "@reduxjs/toolkit";
import { call, takeLatest } from "redux-saga/effects";
import { fetchData } from "@/services";
import {
	serviceDetailsFailed,
	serviceDetailsRequested,
	serviceDetailsSucceeded,
	servicesListFailed,
	servicesListRequested,
	servicesListSucceeded,
} from "./servicesSlice";
import type { IServiceDetails, IServiceItem } from "./types";

/** Базовый URL API */
const LOCAL_API_BASE_URL = "http://localhost:7070/api/services";

/** URL API на платформе Render */
const RENDER_API_BASE_URL = "https://neto-saga-services.onrender.com/api/services";

/** Базовый URL API */
const API_BASE_URL = RENDER_API_BASE_URL || LOCAL_API_BASE_URL;

/**
 * Сага для загрузки списка услуг.
 *
 * Использует вспомогательную функцию {@link fetchData} для выполнения
 * HTTP-запроса к базовому URL API. При успешном ответе диспатчит действие
 * {@link servicesListSucceeded}, при ошибке — {@link servicesListFailed}.
 *
 * Эта сага запускается при необходимости обновления списка услуг (например,
 * при входе на главную страницу).
 *
 * @yields {Object} - Эффект `call`, вызывающий функцию `fetchData` с типизацией
 * и параметрами.
 *
 * @example
 * ```ts
 * // Может быть использована в watcher-саге:
 * yield takeLatest(SERVICES_LIST_REQUESTED, fetchServicesListSaga);
 * ```
 */
function* fetchServicesListSaga() {
	yield call(
		fetchData<IServiceItem[]>,
		API_BASE_URL,
		servicesListSucceeded,
		servicesListFailed,
	);
}

/**
 * Сага для загрузки детальной информации об услуге по её идентификатору.
 *
 * Извлекает `id` из полезной нагрузки действия и формирует URL для запроса.
 * Использует универсальную функцию `fetchData` для выполнения HTTP-запроса.
 * При успехе диспатчит действие {@link serviceDetailsSucceeded}, при ошибке —
 * {@link serviceDetailsFailed}.
 *
 * @param action - Объект действия, содержащий `id` услуги в `payload`.
 * @yields {Object} - Эффект `call`, запускающий функцию `fetchData`
 * с параметрами.
 *
 * @example
 * ```ts
 * // Вызов саги при запросе деталей услуги:
 * yield takeLatest(SERVICE_DETAILS_REQUESTED, fetchServiceDetailsSaga);
 * ```
 */
function* fetchServiceDetailsSaga(action: PayloadAction<{ id: string }>) {
	const { id } = action.payload;

	yield call(
		fetchData<IServiceDetails>,
		`${API_BASE_URL}/${id}`,
		serviceDetailsSucceeded,
		serviceDetailsFailed,
	);
}

/**
 * Корневая сага для управления асинхронными операциями сервисов.
 *
 * Функция-генератор.
 *
 * Отслеживает действия {@link servicesListRequested} и
 * {@link serviceDetailsRequested}, и запускает соответствующие саги для
 * загрузки списка услуг и деталей услуги.
 *
 * Использует `takeLatest`, чтобы отменить предыдущий запрос, если новый был
 * вызван до завершения старого. Это предотвращает устаревшие обновления
 * состояния.
 *
 * @yields {Object} - Эффекты `takeLatest`, слушающие определённые действия
 * и запускающие обработчики.
 *
 * @example
 * ```ts
 * // Подключение в корневом сага-менеджере:
 * sagaMiddleware.run(servicesSaga);
 * ```
 */
export function* servicesSaga() {
	yield takeLatest(servicesListRequested.type, fetchServicesListSaga);
	yield takeLatest(serviceDetailsRequested.type, fetchServiceDetailsSaga);
}
