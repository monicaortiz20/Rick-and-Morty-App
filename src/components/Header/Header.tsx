import styles from "./Header.module.css";
import Searchbar from "../Searchbar";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles["header-title"]}>Header</h1>
      <Searchbar />
    </header>
  );
}
