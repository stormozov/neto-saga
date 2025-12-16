/**
 * Асинхронная функция, имитирующая сетевой запрос с вероятностью успеха.
 *
 * Возвращает промис, который с 70% вероятностью разрешается успешно,
 * отправляя ответ с заданным статусом и телом, и с 30% вероятностью отклоняется.
 * Используется для имитации нестабильного поведения API (например, ошибок сети).
 *
 * @param {Object} res - Объект ответа Express, используется для отправки данных 
 * клиенту.
 * @param {*} [body=null] - Тело ответа, которое будет отправлено в формате JSON.
 * @param {number} [status=200] - HTTP-статус ответа.
 * 
 * @returns {Promise<void>} Промис, который разрешается при успешной отправке 
 * ответа или отклоняется при ошибке.
 *
 * @example
 * fortune(res, { message: 'OK' }, 200)
 *   .then(() => console.log('Успешно'))
 *   .catch(() => console.log('Ошибка'));
 */
export function fortune(res, body = null, status = 200) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() <= 0.3) return reject();

			res.status(status).json(body);
			resolve();
		}, 3 * 1000);
	});
}
