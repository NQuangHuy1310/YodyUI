import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { authAdd, } from '~/apis/authRequest';
import config from '~/config';

interface IRegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterForm>();
  const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
    try{
      await authAdd.authRegister({
        user_name:data.name,
        user_email: data.email,
        user_password: data.password
      })
      navigate('/login')
    }catch(error){}
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white w-full max-w-[400px] p-8 rounded-lg shadow-lg mx-4">
        <h2 className="text-3xl font-bold text-center mb-8">Đăng ký</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Họ và tên</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
              {...register("name", { required: "Họ và tên là bắt buộc" })}
            />
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
              {...register("email", { required: "Email là bắt buộc" })}
            />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Mật khẩu</label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
              {...register("password", { required: "Mật khẩu là bắt buộc" })}
            />
            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Xác nhận mật khẩu</label>
            <input
              type="password"
              id="confirmPassword"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFA500]"
              {...register("confirmPassword", { required: "Xác nhận mật khẩu là bắt buộc" })}
            />
            {errors.confirmPassword && <p className="text-red-600">{errors.confirmPassword.message}</p>}
          </div>
          <button type="submit" className="w-full bg-[#FFA500] hover:bg-[#e69500] text-white p-3 rounded-lg font-medium text-xl"> Đăng ký</button>
        </form>
        <p className="text-center text-gray-700 mt-6">
          Đã có tài khoản? <Link to={config.routes.login} className="text-[#FFA500] hover:underline">Đăng Nhập</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
