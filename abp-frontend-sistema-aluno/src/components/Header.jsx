import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="dashboard__header">
                <h1 className="dashboard__title">Academia <span>Portal do aluno</span></h1>
                <nav className="dashboard__menu">
                    <NavLink to="/dashboard">Painel</NavLink>
                    <NavLink to="/disciplinas">Disciplinas</NavLink>
                    <NavLink to="/tutoria">Tutor IA</NavLink>
                    <NavLink to="/perfil">Perfil</NavLink>
                </nav>
            </div>
        </header>
    )
}
