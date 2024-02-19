import React from 'react';
import Facebook from './Resources/facebook 1.svg';
import Twitter from './Resources/twitter 1.svg';
import Instagram from './Resources/instagram 1.svg';
import Pinterest from './Resources/pinterest 1.svg';
import inst1 from './Resources/stack1.png';
import inst2 from './Resources/stack2.png';
import inst3 from './Resources/stack3.png';
import inst4 from './Resources/stack4.png';
import inst5 from './Resources/stack5.png';
import inst6 from './Resources/stack6.png';
import inst7 from './Resources/stack7.png';
import inst8 from './Resources/stack8.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="uprfooter">
                <div className="st">
                    <p className="heading">About TeenTekka</p>
                    <p className="sub">To be a leading agri Business Company Committed to
                        sustainably deliver sates nutritious and quality agricultural
                        commodity that serves the interests of our esteemed
                        Customers.
                    </p>
                    <p className="sub1"><small>+91 97356 41926</small> <span>or</span> <small>Proxy@gmail.com</small></p>
                </div>
                <div className="nd">
                    <p className="heading">My Account</p>
                    <p className="sub">Lorem Ipsum</p>
                    <p className="sub">Lorem Ipsum</p>
                    <p className="sub">Lorem Ipsum</p>
                    <p className="sub">Lorem Ipsum</p>
                    <p className="sub">Lorem Ipsum</p>
                </div>
                <div className="nd">
                    <p className="heading">Helps</p>
                    <p className="sub">Lorem Ipsum</p>
                    <p className="sub">Lorem Ipsum</p>
                    <p className="sub">Lorem Ipsum</p>
                    <p className="sub">Lorem Ipsum</p>
                </div>
                <div className="nd">
                    <p className="heading">Proxy</p>
                    <p className="sub">Lorem Ipsum</p>
                    <p className="sub">Lorem Ipsum</p>
                    <p className="sub">Lorem Ipsum</p>
                    <p className="sub">Lorem Ipsum</p>
                    <p className="sub">Lorem Ipsum</p>
                </div>
                <div className="rd">
                    <p className="heading">Instagram</p>
                    <div className="imgstack">
                        <img src={inst1} alt={inst1} />
                        <img src={inst2} alt={inst2} />
                        <img src={inst3} alt={inst3} />
                        <img src={inst4} alt={inst4} />
                        <img src={inst5} alt={inst5} />
                        <img src={inst6} alt={inst6} />
                        <img src={inst7} alt={inst7} />
                        <img src={inst8} alt={inst8} />
                    </div>
                </div>
            </div>
            <div className="lwrfooter">
                <div className="social">
                    <img src={Facebook} alt={Facebook} />
                    <img src={Twitter} alt={Twitter} />
                    <img src={Pinterest} alt={Pinterest} />
                    <img src={Instagram} alt={Instagram} />
                </div>
                <div className="right">
                    <p>TeenTekka © 2023. All Rights Reserved</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
