import styled from "styled-components";

export const ProductCardStyle = styled.div`
  display: grid;
  div img {
    height: 31vh;
    width: 93%;
    border-radius: 15px;
    border: solid 2px purple;
  }
  div button {
    margin-bottom: 2vh;
  }
  .box-pagina-principal {
    border: 1px solid purple;
    border-radius: 10px;
    width: 20vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 65vh;
    margin: 1vh;
    color: white;
    font-size: 25px;
  }
  .produto {
    color: purple;
    display: flex;
    justify-content: center;
  }
  .preco {
    color: orange;
    display: flex;
    justify-content: center;
    margin-bottom: 1vh;
  }
  .box-pagina-principal {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button {
    border-radius: 15px;
    background-color: purple;
    border: 2px solid white;
    margin-top: 7px;
  }
  button:hover {
    background-color: white;
    border: 2px solid white;
    border-radius: 10px;
  }
  button:active {
    background-color: lightblue;
    border: 2px solid orangered;
    border-radius: 10px;
  }
`;
export default ProductCardStyle;
