import config from '~/config'
import MainLayout from '~/layouts/MainLayout'
import { route } from '~/models'
import Cart from '~/pages/Cart/Cart'
import Home from '~/pages/Home'
import Login from '~/pages/Login/Login'
import Register from '~/pages/Register/Register'
import DetailProducts from '~/pages/website/DetailProduct/DetailProducts'
import User from '~/pages/website/Profile/Profile'

// các trang không cần đăng nhập vào vào được
const publicRoutes: route[] = [
    { path: config.routes.home, element: Home, layout: MainLayout },
    { path: config.routes.login, element: Login, layout: MainLayout },
    { path: config.routes.register, element: Register, layout: MainLayout },
    { path: config.routes.detailProducts, element: DetailProducts, layout: MainLayout },
    { path: config.routes.cart, element: Cart, layout: MainLayout },
    { path: config.routes.userPages, element: User, layout: MainLayout }
]

// Các trang cần đăng nhập mới vào được
const privateRoutes = []

export { publicRoutes, privateRoutes }
