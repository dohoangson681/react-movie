import { phimService } from "../../../service";
import { LAY_DS_PHIM } from "../../type/movie-type/MovieType";
import { disPlayLoadingAction, hidenLoadingAction } from "../loadingAction/loading";



export const layDsPhimAction = () => {
    return (dispatch) => {
        dispatch(disPlayLoadingAction);
        let promise = phimService?.layDanhSachPhim();
        promise.then((res) => {
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

