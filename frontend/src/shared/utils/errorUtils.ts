/** Функция для преобразования технических ошибок в понятные сообщения */
export const getReadableErrorMessage = (error: string): string => {
	const errorLower = error.toLowerCase();

	if (
		errorLower.includes("failed to fetch") ||
		errorLower.includes("network error") ||
		errorLower.includes("network request failed")
	) {
		return "Ошибка подключения к серверу. Проверьте интернет-соединение.";
	}

	if (errorLower.includes("404") || errorLower.includes("not found")) {
		return "Запрашиваемый ресурс не найден.";
	}

	if (
		errorLower.includes("500") ||
		errorLower.includes("internal server error")
	) {
		return "Внутренняя ошибка сервера. Попробуйте позже.";
	}

	if (errorLower.includes("timeout") || errorLower.includes("timed out")) {
		return "Превышено время ожидания ответа от сервера.";
	}

	if (errorLower.includes("400") || errorLower.includes("bad request")) {
		return "Некорректный запрос.";
	}

	if (errorLower.includes("401") || errorLower.includes("unauthorized")) {
		return "Ошибка авторизации.";
	}

	if (errorLower.includes("403") || errorLower.includes("forbidden")) {
		return "Доступ запрещен.";
	}

	return error;
};

/** Вспомогательная функция для безопасного получения сообщения об ошибке */
export const getErrorMessage = (error: unknown): string => {
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	return "Неизвестная ошибка";
};
