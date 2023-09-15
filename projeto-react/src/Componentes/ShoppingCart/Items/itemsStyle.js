import styled from "styled-components";

export const ItemsStyle = styled.div`
  margin-left: 1vw;

  button {
    border-radius: 15px;
    background-color: purple;
    border: 2px solid white;
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

export default ItemsStyle;
