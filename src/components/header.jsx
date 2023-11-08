import "./header.css";
import logo from "../imgs/header_logo.png";
import library from "../imgs/library_logo.png"
import camera from "../imgs/camera_logo.png"

function header() {
  return (
    <div className="header-nav">
        <div className="header-start">
          <img src={logo} alt="logo"/>
        </div>
        <div className="header-end">
          <img src={camera} alt="camera" />
          <img src={library} alt="library" />
        </div>
    </div>
  );
}

export default header;