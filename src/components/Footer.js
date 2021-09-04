import React from "react";
import "./Footer.css";
import PortfolioItem from "./PortfolioItem";

import logo from "../static/logo.svg";
import linkedin from "../static/linkedin.svg";
import instagram from "../static/instagram.svg";

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-item logo">
                    <img src={logo}></img>
                </div>
                <div className="footer-item contact-info">
                    <h1>Contact</h1>
                    <hr></hr>
                    <p>
                        Mobile: 07707543188
                        <br></br>
                        Email: saudnezar060@gmail.com
                    </p>
                </div>
                <div className="footer-item social">
                    <h1>Social</h1>
                    <hr></hr>
                    <div className='links-container'>
                        <a href="https://www.instagram.com/Saud_nezar/">
                            <img src={instagram}></img>
                        </a>
                        <a href="https://linkedin.com/in/saud-nezar-536a61210">
                            <img src={linkedin}></img>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
