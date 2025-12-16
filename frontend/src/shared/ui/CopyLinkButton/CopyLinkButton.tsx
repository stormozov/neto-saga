import { FaLink } from "react-icons/fa";
import { IoCheckmarkSharp } from "react-icons/io5";
import { Button } from "../Button";
import { useClipboard } from "./useClipboard";

/**
 * Кнопка для копирования URL текущей страницы в буфер обмена
 *
 * @description
 * При нажатии копирует `window.location.href` и меняет внешний вид на 2 секунды.
 * Использует хук {@link useClipboard} с fallback для старых браузеров.
 */

export default function CopyLinkButton() {
	const { isCopied, copyToClipboard } = useClipboard();

	return (
		<Button
			onClick={() => copyToClipboard(window.location.href)}
			importance="secondary"
			intent={isCopied ? "success" : "neutral"}
			size="small"
			fullWidth
		>
			{isCopied ? (
				<>
					<IoCheckmarkSharp />
					<span>Ссылка скопирована</span>
				</>
			) : (
				<>
					<FaLink />
					<span>Скопировать ссылку</span>
				</>
			)}
		</Button>
	);
}
