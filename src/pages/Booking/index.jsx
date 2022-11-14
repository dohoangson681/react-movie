import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdChair } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { quanLyDatVeAction } from '../../redux/action/datVeAction/QuanLyDatVeAction';
import { DAT_VE } from '../../redux/type/datVe-type/DatVeType';
import './index.css'

export default function BookingPage(props) {
    let _ = require('lodash');
    const { chiTietPhongVe, danhSachGheDangDat } = useSelector(state => state.quanLyDatVeReducer)
    console.log('chiteit', chiTietPhongVe)
    const dispatch = useDispatch()
    const maLichChieu = props.match.params.maLichChieu
    console.log(maLichChieu);
    useEffect(() => {
        const action = quanLyDatVeAction(maLichChieu)
        dispatch(action)
    }, [])
    const { thongTinPhim, danhSachGhe } = chiTietPhongVe
    const renderGhe = () => {
        return danhSachGhe?.map((ghe, index) => {
            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = ghe.daDat === true ? 'gheDaDuocChon' : '';
            let classGheDangDat = '';
            let indexGheDangDat = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.maGhe === ghe.maGhe)
            if (indexGheDangDat !== -1) {
                classGheDangDat = 'gheDangChon'
            }
            return <React.Fragment key={index}>
                <button onClick={() => {
                    dispatch({
                        type: DAT_VE,
                        gheDangChon: ghe
                    })
                }}
                    disabled={ghe.daDat} className='ghe' key={index}>
                    <MdChair className={`${classGheVip} ${classGheDaDat} ${classGheDangDat}`} />
                </button>
                {(index + 1) % 16 === 0 ? <br /> : ''}
            </React.Fragment>
        })
    }

    const notify = () => toast("Đặt Vé Thành Công !", {
        position: toast.POSITION.TOP_CENTER
    });
    return (
        <div className='booking'>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md={12} lg={9} >
                        <div className='chair'>
                            <div className='scren'>
                                <img src="https://movie-booking-project.vercel.app/img/bookticket/screen.png" alt="" />
                            </div>
                            {renderGhe()}
                        </div>
                        <div className='type-ghe mt-4'>
                            <div className='ghe-content py-4'>
                                <h6> <MdChair className=' gheThuong' /> Ghế Thường</h6>
                                <h6> <MdChair className=' gheVip' /> Ghế Vip</h6>
                                <h6> <MdChair className=' gheDangChon' /> Ghế Đang Chọn</h6>
                                <h6> <MdChair className=' gheDaDuocChon' /> Ghế Đã Được Chọn</h6>
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={3}>
                        <div className='form-ticket px-3 mt-2 py-3'>
                            <h4 className='text-center py-2 ticket-color fw-bold'>{thongTinPhim?.tenPhim}</h4>
                            <div className='d-flex justify-content-between py-3 form-ticket__item '>
                                <h6>Ngày Giờ Chiếu:</h6>
                                <div className='d-flex'>
                                <h6 className='ticket-color'>{thongTinPhim?.gioChieu}</h6> <h6>-{thongTinPhim?.ngayChieu}</h6>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between py-3 form-ticket__item'>
                                <h6>Cụm Rạp:</h6>
                                <h6>{thongTinPhim?.tenCumRap}</h6>
                            </div>
                            <div className='d-flex justify-content-between py-3 form-ticket__item'>
                                <h6>Địa Chỉ:</h6>
                                <h6 className='ticket-color'>{thongTinPhim?.diaChi}</h6>
                            </div>
                            <div className='d-flex justify-content-between py-3 form-ticket__item'>
                                <h6>Rạp:</h6>
                                <h6 className='ticket-color'>{thongTinPhim?.tenRap}</h6>
                            </div>
                            <div className='d-flex justify-content-between py-3 form-ticket__item'>
                                <h6 className='justify-content-start'>Ghế Chọn:</h6>
                                <div className='justify-content-end'>
                                    {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDangDat, index) => {
                                        return <span key={index} className='ticket-color fw-bold'>{gheDangDat.stt} </span>
                                    })}
                                </div>
                            </div>
                            <div className='d-flex justify-content-between py-3 form-ticket__item'>
                                <h6>Tổng tiền:</h6>
                                <h6 className='ticket-color'>{danhSachGheDangDat.reduce((total, ghe) => {
                                    return total += ghe.giaVe
                                }, 0).toLocaleString()} vnđ</h6>
                            </div>
                            <div className='d-flex justify-content-between form-ticket__item'>
                                <h6 className='py-1 text-danger'>Mã QR Vào Rạp Thay Thế Vé</h6>
                            </div>
                            <img src="https://images.viblo.asia/f96109f8-e2b2-4944-88ef-071ce79a50a8.png" alt="" />
                            <div>
                                <button className='btn-booking' onClick={notify}>BOOKING TICKET</button>
                                <ToastContainer />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
