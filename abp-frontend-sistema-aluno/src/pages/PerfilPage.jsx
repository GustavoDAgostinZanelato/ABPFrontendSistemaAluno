import { useState } from "react";
import PortalLayout from "../components/PortalLayout";
import { useUsuario } from "../context/UsuarioContext";

const ABAS = ['Dados Pessoais', 'Configurações', 'Segurança'];

export default function PerfilPage() {
    const { username } = useUsuario();
    const [abaAtiva, setAbaAtiva] = useState('Dados Pessoais');

    const nome = username || 'João Silva';
    const iniciais = nome
        .split(' ')
        .map(parte => parte[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();

    const dados = [
        { label: 'Nome Completo', valor: nome },
        { label: 'Nome de Preferência', valor: 'Jonh' },
        { label: 'Endereço de E-mail', valor: 'joao.silva@satc.edu.br' },
        { label: 'Matrícula / CPF', valor: '***.***.***-89' },
        { label: 'Número de Telefone', valor: '' },
    ];

    return (
        <PortalLayout>
            <div className="perfil__head">
                <div className="perfil__avatar">{iniciais}</div>
                <div>
                    <h2 className="perfil__nome">{nome}</h2>
                    <p className="perfil__sub">Engenharia de Software • 3º Ano</p>
                </div>
            </div>

            <div className="perfil__tabs">
                {ABAS.map(aba => (
                    <button
                        key={aba}
                        className={`perfil__tab ${abaAtiva === aba ? 'perfil__tab--active' : ''}`}
                        onClick={() => setAbaAtiva(aba)}
                    >
                        {aba}
                    </button>
                ))}
            </div>

            {abaAtiva === 'Dados Pessoais' && (
                <div className="perfil__table">
                    {dados.map(item => (
                        <div className="perfil__row" key={item.label}>
                            <span className="perfil__row-label">{item.label}</span>
                            <span className={`perfil__row-value ${item.valor ? '' : 'perfil__row-value--empty'}`}>
                                {item.valor || 'Não fornecido'}
                            </span>
                        </div>
                    ))}
                </div>
            )}

            {abaAtiva !== 'Dados Pessoais' && (
                <div className="perfil__table">
                    <div className="perfil__row">
                        <span className="perfil__row-value perfil__row-value--empty">
                            Seção "{abaAtiva}" em construção.
                        </span>
                    </div>
                </div>
            )}
        </PortalLayout>
    );
}
