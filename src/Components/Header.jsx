import React, { useState } from 'react';
import MapPin from './Resources/Map Pin.svg';
import DropDown from './Resources/DropDpwn.svg';
import BrandLogo from './Resources/BrandLogo.png';
import PhoneCall from './Resources/PhoneCall 1.svg';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonId) => {
        setActiveButton(buttonId);
    };

    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    };
    const home = () => {
        navigate('/')
        handleButtonClick(1)
    };
    const products = () => {
        navigate('/products')
        handleButtonClick(2)
    };
    const about = () => {
        navigate('/about')
        handleButtonClick(3)
    };
    const contact = () => {
        navigate('/contactus')
        handleButtonClick(4)
    };
    return (
        <div className="navbar">
            <div className="uprnav">
                <div className="sm">
                    <p><img src={MapPin} alt="Map Pin" />Store Location: Sainthia, Birbhum, West Bengal </p>
                    <p>
                        Eng
                        <img src={DropDown} alt="Dropdown" />
                        <span>USD <img src={DropDown} alt="Dropdown" /></span>
                        <small>Sign In / Sign Up</small>
                    </p>
                </div>
            </div>
            <div className="midnav">
                <div className="sm1">
                    <img onClick={goHome} src={BrandLogo} alt="Brand Name" />
                    TEENTEKKA
                </div>
            </div>
            <div className="lwrnav">
                <div className="sm2">
                    <div className="navoptions">
                        <p className="other" style={{ color: activeButton === 1 ? '#EE9913' : '#808080' }} onClick={home}>Home</p>
                        <p className="other" style={{ color: activeButton === 2 ? '#EE9913' : '#808080' }} onClick={products}>Products</p>
                        <p className="other" style={{ color: activeButton === 3 ? '#EE9913' : '#808080' }} onClick={about}>About Us</p>
                        <p className="other" style={{ color: activeButton === 4 ? '#EE9913' : '#808080' }} onClick={contact}>Contact Us</p>
                    </div>
                    <p className="call"><img src={PhoneCall} alt="Phone Call" />+91 97356 41926</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
