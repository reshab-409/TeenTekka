import React from 'react';
import facebook from './Resources/facebook 1.svg';
import twitter from './Resources/twitter dark.svg';
import pinterest from './Resources/pinterest 1 (1).svg';
import instagram from './Resources/instagram 1 (1).svg';
import './Feedback.css';

const Feedback = () => {
    return (
        <div className="grey3_bg1">
            <div className="contact">
                <div className="rht">
                    <div className="txt">
                        <p className="uprtxt">Subcribe our Newsletter</p>
                        <p className="lwrtxt">GOOD HEALTH GOOD LIFE</p>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Your email address" />
                        <button>Subscribe</button>
                    </div>
                    <div className="social">
                        <img className="fst" src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={pinterest} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
