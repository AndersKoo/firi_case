import Header from "./layout/Header";
import Top from "./layout/Top";
import Main from "./layout/Main";
import styled from "styled-components";

import { ModalProvider } from "./utils/contexts/ModalContext";
import { ButtonsProvider } from "./utils/contexts/ButtonsContext";
import { GlobalStyle } from "./styles/global";

const App: React.FC = () => {
  return (
    <Container>
      <ButtonsProvider>
        <ModalProvider>
          <GlobalStyle />
          <Header />
          <Top />
          <Main />
        </ModalProvider>
      </ButtonsProvider>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: var(--container-big-max-width, 400px);
  margin: 0 auto;
  border-radius: var(--border-radius, 10px);
`;

export default App;
