import React from "react";
import "./Header.css";
import logo from '../static/logo.svg';

export default class Header extends React.Component {
  render() {

    const scroll_end = (e) => {
      e.preventDefault();
      document.querySelector('.footer').scrollIntoView(false);
    }

    return (
      <div className="header">
        <img className='logo' src={logo}></img>
        <nav className="navigation">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="https://github.com/Saud-N">Github</a>
            </li>
            <li>
              <a href='#' onClick={scroll_end}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
