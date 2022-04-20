import React from "react";

import imgHeader from '../assets/images/header.svg';
import iconTicket from '../assets/images/icon-ticket.svg';
import Nav from "./nav";
import { MdTrendingFlat } from "react-icons/md";


const Header = () => {

    return (
        <header className="App-header">
            <Nav />
            <div className="App-header-bg">
                <img src={imgHeader} className="App-header-image" alt="header image" />
            </div>
            <div className="App-header-container">
                <div className="App-header-content">
                    <span className="tag-discount">
                        <span>
                            <img src={iconTicket} className="icon-ticket" alt="tikect" />
                            Suscribete y obtén 20% Dcto.
                        </span>
                    </span>
                    <h1 className="App-header-title">El cambio es <span className="bold text-blue">inevitable</span> <br /> el crecimiento es <span className="bold text-orange">opcional</span></h1>
                    <p className="App-header-subtitle">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
                    <button className="App-header-btn-starting">¡Conocenos! <MdTrendingFlat style={{ marginLeft: 10 }} /></button>
                </div>
            </div>
        </header>
    )

};

export default Header;