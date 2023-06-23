import React, { useState, useEffect } from "react";
import { Catalogo } from "./Components/Catalogo";
import { FormularioProductos } from "./Components/FormularioProductos";
import { BarraBusqueda } from "./Components/BarraBusqueda";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export function App() {
  const [productos, setProductos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

  useEffect(() => {
    const storedProductos = localStorage.getItem("productos");
    if (storedProductos) {
      setProductos(JSON.parse(storedProductos));
    }
  }, []);

  const guardarProducto = (producto) => {
    const nuevosProductos = [...productos, { ...producto, id: Date.now() }];
    setProductos(nuevosProductos);
    localStorage.setItem("productos", JSON.stringify(nuevosProductos));
  };

  const eliminarProducto = (id) => {
    const nuevosProductos = productos.filter((producto) => producto.id !== id);
    setProductos(nuevosProductos);
    localStorage.setItem("productos", JSON.stringify(nuevosProductos));
  };

  const buscarProductos = (terminoBusqueda) => {
    setBusqueda(terminoBusqueda);

    const resultados = productos.filter(
      (producto) =>
        producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        producto.conectividad.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );

    setResultadosBusqueda(resultados);
  };

  return (
    <div className="app-container">
      <Header />
      <div className="container">
        <h1 className="text-center">Bienvenido</h1>
        <div className="row">
          <div className="col">
            <BarraBusqueda buscarProductos={buscarProductos} />
            <FormularioProductos guardarProducto={guardarProducto} />
          </div>
        </div>
        <div className="row">
          {busqueda ? (
            resultadosBusqueda.map((producto, index) => (
              <div className="col-md-6" key={index}>
                <Catalogo productos={[producto]} eliminarProducto={eliminarProducto} className="custom-card" />
              </div>
            ))
          ) : (
            productos.map((producto, index) => (
              <div className="col-md-6" key={index}>
                <Catalogo productos={[producto]} eliminarProducto={eliminarProducto} className="custom-card" />
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

























