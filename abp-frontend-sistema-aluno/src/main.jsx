import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './pages/LoginPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import DisciplinasPage from './pages/DisciplinasPage.jsx'
import PerfilPage from './pages/PerfilPage.jsx'
import TutorIAPage from './pages/TutorIAPage.jsx'
import CadastroUsuario1 from './pages/CadastroUsuario1.jsx'
import CadastroUsuario2 from './pages/CadastroUsuario2.jsx'
import RecuperarSenha from './pages/RecuperarSenha.jsx'
import NovaSenha from './pages/NovaSenha.jsx'
import { UsuarioProvider } from './context/UsuarioContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuarioProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/disciplinas" element={<DisciplinasPage />} />
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="/tutoria" element={<TutorIAPage />} />
          <Route path="/cadastroUsuario1" element={<CadastroUsuario1 />} />
          <Route path="/cadastroUsuario2" element={<CadastroUsuario2 />} />
          <Route path="/recuperarSenha" element={<RecuperarSenha />} />
          <Route path="/novaSenha" element={<NovaSenha />} />
        </Routes>
      </BrowserRouter>
    </UsuarioProvider>
  </StrictMode>
)
