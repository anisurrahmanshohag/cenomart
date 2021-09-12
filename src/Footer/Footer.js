import React from 'react';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import { FaFacebookF, FaTwitterSquare, FaInstagramSquare, FaLinkedinIn, FaCcPaypal, FaCcMastercard, FaCcAmex, FaCcVisa } from "react-icons/fa";
export const Footer = () => {

    return (
        <>
            <div id="footer_part">
                <div className="container foot_contain">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="logo_col">
                                <div className="f_logo">
                                    <img className="img-fluid w-100" src="images/logo.png" alt="" />
                                </div>
                                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <h4>Infomation</h4>
                            <ul className="foot_nav">
                                <li>About us</li>
                                <li>Contact Us</li>
                                <li>Terms & Conditions</li>
                                <li>Returns & Refund</li>
                                <li>Exchanges</li>
                                <li>Shipping & Delivery</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h4>Contact</h4>
                            <ul className="foot_contact">
                                <li className="d-flex">
                                    <LocationOnOutlinedIcon />
                                    <p>184 Main Rd E, St Albans
                                        VIC 3021, Australia</p>
                                </li>
                                <li className="d-flex">
                                    <EmailOutlinedIcon />
                                    <p>Emailinfo@email.com</p>
                                </li>
                                <li className="d-flex">
                                    <PhoneOutlinedIcon />
                                    <p>Phone: +123505541058</p>
                                </li>
                            </ul>
                            <ul className="d-flex justify-content-between social_icn">
                                <li><FaFacebookF className="sIcon" /></li>
                                <li><FaTwitterSquare className="sIcon" /></li>
                                <li><FaInstagramSquare className="sIcon" /></li>
                                <li><FaLinkedinIn className="sIcon" /></li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer_form">
                                <h4>Newsletter Signup</h4>
                                <p>Subscribe to our newsletter and get 10% off your first purchase</p>
                                <form className="d-flex justify-content-between align-items-center">
                                    <input type="text" placeholder="E-mail" />
                                    <button>Subscribe</button>
                                </form>
                                <div className="crCard">
                                    <ul className="d-flex justify-content-between">
                                        <li><FaCcPaypal className="crd_icn" /></li>
                                        <li><FaCcMastercard className="crd_icn" /></li>
                                        <li><FaCcAmex className="crd_icn" /></li>
                                        <li><FaCcVisa className="crd_icn" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="d-flex justify-content-between">
                                    <li><p>Copyright © 2021 Kalles all rights reserved. Powered by Sohag</p></li>
                                    <li><p>Thank you for visiting us</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}