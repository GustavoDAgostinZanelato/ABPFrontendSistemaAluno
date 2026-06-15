import { useEffect, useState } from "react";
import { buscarUsuario } from "../services/githubServices";
import CardInfo from "../components/CardInfo";
import { useUsuario } from "../context/UsuarioContext";


const USERNAME = 'GustavoDAgostinZanelato'

export default function DashboardPage() {
    const {username} = useUsuario   

    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState('');
    const [busca, setBusca] = useState(username); 
    const [usernameBusca, setUsernameBusca] = useState(''); 

    useEffect(() => {
        async function carregar() {
            try{
                const dados = await buscarUsuario(busca);
                setUsuario(dados);
            } catch (err) {
                setErro(err.message);
            } finally {
                setLoading(false);
            }
        }
        carregar();
    }, [busca]); 

    if (loading) return <p>Carregando perfil...</p>
    if (erro) return <p>{erro}</p>

    return (
        <>
            <div className="dashboard__hero">
                <img src={usuario.avatar_url} />
                <h2>Olá, {usuario.name || usuario.login}!</h2>
                {usuario.bio && <p>{usuario.bio}</p>}
            </div>  

            <form onSubmit={e => {e.preventDefault(); setBusca(usernameBusca)}}>
                <input 
                    value={usernameBusca}
                    onChange={e => setUsernameBusca(e.target.value)}
                    
                    placeholder="Insira o nome do user"
                />
                <button type="submit">Pesquisar</button>
            </form>

            <div className="card__group">
                <CardInfo titulo="Repositório" valor={usuario.public_repos} />
                <CardInfo titulo="Seguidores" valor={usuario.followers} />
                <CardInfo titulo="Seguindo" valor={usuario.following} />
            </div>

            <a href={usuario.html_url} target="_blank" rel="noreferrer">
                Ver perfil
            </a>
        </> 

    )
}