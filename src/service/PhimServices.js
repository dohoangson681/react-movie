import axios from 'axios'
import { URL_API, GP_ID, TOKEN } from "../util/setting";

class PhimServices {
    getDsPhim = () => {
        return axios({
            url: `${URL_API}/QuanLyPhim/LayDanhSachPhim?maNhom=${GP_ID}`,
            method: "get",
            headers: {
                'TokenCybersoft': TOKEN
            }
        });
    };

}

export const phimService = new PhimServices();