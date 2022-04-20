import React from "react";
import classNames from "classnames";
import Logo from "../assets/images/logo.svg";
const navItems = ["Home", "Nosotros", "Primeros pasos", "Hyperpacks"];

const Nav = () => {
    const [active] = React.useState(0);
    return (
        <nav className="App-nav">
            <div className="App-nav-container">
                <img className="App-logo" src={Logo} alt="logo" />
                <ul>
                    {navItems.map((e, index) => <li className={classNames({ 'active': index === active })} key={e}>{e}</li>)}
                </ul>
                <button className="App-nav-btn-access">Acceso</button>
            </div>
        </nav>
    )
};

export default Nav;