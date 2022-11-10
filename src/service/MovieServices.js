import { http } from "../util/setting";
import { GROUP_ID } from "./TypeServices";

class MovieServices{
    getMovieList = ()=>{
        return http.get(`/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`)
    }

}
const movieServices = new MovieServices()
export default movieServices