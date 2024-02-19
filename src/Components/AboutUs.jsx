import React from 'react';
import './About.css';
import Feedback from './Feedback';
import Slide from './Slide';
import check from './Resources/check 1.svg';
import bigoil from './Resources/BigOil.png';
import play from './Resources/Play.svg';
import PdfDownload from './DownloadPDF';

const AboutUs = () => {
    return (
        <div className="aboutmain">
            <Slide />
            <div className="grey_bgabout">
                <div className="aboutdetails">
                    <div className="tabs">
                        <p>Descriptions</p>
                        <p>Additional Information</p>
                        <p>Customer Feedback</p>
                    </div>
                    <div className="lwr">
                        <div className="lft">
                            <p>Traditionally, the oil was extracted by using a
                                cylindrical shape machine known as “Ghani”. The
                                oil seeds used to be crushed with pressure of
                                ghani to extract the oil without any heating
                                process. This was one of the simplest processes
                                to extract oil from seeds.</p>
                            <p>
                                Mustard cake is widely used as a fertilizer for
                                flowering and vegetable plants. Mustard oil cake
                                fertilizer is very rich in protein. It provides many
                                micro nutrients to your garden plants. It is widely
                                used cattle feed in Northern India.</p>
                            <ul>
                                <li><img src={check} alt={check} />We have been inspired by the ancient Indian Practice
                                    of Pure and Natural Foods.</li>
                                <li><img src={check} alt={check} />The Company believes in the power and efficacy of the
                                    traditional method to offer products for the modern population.
                                </li>
                                <li><img src={check} alt={check} />We are committed to promising a healthy future for
                                    coming generations.</li>
                                <li><img src={check} alt={check} />Proin convallis odio volutpat finibus posuere.
                                </li>
                            </ul>
                            <p>Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis
                                lobortis
                                iaculis at ut massa. </p>
                        </div>
                        <div className="rht">
                            <img src={bigoil} alt={bigoil} />
                        </div>
                    </div>
                </div>

                <div className="mored">
                    <div className="mission">
                        <h1>Mission</h1>
                        <p>Our mission is to focus on value and exceptional customer
                            service through our premium quality products in which we
                            operate to deliver long term value to all our stakeholders.</p>
                    </div>
                    <div className="vision">
                        <h1>Vision</h1>
                        <p>To be a leading agri Business Company Committed to
                            sustainably deliver sates nutritious and quality agricultural
                            commodity that serves the interests of our esteemed
                            Customers.</p>
                    </div>
                </div>
            </div>
            <PdfDownload/>
            <Feedback />
        </div>
    );
};

export default AboutUs;
