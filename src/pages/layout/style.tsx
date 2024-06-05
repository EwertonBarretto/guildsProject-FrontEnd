import styled from "styled-components";

interface MainContentPage {
  isOpen?: any
}

export const LayoutContainer = styled.div`
  display: flex;
`;

export const MainContent = styled.main<MainContentPage>`
  margin-left: ${props => (props.isOpen ? '300px' : '0px')};  
  padding: 20px;
  width: 100%;
`;
