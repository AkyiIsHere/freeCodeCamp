import { Children, useState } from "react";
import styles from "../css/pads.module.css";

export default function Pad({ color, on, handleClick }) {
  return (
    <button
      style={{ backgroundColor: color }}
      className={`${styles.pad} ${on ? styles.on : null}`}
      onClick={handleClick}
    ></button>
  );
}

// export default function Pad({ color, on }) {
//   const [onValue, setOnValue] = useState(on);

//   function toggleOn() {
//     console.log("clicked");
//     setOnValue(!onValue);
//     console.log(onValue);
//   }

//   return (
//     <button
//       style={{ backgroundColor: color }}
//       className={onValue ? styles.on : null}
//       onClick={toggleOn}
//     ></button>
//   );
// }
