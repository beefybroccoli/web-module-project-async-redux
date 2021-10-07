import styled from "styled-components";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./page/home";
import NASA from "./page/nasa";
import CNBC from "./page/cnbc";

const Container = styled.div`
  border: 1px solid black;
  padding: 5px;
  margin: 5px;
  height: 95vh;
`;
const Main = styled.main`
  border: 1px solid blue;
`;
function App() {
  return (
    <Container>
      <header>
        <h1>App.js - App-Async-Redux</h1>
      </header>
      <Main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/nasa">
            <NASA />
          </Route>
          <Route path="/cnbc">
            <CNBC />
          </Route>
        </Switch>
      </Main>
    </Container>
  );
}

export default App;
