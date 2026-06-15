import { useState } from "react";
import InputField from "../components/InputField";
import AsideBlock from "../components/AsideBlock";
import "../styles.css";
import { useNavigate } from "react-router-dom";

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
        setErro('');
        console.log('CPF: ', cpf);
        navigate('/cadastroUsuario2')
    }

    return(

        <>
            <div className="container">
                <AsideBlock />
                <button type="button" className="btn-voltar" onClick={() => navigate('/')}>←</button>
                <main>
                    <div className="cadastro">
                        <h1>Cadastre-se</h1>
                        <p>Passo 1 de 2. Por favor, insira seu cpf para prosseguir.</p>

                        <form onSubmit={handleSubmit}>
                            <InputField 
                                label="CPF"
                                placeholder="000.000.000-00"
                                type="text"
                                value={cpf}
                                onChange={e => setCpf(e.target.value)}
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