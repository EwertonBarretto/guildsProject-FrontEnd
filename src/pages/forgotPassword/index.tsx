import { MdEmail } from "react-icons/md";
import './style.css';
import { useState } from "react";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    return (
        <div className='wrapper'>
            <form action=''>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='Email' placeholder='Email' required></input>
                    <MdEmail className='emailIcon' />
                </div>
                <button type='submit' >Enviar</button>
            </form>
        </div>
    )
}

export default ForgotPassword;