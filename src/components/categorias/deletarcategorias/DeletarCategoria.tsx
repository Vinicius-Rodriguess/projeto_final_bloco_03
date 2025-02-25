/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { deletar, listar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarCategoria() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await listar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      console.log(error);
      ToastAlerta("Tema não encontrado!", "erro");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`);

      ToastAlerta("Categoria apagada com sucesso", "sucesso");
    } catch (error: any) {
      console.log(error);
      ToastAlerta("Erro ao apagar a categoria", "erro");
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="py-4 text-4xl text-center">Deletar Categoria</h1>
      <p className="mb-4 font-semibold text-center">
        Você tem certeza de que deseja apagar a categoria a seguir?
      </p>
      <div className="flex flex-col justify-between overflow-hidden border rounded-2xl shadow-md">
        <header className="px-6 py-2 text-2xl font-bold text-white bg-slate-600">
          Categoria
        </header>
        <p className="h-full p-8 text-3xl bg-white">{categoria.nome}</p>
        <div className="flex">
          <button
            className="w-full py-2 bg-red-500 text-slate-50 hover:bg-red-600 transition-all cursor-pointer"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="flex items-center justify-center w-full bg-teal-600 text-slate-50 hover:bg-teal-800 transition-all cursor-pointer"
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="24"
                visible={true}
              />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeletarCategoria;
