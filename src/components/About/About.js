import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
const About = () => {
    return (
        <div>
            <div>
                <nav className=" about" aria-label="breadcrumb ">
                    <div className="container px-5 py-5">
                        <h3 className="text-start instructor">About Us</h3>
                        <ol class="breadcrumb">

                            <Link to="/home" class="breadcrumb-item ">Home</Link>
                            <Link to="/about" class="breadcrumb-item active" aria-current="page">About Us</Link>
                        </ol>
                    </div>
                </nav>
                <div className="row py-5">
                    <div className="col-md-4">
                        <div className="about_color">
                            <p className="about_icon">  <i className="fa fa-book" aria-hidden="true"></i></p>
                            <h4 className="about_head">
                                Best Multi-Tier Courses
                            </h4>
                            <p className="about_detail">Education System</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="about_color">
                            <p className="about_icon">
                                <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                            </p>
                            <h4 className="about_head">
                                Easy to Use Video Panels
                            </h4>
                            <p className="about_detail">Best LMS System</p>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="about_color">
                            <p className="about_icon">
                                <i className="fa fa-tachometer" aria-hidden="true"></i></p>
                            <h4 className="about_head">
                                Multi Purpose Dashboard
                            </h4>
                            <p className="about_detail">Online Education</p>
                        </div>

                    </div>

                </div>
                <div className="row pt-3 pb-5">
                    <div className="col-md-4">
                        <div className="about_color">
                            <p className="about_icon"> <i className="fa fa-digg" aria-hidden="true"></i></p>
                            <h4 className="about_head">
                                Digital Multi-Tier Courses
                            </h4>
                            <p className="about_detail">Digital System</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="about_color">
                            <p className="about_icon">
                                <i className="fa fa-meetup" aria-hidden="true"></i>
                            </p>
                            <h4 className="about_head">
                                Best way  to meet Panels
                            </h4>
                            <p className="about_detail">Gateway System</p>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="about_color">
                            <p className="about_icon">
                                <i className="fa fa-etsy" aria-hidden="true"></i></p>
                            <h4 className="about_head">
                                Multi Opportunity
                            </h4>
                            <p className="about_detail">Great Opportunity</p>
                        </div>

                    </div>


                </div>


            </div>

        </div>
    );
};

export default About;