import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [imgSrc, changeImgSrc] = useState("");

  useEffect(() => {
    getUrls();

    const interval = setInterval(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
          changeImgSrc(data.message);
        });

      fetch("https://v2.jokeapi.dev/joke/Any")
        .then((response) => console.log(response))
        .then((data) => console.log(data));
    }, 9999);

    return () => clearInterval(interval);
  }, []);

  const getUrls = () => {
    fetch("./FeedUrls.txt")
      .then((response) => response.text())
      .then((items) => console.log(items));
  };

  return (
    <div className="App">
      <div className="dog-random-img-container">
        <img src={imgSrc} alt="" />
      </div>
    </div>
  );
}
