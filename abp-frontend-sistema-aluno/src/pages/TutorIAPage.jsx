import { useRef, useState } from "react";
import PortalLayout from "../components/PortalLayout";
import { perguntarTutor } from "../services/tutorService";
import { useUsuario } from "../context/UsuarioContext";

export default function TutorIAPage() {
    const { username } = useUsuario();
    const nome = username || 'Você';

    const [mensagens, setMensagens] = useState([]);
    const [pergunta, setPergunta] = useState('');
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState('');

    const idRef = useRef(0);
    const proximoId = () => (idRef.current += 1);

    async function enviar(e) {
        e.preventDefault();
        const texto = pergunta.trim();
        if (!texto) return;

        setMensagens(prev => [...prev, { id: proximoId(), autor: 'user', texto }]);
        setPergunta('');
        setErro('');
        setLoading(true);

        try {
            const resposta = await perguntarTutor(texto);
            setMensagens(prev => [...prev, { id: proximoId(), autor: 'ia', texto: resposta }]);
        } catch (err) {
            setErro(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <PortalLayout>
            <div className="tutor">
                <div className="tutor__chat">
                    {mensagens.length === 0 && !loading && (
                        <p className="tutor__vazio">
                            Faça uma pergunta para começar a conversar com o Tutor IA.
                        </p>
                    )}

                    {mensagens.map(msg => (
                        <div className="tutor__msg" key={msg.id}>
                            <div className={`tutor__avatar tutor__avatar--${msg.autor}`}>
                                {msg.autor === 'user' ? nome[0].toUpperCase() : 'IA'}
                            </div>
                            <div>
                                <p className="tutor__author">
                                    {msg.autor === 'user' ? nome : 'Tutor IA'}
                                </p>
                                <p className="tutor__text">{msg.texto}</p>
                            </div>
                        </div>
                    ))}

                    {loading && <p className="tutor__loading">Tutor IA está digitando...</p>}
                    {erro && <p className="tutor__erro">{erro}</p>}
                </div>

                <form className="tutor__form" onSubmit={enviar}>
                    <input
                        className="tutor__input"
                        value={pergunta}
                        onChange={e => setPergunta(e.target.value)}
                        placeholder="Pergunte alguma coisa"
                    />
                    <button className="tutor__send" type="submit" disabled={loading}>↑</button>
                </form>
                <p className="tutor__footer">
                    O Tutor pode cometer erros. Considere verificar informações importantes.
                </p>
            </div>
        </PortalLayout>
    );
}
