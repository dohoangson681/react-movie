import { history } from "../../../App"
import { qLNDService } from "../../../service"
import { DANG_NHAP } from "../../type/nguoiDung-type/NDType"



export const dangNhapAction = (thongTinDangNhap) => {
    return (dispatch) => {
        let promise = qLNDService.dangNhap(thongTinDangNhap)
        promise.then((res) => {
            console.log(res) ; 
            // "taiKhoan": "dhs12@gmail.com",
            // "matKhau": "123456",
            let action = {
                type: DANG_NHAP,
                thongTinDangNhap: res.data.content
            }
            dispatch(action) ;
            // history.goBack()  : go back là trở lại trang trước đấy , nhưng trang
            // trước đấy là gì ??? đẩy luôn về home r xử lý ở header tại home
            history.push("/home") ; 
        })
        promise.catch((err) => {
            console.log('err', err);
        })
    }
}

