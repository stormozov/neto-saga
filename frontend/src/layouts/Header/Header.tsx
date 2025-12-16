import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import style from "./Header.module.scss";

/**
 * Компонент шапки (хедера) приложения.
 */
export default function Header() {
	return (
		<header className={style.header}>
			<div className="container">
				<div className={style.headerContent}>
					<p className={style.title}>Redux Saga Demo App</p>
					<div className={style.actions}>
						<Link
							className={style.githubLink}
							to="https://github.com/stormozov/neto-saga"
							target="_blank"
							rel="noreferrer"
							title="GitHub repository"
							aria-label="GitHub repository"
						>
							<FaGithub />
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
