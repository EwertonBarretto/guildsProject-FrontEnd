import { Container } from '../../components/container';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { Outlet } from 'react-router-dom'
import { LayoutContainer, MainContent } from './style';

const Layout = () => {

    return (
        <>
            <Header />
            <LayoutContainer>
                <MainContent>
                    <Outlet></Outlet>
                </MainContent>
            </LayoutContainer>
            <Footer />
        </>
    )
}

export default Layout;