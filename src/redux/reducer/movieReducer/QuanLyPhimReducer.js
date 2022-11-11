import { LAY_DS_PHIM } from "../../type/movie-type/MovieType"

const initialState = {
    mangPhim: [

    ]
}

export const quanLyPhimReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAY_DS_PHIM:
            state.mangPhim = action.mangPhim
            console.log(state);
            return {...state}
        default:
            return state
    }
}
