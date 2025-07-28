import { use, useState } from "react";
import padsData from "./pads";
import Pad from "./Pad";
import styles from "../css/pads.module.css";

// export default function Pads({ darkMode }) {
//   const [pads, setpads] = useState(padsData);

//   const buttonElements = pads.map((item) => {
//     return <Pad key={item.id} color={item.color} on={item.on} />;
//   });

//   return (
//     <main style={{ backgroundColor: darkMode ? "#222" : "#ccc" }}>
//       <div className={styles.padContainer}>{buttonElements}</div>
//     </main>
//   );
// }

export default function Pads({ darkMode }) {
  const [pads, setpads] = useState(padsData);

  function toggleOn(id) {
    setpads((prevpad) =>
      prevpad.map((item) => (item.id === id ? { ...item, on: !item.on } : item))
    );
  }
  //   function toggleOn(id) {
  //     setpads((prevpad) => {
  //       return prevpad.map((item) => {
  //         return item.id === id ? { ...item, on: !item.on } : item;
  //       });
  //     });
  //   }

  //   function toggleOn(id) {
  //     setpads((previtem) => {
  //       const updated = previtem.map((item) =>
  //         item.id === id ? { ...item, on: !item.on } : item
  //       );
  //       console.log("Updated pads:", updated);
  //       return updated;
  //     });
  //   }

  function turnOff() {
    setpads((prevpads) =>
      prevpads.map((item) => {
        return { ...item, on: false };
      })
    );
  }

  const buttonElements = pads.map((item) => {
    return (
      <Pad
        key={item.id}
        color={item.color}
        on={item.on}
        handleClick={() => toggleOn(item.id)}
      />
    );
  });

  return (
    <main style={{ backgroundColor: darkMode ? "#222" : "#ccc" }}>
      <div className={styles.padContainer}>{buttonElements}</div>
      <button className={styles.offBtn} onClick={turnOff}>
        Turn All Off
      </button>
    </main>
  );
}
