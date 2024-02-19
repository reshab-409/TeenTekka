import React, { useRef } from 'react';
import Slide from './Slide';
import Feedback from './Feedback';
import underline from './Resources/underline.svg';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import './ContactUs.css';

const ContactUs = () => {
    const form = useRef();

    const sendEmail = () => {
        emailjs.sendForm('service_nfhsgyv', 'template_mqe40tr', form.current, 'pM0IBrayxFpnXuNl0')
            .then((result) => {
                alert("Your message is successfully send to our representative")
            }, (error) => {
                alert("Something went wrong")
            });
    };

    const { handleSubmit } = useForm();

    return (
        <div className="contmain">
            <Slide />
            <div className="grey_bgcont">
                <h1>
                    Contact Us
                    <img className="underline" src={underline} alt={underline} />
                </h1>
                <div className="contact-form">
                    <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name:</label>
                            <input type="text" id="name" placeholder="Enter your name" name="name" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Your Email:</label>
                            <input type="email" id="email" placeholder="Enter your email" name="email" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Your Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Enter your message..."
                                rows="5"
                                required
                            ></textarea>
                        </div>

                        <div className="form-group">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>

            <div className="address">
                <div className="fstads">
                    <h1 className='h1'>First Address</h1>
                    <p className='p'>Goutam Oil Industries</p>
                    <small className='small'>Rudranagar, Sainthia, Birbhum, West Bengal</small>
                </div>

                <div className="sndads">
                    <h1 className='h1'>Second Address</h1>
                    <p className='p'>Goutam Agro & Oil Industries</p>
                    <small className='small'>Barutia, Gangarampur, Birbhum - 731213, West Bengal</small>
                </div>

            </div>

            <Feedback />
        </div>
    );
};

export default ContactUs;
