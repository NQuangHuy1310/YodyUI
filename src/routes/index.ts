import config from '~/config'
import MainLayout from '~/layouts/MainLayout'
import { route } from '~/models'
import Home from '~/pages/Home'
import Login from '~/pages/Login/Login'
import Register from '~/pages/Register/Register'

// các trang không cần đăng nhập vào vào được
const publicRoutes: route[] = [
    { path: config.routes.home, element: Home, layout: MainLayout },
    { path: config.routes.login, element: Login, layout: MainLayout},
    { path: config.routes.register,element:Register,layout:MainLayout}
]

// Các trang cần đăng nhập mới vào được
const privateRoutes = []

export { publicRoutes, privateRoutes }
