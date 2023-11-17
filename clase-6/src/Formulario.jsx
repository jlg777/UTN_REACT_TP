import React from "react";

export const Formulario = () => {
  return (
    <div>
      <h1>Formulario de Registro</h1>
      <form>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" />
        </div>
        <br />
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input type="text" id="apellido" name="apellido" />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <br />
        <div>
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <br />
        <div>
          <label htmlFor="confirmarPassword">Confirmar Password:</label>
          <input
            type="password"
            id="confirmarPassword"
            name="confirmarPassword"
          />
        </div>
        <br />
        <button type="submit">Registrarse</button>
        <hr />
      </form>
      <footer>
        <p>
          <i>Derechos Reservados &#169; Grupo J </i>
        </p>
      </footer>
    </div>
  );
};
