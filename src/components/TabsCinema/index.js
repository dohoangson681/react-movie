import React, { Fragment } from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import TabsTheater from './TabsCinemaList';
import "./index.css"

export default function TabCinema() {
    return (
        <div className='container-tabs__cinema'>
            <div className='empty-area'>
            </div>
            <div className='tabs-cinema my-4'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                    <Row className='bd-cinema py-3'>
                        <Col sm={2}>
                            <Nav variant="pills" className="flex-row flex-md-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first"><img style={{ width: "50px", height: '50px' }} src="https://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" alt="" /></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second"><img style={{ width: "50px", height: '50px' }} src="https://movie0706.cybersoft.edu.vn/hinhanh/cgv.png" alt="" /></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={10}>
                            <Tab.Content>
                                <TabsTheater eventKey="first" />
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container >
            </div>
        </div>
    )
}

