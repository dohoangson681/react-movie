import React from 'react'
import Form from 'react-bootstrap/Form';
import './index.css';
export default function FormBooking() {
    const hours = false;
    return (
        <div className='form-booking pt-4'>
            <div className="booking-movie d-flex flex-column flex-lg-row">
                <div className="col-12 col-md-12 col-lg-6 ">
                    <Form className='d-flex flex-column flex-md-row  '>
                        <Form.Group className="col-12 col-md-8 col-lg-8 ">
                            <Form.Select id="disabledSelect"
                                defaultValue={'default'}
                                className='fw-bold' >
                                <option value={'default'}>Chọn Phim</option>

                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="col-12 col-md-4 col-lg-4 ">
                            <Form.Select id="disabledSelect"
                                defaultValue={'default'}
                                className='fw-bold'  >
                                <option value={'default'}>Chọn Rạp</option>
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </div>
                <div className="col-12 col-md-12 col-lg-6 ">
                    <Form className='d-flex flex-column flex-md-row'>
                        <Form.Group className=" col-12 col-md-4 col-lg-4 ">
                            <Form.Select id="disabledSelect"
                                defaultValue={'default'}
                                className='fw-bold'  >
                                <option value={'default'}>Chọn Ngày</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="col-12 col-md-4 col-lg-4 fw-bold">
                            <Form.Select id="disabledSelect"
                                defaultValue={'default'}
                                className='fw-bold' >
                                <option value={'default'}>Chọn Giờ</option>
                            </Form.Select>
                        </Form.Group>
                        <div className='col-12 col-md-4 col-lg-4 '>
                            {hours ?
                                <button className=' btn-book-ticket py-1 py-md-0 '>Đặt Vé</button>
                                : <button className='btn-oder-none' disabled={true}>Đặt Vé</button>
                            }
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}