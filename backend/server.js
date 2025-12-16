import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { services } from "./data.js";
import { fortune } from "./utils.js";

const app = express();

app.use(cors());
app.use(
	bodyParser.json({
		type() {
			return true;
		},
	}),
);
app.use((_, res, next) => {
	res.setHeader("Content-Type", "application/json");
	next();
});

/**
 * Обработчик GET-запроса для получения списка услуг.
 *
 * Преобразует массив услуг в формат DTO (id, name, price) и отправляет клиенту.
 * Использует функцию {@link fortune} для имитации асинхронного ответа 
 * с возможной ошибкой.
 * 
 * В случае успеха — возвращает список услуг с кодом 200.
 * В случае ошибки — возвращает сообщение об ошибке с кодом 500.
 *
 * @param {Object} _ - Объект запроса Express (не используется).
 * @param {Object} res - Объект ответа Express.
 * 
 * @returns {Promise<void>} Асинхронный ответ с данными или ошибкой.
 *
 * @example
 * // При успешном выполнении:
 * // HTTP 200, [{"id": 1, "name": "Стрижка", "price": 500}]
 *
 * @example
 * // При ошибке:
 * // HTTP 500, "Something went wrong"
 */
app.get("/api/services", async (_, res) => {
	const body = services.map((o) => ({
		id: o.id,
		name: o.name,
		price: o.price,
	}));

	try {
		return await fortune(res, body);
	} catch {
		return res.status(500).send("Something went wrong");
	}
});

/**
 * Обработчик GET-запроса для получения услуги по её идентификатору.
 *
 * Ищет услугу в массиве `services` по ID из параметров маршрута.
 * 
 * Если услуга не найдена — возвращает статус 404.
 * Если найдена — возвращает данные услуги с кодом 200.
 * 
 * Использует функцию {@link fortune} для имитации асинхронного ответа 
 * с возможной задержкой или ошибкой. В случае внутренней ошибки — возвращает 
 * статус 500.
 *
 * @param {Object} req - Объект запроса Express, содержит параметры маршрута.
 * @param {Object} res - Объект ответа Express.
 * @param {string} req.params.id - Идентификатор услуги, переданный в URL.
 * 
 * @returns {Promise<void>} Асинхронный ответ с данными услуги, ошибкой 404 
 * или 500.
 *
 * @example
 * // При запросе /services/1 (если услуга с id=1 существует):
 * // HTTP 200, {"id": 1, "name": "Стрижка", "price": 500}
 *
 * @example
 * // При запросе /services/999 (если услуга не найдена):
 * // HTTP 404
 *
 * @example
 * // При возникновении ошибки в fortune():
 * // HTTP 500, "Something went wrong"
 */
app.get("/api/services/:id", async (req, res) => {
	const id = Number(req.params.id);
	const index = services.findIndex((o) => o.id === id);

	if (index === -1) {
		const status = 404;
		try {
			return await fortune(res, null, status);
		} catch {
			return res.status(500).send("Something went wrong");
		}
	}

	const body = services[index];

	try {
		return await fortune(res, body);
	} catch {
		return res.status(500).send("Something went wrong");
	}
});

const port = process.env.PORT || 7070;
app.listen(port, () => console.log(`The server is running on port ${port}.`));
