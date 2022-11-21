
import { rapService } from "../../../service";
import { LAY_CHI_TIET_PHIM, LAY_DS_CUM_RAP } from "../../type/movie-type/RapTypes";
import { disPlayLoadingAction, hidenLoadingAction } from "../loadingAction/loading";

export const layDsRapAction = (maNhom) => {
    return (dispatch) => {
        let promise = rapService?.layThongTinLichChieuHeThongRap(maNhom);
        promise.then((res) => {
            dispatch(disPlayLoadingAction);
            let action = {
                type: LAY_DS_CUM_RAP,
                mangCumRap: res.data.content
            };
            dispatch(action);
            dispatch(hidenLoadingAction);
        });
        promise.catch((err) => {
            console.log(err)
        });
    };
};
export const layChiTietPhim = (maPhim) => {
    return (dispatch) => {
        let promise = rapService?.layThongTinLichChieuPhim(maPhim);
        promise.then((res) => {
            dispatch(disPlayLoadingAction);
            let action = {
                type: LAY_CHI_TIET_PHIM,
                phimDetail: res.data.content
            };
            dispatch(action);
            dispatch(hidenLoadingAction);
        });
        promise.catch((err) => {
            console.log(err);
        });
    };
};