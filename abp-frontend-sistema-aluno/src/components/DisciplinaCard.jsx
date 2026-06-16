export default function DisciplinaCard({ nome, professor, status, statusTipo, label, percentual }) {
    return (
        <div className="disciplina-card">
            <div className="disciplina-card__top">
                <div>
                    <h3 className="disciplina-card__nome">{nome}</h3>
                    <p className="disciplina-card__prof">{professor}</p>
                </div>
                <span className={`disciplina-card__status disciplina-card__status--${statusTipo}`}>
                    {status}
                </span>
            </div>

            <div className="disciplina-card__label">
                <span>{label}</span>
                <span>{percentual}%</span>
            </div>
            <div className="disciplina-card__bar">
                <div style={{ width: `${percentual}%` }}></div>
            </div>

            <button className="disciplina-card__btn">Acessar Disciplina</button>
        </div>
    );
}
