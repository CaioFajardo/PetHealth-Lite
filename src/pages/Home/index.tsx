import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw, faCalendar, faClipboard } from '@fortawesome/free-solid-svg-icons'
import Header from "../../components/header";

export function Home() {
    
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Hero */}
      <section className="text-center mt-20 px-6">
        <h1 className="text-5xl font-bold text-gray-800">
          Bem-vindo ao{" "}
          <span className="text-emerald-600">PetHealth Lite</span>
        </h1>
        <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
          Gerencie seus pacientes e consultas veterinárias de forma simples,
          rápida e organizada.
        </p>
      </section>

      {/* Cards */}
      <section className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
          <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-emerald-100 flex items-center justify-center text-2xl">
            <FontAwesomeIcon icon={faPaw} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            Cadastrar Pet
          </h3>
          <p className="mt-3 text-gray-500">
            Registre novos pets e seus tutores no sistema.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
          <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-emerald-100 flex items-center justify-center text-2xl">
            <FontAwesomeIcon icon={faCalendar} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            Agendar Consulta
          </h3>
          <p className="mt-3 text-gray-500">
            Marque consultas veterinárias para seus pacientes.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
          <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-emerald-100 flex items-center justify-center text-2xl">
            <FontAwesomeIcon icon={faClipboard} />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">
            Ver Pacientes
          </h3>
          <p className="mt-3 text-gray-500">
            Visualize todos os pacientes cadastrados.
          </p>
        </div>
      </section>
    </div>
  );
}