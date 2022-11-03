import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import "./index.css"

export default function TestTwo() {
    return (
        <div>
            <Row>
                <Col xs={6} md={4} lg={3} className='pb-4'>
                    <Card >
                        <div className='tabs-img'>
                            <img className='img-fluid' src="https://p.w3layouts.com/demos/aug-2016/24-08-2016/one_movies/web/images/m22.jpg" alt="môta" />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center mt-2'>Assassin's Creed 3</Card.Title>
                            <div className='d-flex justify-content-between card-body-text'>
                                <Card.Text>
                                    Ngày Chiếu
                                </Card.Text>

                                <Card.Text>
                                    3-11-2022
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={4} lg={3} className='pb-4'>
                    <Card >
                        <div className='tabs-img'>
                            <img className='img-fluid' src="https://p.w3layouts.com/demos/aug-2016/24-08-2016/one_movies/web/images/m22.jpg" alt="môta" />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center mt-2'>Assassin's Creed 3</Card.Title>
                            <div className='d-flex justify-content-between card-body-text'>
                                <Card.Text>
                                    Ngày Chiếu
                                </Card.Text>

                                <Card.Text>
                                    3-11-2022
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={4} lg={3} className='pb-4'>
                    <Card >
                        <div className='tabs-img'>
                            <img className='img-fluid' src="https://p.w3layouts.com/demos/aug-2016/24-08-2016/one_movies/web/images/m22.jpg" alt="môta" />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center mt-2'>Assassin's Creed 3</Card.Title>
                            <div className='d-flex justify-content-between card-body-text'>
                                <Card.Text>
                                    Ngày Chiếu
                                </Card.Text>
                                <Card.Text>
                                    3-11-2022
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={4} lg={3} className='pb-4'>
                    <Card >
                        <div className='tabs-img'>
                            <img className='img-fluid' src="https://p.w3layouts.com/demos/aug-2016/24-08-2016/one_movies/web/images/m22.jpg" alt="môta" />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center mt-2'>Assassin's Creed 3</Card.Title>
                            <div className='d-flex justify-content-between card-body-text'>
                                <Card.Text>
                                    Ngày Chiếu
                                </Card.Text>

                                <Card.Text>
                                    3-11-2022
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div>

    )
}
