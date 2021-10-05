import React from 'react';
import { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { RingContext } from '../../App';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Courses.css';

const Courses = () => {
    const [courses] = useContext(RingContext);
    return (
        <div>
            <div className="py-5 courses container">
                <h2 className="pt-4">Our Online Courses</h2>
                <p className="pb-5">There are various kinds of courses available: from online course to summer courses and intensive courses</p>
                <Row xs={1} md={3} className="g-4">
                    {
                        courses.map(cr => <SingleCourse
                            key={cr.id}
                            course={cr}
                        ></SingleCourse>)
                    }


                </Row>
            </div>

        </div>
    );
};

export default Courses;
