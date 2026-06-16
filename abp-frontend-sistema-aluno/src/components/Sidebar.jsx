import { NavLink } from "react-router-dom";

const ITENS = [
    {
        to: '/dashboard',
        label: 'Painel'
    },
    {
        to: '/disciplinas',
        label: 'Disciplinas'
    },
    {
        to: '/tutoria',
        label: 'Tutor IA'
    },
    {
        to: '/perfil',
        label: 'Perfil'
    },
    {
        to: '/',
        label: 'Sair da conta'
    }
];

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar__brand">
                Academia
                <span>Portal do Aluno</span>
            </div>

            <nav className="sidebar__nav">
                {ITENS.map(item => (
                    <NavLink key={item.to} to={item.to} className="sidebar__link">
                        <span className="sidebar__icon">{item.icon}</span>
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}
