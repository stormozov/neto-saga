import { createSlice } from "@reduxjs/toolkit";
import type {
	IServicesState,
	ServiceDetailsFailedAction,
	ServiceDetailsRequestedAction,
	ServiceDetailsSucceededAction,
	ServicesListFailedAction,
	ServicesListSucceededAction
} from "./types";

/** Начальное состояние для слайса услуг. */
const initialState: IServicesState = {
	/** Состояние списка услуг. */
	list: {
		items: [], // Массив услуг
		loading: false, // Признак загрузки
		error: null, // Ошибка, если произошла
	},
	/** Состояние деталей выбранной услуги. */
	details: {
		item: null, // Объект деталей услуги
		loading: false, // Признак загрузки
		error: null, // Ошибка, если произошла
	},
};

/**
 * Создание слайса Redux для управления состоянием услуг.
 *
 * Определяет действия и обновления состояния для:
 * - Запроса, успеха и ошибки при загрузке списка услуг;
 * - Запроса, успеха и ошибки при загрузке деталей услуги.
 */
const servicesSlice = createSlice({
	name: "services",
	initialState,
	reducers: {
		/**
		 * Действие: начало загрузки списка услуг.
		 * Устанавливает состояние `loading` в `true` и сбрасывает предыдущую ошибку.
		 */
		servicesListRequested: (state) => {
			state.list.loading = true;
			state.list.error = null;
		},

		/**
		 * Действие: успешная загрузка списка услуг.
		 * Сохраняет полученные данные и устанавливает `loading` в `false`.
		 *
		 * @param state - Текущее состояние.
		 * @param action - Действие с полезной нагрузкой типа `IServiceItem[]`.
		 */
		servicesListSucceeded: (state, action: ServicesListSucceededAction) => {
			state.list.loading = false;
			state.list.items = action.payload;
		},

		/**
		 * Действие: ошибка при загрузке списка услуг.
		 * Сохраняет сообщение об ошибке и устанавливает `loading` в `false`.
		 *
		 * @param state - Текущее состояние.
		 * @param action - Действие с полезной нагрузкой типа `string`.
		 */
		servicesListFailed: (state, action: ServicesListFailedAction) => {
			state.list.loading = false;
			state.list.error = action.payload;
		},

		/**
		 * Действие: начало загрузки деталей услуги.
		 * Устанавливает состояние `loading` в `true` и сбрасывает предыдущую ошибку.
		 * Полезная нагрузка не используется, поэтому параметр проигнорирован.
		 *
		 * @param state - Текущее состояние.
		 */
		serviceDetailsRequested: (
			state,
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			_action: ServiceDetailsRequestedAction,
		) => {
			state.details.loading = true;
			state.details.error = null;
		},

		/**
		 * Действие: успешная загрузка деталей услуги.
		 * Сохраняет полученные данные и устанавливает `loading` в `false`.
		 *
		 * @param state - Текущее состояние.
		 * @param action - Действие с полезной нагрузкой типа `IServiceDetails`.
		 */
		serviceDetailsSucceeded: (state, action: ServiceDetailsSucceededAction) => {
			state.details.loading = false;
			state.details.item = action.payload;
		},

		/**
		 * Действие: ошибка при загрузке деталей услуги.
		 * Сохраняет сообщение об ошибке и устанавливает `loading` в `false`.
		 *
		 * @param state - Текущее состояние.
		 * @param action - Действие с полезной нагрузкой типа `string`.
		 */
		serviceDetailsFailed: (state, action: ServiceDetailsFailedAction) => {
			state.details.loading = false;
			state.details.error = action.payload;
		},
	},
});

/** Экспорт действий (actions) для диспетчеризации в приложении. */
export const {
	servicesListRequested,
	servicesListSucceeded,
	servicesListFailed,
	serviceDetailsRequested,
	serviceDetailsSucceeded,
	serviceDetailsFailed,
} = servicesSlice.actions;

/** Экспорт редьюсера для подключения к хранилищу Redux. */
export default servicesSlice.reducer;
