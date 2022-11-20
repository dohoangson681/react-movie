import { history } from "../../../App"
import { ACCESS_TOKEN, ADMIN_ACC, USER_LOGIN } from "../../../util/setting"
import { ADMIN_LOGIN } from "../../type/admin-type/admin.type";
import { DANG_NHAP, DANG_XUAT, LAY_TT_TAI_KHOAN } from "../../type/nguoiDung-type/NDType"

let user = {}
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}
let admin = {} ;
if (localStorage.getItem(ADMIN_ACC)) {
    admin = JSON.parse(localStorage.getItem(ADMIN_ACC))
}
const initialState = {
    userLogin: user,
    thongTinNguoiDung: {
    },
    adminLogin : admin  
}

export const quanLyNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {
        case DANG_NHAP:
            localStorage.setItem(USER_LOGIN, JSON.stringify(action.thongTinDangNhap))
            localStorage.setItem(ACCESS_TOKEN, action.thongTinDangNhap.accessToken);
            console.log(ACCESS_TOKEN, action.thongTinDangNhap.accessToken);
            state.userLogin = action.thongTinDangNhap
            return { ...state }
        case DANG_XUAT:
            localStorage.clear();
            history.push('/login')
            return { ...state }
        case LAY_TT_TAI_KHOAN:
            state.thongTinNguoiDung = action.thongTinNguoiDung
            console.log('thongtin',state.thongTinNguoiDung)
            return { ...state }
        case ADMIN_LOGIN : 
        console.log("Admin login !") ; 
        console.log(action.data) ; 
            state.adminLogin = {...action.data}
            console.log(state.adminLogin) ; 

            return {...state} ;
        default:
            return state
    }
}
