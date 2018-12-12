import "./header.css";
import React from "react";
import logo from "./walk.jpg";
import user from "../../assets/user.png"

class Header extends React.Component{
  componentDidMount() {
    window.onscroll = () => scrollFunc();

    function scrollFunc() {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("Nav-menu").style.padding = "1px 40px";
        document.getElementById("Nav-brand-name").className = "hidden";
      } else {
        document.getElementById("Nav-menu").style.padding = "13px 40px";
        document.getElementById("Nav-brand-name").className = "visible";
      }
    }

  }

  render(){
    return (
      <div className="Nav">
        <div id="Nav-menu">
          <div className="Nav-brand">
            <img className="Nav-brand-logo" src={logo} alt="gallery walk logo"/>
            <a id="Nav-brand-name" href="/"> Gallery Walk </a>
          </div>
          <img className="Nav-user" src={user} alt="user"/>  
        </div>
      </div>
    );
  }   
}
export default Header;