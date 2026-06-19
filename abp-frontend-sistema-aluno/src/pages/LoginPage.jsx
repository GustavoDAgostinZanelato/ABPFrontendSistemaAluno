import { useState } from "react";
import InputField from "../components/InputField";
import AsideBlock from "../components/AsideBlock";
import "../styles.css";
import { Link, useNavigate } from 'react-router-dom';
import { useUsuario } from "../context/UsuarioContext";
import { buscarUsuario } from "../services/githubServices";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setUsername, setUsuario } = useUsuario();

    async function handleSubmit(e) {
        e.preventDefault();
        if (!email || !senha) {
            setErro('É necessário preencher todos os campos.');
            return;
        }
        setErro('');
        setLoading(true);
        // A API do GitHub funciona como "banco de alunos": se o usuario existir,
        // o acesso e liberado; caso contrario, exibe a mensagem de erro.
        try {
            const dados = await buscarUsuario(email);
            setUsuario(dados);
            setUsername(dados.name || dados.login);
            navigate('/dashboard');
        } catch (err) {
            setErro(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <div className="container">
                <AsideBlock />
                <main>
                    <div className="cadastro">
                        {/* <span className="login-brand">Sistema Aluno</span> */}
                        <h1>Bem-vindo de volta</h1>
                        <p className="registro">
                            Não tem conta?{' '}
                            <Link to="/cadastroUsuario1">Registre-se</Link>
                        </p>
                        {/* <p className="login-subtitle">
                            Insira suas credenciais para acessar seu painel acadêmico.
                        </p> */}
                        <form onSubmit={handleSubmit}>
                            <InputField
                                label="Usuário"
                                placeholder="Digite seu nome de usuário"
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

                            <button type="submit" disabled={loading}>
                                {loading ? 'Entrando...' : 'Entrar'}
                            </button>

                        </form>
                        <p className="registro">
                            <Link to="/recuperarSenha">Esqueceu a senha?</Link>
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}
