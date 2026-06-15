import { useState } from "react";
import InputField from "../components/InputField";
import AsideBlock from "../components/AsideBlock";
import "../styles.css";
import { Link, useNavigate } from "react-router-dom";

export default function RecuperarSenha() {
    const [email, setEmail] = useState('');
    const [erro, setErro] = useState('');
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();

        if (!email) {
            setErro('É necessário preencher o campo e-mail.');
            return;
        }

        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailValido) {
            setErro('Informe um e-mail válido.');
            return;
        }

        setErro('');
        navigate('/novaSenha');
    }

    return (
        <div className="container">
            <AsideBlock />
            <button type="button" className="btn-voltar" onClick={() => navigate('/')}>←</button>

            <main>
                <div className="cadastro">
                    <h1>Esqueceu a senha</h1>
                    <p>Informe seu e-mail para enviarmos um link para redefinir sua senha.</p>

                    <form onSubmit={handleSubmit}>
                        <InputField
                            label="Endereço de e-mail"
                            placeholder="user@email.com"
                            type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />

                        {erro && <p className="login-erro">{erro}</p>}

                        <button type="submit">Enviar</button>
                    </form>

                    <p className="registro">
                        Lembrou a senha?{' '}
                        <Link to="/">Voltar ao login</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}
