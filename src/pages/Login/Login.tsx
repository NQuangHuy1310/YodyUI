import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { authRequest } from '~/apis/authRequest'
import config from '~/config'

interface ILoginForm {
    email: string
    password: string
    remember: boolean
}

const Login: React.FC = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ILoginForm>()
    const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
        try {
            await authRequest.authLogin({
                user_email: data.email,
                user_password: data.password
            })
            navigate('/')
        } catch (error) {}
    }

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen">
            <div className="bg-white w-full max-w-[400px] p-8 rounded-lg shadow-lg mx-4">
                <h2 className="text-3xl font-bold text-center mb-8">Đăng nhập</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                            {...register('email', { required: 'Email là bắt buộc' })}
                        />
                        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Mật khẩu
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
                            {...register('password', { required: 'Mật khẩu là bắt buộc' })}
                        />
                        {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                    </div>
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <input type="checkbox" id="remember" className="mr-2" {...register('remember')} />
                            <label htmlFor="remember" className="text-gray-700">
                                Nhớ mật khẩu
                            </label>
                        </div>
                        <a href="#" className="text-[#FFA500] hover:underline">
                            Quên mật khẩu?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#FFA500] hover:bg-[#e69500] text-white p-3 rounded-lg font-medium text-xl"
                    >
                        {' '}
                        Đăng nhập
                    </button>
                </form>
                <p className="text-center text-gray-700 mt-6">
                    Chưa có tài khoản?{' '}
                    <Link to={config.routes.register} className="text-[#FFA500] hover:underline">
                        Đăng ký
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login
