import "./styles/myreset.css";
import { Wrapper } from "./styles/App.ts";
import Header from "./layout/Header/Header.tsx";
import Main from "./layout/Main/Main.tsx";

function App() {
  return (
    <Wrapper>
      <Header></Header>
      <Main></Main>
    </Wrapper>
  );
}

export default App;
