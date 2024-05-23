import React from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import './style.css';
import SelfRegister from '../selfRegister';
import { Link } from 'react-router-dom';

const Signin = () => {
    const { signed, handleSingin }: any = useContext(AuthContext);

    console.log('Login', signed);

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

                <button type='submit' onClick={handleSingin}>Login</button>

                <div className="register">
                    <p > Não tem conta? <Link to='/selfRegister'>Cadastre-se</Link> </p>
                    <Link to='/forgotPassword'> Esqueci minha senha</Link>
                </div>
            </form>
        </div>

    )
};

export default Signin;