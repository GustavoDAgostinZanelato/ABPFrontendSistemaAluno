import { useState } from "react";
import InputField from "../components/InputField";
import AsideBlock from "../components/AsideBlock";
import "../styles.css";
import { useNavigate } from 'react-router-dom'
import { maskPhone } from "../utils/masks";
import { useUsuario } from "../context/UsuarioContext";

export default function CadastroUsuario2() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate()
    const { setUsername } = useUsuario();

    function handleSubmit(e) {
        e.preventDefault();
        if (!nome || !telefone || !email || !senha) {
            setErro('É necessário preencher todos os campos')
            return;
        }
        if (telefone.length !== 15) {
            setErro('Telefone informado é inválido')
            return;
        }
        if (senha.length < 6) {
            setErro('A senha deve ter no mínimo 6 dígitos')
            return;
        }
        setErro('');
        // Salva o nome digitado no Context para ser exibido nas telas internas.
        setUsername(nome);
        navigate('/dashboard')
    }

    return(
        <>
            <div className="container">
                <AsideBlock />
                <main>
                    <div className="cadastro">
                        <button type="button" className="btn-voltar" onClick={() => navigate('/cadastroUsuario1')}>←</button>
                        <h1>Cadastre-se</h1>
                        <p>Passo 2 de 2. Por favor, insira os dados para finalizar.</p>

                        <form onSubmit={handleSubmit}>
                            <InputField 
                                label="Nome"
                                placeholder="Seu nome completo"
                                type="text"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />

                            <InputField
                                label="Telefone"
                                placeholder="(99) 99999-9999"
                                type="tel"
                                value={telefone}
                                onChange={e => setTelefone(maskPhone(e.target.value))}
                                maxLength={15}
                            />

                            <InputField 
                                label="Endereço de Email"
                                placeholder="user@email.com"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />

                            <InputField 
                                label="Senha"
                                placeholder="Sua senha"
                                type="password"
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                                minLength={6}
                            />
                            {erro && <p className="login-erro">{erro}</p>}

                            <button type="submit">Cadastrar</button>
                        </form>

                    </div>
                </main>
            </div>
        </>
    );
}