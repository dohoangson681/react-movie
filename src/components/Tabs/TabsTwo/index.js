import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

import "./index.css"

export default function TabsTwo(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className='tabs-two'>
            <Row>
                <Col xs={6} md={4} lg={3} className='pb-4'>
                    <Card className='card-movie' >
                        <div className='tabs-img'>
                            <img className='img-fluid' src="https://p.w3layouts.com/demos/aug-2016/24-08-2016/one_movies/web/images/m22.jpg" alt="môta" />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center mt-2'>Central Intelligence</Card.Title>
                            <div className='d-flex justify-content-between card-body-text'>
                                <Card.Text>
                                    Ngày Chiếu
                                </Card.Text>

                                <Card.Text>
                                    3-11-2022
                                </Card.Text>
                            </div>
                            <div className="overlay1"></div>
                            <div className="overlay2"></div>
                            <AiFillPlayCircle className="btn-play-icon" onClick={() => { setModalShow(true) }} />
                            <button className='btn-tabs-booking'>Đặt Vé</button>
                            <Modal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Body>
                                    <AiOutlineCloseCircle className='trailer-icon__close' onClick={() => { setModalShow(false) }} />
                                    {/* gắn tạm link để test */}
                                    <iframe src='https://www.youtube.com/embed/xzCEdSKMkdU'
                                        allowFullScreen
                                        frameBorder="0"
                                        allow="autoplay"
                                        title="trailer "></iframe>
                                </Modal.Body>
                            </Modal>

                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={4} lg={3} className='pb-4'>
                    <Card className='card-movie' >
                        <div className='tabs-img'>
                            <img className='img-fluid' src="https://p.w3layouts.com/demos/aug-2016/24-08-2016/one_movies/web/images/m22.jpg" alt="môta" />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center mt-2'>Central Intelligence</Card.Title>
                            <div className='d-flex justify-content-between card-body-text'>
                                <Card.Text>
                                    Ngày Chiếu
                                </Card.Text>
                                <Card.Text>
                                    3-11-2022
                                </Card.Text>
                            </div>
                            <div className="overlay1"></div>
                            <div className="overlay2"></div>
                            <AiFillPlayCircle className="btn-play-icon" onClick={() => { setModalShow(true) }} />
                            <button className='btn-tabs-booking'>Đặt Vé</button>
                            <Modal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Body>
                                    <AiOutlineCloseCircle className='trailer-icon__close' onClick={() => { setModalShow(false) }} />
                                    {/* gắn tạm link để test */}
                                    <iframe src='https://www.youtube.com/embed/xzCEdSKMkdU'
                                        allowFullScreen
                                        frameBorder="0"
                                        allow="autoplay"
                                        title="trailer "></iframe>
                                </Modal.Body>
                            </Modal>

                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={4} lg={3} className='pb-4'>
                    <Card className='card-movie' >
                        <div className='tabs-img'>
                            <img className='img-fluid' src="https://p.w3layouts.com/demos/aug-2016/24-08-2016/one_movies/web/images/m22.jpg" alt="môta" />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center mt-2'>Central Intelligence</Card.Title>
                            <div className='d-flex justify-content-between card-body-text'>
                                <Card.Text>
                                    Ngày Chiếu
                                </Card.Text>
                                <Card.Text>
                                    3-11-2022
                                </Card.Text>
                            </div>
                            <div className="overlay1"></div>
                            <div className="overlay2"></div>
                            <AiFillPlayCircle className="btn-play-icon" onClick={() => { setModalShow(true) }} />
                            <button className='btn-tabs-booking'>Đặt Vé</button>
                            <Modal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Body>
                                    <AiOutlineCloseCircle className='trailer-icon__close' onClick={() => { setModalShow(false) }} />
                                    {/* gắn tạm link để test */}
                                    <iframe src='https://www.youtube.com/embed/xzCEdSKMkdU'
                                        allowFullScreen
                                        frameBorder="0"
                                        allow="autoplay"
                                        title="trailer "></iframe>
                                </Modal.Body>
                            </Modal>

                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={4} lg={3} className='pb-4'>
                    <Card className='card-movie' >
                        <div className='tabs-img'>
                            <img className='img-fluid' src="https://p.w3layouts.com/demos/aug-2016/24-08-2016/one_movies/web/images/m22.jpg" alt="môta" />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center mt-2'>Central Intelligence</Card.Title>
                            <div className='d-flex justify-content-between card-body-text'>
                                <Card.Text>
                                    Ngày Chiếu
                                </Card.Text>
                                <Card.Text>
                                    3-11-2022
                                </Card.Text>
                            </div>
                            <div className="overlay1"></div>
                            <div className="overlay2"></div>
                            <AiFillPlayCircle className="btn-play-icon" onClick={() => { setModalShow(true) }} />
                            <button className='btn-tabs-booking'>Đặt Vé</button>
                            <Modal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Body>
                                    <AiOutlineCloseCircle className='trailer-icon__close' onClick={() => { setModalShow(false) }} />
                                    {/* gắn tạm link để test */}
                                    <iframe src='https://www.youtube.com/embed/xzCEdSKMkdU'
                                        allowFullScreen
                                        frameBorder="0"
                                        allow="autoplay"
                                        title="trailer "></iframe>
                                </Modal.Body>
                            </Modal>

                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={6} md={4} lg={3} className='pb-4'>
                    <Card className='card-movie' >
                        <div className='tabs-img'>
                            <img className='img-fluid' src="https://p.w3layouts.com/demos/aug-2016/24-08-2016/one_movies/web/images/m22.jpg" alt="môta" />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center mt-2'>Central Intelligence</Card.Title>
                            <div className='d-flex justify-content-between card-body-text'>
                                <Card.Text>
                                    Ngày Chiếu
                                </Card.Text>
                                <Card.Text>
                                    3-11-2022
                                </Card.Text>
                            </div>
                            <div className="overlay1"></div>
                            <div className="overlay2"></div>
                            <AiFillPlayCircle className="btn-play-icon" onClick={() => { setModalShow(true) }} />
                            <button className='btn-tabs-booking'>Đặt Vé</button>
                            <Modal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Body>
                                    <AiOutlineCloseCircle className='trailer-icon__close' onClick={() => { setModalShow(false) }} />
                                    {/* gắn tạm link để test */}
                                    <iframe src='https://www.youtube.com/embed/xzCEdSKMkdU'
                                        allowFullScreen
                                        frameBorder="0"
                                        allow="autoplay"
                                        title="trailer "></iframe>
                                </Modal.Body>
                            </Modal>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </div >

    )
}
