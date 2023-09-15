import React, { useEffect, useState } from "react";
import Cart from "./Componentes/ShoppingCart/Cart/Cart";
import Home from "./Componentes/ProductList/Home/Home";
import Filters from "./Componentes/Filters/Filters";
import AppStyle from "./appStyle";
import ProductList from "./Assets/ProductList";
import Global from "./globalStyled";

function App() {
  const [minFilter, setMinFilter] = useState(0);
  const [maxFilter, setMaxFilter] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setcart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [ordinationFilter, setOrdinationFilter] = useState("Selecione");
  const [filtredList, setFiltredList] = useState([...ProductList]);
  const [last, setLast] = useState([...ProductList]);
  const [item, setitem] = useState([...ProductList]);

  useEffect(() => {
    setFiltredList(
      last
        .filter((product) => {
          return minFilter ? product.value >= minFilter : product;
        })
        .filter((product) => {
          return maxFilter ? product.value <= maxFilter : product;
        })
        .filter((product) => {
          return searchFilter
            ? product.name
                .toLocaleLowerCase()
                .includes(searchFilter.toLowerCase())
            : product;
        })
    );
  }, [minFilter, maxFilter, searchFilter]);

  const handleMin = (e) => {
    if (e.target.value < 0) {
      setMinFilter(0);
      alert("Menor valor possivel é 0");
    } else {
      setMinFilter(e.target.value);
    }
  };
  const handleMax = (e) => {
    if (e.target.value < 0) {
      setMaxFilter(100);
      alert("Menor valor possivel é 0");
    } else {
      setMaxFilter(e.target.value);
    }
  };
  const handleSearch = (e) => {
    setSearchFilter(e.target.value);
  };

  return (
    <Global>
      <AppStyle>
        <Filters
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          handleMax={handleMax}
          handleMin={handleMin}
          handleSearch={handleSearch}
        />
        <Home
          cart={cart}
          setcart={setcart}
          amount={amount}
          setAmount={setAmount}
          ordinationFilter={ordinationFilter}
          setOrdinationFilter={setOrdinationFilter}
          filtredList={filtredList}
          setFiltredList={setFiltredList}
          last={last}
          setLast={setLast}
          item={item}
          setitem={setitem}
        />
        <Cart
          cart={cart}
          setcart={setcart}
          amount={amount}
          setAmount={setAmount}
        />
      </AppStyle>
    </Global>
  );
}
export default App;
