
import { http } from '../../util/config';

export default class QLNDService {
    dangNhap = (thongTinDangNhap) => {
        return http.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap)
    };
    layTTNguoiDung= ()=>{
        return http.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`)
    }


}
