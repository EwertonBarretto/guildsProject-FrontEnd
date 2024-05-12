import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
    return (
        <div className='wrapper'>
            <form action=''>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='text' placeholder='UserName' required></input>
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type='password' placeholder='Password' required></input>
                    <FaLock className='icon' />
                </div>

                <button type='submit'>Login</button>

                <div className="register">
                    <p>Não tem conta? <a href='#'> Cadastre-se</a></p>
                    <a href='#'> Esqueci minha senha</a>
                </div>
            </form>
        </div>

    )
};

export default LoginForm;