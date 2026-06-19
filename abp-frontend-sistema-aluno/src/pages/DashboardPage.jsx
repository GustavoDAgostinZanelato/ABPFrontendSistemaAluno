import CardInfo from "../components/CardInfo";
import { useUsuario } from "../context/UsuarioContext";
import PortalLayout from "../components/PortalLayout";

function getSaudacao() {
    const hora = new Date().getHours();
    if (hora < 12) return 'Bom dia';
    if (hora < 18) return 'Boa tarde';
    return 'Boa noite';
}

function getDataAtual() {
    return new Intl.DateTimeFormat('pt-BR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }).format(new Date());
}

export default function DashboardPage() {
    // Os dados do usuario ja foram carregados no login (API do GitHub) e
    // compartilhados via Context, entao a Dashboard apenas os consome.
    const { username, usuario } = useUsuario();

    const nome = username || usuario?.name || usuario?.login || 'Aluno';

    return (
        <PortalLayout>
            <div className="dashboard__hero">
                <h2 id="greeting">{getSaudacao()}, {nome}</h2>
                <p id="data-atual">{getDataAtual()}</p>
                {/* <p>
                    Bem-vindo de volta a sua sessão de estudos focado. Você tem duas
                    tarefas para esta semana e está atualmente adiantado ao seu
                    cronograma de leitura.
                </p> */}
            </div>

            <div className="card__group">
                <CardInfo titulo="Tempo de estudo" valor="12h 45m" />
                <CardInfo titulo="Tarefas pendentes" valor="2" />
                <CardInfo titulo="Chat com a IA" valor="8" />
            </div>

            <div className="card">
                    <div className="card__body">
                        <span className="card__badge">Em progresso</span>
                        <h3 className="card__title">Front-end</h3>
                        <p>Aula 2: Conceitos de desenvolvimento front-end e Git + Github</p>
                        <div className="card__progress">
                            <div style={{ width: '65%' }}>65%</div>
                        </div>
                    </div>
                    <div className="card__footer">
                        <button id="Front" className="card__button">Retomar estudos</button>
                    </div>
                </div>

                <div className="card">
                    <div className="card__body">
                        <span className="card__badge">Em progresso</span>
                        <h3 className="card__title">UX Design</h3>
                        <p>Aula 3: Conceitos de UX Design e prototipagem</p>
                        <div className="card__progress">
                            <div style={{ width: '36%' }}>36%</div>
                        </div>
                    </div>
                    <div className="card__footer">
                        <button id="Ux" className="card__button">Retomar estudos</button>
                    </div>
                </div>
        </PortalLayout>
    )
}
