import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categorias/deletarcategorias/DeletarCategoria";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className="flex flex-col min-h-screen bg-gray-200 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route
              path="/deletarcategoria/:id"
              element={<DeletarCategoria />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
