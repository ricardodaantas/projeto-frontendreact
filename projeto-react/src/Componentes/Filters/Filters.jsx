import React from "react";
import FiltersStyle from "./filtersStyle";

function Filters({
  handleMax,
  handleMin,
  handleSearch,
  minFilter,
  maxFilter,
  searchFilter,
}) {
  return (
    <FiltersStyle>
      <div>
        <img
          className="logo"
          id="lin1"
          src="https://www.pngall.com/wp-content/uploads/6/Nuclear-Sign-Radiation-PNG.png"
        />
        <h2 className="orb">
          <b>
            <i>Espaço Sideral</i>
          </b>
        </h2>
        <form>
          <label htmlFor="valor-min">Valor mínimo:</label>
          <br />
          <input
            className="valor-min"
            type="number"
            name="valor-min"
            id="valor-min"
            value={minFilter}
            onChange={(e) => handleMin(e)}
          />
          <label htmlFor="valor-max">Valor máximo:</label>
          <br />
          <input
            className="valor-max"
            type="number"
            name="valor-max"
            id="valor-max"
            value={maxFilter}
            onChange={(e) => handleMax(e)}
          />
          <label htmlFor="nome">Busca por nome:</label>
          <br />
          <input
            className="valor-max"
            type="text"
            name="nome"
            id="nome"
            value={searchFilter}
            onChange={(e) => handleSearch(e)}
          />
        </form>
      </div>
    </FiltersStyle>
  );
}
export default Filters;
