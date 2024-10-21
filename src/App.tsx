import "./styles/myreset.css";
import { Wrapper } from "./styles/App.ts";
import Header from "./layout/Header/Header.tsx";
import Footer from "./layout/Footer/Footer.tsx";
import Main from "./layout/Main/Main.tsx";

function App() {
  return (
    <Wrapper>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Wrapper>
  );
}

export default App;
