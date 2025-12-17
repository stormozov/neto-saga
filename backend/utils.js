/**
 * Асинхронная функция, имитирующая сетевой запрос с вероятностью успеха 
 * и случайной задержкой.
 *
 * Возвращает промис, который с 70% вероятностью разрешается успешно,
 * отправляя ответ с заданным статусом и телом, и с 30% вероятностью отклоняется.
 * Задержка перед отправкой ответа — случайная, в диапазоне от minDelay 
 * до maxDelay.
 *
 * @param {Object} res - Объект ответа Express, используется для отправки данных 
 * клиенту.
 * @param {*} [body=null] - Тело ответа, которое будет отправлено в формате JSON.
 * @param {number} [status=200] - HTTP-статус ответа.
 * @param {number} [minDelay=1000] - Минимальная задержка в миллисекундах.
 * @param {number} [maxDelay=5000] - Максимальная задержка в миллисекундах.
 *
 * @returns {Promise<void>} Промис, который разрешается при успешной отправке 
 * ответа или отклоняется при ошибке.
 *
 * @example
 * fortune(res, { message: 'OK' }, 200, 1000, 4000)
 *   .then(() => console.log('Успешно'))
 *   .catch(() => console.log('Ошибка'));
 */
export function fortune(
	res,
	body = null,
	status = 200,
	minDelay = 1000,
	maxDelay = 3000,
) {
	return new Promise((resolve, reject) => {
		const delay = randomNumber(minDelay, maxDelay);

		setTimeout(() => {
			if (Math.random() <= 0.3) {
				return reject(new Error("Simulated network failure"));
			}

			res.status(status).json(body);
			resolve();
		}, delay);
	});
}

/**
 * Генерирует случайное число в указанном диапазоне.
 *
 * @param {number} min - Нижняя граница диапазона.
 * @param {number} max - Верхняя граница диапазона.
 *
 * @returns {number} Случайное число из указанного диапазона.
 */
export function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
