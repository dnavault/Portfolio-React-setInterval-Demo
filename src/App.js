import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [imgSrc, changeImgSrc] = useState("");
  const [imgTv, changeImgTv] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("	https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => changeImgSrc(data.message));

      fetch("https://v2.jokeapi.dev/joke/Any")
        .then((response) => response.json())
        .then((data) => console.log(data));
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <img src={imgSrc} />
    </div>
  );
}
