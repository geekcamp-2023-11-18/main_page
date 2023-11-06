import "./header.css";
import logo from "../imgs/header_logo.png";

function header() {
  return (
    <div className="header-main">
        <img src={logo} alt="logo" className="logo"/>
    </div>
  );
}

export default header;