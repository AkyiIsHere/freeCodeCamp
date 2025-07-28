import React, { useEffect } from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    function watchWindowWidth() {
      setWindowWidth(window.innerWidth);
      console.log("hi");
    }
    window.addEventListener("resize", watchWindowWidth);
    return () => {
      console.log("Cleaning up...");
      window.removeEventListener("resize", watchWindowWidth);
    };
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
}
