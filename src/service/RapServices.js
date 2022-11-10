import axios from 'axios'
import { TOKEN, URL_API } from '../util/setting';

class RapServices {
    danhSachRap = (maPhim) => {
        return axios({
            url: `${URL_API}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
            method: "get",
            headers: {
                'TokenCybersoft': TOKEN
            }
        });
    };
}

export const rapService = new RapServices();