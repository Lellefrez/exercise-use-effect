import { useEffect } from "react";
import { useState } from "react";

export default () => {
  const [joke, setJoke] = useState();
  const [click, setClick] = useState(false);
  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart")
      .then((response) => response.json())
      .then((obj) => setJoke(obj))
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <div>
        {joke === undefined ? (
          <div>"Loading..." </div>
        ) : (
          <div>
            <h3>{joke.setup}</h3>
            <button onClick={() => setClick(!click)}>
              {click === true ? "Reload" : "Answer"}
            </button>
            <p>{click === true ? joke.delivery : ""}</p>
          </div>
        )}
      </div>
    </>
  );
};
