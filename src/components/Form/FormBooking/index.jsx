import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "./index.css";
import { phimService, rapService } from "../../../service";
import { history } from "../../../App";

export default function FormBooking() {
    let moment = require("moment");
    const [danhSachPhim, setDanhSachPhim] = useState([]);
    let [maPhim, setMaPhim] = useState(0);
    let [danhSachRap, setDanhSachRap] = useState([]);
    let [maHeThongRap, setMaHeThongRap] = useState('');
    let [maLichChieu, setMaLichChieu] = useState('')
    let [gioChieu, setGioChieu] = useState(false)

    useEffect(() => {
        let promise = phimService.layDanhSachPhim();
        promise.then(res => {
            // console.log('res', res.data.content);
            setDanhSachPhim(res.data.content);
        }).catch(err => {
            console.log('fail');
        })
    }, []);

    useEffect(() => {
        // console.log('ma phim update');
        if (maPhim !== 0) {
            let promise = rapService.layThongTinLichChieuPhim(maPhim);
            promise.then(res => {
                // console.log(res.data.content.heThongRapChieu);
                setDanhSachRap(res.data.content.heThongRapChieu);
            }).catch(err => {
                console.log(err);
            })
        }
    }, [maPhim]);
    let handleSelectPhim = (e) => {
        let maPhim = Number(e.target.value);
        setMaPhim(maPhim);
        setDanhSachRap([])
    };
    let handleSelectRap = (e) => {
        setMaHeThongRap(e.target.value)
    }
    let handleSelectNgay = (e) => {
        setMaLichChieu(e.target.value)
    }
    let handleSelectGio = (e) => {
        if (e.target.value) {
            setGioChieu(true)
        }
    }

    let renderDSPhim = () => {
        return danhSachPhim.map((phim, index) => {
            // console.log(phim);
            if (phim.dangChieu) {
                return (
                    <option key={index} value={phim.maPhim}>
                        {phim.tenPhim}
                    </option>
                );
            }
            return null
        });
    };

    let renderDSRap = () => {
        return danhSachRap.map((rap, index) => {
            return (
                <option key={index} value={rap.maHeThongRap}>
                    {rap.tenHeThongRap}
                </option>
            );
        });
    };
    let renderNgayChieu = () => {
        return danhSachRap.map((cumRap) => {
            if (maHeThongRap === cumRap.maHeThongRap) {
                return cumRap.cumRapChieu.map((rap) => {
                    return rap.lichChieuPhim.map((lichChieu, index) => {
                        return <option key={index} value={lichChieu.maLichChieu}>
                            {moment(lichChieu.ngayChieuGioChieu).format("DD-MM-yyyy")}
                        </option>
                    })
                })
            }
            return null
        })
    };
    let renderGioChieu = () => {
        return danhSachRap.map((cumRap) => {
            if (maHeThongRap === cumRap.maHeThongRap) {
                return cumRap.cumRapChieu.map((rap) => {
                    return rap.lichChieuPhim.map((lichChieu, index) => {
                        if (maLichChieu === lichChieu.maLichChieu) {
                            return <option key={index} value={lichChieu.ngayChieuGioChieu}>
                                {moment(lichChieu.ngayChieuGioChieu).format("HH:mm ")}
                            </option>
                        }
                        return null
                    })
                })
            }
            return null
        })
    };
    return (
        <div className="form-booking pt-4">
            <div className="booking-movie d-flex flex-column flex-lg-row">
                <div className="col-12 col-md-12 col-lg-6 ">
                    <Form className="d-flex flex-column flex-md-row  ">
                        <Form.Group className="col-12 col-md-8 col-lg-8 ">
                            <Form.Select
                                id="disabledSelect"
                                defaultValue={"default"}
                                className="fw-bold"
                                onChange={handleSelectPhim}
                            >
                                <option value={"default"}>Chọn Phim</option>
                                {renderDSPhim()}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="col-12 col-md-4 col-lg-4 ">
                            <Form.Select
                                id="disabledSelect"
                                defaultValue={"default"}
                                className="fw-bold"
                                onChange={handleSelectRap}
                            >
                                <option value={"default"}>Chọn Rạp</option>
                                {renderDSRap()}
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </div>
                <div className="col-12 col-md-12 col-lg-6 ">
                    <Form className="d-flex flex-column flex-md-row">
                        <Form.Group className=" col-12 col-md-4 col-lg-4 ">
                            <Form.Select
                                id="disabledSelect"
                                defaultValue={"default"}
                                className="fw-bold"
                                onChange={handleSelectNgay}
                            >
                                <option value={"default"}>Chọn Ngày</option>
                                {renderNgayChieu()}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="col-12 col-md-4 col-lg-4 fw-bold">
                            <Form.Select
                                id="disabledSelect"
                                defaultValue={"default"}
                                className="fw-bold"
                                onChange={handleSelectGio}
                            >
                                <option value={"default"}>Chọn Giờ</option>
                                {renderGioChieu()}
                            </Form.Select>
                        </Form.Group>
                        <div className="col-12 col-md-4 col-lg-4 ">
                            {gioChieu ? (
                                <button onClick={() => {
                                    history.push(`ticketroom/${maLichChieu}`)
                                }}
                                    className=" btn-book-ticket py-1 py-md-0 ">
                                    Đặt Vé
                                </button>
                            ) : (
                                <button className="btn-oder-none" disabled={true}>
                                    Đặt Vé
                                </button>
                            )}
                        </div>
                    </Form>
                </div>
            </div>
        </div>


    );
}
