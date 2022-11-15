import {  GP_ID } from "../../util/setting";
import { http } from '../../util/config';

export default class QLNDService {
    dangNhap = (thongTinDangNhap) => {
        return http.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap)
    };
 


}
