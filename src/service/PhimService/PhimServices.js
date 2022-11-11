import {  GP_ID } from "../../util/setting";
import { http } from '../../util/config';

export default class PhimServices {
    layDanhSachPhim = () => {
        // return axios({
        //     url: `${URL_API}/QuanLyPhim/LayDanhSachPhim?maNhom=${GP_ID}`,
        //     method: "get",
        //     headers: {
        //         'TokenCybersoft': TOKEN
        //     }
        // });
        return http.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GP_ID}`)
    };
    layDanhSachBanner = () => {
        return http.get('/api/QuanLyPhim/LayDanhSachBanner') ; 
    } ; 
}

export const phimService = new PhimServices();