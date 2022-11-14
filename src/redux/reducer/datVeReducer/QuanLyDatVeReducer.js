import { DAT_VE, LAY_CHI_TIET_PHONG_VE } from "../../type/datVe-type/DatVeType"

const initialState = {
    chiTietPhongVe: {

    },
    danhSachGheDangDat: [

    ]
}

export const quanLyDatVeReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAY_CHI_TIET_PHONG_VE:
            state.chiTietPhongVe = action.chiTietPhongVe
            return { ...state }
        case DAT_VE:
            console.log(action)
            let danhSachGheCapNhat = [...state.danhSachGheDangDat]
            let index = danhSachGheCapNhat.findIndex(gheDangDat => gheDangDat.maGhe === action.gheDangChon.maGhe)
            if (index !== -1) {
                danhSachGheCapNhat.splice(index, 1)
            }
            else {
                danhSachGheCapNhat.push(action.gheDangChon)
            }
            return { ...state, danhSachGheDangDat: danhSachGheCapNhat }

        default:
            return { ...state }
    }
}
