import { rapService } from "../../../service"
import { GP_ID } from "../../../util/setting"
import { LAY_DS_CUM_RAP } from "../../type/movie-type/RapTypes"





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