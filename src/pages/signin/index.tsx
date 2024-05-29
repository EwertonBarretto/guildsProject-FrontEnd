import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { WrapperLoginPages, StyledInput } from '../../styles/styles_global';

const Signin = () => {
    const { handleSingin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {

        if (!email || !password) {
            setError("Preencha todos os campos");
            return;
        }

        try {
            const res = await handleSingin(email, password);

            if (!res.token) {
                setError('Email ou Senha incorretos!');
                return;
            }

            navigate("/dashboard/home");
            return res;
        } catch (error) {
            setError('' + error + '');
        }
    };

    return (
        <WrapperLoginPages>
            <div className='wrapper'>
                <form action=''>
                    <h1>Login</h1>
                    <div className='input-box'>
                        <StyledInput
                            height='100%'
                            type='text'
                            value={email}
                            placeholder='Email'
                            onChange={(e) => [setEmail(e.target.value), setError("")]}
                            required>
                        </StyledInput>
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <StyledInput
                            height='100%'
                            type='password'
                            value={password}
                            placeholder='Password'
                            onChange={(e) => [setPassword(e.target.value), setError("")]}
                            required></StyledInput>
                        <FaLock className='icon' />
                    </div>
                    {error && (
                        <div>
                            <label className='labelError'>
                                {error}
                                <br />
                                <br />
                            </label>
                        </div>
                    )}

                    <button type='button' onClick={handleLogin}>Login</button>

                    <div className="register">
                        <p > Não tem conta? <Link to='/selfRegister'>Cadastre-se</Link> </p>
                        <Link to='/forgotPassword'> Esqueci minha senha</Link>
                    </div>
                </form>
            </div>
        </WrapperLoginPages>
    )
};

export default Signin;