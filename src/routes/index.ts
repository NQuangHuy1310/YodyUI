import config from '~/config'
import MainLayout from '~/layouts/MainLayout'
import { route } from '~/models'
import Home from '~/pages/Home'

// các trang không cần đăng nhập vào vào được
const publicRoutes: route[] = [{ path: config.routes.home, element: Home, layout: MainLayout }]

// Các trang cần đăng nhập mới vào được
const privateRoutes = []

export { publicRoutes, privateRoutes }
