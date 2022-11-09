import React, { Fragment, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
    BiUserCircle,
    BiUserPlus,
    BiMoviePlay,
    BiCameraMovie,
} from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlinePoweroff } from "react-icons/ai";
import "./index.css";
// modal
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormSignUp from "../../../components/Form/FormSignUp";
import FormSignIn from "../../../components/Form/FormSignUp";

export default function HeaderDetail() {
    // fake get api
    const [api, setApi] = useState(false);
    // userlogin
    const [isLogin, setLogin] = useState(true);
    // modal
    const [showSignUp, setShowSignUp] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);

    const handleCloseSignUp = () => setShowSignUp(false);
    const handleShowSignUp = () => setShowSignUp(true);
    const handleCloseSignIn = () => setShowSignIn(false);
    const handleShowSignIn = () => setShowSignIn(true);
  

    const loginSuccess = () => {
        setLogin(true);
    };
    useEffect(() => {
        setTimeout(() => {
            setApi(true);
        }, 2000)
    }, [])
    if (api) {
        return (
            <Fragment>
                <Navbar expand="md" fixed="top"  >
                    <Container fluid >
                        <Navbar.Brand href="/" className='img-logo px'>
                            <img className="img-fluid" src="https://cdn.theatertoolkit.com/cdn/wwwroot/themes/custom/smittyscinema/images/CinemaSafe_Logo_horizontal_reverse.png" alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className='px-3 px-md-0'>
                            <Nav
                                className="mx-auto my-lg-0 px menu py-3 py-md-0"
                                style={{ maxHeight: '260px' }}
                                navbarScroll
                            >
                                <Nav.Link href="/" className='d-flex flex-md-column align-items-center px-lg-3 '><AiOutlineHome/>Home</Nav.Link>
                                
                            </Nav>
                            {isLogin ?
                                <Nav className="d-flex flex-row justify-content-around align-items-center menu fw-bold">
                                    <button className='d-flex align-items-center btn-header'><FaUserCircle className='mx-1 fs-4' />Hello User</button>
                                    <div className='navbar__link-separator d-none d-md-block'></div>
                                    <button onClick={() => {
                                        setLogin(false);
                                    }} className='d-flex align-items-center btn-header'>Đăng Xuất<AiOutlinePoweroff className='mx-1 fs-4 icon-header' /></button>
                                </Nav>
                                :
                                <Nav className="d-flex flex-row justify-content-around align-items-center menu fw-bold">
                                    <button
                                        type='button'
                                        onClick={handleShowSignIn}
                                        className='d-flex align-items-center btn-header'><BiUserCircle className='mx-1 fs-4' />Đăng Nhập</button>
                                    <div className='navbar__link-separator d-none d-md-block'></div>
                                    <button
                                        type='button'
                                        onClick={handleShowSignUp}
                                        className='d-flex align-items-center btn-header'><BiUserPlus className='mx-1 fs-4 icon-header' />Đăng Ký</button>
                                </Nav>
                            }
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
                {/* modal sign up */}
                <Modal style={{ backgroundImage: "url('https://i.pinimg.com/originals/7d/3d/3f/7d3d3f0e7d9d0cbb9b592a481dce2ef9.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "100%" }} size='lg' show={showSignUp} onHide={handleCloseSignUp}>

                    <Modal.Header closeButton>
                        <Modal.Title>Đăng kí tài khoản</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormSignUp />
                    </Modal.Body>
                </Modal>
                {/* modal sign in  */}
                <Modal style={{ backgroundImage: "url('https://i.pinimg.com/originals/7d/3d/3f/7d3d3f0e7d9d0cbb9b592a481dce2ef9.jpg')" }} size='lg' show={showSignIn} onHide={handleCloseSignIn}>

                    <Modal.Header closeButton>
                        <Modal.Title>Đăng Nhập</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormSignIn setShowSignIn={setShowSignIn} isLogin={isLogin} setLogin={setLogin} />
                    </Modal.Body>
                </Modal>
            </Fragment>
        )
    } else {
        return (
            <div
                style={{ height: "100vh" }}
                className="spinner-cua-tao d-flex justify-content-center align-items-center "
            >
                <div className="spinner-grow text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }


}