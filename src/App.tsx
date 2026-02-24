import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Home } from './pages/Home'
import { Listagem } from './pages/Listagem'
import { Consultas } from './pages/Consultas'
import { Pets } from './pages/Pets'
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