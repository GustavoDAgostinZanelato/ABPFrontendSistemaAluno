import Sidebar from "./Sidebar";

// Componente "container": recebe o conteudo da tela via prop children
// e aplica a estrutura comum (sidebar + conteudo) das telas internas.
export default function PortalLayout({ children }) {
    return (
        <div className="app-layout">
            <Sidebar />
            <div className="app-content">
                <div className="dashboard__body">
                    {children}
                </div>
            </div>
        </div>
    );
}
