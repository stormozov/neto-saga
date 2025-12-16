import { useCallback, useState } from "react";

/**
 * Хук для работы с буфером обмена (clipboard)
 *
 * @example
 * // Базовое использование
 * function CopyButton() {
 *   const { isCopied, copyToClipboard } = useClipboard();
 *
 *   const handleCopy = () => {
 *     copyToClipboard("Текст для копирования");
 *   };
 *
 *   return (
 *     <button onClick={handleCopy}>
 *       {isCopied ? "Скопировано!" : "Копировать"}
 *     </button>
 *   );
 * }
 *
 * @remarks
 * Хук предоставляет автоматическое сброс состояния `isCopied` через 2 секунды 
 * после успешного копирования. Использует современный API `navigator.clipboard` 
 * с fallback на `document.execCommand` для старых браузеров.
 */
export function useClipboard() {
	const [isCopied, setIsCopied] = useState(false);

	const copyToClipboard = useCallback(async (text: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setIsCopied(true);
			setTimeout(() => setIsCopied(false), 2000);
			return true;
		} catch (err) {
			console.error("Copy failed:", err);

			// Fallback
			const textArea = document.createElement("textarea");
			textArea.value = text;
			document.body.appendChild(textArea);
			textArea.select();

			try {
				document.execCommand("copy");
				setIsCopied(true);
				setTimeout(() => setIsCopied(false), 2000);
				return true;
			} catch (fallbackErr) {
				console.error("Fallback failed:", fallbackErr);
				return false;
			} finally {
				document.body.removeChild(textArea);
			}
		}
	}, []);

	return { isCopied, copyToClipboard };
}
