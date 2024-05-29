import styled from 'styled-components';

export const StyledForgot = styled.div`
.input-box .emailIcon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 16px;
}

.wrapper .remember-forgot {
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -15px 0 15px;
}

.remenber-forgot label input {
    accent-color: #fff;
    margin-right: 4px;
}

.remenber-forgot a {
    color: #fff;
    text-decoration: none;
}

.remenber-forgot a:hover {
    text-decoration: underline;
}
`