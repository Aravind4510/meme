import React, { useState, useEffect } from "react";

function Game() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = () => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((json) => {
        const memes = json.data.memes;
        const randomID = Math.floor(Math.random() * memes.length);
        setMemes(memes[randomID]);
      })
      .catch((err) => {
        console.log(`Error  ${err}`);
      })
      .finally(() => {
        console.log("Executed");
      });
  };

  return (
    <div>
      <div className="container">
        <h1>Random Meme Generator</h1>
        {memes && (
          <img
            src={memes.url}
            alt={memes.name}
            style={{ width: "50%", height: "50%" }}
          />
        )}
        <button
          onClick={() => fetchMemes()}
          className="btn btn-primary m-4"
          type="button"
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default Game;
