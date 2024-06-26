import styled from 'styled-components';
import BG from '../components/assets/login/Background.jpg'

interface IInput {
    height?: string
}

interface WrapperLoginPages {
    marginInputBox?: string
}

export const WrapperLoginPages = styled.div<WrapperLoginPages>`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url(${BG}) no-repeat;
    background-size: cover;
    background-position: center;
    width: 100vw;

    .wrapper {
        width: 420px;
        background: transparent;
        border: 2px solid rgba(255, 255, 255, .2);
        backdrop-filter: blur(5px);
        box-shadow: 0 0 10px rgba(0, 0, 0, .2);
        color: #fff;
        border-radius: 10px;
        padding: 30px 40px;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    .wrapper h1 {
        font-size: 36px;
        text-align: center;
    }

    .wrapper .input-box {
        position: relative;
        width: 100%;
        height: 50px;
        margin: ${props => props.marginInputBox ? props.marginInputBox : '20px 0'};
    }

    .input-box input::placeholder {
        color: #fff;
    }

    .input-box .icon {
        position: absolute;
        right: 20px;
        top: 59%;
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

    .wrapper button {
        width: 100%;
        height: 45px;
        background: #fff;
        border: none;
        outline: none;
        border-radius: 40px;
        box-shadow: 0 0 10px rgba(0, 0, 0, -1);
        cursor: pointer;
        font-size: 16px;
        color: #333;
        font-weight: 700;
    }

    .wrapper .register {
        font-size: 14.5px;
        text-align: center;
        margin: 20px 0 15px;
    }

    .register a {
        color: #fff;
        text-decoration: none;
        font-weight: 600;
    }

    .register p {
        color: #fff;
        text-decoration: none;
    }

    .register p a:hover {
        text-decoration: underline;
    }

    .labelError {
        font-weight: bold;
        color: red;
        font-style: italic;
    }
`

export const StyledInput = styled.input<IInput>`
    width: 100%;
    height: ${props => props.height ? props.height : '100%'};
    background: transparent;
    border: none;
    outline: none;
    border: 2px solid rgb(255, 255, 255, .2);
    border-radius: 40px;
    font-size: 16px;
    color: #fff;
    padding: 20px 45px 20px 20px;
`