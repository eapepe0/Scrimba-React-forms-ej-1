import React from "react";

export default function Form() {
  const [nombre, setNombre] = React.useState("");
  const [apellido, setApellido] = React.useState("");

  // creamos 2 constantes useState con 2 funciones hanlders
  // los inputs se manejan con las funcion onChange para cuando ingresan valores
  // se corre la funcion handleChange  que toma como parametro event (muestra donde del dom es llamado el evento)
  // el valor ingresado esta en event.target.value
  // usamos la funcion para actualizar el useState

  // es medio engorroso, crear por cada input su useState, su funcion que cambia el valor y su handler

  function handleChangeNombre(event) {
    setNombre(event.target.value);
    console.log(nombre);
  }

  function handleChangeApellido(event) {
    setApellido(event.target.value);
    console.log(apellido);
  }
  return (
    <form>
      <input type="text" placeholder="Nombre" onChange={handleChangeNombre} />
      <input
        type="text"
        placeholder="Apellido"
        onChange={handleChangeApellido}
      />
    </form>
  );
}
