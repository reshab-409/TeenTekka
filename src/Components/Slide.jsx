import React, { useEffect, useRef, useState } from 'react';
import Slides from './DummyData/CarouselSlides';
import rightArrow from './Resources/RightArrow.svg';
import leftArrow from './Resources/LeftArrow.svg';
import oil from './Resources/Oil.png';
import truck from './Resources/delivery-truck 1.svg';
import headphone from './Resources/headphones 1.svg';
import bag from './Resources/shopping-bag.svg';
import packages from './Resources/package.svg';

const Slide = () => {
    const [counter, setCounter] = useState(0);
    const slidesRef = useRef([]);

    useEffect(() => {
        slidesRef.current.forEach((slide, index) => {
            slide.style.left = `${index * 100}%`;
        });
    }, [slidesRef.current]);

    const goPrev = () => {
        setCounter((prevCounter) => (prevCounter - 1 + slidesRef.current.length) % slidesRef.current.length);
    };

    const goNext = () => {
        setCounter((prevCounter) => (prevCounter + 1) % slidesRef.current.length);
    };

    useEffect(() => {
        slidesRef.current.forEach((slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`;
        });
    }, [counter]);

    // Automatic slide every 3 seconds
    useEffect(() => {
        const intervalId = setInterval(goNext, 7000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <div className="white_bg">
            <img className="oil" src={oil} alt="oil" />
            <div className="c_upr">
                <div className="upr">
                    <main>
                        {Slides.map((slide, index) => (
                            <div className="slide" ref={(el) => (slidesRef.current[index] = el)} key={index}>
                                <div className="inr">
                                    <div className="left">
                                        <img className="c_img" src={slide.url} alt="img" />
                                    </div>
                                    <div className="right">
                                        <p className="right_text2">{slide.text1}</p>
                                        <p className="right_text3">{slide.text2}</p>
                                        <p className="right_text4">{slide.text3}</p>
                                        <button className="right_btn">{slide.btnText}<img src={rightArrow} alt="arrow" /></button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="nav">
                            <button onClick={goPrev}>
                                <img width="45" height="45" src={leftArrow} alt="circled-left-2" className="nevarrow" />
                            </button>
                            <button onClick={goNext}>
                                <img width="45" height="45" src={rightArrow} alt="circled-right-2" className="nevarrow1" />
                            </button>
                        </div>
                    </main>
                </div>
            </div>

            {/* lower Card */}
            <div className="card">
                <div className="nd">
                    <img className="icnCard" src={truck} alt="" />
                    <p className="fsttxt">Free Shipping</p>
                    <p className="scndtxt">Free shipping with discount</p>
                </div>
                <div className="nd">
                    <img className="icnCard" src={headphone} alt="" />
                    <p className="fsttxt">Great Support 24/7</p>
                    <p className="scndtxt">Instant access to Contact</p>
                </div>
                <div className="nd">
                    <img className="icnCard" src={bag} alt="" />
                    <p className="fsttxt">100% Secure Payment</p>
                    <p className="scndtxt">We ensure your money is saved</p>
                </div>
                <div className="nd">
                    <img className="icnCard" src={packages} alt="" />
                    <p className="fsttxt">Money-Back Guarantee</p>
                    <p className="scndtxt">30 days money-back guarantee</p>
                </div>
            </div>
        </div>

    );
};

export default Slide;
