import axios, { AxiosResponse } from 'axios'
import { toast } from 'react-toastify'

const axiosConfig = axios.create({
    // withCredentials: true, // cái này để gửi cookie kèm theo request lên server
    baseURL: 'http://localhost:8088/api/v1'
})

// cái này là cấu hình gửi lên server
// axiosConfig.interceptors.request.use()

// Cấu hình response
axiosConfig.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.status === 200) {
            toast.success(response.data.message)
            return response.data
        }
        return response
    },
    (error) => {
        toast.error(error.response.data.message)
        return Promise.reject(error)
    }
)

export default axiosConfig
