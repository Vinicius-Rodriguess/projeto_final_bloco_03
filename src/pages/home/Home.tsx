function Home() {
  return (
    <>
      <div className="flex justify-center bg-slate-800">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col items-center justify-center gap-4 py-4">
            <h2 className="text-5xl font-bold">Seja bem vindo!</h2>
            <p className="text-xl">Aqui você encontra Medicamentos e Cosméticos!</p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://ik.imagekit.io/z8ilvvp84p/home3.png?updatedAt=1740484840293"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
