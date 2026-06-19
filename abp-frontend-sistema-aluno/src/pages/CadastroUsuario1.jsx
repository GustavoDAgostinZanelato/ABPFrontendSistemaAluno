import { useState } from "react";
import InputField from "../components/InputField";
import AsideBlock from "../components/AsideBlock";
import "../styles.css";
import { useNavigate } from "react-router-dom";
import { maskCPF } from "../utils/masks";

export default function CadastroUsuario1() {
    const [cpf, setCpf] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault();
        if (!cpf) {
            setErro('É necessário preencher o campo CPF')
            return;
        }
        if (cpf.length !== 14) {
            setErro('CPF informado é inválido')
            return;
        }
        setErro('');
        console.log('CPF: ', cpf);
        navigate('/cadastroUsuario2')
    }

    return(

        <>
            <div className="container">
                <AsideBlock />
                <main>
                    <div className="cadastro">
                        <button type="button" className="btn-voltar" onClick={() => navigate('/')}>←</button>
                        <h1>Cadastre-se</h1>
                        <p>Passo 1 de 2. Por favor, insira seu cpf para prosseguir.</p>

                        <form onSubmit={handleSubmit}>
                            <InputField
                                label="CPF"
                                placeholder="000.000.000-00"
                                type="text"
                                value={cpf}
                                onChange={e => setCpf(maskCPF(e.target.value))}
                                maxLength={14}
                            />
                            {erro && <p className="login-erro">{erro}</p>}

                            <button type="submit">Proseguir</button>
                        </form>

                    </div>
                </main>
            </div>
        </>
    );
}