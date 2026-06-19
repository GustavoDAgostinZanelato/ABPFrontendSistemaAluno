# Portal do Aluno — App Aluno em React

Projeto final (N3) da disciplina de **Front-end** — Centro Universitário SATC, Engenharia de Software.

Consiste na **portabilidade do App Aluno** (originalmente em HTML, CSS e JavaScript puro) para uma **SPA em React**, utilizando o framework **Vite**. A aplicação reproduz o fluxo de autenticação e as telas internas do portal acadêmico, aplicando os conceitos de componentes, props, hooks, formulários controlados, roteamento, Context API e consumo de API.

## Tecnologias

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) (bundler e servidor de desenvolvimento)
- [React Router](https://reactrouter.com/) (`react-router-dom`) para roteamento SPA
- **Context API** para estado global do usuário
- **Fetch API** para consumo de dados externos

## Funcionalidades

- **Fluxo de autenticação completo:** Login, Cadastro (passos 1 e 2), Recuperar senha e Nova senha, com formulários controlados e validação (mensagens de erro na tela).
- **Navegação SPA:** após o login, as telas internas (Dashboard, Disciplinas, Perfil, Tutor IA) são acessadas sem recarregar a página, com menu lateral indicando a rota ativa.
- **Login via API do GitHub:** a API do GitHub funciona como um "banco de alunos cadastrados" — o usuário digitado é buscado em `https://api.github.com/users/{usuario}`; se encontrado, o acesso é liberado e os dados (nome, login, e-mail, foto) são compartilhados via Context.
- **Dashboard:** saudação personalizada e resumo do usuário logado.
- **Disciplinas:** lista renderizada a partir de uma coleção de dados (`.map()`).
- **Perfil:** exibe os dados do usuário, incluindo a foto e o login vindos do GitHub.
- **Tutor IA:** chat que consome uma API externa e trata os três estados de carregamento (carregando / erro / dados).

## Pré-requisitos

- [Node.js](https://nodejs.org/) **20.19+** ou **22.12+** (exigência do Vite 8)
- npm (instalado junto com o Node.js)

## Como instalar e executar

```bash
# 1. Acessar a pasta do projeto
cd abp-frontend-sistema-aluno

# 2. Instalar as dependências
npm install

# 3. Executar em modo de desenvolvimento
npm run dev
```

A aplicação ficará disponível em **http://localhost:5173**.

Outros comandos:

```bash
npm run build     # gera a versão de produção na pasta dist/
npm run preview   # serve localmente a versão de produção
npm run lint      # executa o ESLint
```

## Variáveis de ambiente (opcional)

A API pública do GitHub permite **60 requisições por hora** sem autenticação. Para aumentar esse limite (5000/hora), crie um arquivo `.env` na raiz do projeto a partir do modelo `.env.example`:

```bash
# .env
VITE_GITHUB_TOKEN=seu_personal_access_token_aqui
```

O token é **opcional** — sem ele a aplicação funciona normalmente, apenas com o limite menor de requisições. O arquivo `.env` é ignorado pelo Git e não deve ser commitado.

## Como usar o login

Como a API do GitHub é usada como base de "alunos cadastrados", informe um **nome de usuário real do GitHub** (ex.: `torvalds`, `gaearon`) no campo de usuário e qualquer senha. Usuários inexistentes retornam mensagem de erro. Também é possível entrar criando uma conta pelo fluxo de **Cadastro**, que salva o nome informado.

## Estrutura de pastas

```
abp-frontend-sistema-aluno/
├── public/
├── src/
│   ├── components/   # Componentes reutilizáveis (InputField, Sidebar, Card, ...)
│   ├── pages/        # Telas/rotas (LoginPage, DashboardPage, PerfilPage, ...)
│   ├── context/      # UsuarioContext.jsx (estado global do usuário)
│   ├── services/     # Chamadas de API (githubServices.js, tutorService.js)
│   ├── utils/        # Funções auxiliares (máscaras de CPF/telefone)
│   ├── assets/       # Imagens e ícones
│   ├── main.jsx      # Ponto de entrada + configuração das rotas
│   └── styles.css    # Estilos da aplicação
├── index.html
├── package.json
└── README.md
```

## APIs utilizadas

- **GitHub API** — `GET https://api.github.com/users/{usuario}` (autenticação/dados do usuário).
- **DummyJSON Quotes** — `GET https://dummyjson.com/quotes/random` (respostas do Tutor IA).
