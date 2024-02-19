import React from 'react';
import rightArrow from './Resources/RightArrow.svg';
import underline from './Resources/underline.svg';
import Products from './DummyData/Products';
import rating from './Resources/star.png';
import yellowtick from './Resources/YellowTick.svg';
import mustardoil3 from './Resources/MustardOil(3).png';
import combojar from './Resources/Combojar.png';
import mustardoil2 from './Resources/MustardOil(2).png';
import oilSplash from './Resources/oilsplash.png';
import man from './Resources/man.png';
import oil2 from './Resources/oil2.png';
import FeatureProducts from './DummyData/FeatureProducts';
import doubleinvertedcoma from './Resources/doubleinvertedcoma.svg';
import lastlogo from './Resources/lastLogo.png';
import lastgray from './Resources/lastgrey.png';
import lastgrayoil from './Resources/lastgreyoil.png';
import greenarrow from './Resources/GreenArrow.svg';
import latest1 from './Resources/latest1.png';
import latest2 from './Resources/latest2.png';
import latest3 from './Resources/latest3.png';
import mission3 from './Resources/mission3.svg';
import mission2 from './Resources/mission2.svg';
import mission1 from './Resources/mission1.svg';
import image from './Resources/Image.svg';
import image2 from './Resources/Image (1).svg';
import image3 from './Resources/Image (2).svg';
import oildropbig from './Resources/oildropsbig.png';
import oildropsmall from './Resources/oildropssmall.png';
import smalloil from './Resources/smallOil.png';
import flowerdrop from './Resources/flowerdrops.png';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Slide from './Slide';


const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="whole">
            {/* First Section  */}
            <Slide />


            {/* second Section  */}
            <div className="grey_bg">
                <div className="introducingProducts">
                    <h1>
                        Introducing Our Products
                        <img className="underline" src={underline} alt="underline" />
                    </h1>
                    <div className="tabs">
                        <p>All</p>
                        <p>Organic</p>
                        <p>Local</p>
                        <p>Filtered</p>
                        <p className="lst">View All</p>
                    </div>
                    <div className="products">
                        {Products.map((product, index) => (
                            <div key={index} className="product" onClick={() => { navigate('/productdetails') }}>
                                <div className="propic">
                                    <img src={product.url} alt="Mustard Oil Jar" />
                                </div>
                                <div className="prodetails">
                                    <p className="proname">{product.productName}</p>
                                    <p className="viewmore">View More</p>
                                    <img className="rating" src={rating} alt="star" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Third section  */}
            <div className="white1_bg">
                <div className="smallcards">
                    <div className="card1">
                        <div className="lft">
                            <p className="crdheading">100% Fresh organic oil</p>
                            <p className="crdother">Starting at <span>$14.99</span></p>
                            <button className="crdbtn">Read More<img src={yellowtick} alt="Yellow Tick" /></button>
                        </div>
                        <div className="rht">
                            <img className="crdImg" src={mustardoil3} alt="Mustard Oil" />
                        </div>
                    </div>
                    <div className="card2">
                        <div className="lft">
                            <img className="crdImg" src={combojar} alt="Combo JAR" />
                        </div>
                        <div className="rht">
                            <p className="crdsmall">COMBO SALE</p>
                            <p className="crdbold">Combo & Sell JAR</p>
                            <button className="crdbtn">Read More<img src={yellowtick} alt="Yellow Tick" /></button>
                        </div>
                    </div>
                    <div className="card3">
                        <div className="lft">
                            <p className="crdsmall">100% Organic</p>
                            <p className="crdbold">Quick Process</p>
                            <button className="crdbtn">Read More<img src={yellowtick} alt="Yellow Tick" /></button>
                        </div>
                        <div className="rht">
                            <img className="crdImg" src={mustardoil2} alt="Mustard Oil" />
                        </div>
                    </div>
                </div>
            </div>


            {/* Fourth section  */}
            <div className="grey1_bg">
                <img className="man" src={man} alt="Man" />
                <img className="oil1" src={oil2} alt="Oil" />
                <img className="oilsplash" src={oilSplash} alt="Oilsplash" />
                <div className="midsec">
                    <p className="gp">Best Deals</p>
                    <p className="bold">Our Special Products Deal of the Month</p>
                    <p className="time">
                        <span>00<small>DAYS</small></span>:
                        <span>02<small>HOURS</small></span>:
                        <span>18<small>MINS</small></span>:
                        <span>46<small>SECS</small></span>
                    </p>
                    <button className="right_btn">Read More<img src={rightArrow} alt="Arrow" /></button>
                </div>
            </div>


            {/* Fifth section  */}
            <div className="white2_bg">
                <div className="introducingProducts1">
                    <h1>Featured Products <img className="underline1" src={underline} alt="Underline" /></h1>
                    <div className="products1">
                        {FeatureProducts.map((product, index) => (
                            <div key={index} className="product1" onClick={() => { navigate('/productdetails') }}>
                                <div className="propic1">
                                    <img className="pripic" src={product.url} alt="Mustard Oil" />
                                </div>
                                <div className="prodetails1">
                                    <p className="proname1">{product.productName}</p>
                                    <p className="viewmore1">View More</p>
                                    <img className="rating1" src={rating} alt="Star" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sixth section */}
            <div className="grey2_bg">
                <div className="introducingProducts2">
                    <img className="smallOil" src={smalloil} alt="Small Oil" />
                    <img className="flowerdrops" src={flowerdrop} alt="Flower Drops" />
                    <h1>What our Clients Say <img className="underline2" src={underline} alt="Underline" /></h1>

                    <div className="feedback">
                        <div className="box">
                            <div className="upr">
                                <img src={doubleinvertedcoma} alt="Quotation Mark" />
                                <p className="paragraph">
                                    “Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui.
                                    Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele.”
                                </p>
                            </div>
                            <div className="lwr">
                                <img src={image} alt="User" />
                                <p>Jenny Wilson</p>
                                <small>Customer</small>
                            </div>
                        </div>
                        <div className="box">
                            <div className="upr">
                                <img src={doubleinvertedcoma} alt="Quotation Mark" />
                                <p className="paragraph">
                                    “Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui.
                                    Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele.”
                                </p>
                            </div>
                            <div className="lwr">
                                <img src={image2} alt="User" />
                                <p>Guy Hawkins</p>
                                <small>Customer</small>
                            </div>
                        </div>
                        <div className="box">
                            <div className="upr">
                                <img src={doubleinvertedcoma} alt="Quotation Mark" />
                                <p className="paragraph">
                                    “Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui.
                                    Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele.”
                                </p>
                            </div>
                            <div className="lwr">
                                <img src={image3} alt="User" />
                                <p>Kathryn Murphy</p>
                                <small>Customer</small>
                            </div>
                        </div>
                    </div>

                    {/* overlay Card */}
                    <div className="overlayCard">
                        <img className="oilbig" src={oildropbig} alt="Oil Drops Big" />
                        <img className="oilsmall" src={oildropsmall} alt="Oil Drops Small" />
                        <h1>Our Mission <img className="underline2" src={underline} alt="Underline" /></h1>
                        <div className="stack">
                            <div className="st">
                                <img src={mission3} alt="Mission 3" />
                                <p className="red">Quality Assurance</p>
                            </div>
                            <div className="st">
                                <img src={mission2} alt="Mission 2" />
                                <p className="green">Sustainability</p>
                            </div>
                            <div className="st">
                                <img src={mission1} alt="Mission 1" />
                                <p className="yellow">Community Engagement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Seventh section  */}
            <div className="white3_bg">
                <div className="latestnews">
                    <h1>Latest News <img className="underline3" src={underline} alt="Underline" /></h1>
                    <div className="cards">
                        <div className="st">
                            <div className="upr">
                                <img src={latest1} alt="Latest 1" />
                            </div>
                            <div className="lwr">
                                <p className="uprtxt">Curabitur porttitor orci eget neque accumsan venenatis.</p>
                                <p className="lwrtxt">Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex. Etiam nisi
                                    augue, malesuada et pulvinar at, posuere eu neque.</p>
                                <button className="lwrbtn">Read More<img src={greenarrow} alt="Green Arrow" /></button>
                            </div>
                        </div>
                        <div className="st">
                            <div className="upr">
                                <img src={latest2} alt="Latest 2" />
                            </div>
                            <div className="lwr">
                                <p className="uprtxt">Curabitur porttitor orci eget neque accumsan venenatis.</p>
                                <p className="lwrtxt">Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex. Etiam nisi
                                    augue, malesuada et pulvinar at, posuere eu neque.</p>
                                <button className="lwrbtn">Read More<img src={greenarrow} alt="Green Arrow" /></button>
                            </div>
                        </div>
                        <div className="st">
                            <div className="upr">
                                <img src={latest3} alt="Latest 3" />
                            </div>
                            <div className="lwr">
                                <p className="uprtxt">Curabitur porttitor orci eget neque accumsan venenatis.</p>
                                <p className="lwrtxt">Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex. Etiam nisi
                                    augue, malesuada et pulvinar at, posuere eu neque.</p>
                                <button className="lwrbtn">Read More<img src={greenarrow} alt="Green Arrow" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Eighth section  */}
            <div className="grey3_bg">
                <img className="flowerlast" src={lastgray} alt="Last Grey Flower" />
                <img className="lastoil" src={lastgrayoil} alt="Last Grey Oil" />
                <div className="contact">
                    <img className="logo" onClick={() => { navigate('/') }} src={lastlogo} alt="Logo" />
                    <div className="rht">
                        <div className="txt">
                            <p className="uprtxt">Subscribe to our Newsletter</p>
                            <p className="lwrtxt">GOOD HEALTH GOOD LIFE</p>
                        </div>
                        <div className="input">
                            <input type="text" placeholder="Your email address" />
                            <button>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
