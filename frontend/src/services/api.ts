import type { PayloadAction } from "@reduxjs/toolkit";
import { getErrorMessage } from "@shared/utils";
import { call, put } from "redux-saga/effects";

/**
 * Функция-генератор для асинхронной загрузки данных с помощью `fetch`.
 *
 * Выполняет HTTP-запрос по указанному URL, обрабатывает ответ и диспатчит
 * соответствующие действия в зависимости от результата: успешного получения
 * данных или ошибки. Использует `AbortController` для возможности отмены
 * запроса.
 *
 * @template T - Тип ожидаемых данных в ответе.
 *
 * @param url - Адрес, по которому выполняется запрос.
 * @param successAction - Фабричная функция действия, вызываемая при успешной
 * загрузке. Принимает данные типа `T`.
 * @param failureAction - Фабричная функция действия, вызываемая при ошибке.
 * Принимает строку с описанием ошибки.
 *
 * @yields {Object} - Эффекты `call` и `put` из библиотеки `redux-saga`.
 *
 * @example
 * ```ts
 * function* loadServices() {
 *   yield* fetchData('/api/services', servicesLoaded, servicesLoadFailed);
 * }
 * ```
 */
export function* fetchData<T>(
	url: string,
	successAction: (data: T) => PayloadAction<T>,
	failureAction: (error: string) => PayloadAction<string>,
) {
	const abortController = new AbortController();

	try {
		const response: Response = yield call(fetch, url, {
			signal: abortController.signal,
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data: T = yield call([response, "json"]);
		yield put(successAction(data));
	} catch (error) {
		yield put(failureAction(getErrorMessage(error)));
	}
}
