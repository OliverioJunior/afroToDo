import { ChildrenTypes } from '../../@types/ChildrenTypes';
import { Container } from './styles';

export const ContainerInputDate: React.FC<ChildrenTypes> = ({
  children,
}: ChildrenTypes) => {
  return <Container>{children}</Container>;
};
