import { ContainerInputs } from './components/ContainerInputs';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { Main } from './components/Main';
import { Title } from './components/Title';

function App() {
  return (
    <>
      <Header>
        <Title />
      </Header>
      <Main>
        <ContainerInputs>
          <Input placeholder="Insira uma nova atividade" type="text" />
        </ContainerInputs>
      </Main>
    </>
  );
}

export default App;
