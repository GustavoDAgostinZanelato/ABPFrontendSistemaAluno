import {createContext, useContext, useState} from "react";

const UsuarioContext = createContext(null);

export function UsuarioProvider({ children }) {
    const [username, setUsername] = useState('');

    return (
        <UsuarioContext.Provider value={{ username, setUsername }}>
            {children}
        </UsuarioContext.Provider>
    );
}

export const useUsuario = () => useContext(UsuarioContext); 