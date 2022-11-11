import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
// import { phimService } from "../../../service/PhimService/PhimServices";
// import { rapService } from "../../../service/RapService/RapServices";
import "./index.css";
import { phimService, rapService } from "../../../service";



export default function FormBooking() {
    const [danhSachPhim, setDanhSachPhim] = useState([]);
    let [maPhim, setMaPhim] = useState(0);
    let [danhSachRap, setDanhSachRap] = useState([]);



    useEffect(() => {
        let promise = phimService.layDanhSachPhim();
        promise.then(res => {
            console.log('res', res.data.content);
            setDanhSachPhim(res.data.content)
        }).catch(err => {
            console.log('fail', err);
        })
    }, []);


    let handleInputPhim = (e) => {
        let maPhim = parseInt(e.target.value);
        console.log(maPhim);
        setMaPhim(maPhim);
    };

    useEffect(() => {
        if (maPhim !== 0) {
            let promise = rapService.layThongTinLichChieuPhim(maPhim);
            promise.then(res => {
                // console.log('res', res.data.content);
                setDanhSachRap(res.data.content)
            }).catch(err => {
                console.log('fail', err);
            })
        }
    }, [maPhim]);

    let hours = false;
    let renderDSPhim = () => {
        return danhSachPhim.map((phim, index) => {
            return (
                <option key={index} value={phim.maPhim}>
                    {phim.tenPhim}
                </option>
            );
        });
    };
    let renderDSRap = () => {
        console.log(danhSachRap)
        if (danhSachRap.length !== 0) {
            // return danhSachRap.map((rap, index) => {
            //     console.log(rap);
            //     return (
            //         <option key={index} value={rap.maHeThongRap}>
            //             {rap.tenHeThongRap}
            //         </option>
            //     );
            // });

        }
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
                                onChange={handleInputPhim}
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
                            >
                                <option value={"default"}>Chọn Ngày</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="col-12 col-md-4 col-lg-4 fw-bold">
                            <Form.Select
                                id="disabledSelect"
                                defaultValue={"default"}
                                className="fw-bold"
                            >
                                <option value={"default"}>Chọn Giờ</option>
                            </Form.Select>
                        </Form.Group>
                        <div className="col-12 col-md-4 col-lg-4 ">
                            {hours ? (
                                <button className=" btn-book-ticket py-1 py-md-0 ">
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
