import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Home } from './pages/Home'
import { Listagem } from './pages/Listagem'
<<<<<<< HEAD
import { Cadastrar } from './pages/Cadastrar'
import Agendar from './pages/Agendar'
=======
import { Consultas } from './pages/Consultas'
import { Pets } from './pages/Pets'
>>>>>>> 09f4e8c31bb82e5b5ba99231bd74dcf9fdf9015a
export function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/listagem' element={<Listagem />} />
                <Route path='/consultas' element={<Consultas />} />
                <Route path='/pets' element={<Pets />} />
            </Routes>
        </BrowserRouter>
    )
}