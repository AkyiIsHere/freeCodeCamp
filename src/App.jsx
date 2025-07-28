// import { useState, useEffect } from "react";
// import Travel_Blog from "./travel_blog/Travel_Blog";
// import Static_Page from "./static_page/Static_page";
import Chef_Claude from "./chef_claude/index";
// import MemeGenerator from "./meme_generator";

// import Counter from "./components/Counter/Counter";
// import Contact from "./components/Contact/Contact";
// import JokeApp from "./components/Joke/Joke";
import Test from "./components/Test";
import "./App.css";
// import Pads from "./components/Pads/Pads.jsx";
// import WindowTracker from "./components/WindowTracker/App.jsx";

export default function App() {
  return <Chef_Claude />;
  // return <Counter />;
  // return <Contact />;
  // return <JokeApp />;
  // return <Test />;
  // return <Pads darkMode={true} />;

  // return <MemeGenerator />;
  // return <WindowTracker />;
}

// export default function App() {
//   const [starWarsData, setStarWarsData] = useState({});
//   const [count, setCount] = useState(1);

//   console.log("App component rendered");

//   useEffect(() => {
//     fetch(`https://swapi.py4e.com/api/people/${count}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setStarWarsData(data);
//       })
//       .catch((errors) => console.log(errors));
//   }, [count]);

//   return (
//     <div>
//       <h2>The count is {count}</h2>
//       <button onClick={() => setCount((prevCount) => prevCount + 1)}>
//         Get Next Character
//       </button>
//       <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//     </div>
//   );
// }
