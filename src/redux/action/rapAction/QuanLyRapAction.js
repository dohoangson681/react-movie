import { rapService } from "../../../service"
import { LAY_CHI_TIET_PHIM, LAY_DS_CUM_RAP } from "../../type/movie-type/RapTypes"





export const layDsRapAction = (maNhom) => {
    return (dispatch) => {
        let promise = rapService.layThongTinLichChieuHeThongRap(maNhom)
        promise.then((res) => {
            let action = {
                type: LAY_DS_CUM_RAP,
                mangCumRap: res.data.content
            }
            dispatch(action)
        })
        promise.catch((err) => {
            console.log('err', err);
        })
    }
}
export const layChiTietPhim = (maPhim)=>{
    return (dispatch) => {
        let promise = rapService.layThongTinLichChieuPhim(maPhim)
        promise.then((res) => {
            let action = {
                type: LAY_CHI_TIET_PHIM,
                phimDetail: res.data.content
            }
            dispatch(action)
        })
        promise.catch((err) => {
            console.log('err', err);
        })
    }
}