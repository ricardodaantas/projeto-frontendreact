import React from "react";
import Items from "../Items/Items.jsx";
import CartStyle from "./cartSyle.js";

function Cart(props) {
  function removeItem(id) {
    props.cart.map((produto) => {
      if (produto.id === id && produto.quantity >= 1) {
        produto.quantity = produto.quantity - 1;
        props.setcart([...props.cart]);
        props.setAmount(props.amount - produto.value);
      }

      if (produto.quantity === 0) {
        const novoCarrinho2 = props.cart.filter(
          (produtos) => produtos.quantity !== 0
        );
        props.setcart(novoCarrinho2);
      }
    });
  }

  return (
    <div>
      <CartStyle>
        <h2>Carrinho</h2>
        {props.cart.map((product) => {
          return (
            <Items
              key={product.id}
              nome={product.name}
              valor={product.value * product.quantity.toFixed(2)}
              quantity={product.quantity}
              imagem={product.imageUrl}
              id={product.id}
              removeItem={removeItem}
            />
          );
        })}

        <h3>Valor total R$:{props.amount.toFixed(2)}</h3>
      </CartStyle>
    </div>
  );
}
export default Cart;
