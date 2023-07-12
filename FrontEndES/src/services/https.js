import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'localhost/user/register',
    headers: {
        'Content-type': 'application/json'
    }
});

export default axiosInstance