import { ContainerTitle } from './styles';
import check from '../../assets/check.svg';
export const Title: React.FC = () => {
  const title = 'AfroToDo';
  return (
    <ContainerTitle>
      <img src={check} alt="check" />
      <h1>{title}</h1>
    </ContainerTitle>
  );
};
