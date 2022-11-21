import { history } from "../../../App";
import { qLNDService } from "../../../service";
import { CAP_NHAT_USER, DANG_KY, DANG_NHAP, LAY_TT_TAI_KHOAN } from "../../type/nguoiDung-type/NDType";
import { toast } from "react-toastify";
import { ADMIN_LOGIN } from "../../type/admin-type/admin.type";
import { ACCESS_TOKEN, ADMIN_ACC } from "../../../util/setting";
import { disPlayLoadingAction, hidenLoadingAction } from "../loadingAction/loading";

// const notify = () =>
//   toast("Tài Khoản Hoặc Mật Khẩu Sai !", {
//     position: toast.POSITION.TOP_RIGHT,
//   });
const notifyAdmin = () =>
    toast.error("Yêu cầu tài khoản Admin !", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

// export const dangNhapAction = (thongTinDangNhap) => {
//   return (dispatch) => {
//     let promise = qLNDService.dangNhap(thongTinDangNhap);
//     promise.then((res) => {
//       console.log(res);
//       // "taiKhoan": "dhs12@gmail.com",
//       // "matKhau": "123456",
//       let action = {
//         type: DANG_NHAP,
//         thongTinDangNhap: res.data.content,
//       };
//       dispatch(action);
//       history.push("/home");
//     });
//     promise.catch((err) => {
//       notify();
//       console.log("err", err);
//     });
//   };
// };
// export const layThongTinNguoiDungAction = () => {
//   return (dispatch) => {
//     let promise = qLNDService.layTTTaiKhoan();
//     promise.then((res) => {
//       console.log(res);
//       let action = {
//         type: LAY_TT_TAI_KHOAN,
//         thongTinNguoiDung: res.data.content,
//       };
//       dispatch(action);
//     });
//     promise.catch((err) => {
//       console.log("err", err);
//     });
//   };
// };
export const adminDangNhapAction = (values, resetForm) => {
    return (dispatch) => {
        let promise = qLNDService.dangNhapAdmin(values);
        promise
            .then((res) => {
                console.log('res.data.content', res.data.content);
                let loaiND = res.data.content.maLoaiNguoiDung;
                // console.log('loaiND' , loaiND ) ; 
                // abc123 - 123456111
                if (loaiND === "KhachHang") {
                    notifyAdmin();
                    resetForm();
                } else {
                    // console.log('push to admin !') ;
                    let action = {
                        type: ADMIN_LOGIN,
                        data: res.data.content,
                    };
                    dispatch(disPlayLoadingAction);
                    dispatch(action);
                    console.log(' res.data.content.accessToken', res.data.content.accessToken);
                    localStorage.setItem(ACCESS_TOKEN, res.data.content.accessToken);
                    let basicInfo = {};
                    basicInfo = {
                        ...basicInfo,
                        email: res.data.content.email,
                        hoTen: res.data.content.hoTen,
                        maLoaiNguoiDung: res.data.content.maLoaiNguoiDung,
                        soDT: res.data.content.soDT,
                        taiKhoan: res.data.content.taiKhoan,
                    };
                    localStorage.setItem(ADMIN_ACC, JSON.stringify(basicInfo));
                    history.push("/admin");
                    dispatch(hidenLoadingAction);
                }
            })
            .catch((err) => console.log(err));
    };
};

const notifyDN = (err) => toast(err, {
    position: toast.POSITION.TOP_RIGHT
});
const notifyDK = (err) => toast(err, {
    position: toast.POSITION.TOP_RIGHT
});
const notifyCNhat = () => toast('Thành Công'
);

export const dangNhapAction = (thongTinDangNhap) => {
    return (dispatch) => {
        dispatch(disPlayLoadingAction);
        let promise = qLNDService.dangNhap(thongTinDangNhap);
        promise.then((res) => {
            let action = {
                type: DANG_NHAP,
                thongTinDangNhap: res.data.content
            };
            dispatch(action);
            dispatch(hidenLoadingAction);
            history.push("/home");
        });
        promise.catch((err) => {
            notifyDN(err.response.data.content);
        });
    };
};
export const dangKyAction = (thongTinDangKy) => {
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
        });
    };
};

export const capNhatAction = (thongTinCapNhat) => {
    return (dispatch) => {
        let promise = qLNDService.capNhatUser(thongTinCapNhat);
        promise.then((res) => {
            let action = {
                type: CAP_NHAT_USER,
                thongTinCapNhat: res.data.content
            };
            dispatch(action);
            notifyCNhat();
        });
        promise.catch((err) => {
            history.push("/*");
        });
    };
};

export const layThongTinNguoiDungAction = () => {
    return (dispatch) => {
        dispatch(disPlayLoadingAction);
        let promise = qLNDService.layTTTaiKhoan();
        promise.then((res) => {
            let action = {
                type: LAY_TT_TAI_KHOAN,
                thongTinNguoiDung: res.data.content
            };
            dispatch(action);
            dispatch(hidenLoadingAction);
        });
        promise.catch(() => {
            history.push("/*");
        });
    };
};

