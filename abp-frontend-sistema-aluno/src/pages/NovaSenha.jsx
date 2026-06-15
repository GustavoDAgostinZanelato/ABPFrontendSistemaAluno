import { useState } from "react";
import InputField from "../components/InputField";
import AsideBlock from "../components/AsideBlock";
import "../styles.css";
import { useNavigate } from "react-router-dom";

export default function NovaSenha() {
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [erro, setErro] = useState('');
    const [sucesso, setSucesso] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (!senha || !confirmarSenha) {
            setErro('É necessário preencher todos os campos.');
            return;
        }

        if (senha.length < 6) {
            setErro('A senha deve ter pelo menos 6 caracteres.');
            return;
        }

        if (senha !== confirmarSenha) {
            setErro('As senhas não coincidem.');
            return;
        }

        setErro('');
        setSucesso('Senha redefinida com sucesso! Redirecionando para o login...');
        setTimeout(() => navigate('/'), 1500);
    }

    return (
        <div className="container">
            <AsideBlock />
            <button type="button" className="btn-voltar" onClick={() => navigate('/recuperarSenha')}>←</button>

            <main>
                <div className="cadastro">
                    <h1>Nova senha</h1>
                    <p>Crie uma nova senha para acessar sua conta.</p>

                    <form onSubmit={handleSubmit}>
                        <InputField
                            label="Nova senha"
                            placeholder="Digite sua nova senha"
                            type="password"
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />

                        <InputField
                            label="Confirmar senha"
                            placeholder="Confirme sua nova senha"
                            type="password"
                            value={confirmarSenha}
                            onChange={e => setConfirmarSenha(e.target.value)}
                        />

                        {erro && <p className="login-erro">{erro}</p>}
                        {sucesso && <p className="login-sucesso">{sucesso}</p>}

                        <button type="submit">Redefinir senha</button>
                    </form>
                </div>
            </main>
        </div>
    );
}
