import Header from '~/layouts/components/Header/Header'
import Footer from '~/layouts/components/Footer/Footer'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout
