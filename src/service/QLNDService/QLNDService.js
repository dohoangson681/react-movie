import {  GP_ID } from "../../util/setting";
import { http } from '../../util/config';

export default class QLNDService {
    layDSLoaiND = () => {
        return http.get('/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung') ;
    }
    layDSND = (groupID) => {
        return http.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${groupID}`) ;
    }
    timKiemND = (taiKhoan) => {
        return http.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${taiKhoan}`) ; 
    }
    layInfoND = (taiKhoan) => {
        return http.post (`/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`)
    }
    dangNhap = (thongTinDangNhap) => {
        return http.post(`/api/QuanLyNguoiDung/DangNhap`,thongTinDangNhap)
    };
 


}
