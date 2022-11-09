import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

export default function BookingTicket() {
    const notify = () => toast("Đặt Vé Thành Công !", {
        position: toast.POSITION.TOP_CENTER
    });
    return (
        <div className='form-ticket px-3 mt-2 py-3'>
            <h4 className='text-center py-2'>TÊN PHIM</h4>
            <div className='d-flex justify-content-between py-3 form-ticket__item '>
                <h6>Ngày Giờ Chiếu:</h6>
                <div className='d-flex'>
                    <h6>11/12/2022</h6><h6 className='ticket-color'>-12:12</h6>
                </div>
            </div>
            <div className='d-flex justify-content-between py-3 form-ticket__item'>
                <h6>Cụm Rạp:</h6>
                <h6>BHD Star Cineplex - Bitexco</h6>
            </div>
            <div className='d-flex justify-content-between py-3 form-ticket__item'>
                <h6>Rạp:</h6>
                <h6 className='ticket-color'>Rạp 1</h6>
            </div>
            <div className='d-flex justify-content-between py-3 form-ticket__item'>
                <h6>Ghế Chọn:</h6>
                <h6 className='ticket-color'>F10, F12</h6>
            </div>
            <div className='d-flex justify-content-between py-3 form-ticket__item'>
                <h6>Ưu Đãi:</h6>
                <h6 className='ticket-color'>0%</h6>
            </div>
            <div className='d-flex justify-content-between py-3 form-ticket__item'>
                <h6>Tổng tiền:</h6>
                <h6 className='ticket-color'>150.000</h6>
            </div>
            <div className='d-flex justify-content-between py-3 form-ticket__item'>
                <h6>Email:</h6>
                <h6>abc123@gmail.com</h6>
            </div>
            <div className='d-flex justify-content-between py-3 form-ticket__item'>
                <h6>Phone:</h6>
                <h6>09999999</h6>
            </div>
            <div className='py-3'>
                <button className='btn-booking' onClick={notify}>BOOKING TICKET</button>
                <ToastContainer />
            </div>
        </div>
    )
}
