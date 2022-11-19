import { http } from '../../util/config';

export default class QLNDService {
    
    dangNhap = (thongTinDangNhap) => {
        return http.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
    };
    dangKy = (thongTinDangKy)=>{
        return http.post(`api/QuanLyNguoiDung/DangKy`,thongTinDangKy)
    }
    capNhatUser = (thongTinCapNhat)=>{
        return http.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, thongTinCapNhat)
    }
    layTTTaiKhoan = () => {
        return http.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);
    };


}
