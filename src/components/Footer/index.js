import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GrFacebook } from "react-icons/gr";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { AiFillApple, AiFillAndroid, AiOutlineDoubleRight } from "react-icons/ai";
import './index.css';
export default function Footer() {
  return (
    <Container fluid className='footer mt-5'>
      <Row className='py-5 px-3 px-md-5 px-lg-0 '>
        <Col xs={12} md={12} lg={5} className=' px-2 px-lg-5 pb-md-3 pb-lg-0 '>
          <div className='footer-logo pb-4 px-3'>
            <img className='img-img-fluid' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sky_Cinema_-_Logo_2020.svg/1200px-Sky_Cinema_-_Logo_2020.svg.png" alt="" />
          </div>
          <div className="footer-contact">
            <p>Công Ty Cổ Phần Phim Ba Thành Viên, Tầng 3, Toà Nhà Số 1, 89 Võ Văn Tần, P. Võ Thị Sáu, Quận Hải Châu, Tp. Đà Nẵng</p>
            <p>Call us: <span style={{ color: 'white', cursor: 'pointer' }}>(+84)39 999 1919</span> </p>
          </div>
        </Col>
        <Col xs={6} md={4} lg={2}>
          <h5 className='footer-title'>Chính Sách</h5>
          <ul className='footer-list'>
            <li><a href="#!"><AiOutlineDoubleRight /> Tems of Use</a></li>
            <li><a href="#!"><AiOutlineDoubleRight /> Privacy Policy</a></li>
            <li><a href="#!"><AiOutlineDoubleRight /> Securety</a></li>
          </ul>
        </Col>
        <Col xs={6} md={4} lg={2}>
          <h5 className='footer-title'>Hỗ Trợ</h5>
          <ul className='footer-list'>
            <li><a href="#!"><AiOutlineDoubleRight /> Góp Ý</a></li>
            <li><a href="#!"><AiOutlineDoubleRight /> Sales</a></li>
            <li><a href="#!"><AiOutlineDoubleRight /> Tuyển Dụng</a></li>
          </ul>
        </Col>
        <Col xs={12} md={4} lg={3}>
          <Row>
            <Col xs={6} md={12} >
              <h5 className='footer-title'>Kết Nối</h5>
              <div className='footer-icon icon mb-4'>
                <GrFacebook className='fb' />
                <BsInstagram className='insta' />
                <BsYoutube className='ytb' />
              </div>
            </Col>
            <Col xs={6} md={12} >
              <h5 className='footer-title'>Tải App Tại</h5>
              <div className='footer-dowload icon'>
                <AiFillApple className='apple' />
                <AiFillAndroid className='androi' />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <p></p>
    </Container>
  )
}
