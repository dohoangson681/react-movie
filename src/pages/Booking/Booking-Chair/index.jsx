import React from 'react'
import { MdChair } from "react-icons/md";
import './index.css'

export default function BookingChair() {
    return (
        <div>
            <div className='scren'>
                <img src="https://movie-booking-project.vercel.app/img/bookticket/screen.png" alt="" />
            </div>
            <div className='chair'>

            </div>
            <div>
                <div className='ghe-content'>
                    <h6> <MdChair className='ghe' />Ghế Thường</h6>
                    <h6> <MdChair className='ghe gheVip' />Ghế Vip</h6>
                    <h6> <MdChair className='ghe gheDangChon' />Ghế Đang Chọn</h6>
                    <h6> <MdChair className='ghe gheDaDuocChon' />Ghế Đã Được Chọn</h6>
                </div>
            </div>
        </div>
    )
}
