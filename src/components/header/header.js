import "./header.css";
import React from "react";
import logo from "./walk.jpg";
import upload from "../../assets/upload.png"


class Header extends React.Component{
  render(){
    return (
      <nav className="Nav">
        <div className="Nav-menus">
          <div className="Nav-brand">
            <img className="Nav-brand-logo" src={logo} alt="gallery walk logo"/>
            <a className="Nav-brand-logo" href="/"> Gallery Walk </a>
          </div>
          <img className="Nav-upload" src={upload} alt="upload"/>
        </div>
      </nav>
    );
  }   
}
export default Header;