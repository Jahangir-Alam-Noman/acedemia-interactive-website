import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import about from '../../images/about-2.jpg';

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
                    <div className="col-md-4 ">
                        <div className="about_color">
                            <p className="about_icon">  <i className="fa fa-book" aria-hidden="true"></i></p>
                            <h4 className="about_head">
                                Best Multi-Tier Courses
                            </h4>
                            <p className="about_detail">Learning System</p>
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
                                <i className="fa fa-file-text" aria-hidden="true"></i>
                            </p>
                            <h4 className="about_head">
                                Multi Purpose Dashboard
                            </h4>
                            <p className="about_detail">Online System</p>
                        </div>

                    </div>

                </div>
                <div className="row pb-5 ">
                    <div className="col-md-4 ">
                        <div className="about_color">
                            <p className="about_icon">
                                <i className="fa fa-meetup" aria-hidden="true"></i>
                            </p>
                            <h4 className="about_head">
                                Life mentoring
                            </h4>
                            <p className="about_detail">Guidance for your future career</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="about_color">
                            <p className="about_icon">
                                <i className="fa fa-cog" aria-hidden="true"></i>
                            </p>
                            <h4 className="about_head">
                                Self Development
                            </h4>
                            <p className="about_detail">Develop Skills for career</p>
                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="about_color">
                            <p className="about_icon">
                                <i className="fa fa-desktop" aria-hidden="true"></i>
                            </p>
                            <h4 className="about_head">
                                Remote Learning
                            </h4>
                            <p className="about_detail">Learn from anywhere</p>
                        </div>

                    </div>


                </div>
                <div className="container"><hr /></div>
                <div className="row container ps-5 about_color why_us ">
                    <div className="col-md-6 col-sm-6">
                        <h2>Why Choose Us</h2>
                        <p>Spend some time to visit our website or head office and discover our current courses, enrollment procedure, and registration deadline. </p>

                        <div className="row py-4 ps-5">

                            <div className="col-md-2 col-lg-2">
                                <p>
                                    <i className="fa fa-book choose_us" aria-hidden="true"></i>
                                </p>

                            </div>
                            <div className="col-md-10 col-lg-10 text-start">
                                <h5> Best System</h5>
                                <p>  Advance programming Management</p>

                            </div>
                        </div>
                        <div className="row ps-5">

                            <div className="col-md-2 col-lg-2">
                                <p>
                                    <i className="fa fa-file-text choose_us" aria-hidden="true"></i>
                                </p>

                            </div>
                            <div className="col-md-10 col-lg-10 text-start">
                                <h5>Online Certification</h5>
                                <p>Performance Based Certificate</p>

                            </div>
                        </div>

                    </div>
                    <div className="col-md-6">
                        <img src={about} alt="" />


                    </div>
                </div>


            </div>

        </div>
    );
};

export default About;