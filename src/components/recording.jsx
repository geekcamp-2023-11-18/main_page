import React, { useState, useRef } from "react";
import "./recording.css";
import sky from "../imgs/sky.jpg";
import nightsky from "../imgs/nightsky.jpg";
import tetsuya from "../imgs/blueButton.png";
import otsu from "../imgs/redButton.png";
//import useSound from "use-sound"; いらなくなった
import soundDoor from "../musics/doorOpen.mp3";
import { ReactMediaRecorder } from "react-media-recorder";
import "canvas-toBlob";

let button = tetsuya;
let changer = 0;

function recording() {
  const [noon, isNoon] = useState(true);
  const [button, setButton] = useState(tetsuya);
  const oto = new Audio(soundDoor);

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
    oto.play();
    //useSound(soundDoor); いらなくなった

    if (changer === 0) {
      changer = 1;
      setButton(otsu);
    } else {
      changer = 0;
      setButton(tetsuya);
    }
  }

  const changeFile = (blobURL) => {
    const file = new File([blobURL], 'sample.mp4', {type: blobURL.type})
    //const video = document.getElementById("aaaa");
    //video.setAttribute("src",file)
    console.log(file)
  };

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
      <div className="rokuga">
        <ReactMediaRecorder
          video
          render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
            <div className="rokuga">
              <p>{status}</p>
              <button onClick={startRecording}>Start Recording</button>
              <button onClick={stopRecording}>Stop Recording</button>
              <button onClick={() => changeFile(mediaBlobUrl)}>Change File</button>
              <video  controls autoPlay loop />
            </div>
          )}
        />
      </div>
    </div>
  );
}

export default recording;
