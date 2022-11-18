import React, { Fragment, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {
    BiUserCircle,
    BiUserPlus,
} from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlinePoweroff } from "react-icons/ai";
import "./index.css";
// modal
import { useDispatch, useSelector } from "react-redux";
import { ACCESS_TOKEN } from "../../../util/setting";
import { history } from "../../../App";
import { DANG_XUAT } from "../../../redux/type/nguoiDung-type/NDType";

export default function HeaderDetail() {
    // fake get api
    const [api, setApi] = useState(false);
    const [isLogin, setLogin] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            setApi(true);
        }, 1000);
    }, []);
    useEffect(() => {
        if (localStorage.getItem(ACCESS_TOKEN)) {
            setLogin(true);
        }
    }, []);
    const { userLogin } = useSelector(state => state.quanLyNguoiDungReducer);

    if (api) {
        return (
            <Fragment>
                <Navbar expand="md"  >
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
                                <Nav.Link href="/" className='d-flex flex-md-column align-items-center px-lg-3 '>
                                    <AiOutlineHome />
                                    Home
                                </Nav.Link>

                            </Nav>
                            {isLogin ?
                                <Nav className="d-flex flex-row justify-content-around align-items-center menu fw-bold">
                                    <button
                                        onClick={() => { history.push('/profile'); }}
                                        className='d-flex align-items-center btn-header'>
                                        <FaUserCircle className='mx-1 fs-4' />
                                        {userLogin?.hoTen}
                                    </button>
                                    <div className='navbar__link-separator d-none d-md-block'></div>
                                    <button onClick={() => {
                                        setLogin(false);
                                        const action = { type: DANG_XUAT };
                                        dispatch(action);
                                    }}
                                        className='d-flex align-items-center btn-header'>
                                        Đăng Xuất<AiOutlinePoweroff className='mx-1 fs-4 icon-header' />
                                    </button>
                                </Nav>
                                :
                                <Nav className="d-flex flex-row justify-content-around align-items-center menu fw-bold">
                                    <button
                                        type='button'
                                        onClick={() => {
                                            history.push('/login');
                                        }
                                        }
                                        className='d-flex align-items-center btn-header'>
                                        <BiUserCircle className='mx-1 fs-4' />
                                        Đăng Nhập
                                    </button>
                                    <div className='navbar__link-separator d-none d-md-block'></div>
                                    <button
                                        type='button'
                                        className='d-flex align-items-center btn-header'>
                                        <BiUserPlus className='mx-1 fs-4 icon-header' />
                                        Đăng Ký
                                    </button>
                                </Nav>
                            }
                        </Navbar.Collapse>
                    </Container>

                </Navbar>
                {/* modal sign up */}
                {/* <Modal style={{ backgroundImage: "url('https://i.pinimg.com/originals/7d/3d/3f/7d3d3f0e7d9d0cbb9b592a481dce2ef9.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "100%" }} size='lg' show={showSignUp} onHide={handleCloseSignUp}>

                    <Modal.Header closeButton>
                        <Modal.Title>Đăng kí tài khoản</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormSignUp />
                    </Modal.Body>
                </Modal> */}
                {/* modal sign in  */}
                {/* <Modal style={{ backgroundImage: "url('https://miro.medium.com/max/1200/1*jbfWuj3RSAAvmJeBwLWbsw.jpeg?fbclid=IwAR3EdV8lALX-lZ2GO7uv9SjOYFaGXB6z8bfTl5A6pO2OfdC57JmmC24Ujlo')" }} size='lg' show={showSignIn} onHide={handleCloseSignIn}>

                    <Modal.Header className="modalHeaderSignIn" closeButton>
                        <Modal.Title>Đăng Nhập</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modalBodySignIn" >
                        <FormSignIn setShowSignIn={setShowSignIn} isLogin={isLogin} setLogin={setLogin} />
                    </Modal.Body>
                </Modal> */}
            </Fragment>
        );
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
