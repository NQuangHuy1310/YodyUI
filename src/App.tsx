import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from '~/layouts/MainLayout'
import { route } from '~/models'
import { publicRoutes } from '~/routes'

function App() {
    return (
        <Router>
            <div className="myApp">
                <Routes>
                    {publicRoutes.map((route: route, index: number) => {
                        let Layout: React.ComponentType<any> = MainLayout
                        if (route.layout) {
                            Layout = route.layout as React.ComponentType<any>
                        }

                        const Page = route.element

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        )
                    })}
                </Routes>
            </div>
        </Router>
    )
}

export default App
