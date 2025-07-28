import { useState, useEffect } from "react";
import styles from "../index.module.css";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  /**
   * Challenge: Get a random image from the array of
   * allMemes when the user clicks the button. Once
   * you've gotten a random image from the array, make
   * sure to write the code that will display that
   * random meme image to the page.
   */

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  function getNewMeme() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    // console.log(allMemes[randomIndex]);
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        imageUrl: allMemes[randomIndex].url,
      };
    });
  }

  return (
    <main
      style={{
        marginInline: "auto",
        padding: "36px",
        maxWidth: "600px",
        color: "black",
      }}
    >
      <div className={styles.form}>
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button onClick={getNewMeme}>Get a new meme image 🖼</button>
      </div>
      <div className={styles.meme}>
        <img src={meme.imageUrl} />
        <span className={styles.top}>{meme.topText}</span>
        <span className={styles.bottom}>{meme.bottomText}</span>
      </div>
    </main>
  );
}
