import { ChildrenTypes } from '../../@types/ChildrenTypes';
import { Container } from './styles';

export const ContainerTaks: React.FC<ChildrenTypes> = ({
  children,
}: ChildrenTypes) => {
  return <Container>{children}</Container>;
};
