// import {  GP_ID } from "../../util/setting";
import { http } from '../../util/config';

export default class DatVeService {
    layChiTietPhongVe = (maLichChieu) => {
        return http.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`)
    };
    datVe = (thongTinDatVe) =>{
        // thất bại
        console.log('servicedatve',http.post(`/api/QuanLyDatVe/DatVe`,thongTinDatVe))
        return http.post(`/api/QuanLyDatVe/DatVe`,thongTinDatVe)
    }
}
