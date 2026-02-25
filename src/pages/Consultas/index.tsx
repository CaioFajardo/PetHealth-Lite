import { NavLink } from "react-router-dom";
import Header from "../../components/header";

export function Agendar() {
    
  return (
  <div className="min-h-screen bg-gray-100">
    
    {/* NAVBAR */}
    <header className="w-full bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-emerald-600 rounded-full"></div>
        <h1 className="text-xl font-semibold text-emerald-600">
          PetHealth Lite
        </h1>
      </div>

      <nav className="flex gap-6 text-gray-600 font-medium">
        <span className="hover:text-emerald-600 cursor-pointer">Home</span>
        <span className="hover:text-emerald-600 cursor-pointer">Pacientes</span>
        <span className="bg-emerald-100 text-emerald-600 px-4 py-1 rounded-full">
          Consultas
        </span>
        <span className="hover:text-emerald-600 cursor-pointer">Listagem</span>
      </nav>
    </header>

    {/* CONTEÚDO CENTRAL */}
    <div className="flex flex-col items-center mt-16 px-4">

      {/* CARD MÉDICO */}
      <div className="w-full max-w-2xl bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-8 shadow-sm flex items-center gap-4">
        <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center text-white text-2xl">
          🩺
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {medico.nome}
          </h3>
          <p className="text-sm text-gray-600">
            CRMV {medico.crmv} - {medico.especialidade}
          </p>
        </div>
      </div>

      {/* CARD FORMULÁRIO */}
      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-md p-10">
        
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-3">
            📅
          </div>

          <h2 className="text-2xl font-semibold text-gray-800">
            Agendar Consulta
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Selecione o pet e preencha os detalhes da consulta.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* PET */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pet
            </label>
            <select
              {...register("petId")}
              className="w-full rounded-xl border border-gray-300 px-4 py-3
                         focus:outline-none focus:ring-2 focus:ring-emerald-500
                         focus:border-emerald-500 transition"
            >
              <option value="">Selecione o pet</option>
              {pets.map((pet) => (
                <option key={pet.id} value={pet.id}>
                  {pet.nome}
                </option>
              ))}
            </select>
            {errors.petId && (
              <p className="text-red-500 text-xs mt-1">
                {errors.petId.message}
              </p>
            )}
          </div>

          {/* DATA E HORÁRIO */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data
              </label>
              <input
                type="date"
                {...register("data")}
                className="w-full rounded-xl border border-gray-300 px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-emerald-500
                           focus:border-emerald-500 transition"
              />
              {errors.data && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.data.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Horário
              </label>
              <input
                type="time"
                {...register("horario")}
                className="w-full rounded-xl border border-gray-300 px-4 py-3
                           focus:outline-none focus:ring-2 focus:ring-emerald-500
                           focus:border-emerald-500 transition"
              />
              {errors.horario && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.horario.message}
                </p>
              )}
            </div>
          </div>

          {/* MOTIVO */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Motivo
            </label>
            <textarea
              rows={4}
              placeholder="Descreva o motivo da consulta..."
              {...register("motivo")}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 resize-none
                         focus:outline-none focus:ring-2 focus:ring-emerald-500
                         focus:border-emerald-500 transition"
            />
            {errors.motivo && (
              <p className="text-red-500 text-xs mt-1">
                {errors.motivo.message}
              </p>
            )}
          </div>

          {/* BOTÃO */}
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white font-medium py-3 rounded-xl
                       hover:bg-emerald-700 active:scale-[0.98]
                       transition-all duration-200 shadow-md"
          >
            Agendar
          </button>

        </form>
      </div>
    </div>
  </div>
  );
}