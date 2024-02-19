import React from 'react';
import Products from './DummyData/Products';
import underline from './Resources/underline.svg';
import rating from './Resources/star.png';
import Feedback from './Feedback';
import { useNavigate } from 'react-router-dom';
import Slide from './Slide';

const Product = () => {
    const navigate = useNavigate();
    const Productpage = ({ heading }) => {
        return (
            <div className="grey_bg">
                <div className="introducingProducts">
                    <h1>
                        {heading}
                        <img className="underline" src={underline} alt="underline" />
                    </h1>
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
        )
    };

    return (
        <>
            <div className="productsmain">
                {/* slide */}
                <Slide />
                {/* Products */}
                <Productpage heading='Our Products' />
                <Productpage heading='All Products' />
            </div>
            <Feedback />
        </>
    );
};

export default Product;
