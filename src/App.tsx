import { CardTaks } from './components/CardTaks';
import { ContainerButton } from './components/ContainerButton';
import { ContainerInputDate } from './components/ContainerInputDate';
import { ContainerInputs } from './components/ContainerInputs';
import { ContainerTaks } from './components/ContainerTaks';
import { ContainerTitleTaks } from './components/ContainerTitleTaks';
import { Header } from './components/Header';
import { Input } from './components/Input';
import { InputCheck } from './components/InputCheck';
import { Main } from './components/Main';
import { TaskDescription } from './components/TaskDescription';
import { Title } from './components/Title';
import { EDIT, TRASH } from './assets/svg.js';
import { ButtonEdit } from './components/ButtonEdit';
import { ButtonTrash } from './components/ButtonTrash';
import { ContainerCardTaks } from './components/ContainerCardTaks';

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
        <CardTaks>
          <ContainerCardTaks>
            <InputCheck type={'checkbox'} />
            <TaskDescription paragraph="Coisas aqui" />
            <ContainerButton>
              <ButtonEdit>{EDIT}</ButtonEdit>
              <ButtonTrash>{TRASH}</ButtonTrash>
            </ContainerButton>
          </ContainerCardTaks>
          <div>opa</div>
        </CardTaks>
      </Main>
    </>
  );
}

export default App;
