import type { RootState } from "@/app/store";
import type { IServiceDetails, IServiceItem } from "./types";

/**
 * Базовый селектор для всего состояния модуля услуг
 * @param state - Корневое состояние приложения
 * @returns Состояние модуля услуг
 */
export const selectServices = (state: RootState) => state.services;

/**
 * Селектор для состояния списка услуг
 * @param state - Корневое состояние приложения
 * @returns Объект состояния списка услуг
 */
export const selectServicesList = (state: RootState) => state.services.list;

/**
 * Селектор для получения массива элементов услуг
 * @param state - Корневое состояние приложения
 * @returns Массив объектов услуг типа {@link IServiceItem}
 */
export const selectListItems = (state: RootState): IServiceItem[] =>
	state.services.list.items;

/**
 * Селектор для получения состояния загрузки списка услуг
 * @param state - Корневое состояние приложения
 * @returns Флаг загрузки (true - в процессе загрузки)
 */
export const selectListLoading = (state: RootState): boolean =>
	state.services.list.loading;

/**
 * Селектор для получения ошибки загрузки списка услуг
 * @param state - Корневое состояние приложения
 * @returns Текст ошибки или null, если ошибки нет
 */
export const selectListError = (state: RootState): string | null =>
	state.services.list.error;

/**
 * Селектор для состояния детальной информации об услуге
 * @param state - Корневое состояние приложения
 * @returns Объект состояния деталей услуги
 */
export const selectServiceDetails = (state: RootState) =>
	state.services.details;

/**
 * Селектор для получения детальной информации об услуге
 * @param state - Корневое состояние приложения
 * @returns Объект детальной информации типа {@link IServiceDetails} или null
 */
export const selectDetailsItem = (state: RootState): IServiceDetails | null =>
	state.services.details.item;

/**
 * Селектор для получения состояния загрузки деталей услуги
 * @param state - Корневое состояние приложения
 * @returns Флаг загрузки (true - в процессе загрузки)
 */
export const selectDetailsLoading = (state: RootState): boolean =>
	state.services.details.loading;

/**
 * Селектор для получения ошибки загрузки деталей услуги
 * @param state - Корневое состояние приложения
 * @returns Текст ошибки или null, если ошибки нет
 */
export const selectDetailsError = (state: RootState): string | null =>
	state.services.details.error;
