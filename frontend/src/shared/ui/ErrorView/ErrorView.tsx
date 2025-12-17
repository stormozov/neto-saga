import { getReadableErrorMessage } from "@shared/utils";
import { BiSolidErrorAlt } from "react-icons/bi";
import { BsArrowRepeat } from "react-icons/bs";
import { Button } from "../Button";
import "./ErrorView.scss";

/**
 * Пропсы компонента отображения ошибки.
 */
interface IErrorViewProps {
	/**
	 * Код или сообщение об ошибке, которое будет преобразовано в читаемый вид.
	 */
	message: string;

	/**
	 * Обработчик, вызываемый при нажатии на кнопку "Повторить запрос".
	 */
	onRetry: () => void;
}

/**
 * Компонент отображения состояния ошибки с возможностью повторного запроса.
 *
 * Показывает иконку ошибки, заголовок, понятное сообщение (преобразованное 
 * из кода ошибки) и кнопку для повторной попытки действия. Используется как 
 * заглушка при сбое загрузки данных.
 *
 * @param message - Код или текст ошибки, передаваемый для отображения.
 * @param onRetry - Функция, вызываемая при клике на кнопку повтора.
 *
 * @example
 * ```tsx
 * <ErrorView message="NOT_FOUND" onRetry={handleRetry} />
 * ```
 */
function ErrorView({ message, onRetry }: IErrorViewProps) {
	const readableMessage = getReadableErrorMessage(message);

	return (
		<div className="error-view">
			<div className="error-view__content">
				<BiSolidErrorAlt className="error-view__icon" />

				<h3 className="error-view__title">Произошла ошибка</h3>
				<p className="error-view__message">{readableMessage}</p>

				<Button className="error-view__button" onClick={onRetry}>
					<BsArrowRepeat />
					Повторить запрос
				</Button>
			</div>
		</div>
	);
}

export default ErrorView;
