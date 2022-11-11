import { phimService } from "../../../service"
import { LAY_DS_PHIM } from "../../type/movie-type/MovieType"



export const layDsPhimAction  =()=>{
    return async (dispatch)=>{
        try{
            const result = await phimService.layDanhSachPhim()
            dispatch({
                type:LAY_DS_PHIM,
                mangPhim: result.data.content
            })
        }
        catch(err){
            console.log('err', err);
        }
    }
}