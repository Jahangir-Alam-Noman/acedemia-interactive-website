import React, { useContext } from 'react';
import { RingContext } from '../../App';
import './Instructor.css';
import SingleInstructor from '../SingleInstructor/SingleInstructor';
import { Row } from 'react-bootstrap';

const Instructor = () => {
    const [courses] = useContext(RingContext);
    return (
        <div className="instructor container py-5 ">
            <h2 className="pt-2 ">Our Instructor</h2>
            <p className="pb-5">Instructor lives on today as the programming language <br /> for the Cyber1 PLATO System, which runs most of the source code from 1980s PLATO and has roughly 5000 users as of June 2020.</p>

            <Row xs={1} md={3} className="g-4">
                {
                    courses.map(course => <SingleInstructor
                        course={course}
                        key={course.id}
                    ></SingleInstructor>)
                }
            </Row>
        </div>
    );
};

export default Instructor;