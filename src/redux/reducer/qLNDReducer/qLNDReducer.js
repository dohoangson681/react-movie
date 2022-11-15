import { ACCESS_TOKEN, USER_LOGIN } from "../../../util/setting"
import { DANG_NHAP, DANG_XUAT } from "../../type/nguoiDung-type/NDType"


let user = {}
if (localStorage.getItem(USER_LOGIN)) {
    user = JSON.parse(localStorage.getItem(USER_LOGIN))
}

const initialState = {
    userLogin: user,

}

export const quanLyNguoiDungReducer = (state = initialState, action) => {
    switch (action.type) {
        case DANG_NHAP:
            const { thongTinDangNhap } = action
            console.log(action);
            localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap))

            localStorage.setItem(ACCESS_TOKEN, thongTinDangNhap.accessToken);
            console.log(thongTinDangNhap.accessToken)
            state.userLogin = thongTinDangNhap
            return { ...state }
        case DANG_XUAT:
            localStorage.removeItem(USER_LOGIN)
            localStorage.removeItem(ACCESS_TOKEN)
            return { ...state }
        default:
            return state
    }
}
