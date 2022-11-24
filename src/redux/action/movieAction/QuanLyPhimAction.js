import { history } from "../../../App";
import { phimService } from "../../../service";
import { ADMIN_GET_MVDETAIL } from "../../type/admin-type/admin.type";
import { LAY_DS_PHIM } from "../../type/movie-type/MovieType";
import { disPlayLoadingAction, hidenLoadingAction } from "../loadingAction/loading";

export const layDsPhimAction = (group_id) => {

    return (dispatch) => {
        dispatch(disPlayLoadingAction);
        let promise = phimService?.layDanhSachPhim(group_id);
        promise.then((res) => {
            let action = {
                type: LAY_DS_PHIM,
                mangPhim: res.data.content
            };
            dispatch(action);
            dispatch(hidenLoadingAction);
        });
        promise.catch((err) => {
            console.log(err)
        });
    };
}
export const layDsPhimAdmin = (group_id) => {
    return (dispatch) => {
        let promise = phimService.layDanhSachPhim(group_id)
        promise
        .then (res => {
            // console.log('res admin' , res) ;
            let action = {
                type: LAY_DS_PHIM,
                mangPhim: res.data.content
            };
            dispatch(action);
        })
        .catch((err) => {
            console.log('err', err);
        });
    };
}

export const themPhimAdmin = (formData) => {
  return dispatch => {
    let promise = phimService.themPhimUploadhinh(formData)
    promise.then ( res => {
     history.push('/admin') ; 
     alert('Thêm phim thành công !') ; 

    }).catch(err => console.log(err)) ; 
  }
}

export const xoaPhimAdmin = (maPhim , group_id = 'GP01' , handleCancel) => {
    return dispatcher => {
        let promise = phimService.xoaPhim(maPhim) ;
        promise.then (res => {
            console.log('ma phhim xoa' , maPhim) ; 
            console.log('xoa phim thanh cong' , res) ;
            handleCancel() ; 
            let action = layDsPhimAdmin(group_id) ; 
            dispatcher(action) ; 
        }).catch(err => console.log(err)) ; 
    }
}

export const getDetailMovieAdmin = (maPhim) => {
    return dispatcher => {
        let promise = phimService.getDetailAdmin(maPhim) ; 
        promise.then(res => {
            console.log(res) ;
            let action = {
                type : ADMIN_GET_MVDETAIL , 
                data : res.data.content
            }
            dispatcher(action) ; 
        }).catch(err => console.log(err)) ; 
    }
}

