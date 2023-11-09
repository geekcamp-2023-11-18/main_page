import React, { useState } from "react";
import "./recording.css";
import sky from "../imgs/sky.jpg";
import nightsky from "../imgs/nightsky.jpg";
import tetsuya from "../imgs/blueButton.png";
import otsu from "../imgs/redButton.png";

let button = tetsuya;
let changer = 0;

function recording() {
  const [noon, isNoon] = useState(true);
  const [button, setButton] = useState(tetsuya);

  // カメラ起動
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

  // ボタンを押したら昼夜が切り替わる
  function change() {
    isNoon(!noon);

     if (changer === 0) {
       changer = 1;
       setButton(otsu);
     } else {
       changer = 0;
       setButton(tetsuya);
     }
  }

  //HTML
  return (
    <div className="recording-main">
      <img
        src={sky}
        alt="sky"
        className={noon ? "recordings-img" : "recordingsNight-img"}
      />
      <img
        src={nightsky}
        alt="sky"
        className={!noon ? "recordings-img" : "recordingsNight-img"}
      />
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
