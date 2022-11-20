import {LAY_DS_PHIM } from "../../type/movie-type/MovieType"
import { LAY_CHI_TIET_PHIM } from "../../type/movie-type/RapTypes"

const initialState = {
    mangPhim: [

    ],
    phimDetail:{

    }
}

export const quanLyPhimReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAY_DS_PHIM:
            state.mangPhim = action.mangPhim
           
            return { ...state }
        case LAY_CHI_TIET_PHIM:
            state.phimDetail = action.phimDetail
            return {...state}
        default:
            return state
    }
}
