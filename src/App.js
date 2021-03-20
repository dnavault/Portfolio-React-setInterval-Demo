import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [imgSrc, changeImgSrc] = useState("");
  const [imgTv, changeImgTv] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
          changeImgSrc(data.message);
          console.log(data);
        });

      fetch("https://v2.jokeapi.dev/joke/Any")
        .then((response) => response.json())
        .then((data) => console.log(data));
    }, 9999);

    return () => clearInterval(interval);
  }, []);

  getUrls = () => {
    fetch("FeedUrls.txt").then((response) => response);
  };

  return (
    <div className="App">
      <div class="dog-random-img-container">
        <img src={imgSrc} alt="" />
      </div>
    </div>
  );
}
