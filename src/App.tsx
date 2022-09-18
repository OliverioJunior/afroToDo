import { ContainerInputDate } from './components/ContainerInputDate';
import { ContainerInputs } from './components/ContainerInputs';
import { ContainerTaks } from './components/ContainerTaks';
import { ContainerTitleTaks } from './components/ContainerTitleTaks';
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
          <ContainerInputDate>
            <Input placeholder="Insira uma nova atividade" type="text" />
          </ContainerInputDate>
          <ContainerInputDate>
            <Input placeholder="" type="date" />
            <button>+</button>
          </ContainerInputDate>
        </ContainerInputs>
        <ContainerTaks>
          <ContainerTitleTaks></ContainerTitleTaks>
        </ContainerTaks>
      </Main>
    </>
  );
}

export default App;
