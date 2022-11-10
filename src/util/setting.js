import axios from "axios";
import { accessToken } from "../redux/types/UserType";

export const http = axios.create({
    baseURL: 'https://movienew.cybersoft.edu.vn/api',
    timeout: 30000
})
http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        'TokenCybersoft': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwNCIsIkhldEhhblN0cmluZyI6IjExLzA0LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4MTE3MTIwMDAwMCIsIm5iZiI6MTY1MjYzNDAwMCwiZXhwIjoxNjgxMzE4ODAwfQ.gSqRPtAGanL6NGpTCUadxaDv8iCWNHz1-5NHHkRP43A',
        'Authorization': 'Bearer ' + localStorage.getItem(accessToken),
    }
    return config
}, (errors) => {
    return Promise.reject(errors)
})


