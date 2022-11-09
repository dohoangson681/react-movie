import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import './index.css'

export default function TabsTheater() {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={7} className='pb-5 pb-md-0 scroll-y-tabs'>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">
                                <div className='d-flex cinema'>
                                    <img style={{ width: "60px", height: "60px" }} src="https://movie-booking-project.vercel.app/img/cumRap/bhd-star-bitexco-16105952137769.png" alt="" />
                                    <div className='title-cinema'>
                                        <h6> BHD Star Cineplex - 3/2</h6>
                                        <p>Tầng 3, TTTM Aeon Mall Bình Tân, Số 1</p>
                                    </div>
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">
                                <div className='d-flex cinema '>
                                    <img style={{ width: "60px", height: "60px" }} src="https://movie-booking-project.vercel.app/img/cumRap/bhd-star-bitexco-16105952137769.png" alt="" />
                                    <div className='title-cinema'>
                                        <h6>BHD Star Cineplex - Bitexco</h6>
                                        <p>Tầng 3, TTTM Aeon Mall Bình Tân, Số 1</p>
                                    </div>
                                </div>
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={5} className="px-4 scroll-y-tabs">
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <div className='movie-list'>
                                <div className='d-flex py-2'>
                                    <img style={{ width: "60px", height: "60px" }} src='https://movie0706.cybersoft.edu.vn/hinhanh/scoob-_gp09.jpg' alt="" />
                                    <div className='title-movie'>
                                        <h6 className='fw-bold' >Cá Mập Siêu Bạo Chúa</h6>
                                        <p className='rating'>Rating Cao</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className='date-movie'>Ngày Chiếu:<span className='movie-list__time'> 20 tháng 11, 2022</span></span>
                                        <button className='btn-hour'>
                                            15:15
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <div className='movie-list'>
                                <div className='d-flex py-2'>
                                    <img style={{ width: "60px", height: "60px" }} src='https://movie0706.cybersoft.edu.vn/hinhanh/jurassicworld_gp09.jpg' alt="" />
                                    <div className='title-movie'>
                                        <h6 className='fw-bold' >Jurassic World</h6>
                                        <p className='rating'>Rating Cao</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className='date-movie'>Ngày Chiếu:<span className='movie-list__time'> 8 tháng 11, 2022</span></span>
                                        <button className='btn-hour'>
                                            15:40
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="first">
                            <div className='movie-list'>
                                <div className='d-flex py-2'>
                                    <img style={{ width: "60px", height: "60px" }} src='https://movie0706.cybersoft.edu.vn/hinhanh/scoob-_gp09.jpg' alt="" />
                                    <div className='title-movie'>
                                        <h6 className='fw-bold' >Cá Mập Siêu Bạo Chúa</h6>
                                        <p className='rating'>Rating Cao</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className='date-movie'>Ngày Chiếu:<span className='movie-list__time'> 20 tháng 11, 2022</span></span>
                                        <button className='btn-hour'>
                                            15:15
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="first">
                            <div className='movie-list'>
                                <div className='d-flex py-2'>
                                    <img style={{ width: "60px", height: "60px" }} src='https://movie0706.cybersoft.edu.vn/hinhanh/scoob-_gp09.jpg' alt="" />
                                    <div className='title-movie'>
                                        <h6 className='fw-bold' >Cá Mập Siêu Bạo Chúa</h6>
                                        <p className='rating'>Rating Cao</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className='date-movie'>Ngày Chiếu:<span className='movie-list__time'> 20 tháng 11, 2022</span></span>
                                        <button className='btn-hour'>
                                            15:15
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="first">
                            <div className='movie-list'>
                                <div className='d-flex py-2'>
                                    <img style={{ width: "60px", height: "60px" }} src='https://movie0706.cybersoft.edu.vn/hinhanh/scoob-_gp09.jpg' alt="" />
                                    <div className='title-movie'>
                                        <h6 className='fw-bold' >Cá Mập Siêu Bạo Chúa</h6>
                                        <p className='rating'>Rating Cao</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className='date-movie'>Ngày Chiếu:<span className='movie-list__time'> 20 tháng 11, 2022</span></span>
                                        <button className='btn-hour'>
                                            15:15
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="first">
                            <div className='movie-list'>
                                <div className='d-flex py-2'>
                                    <img style={{ width: "60px", height: "60px" }} src='https://movie0706.cybersoft.edu.vn/hinhanh/scoob-_gp09.jpg' alt="" />
                                    <div className='title-movie'>
                                        <h6 className='fw-bold' >Cá Mập Siêu Bạo Chúa</h6>
                                        <p className='rating'>Rating Cao</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className='date-movie'>Ngày Chiếu:<span className='movie-list__time'> 20 tháng 11, 2022</span></span>
                                        <button className='btn-hour'>
                                            15:15
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="first">
                            <div className='movie-list'>
                                <div className='d-flex py-2'>
                                    <img style={{ width: "60px", height: "60px" }} src='https://movie0706.cybersoft.edu.vn/hinhanh/scoob-_gp09.jpg' alt="" />
                                    <div className='title-movie'>
                                        <h6 className='fw-bold' >Cá Mập Siêu Bạo Chúa</h6>
                                        <p className='rating'>Rating Cao</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span className='date-movie'>Ngày Chiếu:<span className='movie-list__time'> 20 tháng 11, 2022</span></span>
                                        <button className='btn-hour'>
                                            15:15
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    )
}
