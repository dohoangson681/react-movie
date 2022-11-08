import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import "./index.css"
export default function TabsDetailCinema() {
    return (
        <div className="detail-tabs">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                <Row className='bd-cinema py-3'>
                    <Col xs={12}>
                        <Nav variant="pills" className="flex-row">
                            <Nav.Item>
                                <Nav.Link eventKey="first"><img style={{ width: "50px", height: '50px' }} src="https://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" alt="" /></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second"><img style={{ width: "50px", height: '50px' }} src="https://movie0706.cybersoft.edu.vn/hinhanh/cgv.png" alt="" /></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="ba"><img style={{ width: "50px", height: '50px' }} src="https://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" alt="" /></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="bon"><img style={{ width: "50px", height: '50px' }} src="https://movie0706.cybersoft.edu.vn/hinhanh/cgv.png" alt="" /></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col xs={12} >
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
                        <Tab.Pane eventKey="ba">
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
            </Tab.Container >
        </div>
    )
}
