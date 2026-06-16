const BASE_URL = 'https://api.github.com';

// Token opcional do GitHub (Personal Access Token) para aumentar o limite
// de requisições de 60/hora para 5000/hora. Defina VITE_GITHUB_TOKEN no .env.
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export async function buscarUsuario(username) {
    const headers = TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {};

    const res = await fetch(`${BASE_URL}/users/${username}`, { headers });

    if (res.status === 404) {
        throw new Error(
            `Usuário ${username} não encontrado ou não existe no github`
        );
    }

    if (res.status === 403 || res.status === 429) {
        const limiteZerado = res.headers.get('x-ratelimit-remaining') === '0';
        if (limiteZerado) {
            throw new Error(
                'Limite de requisições da API do GitHub excedido. ' +
                'Aguarde alguns minutos ou configure um token (VITE_GITHUB_TOKEN).'
            );
        }
        throw new Error('Acesso à API do GitHub negado (403).');
    }

    if (!res.ok) {
        throw new Error(
            `Erro ao buscar usuário ${username} no github (HTTP ${res.status}).`
        );
    }

    return res.json();
}
