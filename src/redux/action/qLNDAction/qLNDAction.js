import { history } from "../../../App";
import { qLNDService } from "../../../service";
import { DANG_NHAP, LAY_TT_TAI_KHOAN } from "../../type/nguoiDung-type/NDType";
import { toast } from "react-toastify";
import { ADMIN_LOGIN } from "../../type/admin-type/admin.type";
import { ACCESS_TOKEN, ADMIN_ACC } from "../../../util/setting";
const notify = () =>
  toast("Tài Khoản Hoặc Mật Khẩu Sai !", {
    position: toast.POSITION.TOP_RIGHT,
  });
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

export const dangNhapAction = (thongTinDangNhap) => {
  return (dispatch) => {
    let promise = qLNDService.dangNhap(thongTinDangNhap);
    promise.then((res) => {
      console.log(res);
      // "taiKhoan": "dhs12@gmail.com",
      // "matKhau": "123456",
      let action = {
        type: DANG_NHAP,
        thongTinDangNhap: res.data.content,
      };
      dispatch(action);
      history.push("/home");
    });
    promise.catch((err) => {
      notify();
      console.log("err", err);
    });
  };
};
export const layThongTinNguoiDungAction = () => {
  return (dispatch) => {
    let promise = qLNDService.layTTTaiKhoan();
    promise.then((res) => {
      console.log(res);
      let action = {
        type: LAY_TT_TAI_KHOAN,
        thongTinNguoiDung: res.data.content,
      };
      dispatch(action);
    });
    promise.catch((err) => {
      console.log("err", err);
    });
  };
};
export const adminDangNhapAction = (values, resetForm) => {
  return (dispatch) => {
    let promise = qLNDService.dangNhapAdmin(values);
    promise
      .then((res) => {
        console.log('res.data.content',res.data.content) ;
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
          dispatch(action);
          console.log(' res.data.content.accessToken' ,  res.data.content.accessToken) ; 
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
        }
      })
      .catch((err) => console.log(err));
  };
};
