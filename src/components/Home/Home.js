import { Carousel, Row } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import banner from '../../images/banner-1.jpg';
import banner1 from '../../images/banner-10.jpg';
import banner2 from '../../images/banner-13.jpg';
import Course from '../Course/Course';
import { RingContext } from '../../App';
import { Link } from 'react-router-dom';

const Home = () => {
    const [courses] = useContext(RingContext);
    const mainCourse = courses.slice(0, 4);
    return (
        <div>
            <div className="home">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block  w-100"
                            src={banner}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>ONLINE COURSES TO LEARN</h3>
                            <p>Own your future learning new skills online</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block  w-100"
                            src={banner1}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Education & Training Organization.</h3>
                            <p>we proviet best education system for you amet mauris lobortis mauris inceptos eget. Urna imperdiet.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block  w-100"
                            src={banner2}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Learn At Your Own Pace!</h3>
                            <p>Get teamed up with people of the same will.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="py-5 courses container">
                <h2 className="pt-4">Our Online Courses</h2>
                <p className="pb-5">There are various kinds of courses available: from online courses to summer courses and intensive courses</p>
                <Row xs={1} md={4} className="g-4">

                    {
                        mainCourse.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }

                </Row>
                <Link to="/courses">  <button className="btn  btn-outline-warning mt-4 px-3 py-2">See more courses</button></Link>
            </div>


        </div>
    );
};

export default Home;