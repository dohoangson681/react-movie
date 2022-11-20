import { history } from "../../../App";
import { qLNDService } from "../../../service";
import { CAP_NHAT_USER, DANG_KY, DANG_NHAP, LAY_TT_TAI_KHOAN } from "../../type/nguoiDung-type/NDType";
import { toast } from 'react-toastify';
import { disPlayLoadingAction, hidenLoadingAction } from "../loadingAction/loading";

const notifyDN = (err) => toast(err, {
    position: toast.POSITION.TOP_RIGHT
});
const notifyDK = (err) => toast(err, {
    position: toast.POSITION.TOP_RIGHT
});

export const dangNhapAction = (thongTinDangNhap) => {
    return (dispatch) => {
    
        let promise = qLNDService.dangNhap(thongTinDangNhap);
        promise.then((res) => {
            dispatch(disPlayLoadingAction);
            // "taiKhoan": "dhs12@gmail.com",
            // "matKhau": "123456",
            let action = {
                type: DANG_NHAP,
                thongTinDangNhap: res.data.content
            };
            dispatch(action);
            dispatch(hidenLoadingAction)
            history.push("/home");
        });
        promise.catch((err) => {
            notifyDN(err.response.data.content);
            console.log('err', err);
        });
    };
};
export const dangKyAction = (thongTinDangKy) => {
    console.log('thong tin action', thongTinDangKy);
    return (dispatch) => {
        let promise = qLNDService.dangKy(thongTinDangKy);
        promise.then((res) => {
            let action = {
                type: DANG_KY,
                thongTinDangKy: res.data.content
            };
            dispatch(action);
            history.push('/login');
        });
        promise.catch((err) => {
            notifyDK(err.response.data.content);
            console.log('err', err);
        });
    };
};

export const capNhatAction = (thongTinCapNhat) => {
    console.log('thong tin action cập nhật', thongTinCapNhat);
    return (dispatch) => {
        let promise = qLNDService.capNhatUser(thongTinCapNhat);
        promise.then((res) => {

            console.log(res.data.content);
            let action = {
                type: CAP_NHAT_USER,
                thongTinCapNhat: res.data.content
            };
            dispatch(action);

        });
        promise.catch((err) => {
            console.log('err', err);
        });
    };
};

export const layThongTinNguoiDungAction = () => {
    return (dispatch) => {
        dispatch(disPlayLoadingAction)
        let promise = qLNDService.layTTTaiKhoan();
        promise.then((res) => {
            console.log(res.data);
            let action = {
                type: LAY_TT_TAI_KHOAN,
                thongTinNguoiDung: res.data.content
            };
            dispatch(action);
            dispatch(hidenLoadingAction)
        });
        promise.catch((err) => {
            console.log('err', err);
        });
    };
};

