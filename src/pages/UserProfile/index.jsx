import React from 'react';
import { Redirect } from 'react-router-dom';
import { USER_LOGIN } from '../../util/setting';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './index.css';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { layThongTinNguoiDungAction } from '../../redux/action/qLNDAction/qLNDAction';

export default function UserProfile() {
  const dispatch = useDispatch();
  useEffect(() => {
    const action = layThongTinNguoiDungAction();
    dispatch(action);
  }, []);
  //  const {thongTinNguoiDung} = useSelector(state =>state.quanLyNguoiDungReducer)
  //  console.log(thongTinNguoiDung);
  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to='/login' />;
  }
  return (
    <Container className='mt-5'>
      <Row>
        <Col xs={6} md={3}>
          <div className='img-profile'>
            <img src="https://i.pinimg.com/280x280_RS/2e/45/66/2e4566fd829bcf9eb11ccdb5f252b02f.jpg" alt="" />
          </div>
          {/* <h4 className='text-center mt-4'>{thongTinNguoiDung.hoTen}</h4> */}
        </Col>
        <Col xs={12} md={9}>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Thông Tin Tài Khoản">
              {/* <Form>
                <Form.Group className="mb-3 w-50" >
                  <Form.Label>Tài Khoản</Form.Label>
                  <Form.Control type="text" defaultValue={thongTinNguoiDung.taiKhoan} />              
                </Form.Group>
                <Form.Group className="mb-3 w-50" >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" defaultValue={thongTinNguoiDung.matKhau} />
                </Form.Group>
                <Form.Group className="mb-3 w-50" >
                  <Form.Label>Họ Tên</Form.Label>
                  <Form.Control type="text" defaultValue={thongTinNguoiDung.hoTen} />              
                </Form.Group>
                <Form.Group className="mb-3 w-50" >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text"defaultValue={thongTinNguoiDung.email}  />
                </Form.Group>
                <Form.Group className="mb-3 w-50" >
                  <Form.Label>Số Điện Thoai</Form.Label>
                  <Form.Control type="text" defaultValue={thongTinNguoiDung.soDT} />
                </Form.Group>
                <Button  className='btn-booking w-50' type="submit">
                  Cập nhật
                </Button>
              </Form> */}

            </Tab>
            <Tab eventKey="profile" title="Lịch Sử Đặt Vé">

            </Tab>

          </Tabs>
        </Col>

      </Row>
    </Container>
  );
}
