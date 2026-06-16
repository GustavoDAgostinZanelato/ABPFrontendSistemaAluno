// Endpoint publico de texto (sem autenticacao e com CORS liberado) usado para
// simular a resposta do "Tutor IA", como sugerido no enunciado do trabalho.
const API_URL = 'https://dummyjson.com/quotes/random';

export async function perguntarTutor() {
    const res = await fetch(API_URL);

    if (!res.ok) {
        throw new Error('Não foi possível obter a resposta do Tutor IA. Tente novamente.');
    }

    const data = await res.json();
    return `${data.quote} — ${data.author}`;
}
