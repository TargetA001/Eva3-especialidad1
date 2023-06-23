import React, { useState } from "react";

export function BarraBusqueda({ buscarProductos }) {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  const handleChange = (e) => {
    const valorBusqueda = e.target.value;
    setTerminoBusqueda(valorBusqueda);
    buscarProductos(valorBusqueda);
  };

  return (
    <div className="mt-4">
      <h2>Barra de Búsqueda</h2>
      <input type="text" className="form-control" value={terminoBusqueda} onChange={handleChange} placeholder="Buscar productos..." />
    </div>
  );
}

