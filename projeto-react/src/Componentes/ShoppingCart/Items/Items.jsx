import React from "react";
import ItemsStyle from "./itemsStyle";

function Items({ nome, valor, quantity, id, removeItem }) {
  return (
    <>
      <ItemsStyle>
        <p>
          <span>{nome} </span>
          <br />
          <span>Quantidade: {quantity}</span> <br />
          <span>Valor: {valor.toFixed(2)} </span>
          <br />
          <button onClick={() => removeItem(id)}> Remover produto </button>
        </p>
      </ItemsStyle>
    </>
  );
}

export default Items;
