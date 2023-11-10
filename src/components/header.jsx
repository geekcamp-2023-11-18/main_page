import "./header.css";
import logo from "../imgs/header_logo.png";
import library from "../imgs/library_logo.png";
import camera from "../imgs/camera_logo.png";

function header() {
  return (
    <div className="header-main">
      <img src={logo} alt="logo" className="logo" />
      <img src={camera} alt="camera" className="camera" />
      <img src={library} alt="library" className="library" />
    </div>
  );
}

export default header;