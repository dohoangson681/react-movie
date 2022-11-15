
import { http } from '../../util/config';

export default class QLNDService {
    dangNhap = (thongTinDangNhap) => {
        console.log(http.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap))
        return http.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap)
    };
 


}
