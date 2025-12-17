import type { PayloadAction } from "@reduxjs/toolkit";

/**
 * =============================================================================
 * Типы данных
 * =============================================================================
 */

/** Интерфейс, описывающий одну услугу */
export interface IServiceItem {
	id: string;
	name: string;
	price: number;
}

/** Тип, описывающий идентификатор услуги */
export type ServiceId = Pick<IServiceItem, "id">;

/** Интерфейс, описывающий детали услуги */
export interface IServiceDetails extends IServiceItem {
	content: string;
}

/**
 * =============================================================================
 * Типы состояний
 * =============================================================================
 */

/** Интерфейс, описывающий состояние списка услуг */
export interface IServicesListState {
	items: IServiceItem[];
	loading: boolean;
	error: string | null;
}

/** Интерфейс, описывающий состояние деталей услуги */
export interface IServiceDetailsState {
	item: IServiceDetails | null;
	loading: boolean;
	error: string | null;
}

/** Интерфейс, описывающий состояние сервиса */
export interface IServicesState {
	list: IServicesListState;
	details: IServiceDetailsState;
}

/**
 * =============================================================================
 * Типы действий
 * =============================================================================
 */

/**
 * Тип действия: запрос на получение списка услуг.
 *
 * Используется для сигнализации начала асинхронной операции загрузки списка
 * услуг.
 */
export type ServicesListRequestedAction = PayloadAction<void>;

/**
 * Тип действия: успешное получение списка услуг.
 *
 * Содержит массив объектов услуг, полученных от сервера.
 */
export type ServicesListSucceededAction = PayloadAction<IServiceItem[]>;

/**
 * Тип действия: ошибка при получении списка услуг.
 *
 * Содержит строку с описанием ошибки.
 */
export type ServicesListFailedAction = PayloadAction<string>;

/**
 * Тип действия: запрос на получение деталей конкретной услуги.
 *
 * Содержит идентификатор услуги, для которой запрашиваются детали.
 */
export type ServiceDetailsRequestedAction = PayloadAction<ServiceId>;

/**
 * Тип действия: успешное получение деталей услуги.
 *
 * Содержит объект с подробной информацией об услуге.
 */
export type ServiceDetailsSucceededAction = PayloadAction<IServiceDetails>;

/**
 * Тип действия: ошибка при получении деталей услуги.
 *
 * Содержит строку с описанием ошибки.
 */
export type ServiceDetailsFailedAction = PayloadAction<string>;
