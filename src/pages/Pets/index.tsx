import { NavLink } from "react-router-dom";
import Header from "../../components/header";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// 🔹 Schema de validação com Zod
const petCadastro = z.object({
  nomePet: z
    .string()
    .min(2, "O nome do pet deve ter no mínimo 2 caracteres"),
  especie: z
    .string()
    .min(1, "Selecione uma espécie"),
  raca: z
    .string()
    .min(2, "A raça deve ter no mínimo 2 caracteres"),
  nomeTutor: z
    .string()
    .min(3, "O nome do tutor deve ter no mínimo 3 caracteres"),
});

type TypeForm = z.infer<typeof petCadastro>;

export function Pets() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeForm>({
    resolver: zodResolver(petCadastro),
  });

  function onSubmit(data: TypeForm) {
    console.log("Dados enviados:", data);
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-md border border-gray-200 p-8">

          <div className="flex justify-center mb-6">
            <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center">
              <span className="text-2xl text-emerald-600">🐾</span>
            </div>
          </div>

          <h1 className="text-2xl font-semibold text-center text-gray-800">
            Cadastrar Pet
          </h1>
          <p className="text-sm text-gray-500 text-center mt-2 mb-8">
            Preencha os dados do pet e seu tutor.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

            {/* Nome do Pet */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome do Pet
              </label>
              <input
                type="text"
                {...register("nomePet")}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
              />
              {errors.nomePet && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nomePet.message}
                </p>
              )}
            </div>

            {/* Espécie */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Espécie
              </label>
              <select
                {...register("especie")}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
              >
                <option value="">Selecione</option>
                <option value="Cachorro">Cachorro</option>
                <option value="Gato">Gato</option>
                <option value="Ave">Ave</option>
                <option value="Outro">Outro</option>
              </select>
              {errors.especie && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.especie.message}
                </p>
              )}
            </div>

            {/* Raça */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Raça
              </label>
              <input
                type="text"
                {...register("raca")}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
              />
              {errors.raca && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.raca.message}
                </p>
              )}
            </div>

            {/* Nome do Tutor */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome do Tutor
              </label>
              <input
                type="text"
                {...register("nomeTutor")}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
              />
              {errors.nomeTutor && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nomeTutor.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 rounded-lg transition duration-200 shadow-sm cursor-pointer"
            >
              Cadastrar
            </button>

          </form>
        </div>
      </main>
    </div>
  );
}