import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

export function Catalogo({ productos, eliminarProducto }) {
  const handleEliminar = (id) => {
    eliminarProducto(id);
  };

  return (
    <div className="catalogo"> {/* Agrega la clase catalogo al contenedor */}
      {productos.map((producto, index) => (
        <div className="card mt-4 card-custom" key={index}>
          <div className="card-body">
            <h3 className="card-title">{producto.nombre}</h3>
            <p className="card-text">Conectividad: {producto.conectividad}</p>
            <p className="card-text">Descripción: {producto.descripcion}</p>
            <p className="card-text">Precio: {producto.precio}</p>
            <p className="card-text">Layout size: {producto.layout}</p>
            <button
              className="card-footer btn btn-eliminar"
              onClick={() => handleEliminar(producto.id)}
            >
              <RiDeleteBinLine />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}



























































