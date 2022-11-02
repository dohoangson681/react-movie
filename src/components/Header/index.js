import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiUserCircle, BiUserPlus, BiMoviePlay, BiCameraMovie } from "react-icons/bi";
import { FaNewspaper } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { AiOutlinePoweroff } from "react-icons/ai";
import './index.css';

export default function Header() {
  return (
    <Navbar expand="md" fixed="top"  >
      <Container fluid >
        <Navbar.Brand href="/" className='img-logo px'>
          <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Sky_Cinema_-_Logo_2020.svg/1200px-Sky_Cinema_-_Logo_2020.svg.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='px-3 px-md-0'>
          <Nav
            className="mx-auto my-lg-0 px menu py-3 py-md-0"
            style={{ maxHeight: '260px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='d-flex flex-md-column align-items-center px-lg-3 '> <BiMoviePlay className='fs-4 ' />Phim</Nav.Link>
            <Nav.Link href="#action2" className='d-flex flex-md-column align-items-center px-lg-3'><BiCameraMovie className='fs-4' />Cụm Rạp</Nav.Link>
            <Nav.Link href="#action3" className='d-flex flex-md-column align-items-center px-lg-3'><FaNewspaper className='fs-4' />Tin Tức</Nav.Link>
            <Nav.Link href="#action4" className='d-flex flex-md-column align-items-center px-lg-3'><FiSmartphone className='fs-4' />Ứng Dụng</Nav.Link>
          </Nav>
          {/* chưa đăng nhập */}
          <Nav className="d-flex align-items-center menu fw-bold">
            <button className='d-flex align-items-center btn-header'><BiUserCircle className='mx-1 fs-4' />Đăng Nhập</button>
            <div className='navbar__link-separator d-none d-md-block'></div>
            <button className='d-flex align-items-center btn-header'><BiUserPlus className='mx-1 fs-4' />Đăng Ký</button>
          </Nav>
          {/* Đã Đăng Nhập */}
          {/* <Nav className="d-flex flex-row justify-content-around align-items-center menu fw-bold">
            <button className='d-flex align-items-center btn-header'><FaUserCircle className='mx-1 fs-4' />Hello User</button>
            <div className='navbar__link-separator d-none d-md-block'></div>
            <button className='d-flex align-items-center btn-header'>Đăng Xuất<AiOutlinePoweroff className='mx-1 fs-4' /></button>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}