import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Pagination from 'react-bootstrap/Pagination';
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { layDsPhimAction } from '../../../redux/action/movieAction/QuanLyPhimAction';
import { history } from "../../../App";

export default function TabsOne() {
    let moment = require("moment");
    const [modalShow, setModalShow] = useState(false);
    const { mangPhim } = useSelector(state => state.quanLyPhimReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        const action = layDsPhimAction()
        dispatch(action)
    }, [])
    let renderPhim = () => {
        return mangPhim.map((phim, index) => {
            if (phim.dangChieu) {
                return <Col xs={6} md={4} lg={3} className='pb-4' key={index}>
                    <Card className='card-movie'>
                        <div className='tabs-img '>
                            <img src={phim.hinhAnh} alt="hinhAnh" />
                        </div>
                        <Card.Body>
                            <Card.Title className='text-center mt-2'>{phim.tenPhim.length > 17 ? <span>{phim.tenPhim.slice(0, 17)}...</span> : <span>{phim.tenPhim}</span>}</Card.Title>
                            <p style={{ color: 'white' }} className="px-2">{phim.moTa.length > 40 ? <span>{phim.moTa.slice(0, 40)}...</span> : <span>{phim.moTa}</span>}</p>
                            <div className='d-flex justify-content-between card-body-text py-2 fw-bold'>
                                <Card.Text>
                                    Ngày Chiếu
                                </Card.Text>
                                <Card.Text>
                                    <span style={{ color: '#a0d911' }}> {moment(phim.ngayKhoiChieu).format("DD-MM-yyyy")} </span>

                                </Card.Text>
                            </div>

                            <div className="overlay1"></div>
                            <div className="overlay2"></div>
                            <AiFillPlayCircle className="btn-play-icon" onClick={() => { setModalShow(true) }} />
                            <button onClick={() => { history.push(`detail/${phim.maPhim}`) }} className='btn-tabs-booking' >Chi Tiết Phim</button>
                            <Modal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered
                            >
                                <Modal.Body>
                                    <AiOutlineCloseCircle className='trailer-icon__close' onClick={() => { setModalShow(false) }} />
                                    <iframe src={phim.trailer}
                                        allowFullScreen
                                        frameBorder="0"
                                        allow="autoplay"
                                        title="trailer "></iframe>
                                </Modal.Body>
                            </Modal>

                        </Card.Body>
                    </Card>
                </Col>
            }
            return null
        })
    }
    return (
        <Row>
            {renderPhim()}
        </Row>

    )
}
