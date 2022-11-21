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

