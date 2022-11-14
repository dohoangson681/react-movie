
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { layChiTietPhim } from '../../../redux/action/rapAction/QuanLyRapAction';
import "./index.css"
import { Tabs } from 'antd';
import { history } from '../../../App';


export default function TabsDetailCinema(props) {
    const moment = require("moment");
    const maPhim = props.maPhim
    // console.log(maPhim);
    const { phimDetail } = useSelector(state => state.quanLyPhimReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        const action = layChiTietPhim(maPhim)
        dispatch(action)
    }, [])
    // console.log(phimDetail)

    let renderRapp = () => {
        if (phimDetail.heThongRapChieu?.length > 0) {
            return <Tabs
                tabPosition={'left'}
                items={phimDetail.heThongRapChieu?.map((htr, i) => {
                    console.log("ha", htr)
                    const id = String(i + 1);
                    return {
                        label: <img src={htr.logo} alt="" width='50' />,
                        key: id,
                        children: <div>
                            {htr.cumRapChieu?.map((cumRap, index) => {
                                return <div key={index}>
                                    <div className='d-flex flex-row mt-3'>
                                        <img src={cumRap.hinhAnh} style={{ width: 70, height: 70 }} alt="" />
                                        <div className='mx-2'>
                                            <h6 className='title-detail fw-bold'>{cumRap.tenCumRap}</h6>
                                            <p className='title-detail'>{cumRap.diaChi}</p>
                                        </div>
                                    </div>
                                    <div className='d-flex'>
                                        {cumRap.lichChieuPhim?.map((lichChieu, index) => {
                                            return <div key={index} className='my-2 me-3'>
                                                <button className='btn-detail' onClick={() => {
                                                    history.push(`/ticketroom/${lichChieu.maLichChieu}`)
                                                }}>
                                                    <span style={{color:'red'}}>{moment(lichChieu.ngayChieuGioChieu).format("LT")}</span> ~ 
                                                    <span> {moment(lichChieu.ngayChieuGioChieu).add(`${lichChieu.thoiLuong}`, 'minute').format("LT")}</span>  </button>
                                            </div>
                                        })}
                                    </div>
                                </div>
                            })}
                        </div>,
                    };
                })}
            />
        }
        else {
            return <div className='text-center' style={{ backgroundColor: 'white' }}><h4 style={{ color: '#a0d911' }}>Phim Chưa Có Lịch Chiếu</h4></div>
        }
    }

    return (
        <div className="detail-tabs">
            {renderRapp()}
        </div>
    )
}
