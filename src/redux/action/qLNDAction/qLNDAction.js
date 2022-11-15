import { history } from "../../../App"
import { qLNDService } from "../../../service"
import { DANG_NHAP } from "../../type/nguoiDung-type/NDType"



export const dangNhapAction = (thongTinDangNhap) => {
    return (dispatch) => {
        let promise = qLNDService.dangNhap(thongTinDangNhap)
        promise.then((res) => {
            let action = {
                type: DANG_NHAP,
                thongTinDangNhap: res.data.content
            }
            dispatch(action)
            history.goBack()
        })
        promise.catch((err) => {
            console.log('err', err);
        })
    }
}

