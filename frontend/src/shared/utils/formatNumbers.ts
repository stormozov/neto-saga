/**
 * Форматирует число с разделителями тысяч и добавляет символ валюты
 *
 * @param {number} value - Число для форматирования.
 * @param {string} currencySymbol - Символ валюты. Необязательно. По умолчанию '₽'.
 * 
 * @returns {string} Отформатированная строка с разделителями и валютой.
 *
 * @example
 * formatCurrency(20000, '₽') // '20 000₽'
 * formatCurrency(1234567.89, '$') // '1 234 567.89$'
 * formatCurrency(42) // '42'
 */
export function formatCurrency(
	value: number,
	currencySymbol: string = "₽",
): string {
	const formattedNumber = value.toLocaleString("ru-RU", {
		minimumFractionDigits: 0,
		maximumFractionDigits: 20,
	});

	return !currencySymbol
		? formattedNumber
		: `${formattedNumber} ${currencySymbol}`;
}
