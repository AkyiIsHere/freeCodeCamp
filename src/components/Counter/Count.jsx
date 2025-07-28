import styles from "../css/counter.module.css";

export default function Count({ number }) {
  return <h2 className={styles.count}>{number}</h2>;
}
