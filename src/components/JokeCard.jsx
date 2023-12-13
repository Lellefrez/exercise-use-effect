import { useEffect } from "react";
import { useState } from "react";

export default () => {
  const [joke, setJoke] = useState();
  const [click, setClick] = useState(false);
  const [reload, setReload] = useState(true);
  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart")
      .then((response) => response.json())
      .then((obj) => setJoke(obj))
      .catch((error) => console.error(error));
  }, [reload]);
  return (
    <>
      <div>
        {joke === undefined ? (
          <div>"Loading..." </div>
        ) : (
          <div>
            <h3>{joke.setup}</h3>
            {click === true ? (
              <div>
                <p>{joke.delivery}</p>
                <button
                  onClick={() => {
                    return setClick(!click), setReload(!reload);
                  }}
                >
                  Reload
                </button>
              </div>
            ) : (
              <div>
                <button onClick={() => setClick(!click)}>Answer</button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};
