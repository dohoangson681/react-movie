import { datVeService } from "../../../service"
import { LAY_CHI_TIET_PHONG_VE } from "../../type/datVe-type/DatVeType"



export const quanLyDatVeAction = (maLichChieu) => {
    return (dispatch) => {
        let promise = datVeService.layChiTietPhongVe(maLichChieu)
        promise.then((res) => {
            let action = {
                type: LAY_CHI_TIET_PHONG_VE,
                chiTietPhongVe: res.data.content
            }
            dispatch(action)
        })
        promise.catch((err) => {
            console.log('err', err);
        })
    }
}
export const datVeAction = (thongTinDatVe) => {
    return (dispatch) => {
        let promise = datVeService.datVe(thongTinDatVe)
        console.log('thong tin ở action',thongTinDatVe)
        promise.then((res) => {
            console.log('datveaction',res.data.content);
        })
        promise.catch((err) => {
            console.log('err', err);
        })
    }
}

