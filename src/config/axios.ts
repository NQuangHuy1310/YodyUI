import axios from 'axios'

const axiosConfig = axios.create({
    withCredentials: true, // cái này để gửi cookie kèm theo request lên server
    baseURL: import.meta.env.BASE_URL
})

// cái này là cấu hình gửi lên server
axiosConfig.interceptors.request.use()

// cái này cấu hình dữ liệu từ server gửi về
axiosConfig.interceptors.response.use()

export default axiosConfig
