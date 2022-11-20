import { history } from "../../../App";
import { ACCESS_TOKEN, USER_LOGIN } from "../../../util/setting";
import { CAP_NHAT_USER, DANG_KY, DANG_NHAP, DANG_XUAT, LAY_TT_TAI_KHOAN } from "../../type/nguoiDung-type/NDType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
    userLogin: user,
    userRegister: {},
    thongTinNguoiDung: {
    },
    userUpdate:{
    }
};

export const quanLyNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {
        case DANG_NHAP:
            localStorage.setItem(USER_LOGIN, JSON.stringify(action.thongTinDangNhap));
            localStorage.setItem(ACCESS_TOKEN, action.thongTinDangNhap.accessToken);
            console.log(ACCESS_TOKEN, action.thongTinDangNhap.accessToken);
            state.userLogin = action.thongTinDangNhap;
            return { ...state };
        case DANG_XUAT:
            localStorage.clear();
            history.push('/login');
            return { ...state };
        case CAP_NHAT_USER:
            // lỗi API chưa test đc nên ko biết cập nhật thành công ko?
            state.userUpdate = action.thongTinCapNhat
            localStorage.removeItem(USER_LOGIN)
            localStorage.setItem(USER_LOGIN, JSON.stringify(action.thongTinCapNhat));
            history.push('/login')
            return {...state}
        case DANG_KY:
            state.userRegister = action.thongTinDangKy;
            return { ...state };
        case LAY_TT_TAI_KHOAN:
            state.thongTinNguoiDung = action.thongTinNguoiDung;
            console.log('thongtin', state.thongTinNguoiDung);
            return { ...state };
        default:
            return state;
    }
};
