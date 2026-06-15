const BASE_URL = 'https://api.github.com';

export async function buscarUsuario(username) {
    const res = await fetch(
        `${BASE_URL}/users/${username}`
    );

    if(!res.ok) {
        throw new Error(
            `Usuário ${username} não encontrado ou não existe no github`
        )
    };

    return res.json();  
}