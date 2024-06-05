import React, { useState } from 'react';
import { Container, HeaderContainer } from './style';
import { FaBars } from 'react-icons/fa';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';


const Header = ({ handleSideBar }: any) => {
    const [sidebar, setSidebar] = useState(true)

    const showSiderbar = () => {
        const valueNow = !sidebar;
        handleSideBar(valueNow);
        setSidebar(valueNow);
    }

    return (
        <Container>
            <FaBars onClick={showSiderbar} />
            {sidebar && <Sidebar active={showSiderbar} />}

            <HeaderContainer>
                <h1> <Link to={'/dashboard/home'}>
                    TEAM GUILDS
                </Link></h1>
            </HeaderContainer>
        </Container>
    )
}

export default Header