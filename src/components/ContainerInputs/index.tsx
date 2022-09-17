import { ChildrenTypes } from '../../@types/ChildrenTypes';
import { Container } from './styles';

export const ContainerInputs: React.FC<ChildrenTypes> = ({
  children,
}: ChildrenTypes) => {
  return <Container>{children}</Container>;
};
