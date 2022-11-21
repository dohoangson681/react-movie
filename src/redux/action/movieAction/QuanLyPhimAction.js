import { history } from "../../../App";
import { phimService } from "../../../service";
import { LAY_DS_PHIM } from "../../type/movie-type/MovieType";
import { disPlayLoadingAction, hidenLoadingAction } from "../loadingAction/loading";

export const layDsPhimAction = (group_id) => {

    return (dispatch) => {
        let promise = phimService?.layDanhSachPhim(group_id);
        promise.then((res) => {
            dispatch(disPlayLoadingAction);
            let action = {
                type: LAY_DS_PHIM,
                mangPhim: res.data.content
            };
            dispatch(action);
            dispatch(hidenLoadingAction);
        });
        promise.catch(() => {
            history.push("/*")
        });
    };
}
export const layDsPhimAdmin = (group_id) => {
    return (dispatch) => {
        let promise = phimService.layDanhSachPhim(group_id)
        promise
        .then (res => {
            console.log('res admin' , res) ;
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

