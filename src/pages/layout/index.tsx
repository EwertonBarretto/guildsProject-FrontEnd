import Footer from '../../components/footer';
import Header from '../../components/header';
import { Outlet } from 'react-router-dom'
import { LayoutContainer, MainContent } from './style';
import { useState } from 'react';

const Layout = () => {
    const [sidebar, setState] = useState(true);

    const updateSideBar = (value: boolean) => {
        setState(value);
    }

    return (
        <>
            <Header handleSideBar={updateSideBar} />
            <LayoutContainer>
                <MainContent isOpen={sidebar}>
                    <Outlet></Outlet>
                </MainContent>
            </LayoutContainer>
            <Footer />
        </>
    )
}

export default Layout;