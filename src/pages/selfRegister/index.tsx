import React, { useState } from 'react';
import { CiCircleInfo } from "react-icons/ci";
import { GeneratorTextRandom } from '../../services/utils';
import InfoSelfRegister from '../../components/assets/selfRegister/InfoSelfRegister.png'
import ModalImage from '../../components/modalImage/modalImage';
import { StyledLabel, StyledRegisterLoginForm } from './style';
import { WrapperLoginPages, StyledInput } from '../../styles/styles_global';

const SelfRegister = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [personagem, setPersonagem] = useState('');
    const [password, setPassword] = useState('');
    const [codigo, setCodigo] = useState('');
    const [showValidation, setShowValidation] = useState(false);
    const [validated, setValidation] = useState(false);

    const GenerateRandomCode = () => {
        const result = GeneratorTextRandom();
        setCodigo(result);
        setShowValidation(true);
    };

    const ValidateCharacter = () => {
        //TODO vai na api valida e set com o retorno (bool)
        setShowValidation(false);
        setValidation(true);
    }

    const SaveRegister = () => {
        //TODO vai na api e cadastra o usuario e personagem
    }

    return (
        <WrapperLoginPages marginInputBox='20px 0 50px 0'>
            <div className='wrapper'>
                <form action=''>
                    <h1>Auto-Cadastro</h1>
                    {(!codigo || validated) && (
                        <div>
                            <div className='input-box'>
                                <StyledLabel>Nome</StyledLabel>
                                {/* <label>Nome</label> */}
                                <StyledInput type='text' value={nome} placeholder='Nome' onChange={(e) => setNome(e.target.value)} required></StyledInput>
                            </div>
                            <div className='input-box'>
                                <StyledLabel>Email</StyledLabel>
                                <StyledInput type='email' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} required></StyledInput>
                            </div>
                            <div className='input-box'>
                                <StyledLabel>Personagem</StyledLabel>
                                <StyledInput type='text' value={personagem} placeholder='Personagem (Nome)' onChange={(e) => setPersonagem(e.target.value)} required></StyledInput>
                            </div>

                            {!validated && (
                                <button type='button' onClick={GenerateRandomCode}>Gerar código</button>
                            )}
                        </div>
                    )}
                    {codigo && !validated && (
                        <StyledRegisterLoginForm>Código Gerado:
                            <br />
                            <span>{codigo}</span>
                            <span>
                                <ModalImage image={InfoSelfRegister} button={<CiCircleInfo color='red' style={{ cursor: 'pointer', marginLeft: '10px' }} />} classButtonOpen={'buttonTransparence'}></ModalImage>
                            </span>
                            <br />
                            <br />
                        </StyledRegisterLoginForm>

                    )}

                    {showValidation && (
                        <div>
                            <button type="button" onClick={ValidateCharacter}>Validar</button>
                        </div>
                    )}

                    {validated && (
                        <div >
                            <div className='input-box'>
                                <StyledLabel>Password</StyledLabel>
                                <StyledInput type='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} required></StyledInput>
                            </div>
                            <button type='button' onClick={SaveRegister}>Cadastrar</button>
                        </div>
                    )}

                </form>
            </div>
        </WrapperLoginPages>
    )
};

export default SelfRegister;