import "./recording.css";
import sky from "../imgs/sky.jpg";

function recording() {
    window.onload = function() {
        var video = document.getElementById('video');
        if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            video.srcObject = stream;
            video.play();
        })};
    }

  return (
    <div className="recording-main">
        <img src={sky} alt="sky" className="recording-img"/>
        <video className="recording-video" id="video" autoPlay></video>
    </div>
  );
}

export default recording;