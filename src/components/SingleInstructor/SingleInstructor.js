import React from 'react';
import { Card, Col } from 'react-bootstrap';
const SingleInstructor = (props) => {
    const { name, instructor, img1 } = props.course;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title className="text-dark">Instructor : {instructor}</Card.Title>
                        <Card.Title >Language : <span className="text-warningCustom">{name} </span>     </Card.Title>
                        <Card.Text>
                            <p className="instructor_icon">
                                <a href="https://www.linkedin.com/signup"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                <a href="https://ads.twitter.com/login"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            </p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleInstructor;