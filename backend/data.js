let nextId = 1;
/** Массив, хранящий данные о услугах. */
export const services = [
	{
		id: nextId++,
		name: "Замена стекла",
		price: 21_000,
		content: "Стекло оригинал от Apple",
	},
	{
		id: nextId++,
		name: "Замена дисплея",
		price: 25_000,
		content: "Дисплей оригинал от Foxconn",
	},
	{
		id: nextId++,
		name: "Замена аккумулятора",
		price: 4000,
		content: "Новый на 4000 mAh",
	},
	{
		id: nextId++,
		name: "Замена микрофона",
		price: 2500,
		content: "Оригинальный от Apple",
	},
];
