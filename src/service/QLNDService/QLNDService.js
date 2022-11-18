import { http } from '../../util/config';

export default class QLNDService {
    
    dangNhap = (thongTinDangNhap) => {
        return http.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
    };
    dangKy = (thongTinDangKy)=>{
        return http.post(`api/QuanLyNguoiDung/DangKy`,thongTinDangKy)
    }
    layTTTaiKhoan = () => {
        return http.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);
    };


}
