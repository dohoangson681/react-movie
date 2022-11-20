import { phimService } from "../../../service";
import { LAY_DS_PHIM } from "../../type/movie-type/MovieType";
import { disPlayLoadingAction, hidenLoadingAction } from "../loadingAction/loading";



export const layDsPhimAction = (group_id) => {
    
    return (dispatch) => {
        let promise = phimService?.layDanhSachPhim(group_id)
        dispatch(disPlayLoadingAction);
        let promise2 = phimService?.layDanhSachPhim();
        promise2.then((res) => {
           
            let action = {
                type: LAY_DS_PHIM,
                mangPhim: res.data.content
            };
            dispatch(action);
            dispatch(hidenLoadingAction);
        });
        promise.catch((err) => {
            console.log('err', err);
        });
    };
}

