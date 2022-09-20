import { DateTypes } from '../../@types/DateTypes';
import { Container } from './styles';

export const DateTask: React.FC<DateTypes> = ({ task, icon }: DateTypes) => {
  return (
    <Container>
      {icon}
      <p>{task}</p>
    </Container>
  );
};
