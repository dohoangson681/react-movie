import { datVeService } from "../../../service"
import { CHANGE_TAB,LAY_CHI_TIET_PHONG_VE } from "../../type/datVe-type/DatVeType"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        promise.then((res) => {
            let action = {
                type: CHANGE_TAB,
                number: '2',
            }   
            dispatch(action)
        })
        promise.catch((err) => {
            console.log('err', err);
        })
    }
}

