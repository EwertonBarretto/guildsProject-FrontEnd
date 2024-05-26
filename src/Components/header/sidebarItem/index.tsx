import React from 'react'
import { Container } from './style'

const SidebarItem = ({ Icon, Text }: any) => {
    return (
        <Container>
            <Icon />
            {Text}
        </Container>
    )
}

export default SidebarItem