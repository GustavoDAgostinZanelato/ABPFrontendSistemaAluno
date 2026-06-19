import {createContext, useContext, useState} from "react";

const UsuarioContext = createContext(null);

export function UsuarioProvider({ children }) {
    const [username, setUsername] = useState('');
    const [usuario, setUsuario] = useState(null);

    // Limpa os dados do usuario ao sair da conta (logout).
    function logout() {
        setUsername('');
        setUsuario(null);
    }

    return (
        <UsuarioContext.Provider value={{ username, setUsername, usuario, setUsuario, logout }}>
            {children}
        </UsuarioContext.Provider>
    );
}

export const useUsuario = () => useContext(UsuarioContext); 