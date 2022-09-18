import { ContainerTitle } from './styles';

export const ContainerTitleTaks: React.FC = () => {
  const title = 'Tarefas concluídas';
  return (
    <ContainerTitle>
      <h2>{title}</h2>
      <span>3 de 6</span>
    </ContainerTitle>
  );
};
