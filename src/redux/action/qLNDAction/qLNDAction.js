import { history } from "../../../App";
import { qLNDService } from "../../../service";
import { DANG_NHAP, LAY_TT_TAI_KHOAN } from "../../type/nguoiDung-type/NDType";
import { toast } from 'react-toastify';

const notify = () => toast("Tài Khoản Hoặc Mật Khẩu Sai !", {
    position: toast.POSITION.TOP_RIGHT
});


export const dangNhapAction = (thongTinDangNhap) => {
    return (dispatch) => {
        let promise = qLNDService.dangNhap(thongTinDangNhap);
        promise.then((res) => {
            console.log(res);
            // "taiKhoan": "dhs12@gmail.com",
            // "matKhau": "123456",
            let action = {
                type: DANG_NHAP,
                thongTinDangNhap: res.data.content
            };
            dispatch(action);
            // history.goBack()  : go back là trở lại trang trước đấy , nhưng trang
            // trước đấy là gì ??? đẩy luôn về home r xử lý ở header tại home
            history.push("/home");
        });
        promise.catch((err) => {
            notify();
            console.log('err', err);

        });
    };
};
export const layThongTinNguoiDungAction = () => {
    return (dispatch) => {
        let promise = qLNDService.layTTTaiKhoan();
        promise.then((res) => {
            console.log(res);
            // let action = {
            //     type: LAY_TT_TAI_KHOAN,
            //     thongTinNguoiDung: res.data.content
            // };
            // dispatch(action);
        });
        promise.catch((err) => {
            console.log('err', err);
        });
    };
};

