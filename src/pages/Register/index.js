import React from 'react';
import * as Yup from 'yup';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ToastContainer, toast } from 'react-toastify';
import './index.css';
import { dangKyAction } from '../../redux/action/qLNDAction/qLNDAction';
import { useDispatch } from 'react-redux';
import { history } from '../../App';

export default function RegisterPage() {
    let dispatch = useDispatch();
    return (
        <div className='register-page d-flex align-item'>
            <Container>
                <Row className="row-form__register">
                    <Col sm></Col>
                    <Col sm className="col-form">
                        <Formik
                            // gia tri khoi tao
                            initialValues={{
                                taiKhoan: "",
                                matKhau: "",
                                email: "",
                                soDt: "",
                                maNhom: "GP01",
                                hoTen: ""
                            }}
                            validationSchema={Yup.object().shape({
                                taiKhoan: Yup.string().required('*Tài khoản không được để trống !'),
                                matKhau: Yup.string().required('*Mật khẩu không được để trống !'),
                                email: Yup.string().required('*Email không được để trống !').email('*Email không hợp lệ !'),
                                soDt: Yup.string().required('*Số điện thoại không được để trống !'),
                                hoTen: Yup.string().required('*Số điện thoại không được để trống !')
                            })}
                            onSubmit={values => {
                                console.log(values);
                                const action = dangKyAction(values);
                                dispatch(action);
                            }}
                        >
                            {(formikProps) => {
                                return <Form className="row container mx-auto mt-4" onSubmit={formikProps.handleSubmit} >
                                    {/* tai khoan  */}
                                    <div id="username-field" className="mb-3 col-12 ">
                                        <label htmlFor="taiKhoan" className="form-label fw-bold">
                                            Tài khoản
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="taiKhoan"
                                            name="taiKhoan"
                                        />
                                        {formikProps.errors.taiKhoan || formikProps.touched.taiKhoan ? <ErrorMessage name="taiKhoan" /> : ''}
                                    </div>
                                    {/* mat khau  */}
                                    <div id="password-field" className="mb-3 col-12 ">
                                        <label htmlFor="matKhau" className="form-label fw-bold">
                                            Mật khẩu
                                        </label>
                                        <Field
                                            type="password"
                                            className="form-control"
                                            id="matKhau"
                                            name="matKhau"
                                        />
                                        {formikProps.errors.matKhau || formikProps.touched.matKhau ? <ErrorMessage name="matKhau" /> : ''}
                                    </div>
                                    {/* email  */}
                                    <div id="email-field" className="mb-3 col-12 ">
                                        <label htmlFor="email" className="form-label fw-bold ">
                                            Email
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                        />
                                        {formikProps.errors.email || formikProps.touched.email ? <ErrorMessage name="email" /> : ''}
                                    </div>
                                    {/* so dien thoai  */}
                                    <div id="phone-field" className="mb-3 col-12 ">
                                        <label htmlFor="soDt" className="form-label fw-bold ">
                                            Số điện thoại
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="soDt"
                                            name="soDt"
                                        />
                                        {formikProps.errors.soDt || formikProps.touched.soDt ? <ErrorMessage name="soDt" /> : ''}
                                    </div>
                                    {/* ho ten  */}
                                    <div id="name-field" className="mb-3 col-12 ">
                                        <label htmlFor="hoTen" className="form-label fw-bold">
                                            Họ tên
                                        </label>
                                        <Field
                                            type="text"
                                            className="form-control"
                                            id="hoTen"
                                            name="hoTen"
                                        />
                                        {formikProps.errors.hoTen || formikProps.touched.hoTen ? <ErrorMessage name="hoTen" /> : ''}
                                    </div>
                                    <div className="text-center col-12 ">
                                        <button type="submit" className="btn btnSignIn text-white fw-bold text-center">
                                            Đăng kí
                                        </button>
                                    </div>
                                    <h6 className="text-black">
                                        Bạn Đã Có Tài Khoản?
                                        <button
                                            onClick={() => { history.push('/login'); }}
                                            className="btn-dangky mx-2 mt-3" type="button">
                                            Đăng Nhập
                                        </button>
                                    </h6>
                                </Form>;
                            }}
                        </Formik>
                    </Col>
                    <Col sm></Col>
                </Row>
                <ToastContainer />
            </Container>

        </div>
    );
}
