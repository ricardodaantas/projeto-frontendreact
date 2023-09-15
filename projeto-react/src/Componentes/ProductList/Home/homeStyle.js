import styled from "styled-components";

export const HomeStyle = styled.div`
  .header-home {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 1vw;
    color: purple;
    height: 6vh;
    margin-top: 3vh;
  }
  .ordena-preco {
    border-radius: 15px;
    background-color: purple;
    border: 2px solid white;
  }
  main {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-wrap: 4;
    margin: 1vh 0;
  }
`;
export default HomeStyle;
