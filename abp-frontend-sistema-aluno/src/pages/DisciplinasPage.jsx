import PortalLayout from "../components/PortalLayout";
import DisciplinaCard from "../components/DisciplinaCard";

const DISCIPLINAS = [
    {
        id: 1,
        nome: 'Front-end',
        professor: 'Prof. Marco Silva',
        status: 'Em curso',
        statusTipo: 'curso',
        label: 'Progresso',
        percentual: 75,
    },
    {
        id: 2,
        nome: 'UX Design',
        professor: 'Dra. Ana Lúcia',
        status: 'Próximo semestre',
        statusTipo: 'proximo',
        label: 'Disponibilidade',
        percentual: 0,
    },
];

export default function DisciplinasPage() {
    return (
        <PortalLayout>
            <h2 className="page-title">Minhas Disciplinas</h2>

            <div className="disciplinas__grid">
                {DISCIPLINAS.map(disciplina => (
                    <DisciplinaCard key={disciplina.id} {...disciplina} />
                ))}
            </div>
        </PortalLayout>
    );
}
