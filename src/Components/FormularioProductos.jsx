import React, { useState } from "react";

export function FormularioProductos({ guardarProducto }) {
  const [nombre, setNombre] = useState("");
  const [conectividad, setConectividad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [layout, setLayout] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === "") {
      setError("El nombre del producto no puede estar en blanco.");
      return;
    }

    if (isNaN(parseFloat(precio))) {
      setError("El precio debe ser un número válido.");
      return;
    }
    if (descripcion.length > 80) {
      setError("La descripción no puede exceder los 80 caracteres.");
      return;
    }

    const producto = {
      nombre,
      conectividad,
      descripcion,
      precio,
      layout,
    };

    guardarProducto(producto);

    setNombre("");
    setConectividad("");
    setDescripcion("");
    setPrecio("");
    setLayout("");
    window.alert("¡Producto guardado exitosamente!");
    setError("");
  };

  return (
    <div>
      <h2 className="text-center mt-4">Formulario de Productos</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">
            <h2>Nombre del producto:</h2>
          </label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre del producto..."
          />
          {error && !nombre && <p className="text-danger">El nombre del producto es requerido.</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">
            <h2>Conectividad:</h2>
          </label>
          <select
            className="form-select"
            value={conectividad}
            onChange={(e) => setConectividad(e.target.value)}
            required
          >
            <option disabled value=''>Seleccionar Conectividad</option>
            <option value="Conectividad alámbrica"> alámbrica</option>
            <option value="Conectividad inalámbrica"> inalámbrica</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <h2>Descripción: </h2>
          </label>
          <input
            type="text"
            className="form-control"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Descripción del producto..."
          />
          {descripcion.length > 80 && <p className="text-danger">La descripción no puede exceder los 80 caracteres.</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">
            <h2>Precio:</h2>
          </label>
          <input
            type="text"
            className="form-control"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            placeholder="Precio del producto..."
          />
          {error && isNaN(parseFloat(precio)) && (
            <p className="text-danger">El precio debe ser un número válido.</p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">
            <h2>Layout size:</h2>
          </label>
          <select
            className="form-select"
            value={layout}
            onChange={(e) => setLayout(e.target.value)}
            required
          >
            <option disabled value=''>Seleccionar layout size</option>
            <option value="100% Full size">100% Full size</option>
            <option value="80% TKL">80% TKL</option>
            <option value="70%">70%</option>
            <option value="60%">60%</option>
          </select>
        </div>
        <button className="btn btn-enviar">
          <i className="bi bi-check-circle"></i> Enviar
        </button>
      </form>
      <h2 className="text-center mt-4">Catálogo de Productos</h2>
    </div>
  );
}
















































