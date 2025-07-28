import { useState } from "react";
import styles from "../css/counter.module.css";
import Count from "./Count";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <main className={styles.container}>
      <h1>How many times will BOb say "state" in this section?</h1>
      <div className={styles.counter}>
        <button
          className={styles.minus}
          onClick={() => setCounter((count) => count - 1)}
          aria-label="Decrease count"
        >
          -
        </button>
        <h2 className={styles.count}>{counter}</h2>
        <button
          className={styles.plus}
          onClick={() => setCounter((count) => count + 1)}
          aria-label="Increase count"
        >
          +
        </button>

        {counter != 0 && <Count number={counter} />}
      </div>
    </main>
  );
}
