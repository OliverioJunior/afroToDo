import { ChildrenTypes } from '../../@types/ChildrenTypes';
import { Container } from './styles';

export const ContainerCardTaks: React.FC<ChildrenTypes> = ({
  children,
}: ChildrenTypes) => {
  return <Container>{children}</Container>;
};
