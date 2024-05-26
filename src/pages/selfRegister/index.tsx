import React, { useState } from 'react';
import './style.css';
import { CiCircleInfo } from "react-icons/ci";
import { GeneratorTextRandom } from '../../services/utils';
import InfoSelfRegister from '../../components/assets/selfRegister/InfoSelfRegister.png'
import ModalImage from '../../components/modalImage/modalImage';

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
        <div className='wrapper'>
            <form action=''>
                <h1>Auto-Cadastro</h1>
                {(!codigo || validated) && (
                    <div>
                        <div className='input-box'>
                            <label>Nome</label>
                            <input type='text' value={nome} placeholder='Nome' onChange={(e) => setNome(e.target.value)} required></input>
                        </div>
                        <div className='input-box'>
                            <label>Email</label>
                            <input type='email' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} required></input>
                        </div>
                        <div className='input-box'>
                            <label>Personagem</label>
                            <input type='text' value={personagem} placeholder='Personagem (Nome)' onChange={(e) => setPersonagem(e.target.value)} required></input>
                        </div>

                        {!validated && (
                            <button type='button' onClick={GenerateRandomCode}>Gerar código</button>
                        )}
                    </div>
                )}
                {codigo && !validated && (
                    <div className='registerLoginForm'>
                        Código Gerado:
                        <br />
                        <span>{codigo}</span>
                        <span>
                            <ModalImage image={InfoSelfRegister} button={<CiCircleInfo color='red' style={{ cursor: 'pointer', marginLeft: '10px' }} />} classButtonOpen={'buttonTransparence'}></ModalImage>
                        </span>
                        <br />
                        <br />
                    </div>
                )}

                {showValidation && (
                    <div>
                        <button type="button" onClick={ValidateCharacter}>Validar</button>
                    </div>
                )}

                {validated && (
                    <div >
                        <div className='input-box'>
                            <label>Password</label>
                            <input type='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} required></input>
                        </div>
                        <button type='button' onClick={SaveRegister}>Cadastrar</button>
                    </div>
                )}

            </form>
        </div>

    )
};

export default SelfRegister;