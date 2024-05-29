import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FooterContainer } from './style';

const Footer = () => {
    return (
        <FooterContainer>
            <p>© 2024 &nbsp;
                <Link to={'/dashboard/home'}>
                    TEAM GUILDS
                </Link></p>
        </FooterContainer>
    );
};

export default Footer;
