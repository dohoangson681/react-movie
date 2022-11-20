import { phimService } from "../../../service"
import {  LAY_DS_PHIM } from "../../type/movie-type/MovieType"



export const layDsPhimAction = (group_id) => {
    
    return (dispatch) => {
        let promise = phimService?.layDanhSachPhim(group_id)
        promise.then((res) => {
           
            let action = {
                type: LAY_DS_PHIM,
                mangPhim: res.data.content
            }
            dispatch(action)
        })
        promise.catch((err) => {
            console.log('err', err);
        })
    }
}

