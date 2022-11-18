import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ToastContainer } from 'react-toastify';
import { useDispatch } from "react-redux";
import { dangNhapAction } from "../../redux/action/qLNDAction/qLNDAction";
import { history } from "../../App";
import "./index.css";

export default function Login(props) {
    const dispatch = useDispatch();
    return (
        <div className="form-login">
            <Container>
                <Row className="row-form">
                    <Col sm></Col>
                    <Col sm className="col-form">
                        <Formik
                            initialValues={{
                                taiKhoan: "",
                                matKhau: "",
                            }}
                            validationSchema={Yup.object().shape({
                                taiKhoan: Yup.string().required(
                                    "*Tài khoản không được để trống !"
                                ),
                                matKhau: Yup.string().required(
                                    "*Mật khẩu không được để trống !"
                                ),
                            })}
                            onSubmit={(values) => {
                                const action = dangNhapAction(values);
                                dispatch(action);
                            }}
                        >
                            {(formikProps) => (
                                <Form onSubmit={formikProps.handleSubmit} className="formInput">
                                    <h2 className="text-black text-center">Đăng Nhập</h2>
                                    {/* email  */}
                                    <div className="mb-3 col-12">
                                        <label
                                            htmlFor="taiKhoan"
                                            className="form-label text-black fw-bold"
                                        >
                                            Tài khoản
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="taiKhoan"
                                            name="taiKhoan"
                                        />
                                        {formikProps.errors.taiKhoan ||
                                            formikProps.touched.taiKhoan ? (
                                            <ErrorMessage name="taiKhoan" />
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    {/* password  */}
                                    <div className="mb-3 col-12">
                                        <label
                                            htmlFor="matKhau"
                                            className="form-label text-black fw-bold"
                                        >
                                            Mật khẩu
                                        </label>
                                        <Field
                                            type="password"
                                            className="form-control"
                                            id="matKhau"
                                            name="matKhau"
                                        />
                                        {formikProps.errors.matKhau ||
                                            formikProps.touched.matKhau ? (
                                            <ErrorMessage name="matKhau" />
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <div className="mb-3 text-center col-12">
                                        <button
                                            type="submit"
                                            className="btn btnSignIn text-white fw-bold "
                                        >
                                            Đăng nhập
                                        </button>
                                    </div>
                                    <h6 className="text-black">
                                        Bạn Chưa Có Tài Khoản?
                                        <button
                                            onClick={() => { history.push('/register'); }}
                                            className="btn-dangky mx-2" type="button">
                                            Đăng Ký
                                        </button>
                                    </h6>
                                </Form>
                            )}
                        </Formik>
                    </Col>
                    <Col sm></Col>
                </Row>
                <ToastContainer />
            </Container>
        </div>
    );
}
