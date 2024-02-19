import React from 'react';
import Products from './DummyData/Products';
import rating from './Resources/star.png';
import { useNavigate } from 'react-router-dom';
import home from './Resources/home-1 1.svg';
import rightarrow from './Resources/rhtarrow.svg';
import bigoil from './Resources/BigOil.png';
import underline from './Resources/underline.svg';
import star from './Resources/star.png';
import brandlogo from './Resources/BrandLogo.png';
import facebook from './Resources/facebook 1.svg';
import twitter from './Resources/twitter dark.svg';
import pinterest from './Resources/pinterest 1 (1).svg';
import heart from './Resources/Heart.svg';
import instagram from './Resources/instagram 1 (1).svg';
import play from './Resources/Play.svg';
import check from './Resources/check 1.svg';
import Feedback from './Feedback';
import './Productdetails.css';

const ProductDetails = () => {
    const navigate = useNavigate();
    const ProductsSort = Products.slice(0, 4);
    return (
        <div>
            <div className="banner">
                <div className="bnrinr">
                    <img src={home} alt="" />
                    <img src={rightarrow} alt="" />
                    <p>Category</p>
                    <img src={rightarrow} alt="" />
                    <p>Vegetables</p>
                    <img src={rightarrow} alt="" />
                    <p>Chinese Cabbage</p>
                </div>
            </div>


            {/* details */}
            <div className="productdetails">
                <div className="lftpic">
                    <img src={bigoil} alt="" />
                </div>
                <div className="rhtdetails">
                    <h1>
                        Organic Mustard Oil <img className="underline3" src={underline} alt="" />
                    </h1>
                    <p className="rating">
                        <img src={star} alt="" />4 Review
                    </p>
                    <div className="bshr">
                        <div className="upr">
                            <div className="lft">
                                <p>Brand:</p>
                                <img src={brandlogo} alt="" />
                            </div>
                            <div className="rht">
                                <p>Share Item:</p>
                                <div className="social">
                                    <img className="fst" src={facebook} alt="" />
                                    <img src={twitter} alt="" />
                                    <img src={pinterest} alt="" />
                                    <img src={instagram} alt="" />
                                </div>
                            </div>
                        </div>
                        <p className="para">
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla
                            nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.
                        </p>
                    </div>

                    <div className="kmbtn">
                        <button>Know More</button>
                        <img src={heart} alt="" />
                    </div>

                    <div className="moredetails">
                        <p>
                            Category: <span>Mustard Oil</span>
                        </p>
                        <p>
                            Tag:<span> MUSTARD OIL <u>ORGANIC</u> FILTERED LOCAL</span>
                        </p>
                    </div>
                </div>
            </div>



            {/* text */}
            <div className="details">
                <div className="tabs">
                    <p>Descriptions</p>
                    <p>Additional Information</p>
                    <p>Customer Feedback</p>
                </div>
                <div className="lwr">
                    <div className="lft">
                        <p>
                            Traditionally, the oil was extracted by using a
                            cylindrical shape machine known as “Ghani”. The
                            oil seeds used to be crushed with pressure of
                            ghani to extract the oil without any heating
                            process. This was one of the simplest processes
                            to extract oil from seeds.
                        </p>
                        <p>
                            Mustard cake is widely used as a fertilizer for
                            flowering and vegetable plants. Mustard oil cake
                            fertilizer is very rich in protein. It provides many
                            micro nutrients to your garden plants. It is widely
                            used cattle feed in Northern India.
                        </p>
                        <ul>
                            <li>
                                <img src={check} alt="" />We have been inspired by the ancient Indian Practice
                                of Pure and Natural Foods.
                            </li>
                            <li>
                                <img src={check} alt="" />The Company believes in the power and efficacy of the
                                traditional method to offer products for the modern population.
                            </li>
                            <li>
                                <img src={check} alt="" />We are committed to promising a healthy future for
                                coming generations.
                            </li>
                            <li>
                                <img src={check} alt="" />Proin convallis odio volutpat finibus posuere.
                            </li>
                        </ul>
                        <p>
                            Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis
                            iaculis at ut massa.
                        </p>
                    </div>
                    <div className="rht">
                        <img src={bigoil} alt="" />
                        <img className="play" src={play} alt="" />
                    </div>
                </div>
            </div>



            <div className="relatedpro">
                <h1>
                    Related Products <img className="underline" src={underline} alt="" />
                </h1>
                <div className="products">
                    {ProductsSort.map((product, index) => (
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
            <Feedback/>
        </div>
    );
};

export default ProductDetails;
