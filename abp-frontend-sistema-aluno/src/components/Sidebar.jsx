import { NavLink, useNavigate } from "react-router-dom";
import { useUsuario } from "../context/UsuarioContext";

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
    }
];

export default function Sidebar() {
    const navigate = useNavigate();
    const { logout } = useUsuario();

    // Limpa o Context e volta para a tela de login.
    function handleLogout() {
        logout();
        navigate('/');
    }

    return (
        <aside className="sidebar">
            <div className="sidebar__brand">
                Academia
                <span>Portal do Aluno</span>
            </div>

            <nav className="sidebar__nav">
                {ITENS.map(item => (
                    <NavLink key={item.to} to={item.to} className="sidebar__link">
                        {item.label}
                    </NavLink>
                ))}

                <button
                    type="button"
                    className="sidebar__link sidebar__logout"
                    onClick={handleLogout}
                >
                    Sair da conta
                </button>
            </nav>
        </aside>
    );
}
