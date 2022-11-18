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
import Table from 'react-bootstrap/Table';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { layThongTinNguoiDungAction } from '../../redux/action/qLNDAction/qLNDAction';
import { ThongTinUser } from './dataUseTam';

export default function UserProfile() {
  const dispatch = useDispatch();
  const { thongTinNguoiDung } = useSelector(state => state.quanLyNguoiDungReducer);
  useEffect(() => {
    const action = layThongTinNguoiDungAction();
    dispatch(action);
  }, []);
  console.log(thongTinNguoiDung);







  if (!localStorage.getItem(USER_LOGIN)) {
    return <Redirect to='/login' />;
  }

  let renderLSDatVe = () => {
    return thongTinNguoiDung.thongTinDatVe?.map((ve, index) => {
      console.log(ve);
    });
  };

  return (
    <div className='profile'>
      <Container className='pt-5 profile'>
        <Row>
          <Col xs={6} md={3}>
            <div className='img-profile'>
              <img src="https://i.pravatar.cc/?u=1999" alt="" />
            </div>
            <h4 className='text-center mt-4 text-white'>{ThongTinUser?.hoTen}</h4>
          </Col>
          <Col xs={12} md={9} className="mt-5">
            <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Thông Tin Tài Khoản" style={{ color: 'white',fontWeight:'bold' }}>
                {renderLSDatVe()}
                <Form>
                <Form.Group className="mb-3 w-50" >
                  <Form.Label>Tài Khoản</Form.Label>
                  <Form.Control disabled={true} type="text" defaultValue={ThongTinUser.taiKhoan} />              
                </Form.Group>
                <Form.Group className="mb-3 w-50" >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" defaultValue={ThongTinUser.matKhau} />
                </Form.Group>
                <Form.Group className="mb-3 w-50" >
                  <Form.Label>Họ Tên</Form.Label>
                  <Form.Control type="text" defaultValue={ThongTinUser.hoTen} />              
                </Form.Group>
                <Form.Group className="mb-3 w-50" >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text"defaultValue={ThongTinUser.email}  />
                </Form.Group>
                <Form.Group className="mb-3 w-50" >
                  <Form.Label>Số Điện Thoai</Form.Label>
                  <Form.Control type="text" defaultValue={ThongTinUser.soDT} />
                </Form.Group>
                <Button  className='btn-booking w-50' type="button">
                  Cập nhật
                </Button>
              </Form>

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
                      <th style={{ minWidth: '150px' }}>Tổng Tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Black Adam</td>
                      <td>2022-11-17-15:59:51</td>
                      <td>BHD Star Cineplex - 3/2, Rạp 1</td>
                      <td>102382</td>
                      <td>01</td>
                      <td>75000 vnđ</td>
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
