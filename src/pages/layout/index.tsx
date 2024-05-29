import { Container } from '../../components/container';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { Outlet } from 'react-router-dom'

const Layout = () => {

    return (
        <>
            <Header />
            {/* <Container> */}
            <Outlet></Outlet>
            {/* </Container> */}
            <Footer />
        </>
    )
}

export default Layout;