import React, { useState } from "react";
import "./recording.css";
import sky from "../imgs/sky.jpg";
import nightsky from "../imgs/nightsky.jpg";
import tetsuya from "../imgs/blueButton.png";
import otsu from "../imgs/redButton.png";

let button = tetsuya;
let changer = 0;

function recording() {
  const [background, setBackground] = useState(sky);
  const [button, setButton] = useState(tetsuya);

  window.onload = function () {
    var video = document.getElementById("video");
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
          video.play();
        });
    }
  };

  function change() {
    if (changer === 0) {
      changer = 1;
      setBackground(nightsky);
      setButton(otsu);
    } else {
      changer = 0;
      setBackground(sky);
      setButton(tetsuya);
    }
  }

  return (
    <div className="recording-main">
      <img src={background} alt="sky" className="recording-img" />
      <div className="video-position-div">
        <div className="video-div">
          <video id="video" autoPlay className="video"></video>
        </div>
      </div>
      <img src={button} className="button" onClick={change} />
    </div>
  );
}

export default recording;
