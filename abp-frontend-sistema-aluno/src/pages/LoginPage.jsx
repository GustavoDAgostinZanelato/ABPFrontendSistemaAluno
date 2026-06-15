import { useState } from "react";
import InputField from "../components/InputField";
import AsideBlock from "../components/AsideBlock";
import "../styles.css";
import { Link, useNavigate } from 'react-router-dom';
import { useUsuario } from "../context/UsuarioContext";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate();
    const { setUsername } = useUsuario();

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !senha) {
            setErro('É necessário preencher todos os campos.');
            return;
        }
        setErro('');
        setUsername(email);
        navigate('/dashboard');
    }

    return (
        <>
            <div className="container">
                <AsideBlock />
                <main>
                    <div className="cadastro">
                        {/* <span className="login-brand">Sistema Aluno</span> */}
                        <h1>Bem-vindo de volta</h1>
                        <p className="login-subtitle">
                            Insira suas credenciais para acessar seu painel acadêmico.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <InputField
                                label="Usuário"
                                placeholder="Digite seu usuário"
                                type="text"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <InputField
                                label="Senha"
                                placeholder="Digite sua senha"
                                type="password"
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                            />

                            {erro && <p className="login-erro">{erro}</p>}

                            <button type="submit">Entrar</button>

                        </form>
                        <p className="registro">
                            <Link to="/recuperarSenha">Esqueceu a senha?</Link>
                        </p>
                        <p className="registro">
                            Não tem conta?{' '}
                            <Link to="/cadastroUsuario1">Registre-se</Link>
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}
