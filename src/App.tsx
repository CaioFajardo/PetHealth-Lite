import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Home } from './pages/Home'
import { Listagem } from './pages/Listagem'
import { Cadastrar } from './pages/Cadastrar'
import Agendar from './pages/Agendar'
export function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/listagem' element={<Listagem />} />
                <Route path='/cadastrar' element={<Cadastrar />} />
                <Route path='/agendar' element={<Agendar />} />
            </Routes>
        </BrowserRouter>
    )
}