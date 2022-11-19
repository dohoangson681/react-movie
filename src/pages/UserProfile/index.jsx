import React from 'react';
import { Redirect } from 'react-router-dom';
import { USER_LOGIN } from '../../util/setting';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { capNhatAction, layThongTinNguoiDungAction } from '../../redux/action/qLNDAction/qLNDAction';
import * as Yup from 'yup';
import {  useFormik } from 'formik';

export default function UserProfile() {

    const dispatch = useDispatch();
    useEffect(() => {
        const action = layThongTinNguoiDungAction();
        dispatch(action);
    }, []);
    const { thongTinNguoiDung } = useSelector(state => state.quanLyNguoiDungReducer);
        
    // console.log(thongTinNguoiDung);
    let net =1

    const formik = useFormik({
        initialValues: {
            taiKhoan: thongTinNguoiDung.taiKhoan ,
            matKhau: thongTinNguoiDung.matKhau,
            hoTen: thongTinNguoiDung.hoTen,
            email: thongTinNguoiDung.email,
            soDT: thongTinNguoiDung.soDT,
        },
        validationSchema: Yup.object().shape({
            taiKhoan: Yup.string().required('*Tài khoản không được để trống !'),
            matKhau: Yup.string().required('*Mật khẩu không được để trống !'),
            hoTen: Yup.string().required('*Số điện thoại không được để trống !'),
            email: Yup.string().required('*Email không được để trống !').email('*Email không hợp lệ !'),
            soDt: Yup.string().required('*Số điện thoại không được để trống !'),
        }),

        onSubmit: values => {
            console.log('giá trị thay đổi', values);
            // const action = capNhatAction(values);
            // dispatch(action);
        }
    });
    console.log(net);

    if (!localStorage.getItem(USER_LOGIN)) {
        return <Redirect to='/login' />;
    }

    return (
        <div className='profile'>
            {console.log(thongTinNguoiDung)}
            {console.log(formik.values)}
            <Container className='pt-5 profile'>
                <Row>
                    <Col xs={12} md={3}>
                        <div className='img-profile'>
                            <img src="https://i.pravatar.cc/?u=1999" alt="" />
                        </div>
                        <h4 className='text-center mt-4 text-white'>{thongTinNguoiDung?.hoTen}</h4>
                    </Col>
                    <Col xs={12} md={9} className="mt-5">
                        <Tabs
                            defaultActiveKey="home"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                        >
                            <Tab eventKey="home" title="Tài Khoản" style={{ color: 'white', fontWeight: 'bold' }}>
                                <Container>
                                    <Row>
                                        <Col xs={12} md={6}>
                                            <h4 className='text-white'>Mã QR Vào Rạp</h4>

                                            <div className='img-profile__QR'>
                                                <img src="https://images.viblo.asia/f96109f8-e2b2-4944-88ef-071ce79a50a8.png" alt="" />
                                            </div>
                                        </Col>
                                        <Col xs={12} md={6}>
                                            <form onSubmit={formik.handleSubmit} >
                                                <label htmlFor="" className='my-1'>Tài Khoản</label>
                                                <div className="form-group mt-2">
                                                    <input type="text"
                                                        disabled
                                                        className="form-control"
                                                        name='taiKhoan'
                                                        onChange={formik.handleChange}
                                                        value={formik.values.taiKhoan}
                                                    />
                                                    {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                                                        <div className='text-danger'>{formik.errors.taiKhoan}</div>
                                                    ) : null}
                                                </div>
                                                <div className="form-group  mt-2">
                                                    <label htmlFor="" className='my-1'>Mật Khẩu</label>
                                                    <input type="password" className="form-control"
                                                        name='matKhau' aria-describedby="helpId"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.matKhau}
                                                    />
                                                    {formik.touched.matKhau && formik.errors.matKhau ? (
                                                        <div className='text-danger'>{formik.errors.matKhau}</div>
                                                    ) : null}
                                                </div>
                                                <div className="form-group  mt-2">
                                                    <label htmlFor="" className='my-1'>Họ Tên</label>
                                                    <input type="text" className="form-control"
                                                        name='hoTen' aria-describedby="helpId"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.hoTen}
                                                    />
                                                    {formik.touched.hoTen && formik.errors.hoTen ? (
                                                        <div className='text-danger'>{formik.errors.hoTen}</div>
                                                    ) : null}
                                                </div>
                                                <div className="form-group  mt-2">
                                                    <label htmlFor="" className='my-1'>Email</label>
                                                    <input type="text" className="form-control"
                                                        name='email' aria-describedby="helpId"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.email}
                                                    />
                                                    {formik.touched.email && formik.errors.email ? (
                                                        <div className='text-danger'>{formik.errors.email}</div>
                                                    ) : null}
                                                </div>
                                                <div className="form-group  mt-2">
                                                    <label htmlFor="" className='my-1'>Số Điện Thoại</label>
                                                    <input type="text" className="form-control"
                                                        name='soDT' aria-describedby="helpId"
                                                        onChange={formik.handleChange}
                                                        value={formik.values.soDT}
                                                    />
                                                </div>
                                                <button type="submit" className='btn-booking  mt-3'>Cập Nhật</button>
                                            </form>
                                        </Col>

                                    </Row>
                                </Container>
                            </Tab>
                            <Tab eventKey="profile" title="Lịch Sử Đặt Vé">
                                <Table responsive="sm" bordered>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th style={{ minWidth: '100px' }}>Tên Phim</th>
                                            <th style={{ minWidth: '200px' }}>Ngày Đặt</th>
                                            <th style={{ minWidth: '200px' }}>Tên Rạp</th>
                                            <th style={{ minWidth: '100px' }}>Mã Vé</th>
                                            <th style={{ minWidth: '150px' }}>Tên Ghế</th>
                                            <th style={{ minWidth: '100px' }}>Tổng Tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Avatar 1 (Remake)</td>
                                            <td>2022-11-17-15:59:51</td>
                                            <td>BHD Star Cineplex - 3/2, Rạp 1</td>
                                            <td>10346</td>
                                            <td>23 24</td>
                                            <td>200.000 vnđ</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Tab>

                        </Tabs>
                    </Col>

                </Row>
            </Container>
        </div>

    );
}

