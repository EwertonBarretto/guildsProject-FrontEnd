import React, { useState } from 'react';
import './style.css';
import { CiCircleInfo } from "react-icons/ci";
import { GeneratorTextRandom } from '../../services/utils';
import InfoSelfRegister from '../../components/assets/selfRegister/InfoSelfRegister.png'

const SelfRegister = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [personagem, setPersonagem] = useState('');
    const [codigo, setCodigo] = useState('');
    const [showValidation, setShowValidation] = useState(false);

    const GenerateRandomCode = () => {
        const result = GeneratorTextRandom();
        setCodigo(result);
        setShowValidation(true);
    };

    return (
        <div className='wrapper'>
            <form action=''>
                <h1>Auto-Cadastro</h1>
                {!codigo && (
                    <div>
                        <div className='input-box'>
                            <input type='text' value={nome} placeholder='Nome' onChange={(e) => setNome(e.target.value)} required></input>
                        </div>
                        <div className='input-box'>
                            <input type='email' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} required></input>
                        </div>
                        <div className='input-box'>
                            <input type='text' value={personagem} placeholder='Personagem (Nome)' onChange={(e) => setPersonagem(e.target.value)} required></input>
                        </div>
                        <button type='button' onClick={GenerateRandomCode}>Gerar código</button>
                    </div>
                )}
                {codigo && (
                    <div className='validationCode'>
                        Código Gerado:
                        <br />
                        <span>{codigo}</span>
                        <span>
                            <CiCircleInfo

                                onClick={() => window.open('../../components/assets/selfRegister/InfoSelfRegister.png', '_blank')}
                                style={{ cursor: 'pointer', marginLeft: '10px' }} />
                        </span>
                        <br />
                        <br />
                    </div>
                )}

                {showValidation && (
                    <div>
                        <button type="button">Validar</button>
                    </div>
                )}

            </form>
        </div>

    )
};

export default SelfRegister;