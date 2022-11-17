
import { http } from '../../util/config';

export default class QLNDService {
    
    dangNhap = (thongTinDangNhap) => {
        return http.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
    };
    layTTTaiKhoan = () => {
        return http.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);
    };


}
