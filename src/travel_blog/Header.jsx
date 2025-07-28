import styles from "./css/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        <img src="./earth.png" alt="react logo" className={styles.logoImg} />
        <span className={styles.logoText}>My Travel Journey</span>
      </a>
    </header>
  );
}
