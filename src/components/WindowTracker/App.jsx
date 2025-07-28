import { useState, useEffect } from "react";
import WindowTracker from "./WindowTracker";
import "./style.css";

export default function App() {
  const [show, setShow] = useState(true);

  function toggle() {
    setShow((prevshow) => !prevshow);
  }

  return (
    <main className="container">
      <button onClick={toggle}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </main>
  );
}
