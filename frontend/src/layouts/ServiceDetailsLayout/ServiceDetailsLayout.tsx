import { Footer } from "../Footer";
import { Header } from "../Header";
import { Main } from "../Main";
import { Sidebar } from "../Sidebar";
import styles from "./ServiceDetailsLayout.module.scss";

export default function ServiceDetailsLayout() {
	return (
		<div className={styles.layout}>
			<Sidebar />
			<div className={styles.content}>
				<Header />
				<Main />
				<Footer />
			</div>
		</div>
	)
}
