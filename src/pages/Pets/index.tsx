import { NavLink } from "react-router-dom";
import Header from "../../components/header";

export function Pets() {

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-md border border-gray-200 p-8">

          {/* Ícone */}
          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center">
              <span className="text-2xl text-emerald-600">🐾</span>
            </div>
          </div>

          {/* Título */}
          <h1 className="text-2xl font-semibold text-center text-gray-800">
            Cadastrar Pet
          </h1>
          <p className="text-sm text-gray-500 text-center mt-2 mb-8">
            Preencha os dados do pet e seu tutor.
          </p>

          {/* Formulário */}
          <form className="space-y-6">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome do Pet
              </label>
              <input
                type="text"
                placeholder="Ex: Rex"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Espécie
              </label>
              <select
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
              >
                <option>Selecione</option>
                <option>Cachorro</option>
                <option>Gato</option>
                <option>Ave</option>
                <option>Outro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Raça
              </label>
              <input
                type="text"
                placeholder="Ex: Labrador"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome do Tutor
              </label>
              <input
                type="text"
                placeholder="Ex: João Silva"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-lg transition duration-200 shadow-sm"
            >
              Cadastrar
            </button>

          </form>
        </div>
      </main>
    </div>
  );
};
