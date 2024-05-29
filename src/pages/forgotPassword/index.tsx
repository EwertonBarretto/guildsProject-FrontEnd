import { MdEmail } from "react-icons/md";
import { StyledForgot } from './style';
import { useState } from "react";
import { WrapperLoginPages } from "../../styles/styles_global";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    return (
        <WrapperLoginPages>
            <div className='wrapper'>
                <StyledForgot>
                    <label>EM CONSTRUÇÂO</label>
                </StyledForgot>
            </div>
        </WrapperLoginPages>
    )
}

export default ForgotPassword;