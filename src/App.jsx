import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NaoEncontrado from "./pages/NaoEncontrado";
import Sobre from "./pages/Sobre";
import Historico from "./pages/Histórico";
import Usuario from "./pages/Usuario";

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}/> 
      <Route path='cadastro' element={<Cadastro />}/>
      <Route path='login' element={<Login />}/>
      <Route path='dashboard' element={<Dashboard />}/>
      <Route path="usuario" element={<Usuario/>}/>
      <Route path="sobre" element={<Sobre/>}/>
      <Route path="historico" element={<Historico/>}/>
      <Route path='*' element={<NaoEncontrado />}/>
    </Routes>

  )
}