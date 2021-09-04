import React from "react";
import "./Home.css";

import PortfolioItem from "../components/PortfolioItem";
import PortfolioItemIntro from "../components/PortfolioItemIntro";
import PortfolioItemIntroPicture from "../components/PortfolioItemIntroPicture";
import profile_picture from "../static/profile_picture.png";
import laptop_img from "../static/laptop_picture.png";
import react_vue_img from "../static/react_vue.png";
import repaire_item_img from "../static/repair.png";
import mysql_item_img from "../static/mysql.png";
import customer_service_img from "../static/customer_service.png";
import circut_board_img from "../static/circut_board.png";
import networking_img from "../static/networking.png";
import data_center_img from "../static/data_center.png";
import ubiquiti_img from "../static/ubiquiti.png";

export default class Header extends React.Component {
    render() {
        return (
            <div className="home">
                <PortfolioItemIntro
                    colPos={"1 / span 2"}
                    rowPos={"1 / span 1"}
                    content={
                        "Hi. My name is Saud Nezar. I've recently graduated from the collage of computer science at Tikrit Univerisy."
                    }
                />

                <PortfolioItemIntroPicture
                    colPos={"3 / span 1"}
                    rowPos={"1 / span 1"}
                    img={profile_picture}
                />

                <PortfolioItem
                    colPos={"1 / span 2"}
                    rowPos={"2 / span 2"}
                    title={"Web Development"}
                    desc={
                        "Experienced with front-end and back-end web development using modern frameworks, databases and graphics design."
                    }
                    img={laptop_img}
                    small={false}
                />

                <PortfolioItem
                    colPos={"3 / span 1"}
                    rowPos={"2 / span 1"}
                    title={"Front-end"}
                    desc={
                        "Experience with React.js and Vue.js which are modern declarative front-end devolopment frameworks."
                    }
                    img={react_vue_img}
                    small={true}
                />

                <PortfolioItem
                    colPos={"3 / span 1"}
                    rowPos={"3 / span 1"}
                    title={"MySQL"}
                    desc={
                        "Work with the famous MySQL relational database management system."
                    }
                    img={mysql_item_img}
                    small={true}
                />

                <PortfolioItem
                    colPos={"2 / span 2"}
                    rowPos={"4 / span 2"}
                    title={"Computer Maintenance"}
                    desc={
                        "Experienced computer technician for Windows-based systems."
                    }
                    img={circut_board_img}
                    small={false}
                />

                <PortfolioItem
                    colPos={"1 / span 1"}
                    rowPos={"4 / span 1"}
                    title={"Junior Technician"}
                    desc={"Performed computer hardware maintenance and repair."}
                    img={repaire_item_img}
                    small={true}
                />
                <PortfolioItem
                    colPos={"1 / span 1"}
                    rowPos={"5 / span 1"}
                    title={"Customer Support"}
                    desc={
                        "Carried out over-the-phone support for customers to resolve software and hardware computer issues."
                    }
                    img={customer_service_img}
                    small={true}
                />
                <PortfolioItem
                    colPos={"1 / span 2"}
                    rowPos={"6 / span 2"}
                    title={"Networking"}
                    desc={
                        "Hands down experience with network development and maintenance."
                    }
                    img={networking_img}
                    small={false}
                />

                <PortfolioItem
                    colPos={"3 / span 1"}
                    rowPos={"6 / span 1"}
                    title={"Networking"}
                    desc={
                        "Carried out daily tasks at an internet service provider."
                    }
                    img={data_center_img}
                    small={true}
                />

                <PortfolioItem
                    colPos={"3 / span 1"}
                    rowPos={"7 / span 1"}
                    title={"Ubiquiti"}
                    desc={"Familiar with the ubiquiti AirOS Eco-system."}
                    img={ubiquiti_img}
                    small={true}
                />
            </div>
        );
    }
}
