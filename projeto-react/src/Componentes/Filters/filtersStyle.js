import styled from "styled-components";

const FiltersStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1vw;
  color: purple;
  align-items: center;
  justify-content: flex-start;
  div {
    margin-left: 1vw;
  }
  .bot-fil {
    display: flex;
    justify-content: space-around;
    margin-top: 2vh;
  }

  .valor-max,
  .valor-min,
  .nome {
    border-radius: 15px;
    background-color: purple;
    border: 2px solid white;
  }
  .logo {
    width: 13vw;
    height: 25vh;
    margin-top: 4vh;
    margin-left: 3vw;
    border-radius: 50px;
  }
  .orb {
    color: purple;
    display: flex;
    justify-content: center;
    font-family: "Dancing Script", cursive;
    font-size: 40px;
  }
`;
export default FiltersStyle;
