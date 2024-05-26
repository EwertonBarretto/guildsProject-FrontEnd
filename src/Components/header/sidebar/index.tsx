import React from 'react'
import { Container, Content } from './style'
import {
    FaTimes,
    FaHome,
    FaEnvelope,
    FaRegSun,
    FaUserAlt,
    FaIdCardAlt,
    FaRegFileAlt,
    FaRegCalendarAlt,
    FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../sidebarItem'

const Sidebar = ({ active }: any) => {

    const closeSidebar = () => {
        active(false)
    }

    return (
        <Container>
            <FaTimes onClick={closeSidebar} />
            <Content>
                <SidebarItem Icon={FaHome} Text="Home" />
                <SidebarItem Icon={FaChartBar} Text="Statistics" />
                <SidebarItem Icon={FaUserAlt} Text="Users" />
                <SidebarItem Icon={FaEnvelope} Text="Mail" />
                <SidebarItem Icon={FaRegCalendarAlt} Text="Calendar" />
                <SidebarItem Icon={FaIdCardAlt} Text="Employees" />
                <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
                <SidebarItem Icon={FaRegSun} Text="Settings" />
            </Content>
        </Container>
    )
}

export default Sidebar