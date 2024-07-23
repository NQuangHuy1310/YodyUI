import axiosConfig from '~/config/axios'

export const authRequest = {
    authLogin: async (authData: { user_email: string; user_password: string }) => {
        return await axiosConfig.post('/auth/login', authData)
    }
}
