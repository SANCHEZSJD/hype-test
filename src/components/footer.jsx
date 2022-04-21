import React from "react";
import icon from '../assets/images/icon.svg';
import { MdCopyright } from 'react-icons/md';

const service = [
    "Web Hosting",
    "Domains",
    "Premium Hosting",
    "Private Server",
    "E-mail Hosting"
];

const followUs = [
    {
        name: "Facebook",
        url: '#'
    },
    {
        name: "Twitter",
        url: '#'
    },
    {
        name: "Instagram",
        url: '#'
    },
    {
        name: "Linkedin",
        url: '#'
    }
];

const contactUs = [{
    name: "emailaddress@mail.com",
}];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-description">
                    <img src={icon} />
                    <p>Digital experience is always embedded in a physical experience.</p>
                </div>
                <div className="footer-service">
                    <ul>
                        {service.map((item, index) => (<li key={index}>{item}</li>))}
                    </ul>
                </div>
                <div className="footer-follow-us">
                    <div className="footer-container-title">Follow us</div>
                    <ul>
                        {followUs.map((item, index) => (<li key={index}><a href={item.url}>{item.name}</a></li>))}
                    </ul>
                </div>
                <div className="footer-contact-us">
                    <div className="footer-container-title">Contact us</div>
                    <ul>
                        {contactUs.map((item, index) => (<li key={index}>{item.name}</li>))}
                    </ul>
                </div>
            </div>
            <div className="footer-container footer-info">
                <div className="copy">Desig with love <MdCopyright /> TanahAirStudio 2022. All right reserved</div>
                <div className="menu">
                    <ul>
                        <li>Claim</li>
                        <li>Privacity</li>
                        <li>Terms</li>
                    </ul>
                </div>
            </div>

        </footer>
    )
};

export default Footer;