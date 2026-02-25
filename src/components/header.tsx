import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-white shadow-sm">
          <div className="max-w mx-2 px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 font-bold">🐾</span>
              </div>
              <span className="text-xl font-semibold text-emerald-600">
                PetHealth Lite
              </span>
            </div>
            {/* Menu */}
            <nav className="flex items-center gap-6">
              <NavLink className="hover:text-emerald-600 transition" to="/">Home</NavLink>
              <NavLink className="hover:text-emerald-600 transition" to="/pets">Pets</NavLink>
              <NavLink className="hover:text-emerald-600 transition" to="/consultas">Consultas</NavLink>
              <NavLink className="hover:text-emerald-600 transition" to="/listagem">Listagem</NavLink>
            </nav>
          </div>
        </header>
    )
}

export default Header;