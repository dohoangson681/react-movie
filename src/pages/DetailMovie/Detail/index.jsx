import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GiTicket } from "react-icons/gi";
import { AiOutlinePlayCircle } from "react-icons/ai";

import './index.css'
import DetailTrailer from './DetailTrailer';

export default function Detail() {
    // api https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=10484
    const [modalShow, setModalShow] = useState(false);
    return (
        <div className="detail">
            <div className="detail-movies">
                <Container className='pt-3'>
                    <Row >
                        <Col xs={1} lg={2}>
                            <div className='baner-detail d-none d-lg-block'>
                                <img src="https://media.lottecinemavn.com/Media/WebAdmin/3cf13edeab134619886185a3e582d951.jpg" alt="" />
                            </div>
                        </Col>
                        <Col xs={12} lg={8}>
                            <Row>
                                <Col xs={12} md={4}>
                                    <div className='img-movie mt-3'>
                                        <img src="https://cdn.galaxycine.vn/media/2022/11/1/300x450_1667287461064.jpg" alt="" />
                                        <div className="icon-play d-none d-sm-block">
                                            <AiOutlinePlayCircle onClick={() => setModalShow(true)} />
                                            <DetailTrailer
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} md={8}>
                                    <h4 className='detail-title mt-3'>BLACK PANTHER: WAKANDA FOREVER</h4>
                                    <div className='detail-span py-3'>
                                        <span>IMDb: 9.3/10</span>
                                        <span>C18</span>
                                        <span>Tâm lý</span>
                                    </div>
                                    <div className='detail-director py-2'>
                                        <h5>Đạo Diễn: <span >Frank Darabont</span></h5>
                                    </div>
                                    <div className='detail-cast py-3'>
                                        <h5 >Diễn Viên:</h5>
                                        <p>Al Pacino, Marlon Brando,James Caan, Richard S. Castellano,…</p>
                                    </div>
                                    <div className='detail-cast'>
                                        <h5 >Thể Loại:</h5>
                                        <p>Hành Động</p>
                                    </div>


                                    <div>
                                        <button className='btn-detail'><GiTicket />MUA VÉ NGAY</button>
                                    </div>
                                </Col>
                            </Row>
                            <p className='description-movie my-5'>Dường như Black Panther/ T’Challa đã qua đời trong một sự kiện nào đó. Shuri (Letitia Wright), Okoye (Danai Gurira) lẫn nữ hoàng Ramonda (Angela Bassett) đều đau đớn và không cầm được nước mắt. Sau sự ra đi của Chadwick Boseman, Kevin Feige quyết định không chọn diễn viên mới cho nhân vật này mà chọn một người khác kế tục danh hiệu Black Panther. </p>

                        </Col>
                        <Col xs={1} lg={2}>
                            <div className='baner-detail d-none d-lg-block'>
                                <img src="https://media.lottecinemavn.com/Media/WebAdmin/3cf13edeab134619886185a3e582d951.jpg" alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
