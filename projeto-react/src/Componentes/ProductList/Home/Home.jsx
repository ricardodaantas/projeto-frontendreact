import React from "react";
import HomeStyle from "./homeStyle.js";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { useEffect } from "react";

function Home({
  cart,
  setcart,
  amount,
  setAmount,
  ordinationFilter,
  setOrdinationFilter,
  filtredList,
  setFiltredList,
  last,
  setLast,
}) {
  const renderProducts = filtredList.map((item) => {
    return (
      <ProductCard
        product={addToCart}
        key={item.id}
        nomeProduto={item.name}
        valorProduto={item.value}
        imgProduto={item.imageUrl}
        id={item}
      />
    );
  });

  function addToCart(id) {
    const newProduct = cart.find((productCB) => id.id === productCB.id);
    const valorTotal = amount + id.value;
    if (newProduct === undefined) {
      id = { ...id, quantity: 1 };
      setAmount(valorTotal);
      setcart([...cart, id]);
    } else {
      setAmount(valorTotal);
      const novoCarrinho = cart.map((product) => {
        if (product.id === newProduct.id) {
          return { ...newProduct, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });
      setcart(novoCarrinho);
    }
  }
  function saveStorage() {
    const cartStorage = JSON.stringify(cart);
    localStorage.setItem("cartLS", cartStorage);
    const amountStorage = JSON.stringify(amount);
    localStorage.setItem("amountLS", amountStorage);
  }
  function getStorage() {
    const cartOutStorage = localStorage.getItem("cartLS");
    const recoveredCart = JSON.parse(cartOutStorage);
    const amountOutStorage = localStorage.getItem("amountLS");
    const recoveredAmount = JSON.parse(amountOutStorage);
    if (recoveredCart) {
      setcart(recoveredCart);
      setAmount(recoveredAmount);
    }
  }

  useEffect(() => {
    getStorage();
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      saveStorage();
    }
  }, [cart]);

  useEffect(() => {
    filtredList.sort((a, b) => {
      if (ordinationFilter === "A - Z") {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      } else if (ordinationFilter === "Z - A") {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
      }
    });
    last.sort((a, b) => {
      if (ordinationFilter === "A - Z") {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
      } else if (ordinationFilter === "Z - A") {
        if (a.name > b.name) {
          return -1;
        }
        if (a.name < b.name) {
          return 1;
        }
      }
    });

    setLast([...last]);
    setFiltredList([...filtredList]);
  }, [ordinationFilter]);

  return (
    <HomeStyle>
      <div className="header-home">
        <b>Quantidade de produtos: {filtredList.length}</b>
        <form>
          <b>
            Ordenar por:{" "}
            <select
              className="ordena-preco"
              name="select"
              value={ordinationFilter}
              onChange={(e) => setOrdinationFilter(e.target.value)}
            >
              <option>Selecione</option>
              <option>A - Z</option>
              <option>Z - A</option>
            </select>
          </b>
        </form>
      </div>
      <main className="mainzera">{renderProducts}</main>
    </HomeStyle>
  );
}
export default Home;
