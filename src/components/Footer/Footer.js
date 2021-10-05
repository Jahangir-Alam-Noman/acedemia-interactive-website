import React from 'react';
import './Footer.css';
import logo from '../../images/logo4.png';
import { Card, Col, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg_color">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3 text-start">
                        <img src={logo} className="img-fluid py-2" alt="" />
                        <p>Our specialist certificate programs are designed to give you job-role training and formal workplace skills

                            . you can complete any of our curated certificate.
                        </p>
                        <div className="footer_icon">
                            <a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="https://ads.twitter.com/login"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="https://www.linkedin.com/signup"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            <a href="https://play.google.com/store/apps/details?id=net.sourceforge.opencamera&hl=en&gl=US"><i className="fa fa-camera" aria-hidden="true"></i></a>
                            <a href="https://www.globe.gov/"><i className="fa fa-globe" aria-hidden="true"></i></a>

                        </div>
                    </div>
                    <div className="col-md-3 ">
                        <div className="explore text-start px-5">
                            <h3 className="pb-3">Explore</h3>
                            <p> <NavLink to="/home">Start here</NavLink></p>
                            <p> <NavLink to="/courses">Blog</NavLink></p>
                            <p> <NavLink to="/instructor">Register</NavLink></p>
                            <p> <NavLink to="/about">Login</NavLink></p>

                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="explore text-start px-5">
                            <h3 className="pb-3">Success</h3>
                            <p> <NavLink to="/home">Home</NavLink></p>
                            <p> <NavLink to="/courses">Courses</NavLink></p>
                            <p> <NavLink to="/instructor">Instructors</NavLink></p>
                            <p> <NavLink to="/about">About</NavLink></p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="explore text-start px-5">
                            <h3 className="pb-3">Information</h3>
                            <p> <NavLink to="/home">Membership</NavLink></p>
                            <p> <NavLink to="/courses">Purchase guide</NavLink></p>
                            <p> <NavLink to="/instructor">Privacy Policy</NavLink></p>
                            <p> <NavLink to="/about">Terms of Services</NavLink></p>

                        </div>
                    </div>

                </div>
                <div className="row text-center">
                    <p>&copy; 2021 Academia. All rights reserved.</p>
                </div>
            </div>


        </div>
    );
};

export default Footer;