import { ParagraphTypes } from '../../@types/ParagraphTypes';
import { ContainerTask } from './styles';

export const TaskDescription: React.FC<ParagraphTypes> = ({
  paragraph,
}: ParagraphTypes) => {
  return (
    <ContainerTask>
      <p>{paragraph}</p>
    </ContainerTask>
  );
};
