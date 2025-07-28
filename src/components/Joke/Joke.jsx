import { useState } from "react";
import jokesData from "./jokesData";

export default function JokeApp() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  });
  return <div>{jokeElements}</div>;
}

function Joke(props) {
  const [isShown, setIsShown] = useState(false);

  function handleClick() {
    setIsShown(!isShown);
  }

  //   console.log(isShown);
  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={handleClick}>
        {isShown ? "Hide" : "Show"} punchline
      </button>
      <hr />
    </div>
  );
}
