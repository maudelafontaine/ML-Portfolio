import styled from "styled-components";
// import { NavLink } from "react-router-dom";
import Banner from "./Banner";

const App = () => {
  return (
    <AppContainer>
      <Banner />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  padding: 0px;
  margin: 0px;
  /* border: 2px solid black; */
  display: flex;
  /* width:100vw ; */
  /* /* height: auto; */
  width: auto;
  height: auto;

  background-color: blue;
`;

export default App;
