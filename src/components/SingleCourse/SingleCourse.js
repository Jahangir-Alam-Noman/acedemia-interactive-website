import React from 'react';
import { Card, Col } from 'react-bootstrap';

const SingleCourse = (props) => {
    const { name, img, price, description } = props.course;
    return (
        <div>
            <Col className="text-start">
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="name">{name}</Card.Title>
                        <Card.Title className="text-warningCustom">$ {price}</Card.Title>
                        <Card.Text>
                            <p> {description.slice(0, 120)}</p>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>

        </div>
    );
};

export default SingleCourse;