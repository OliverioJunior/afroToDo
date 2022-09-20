import { ChildrenTypes } from '../../@types/ChildrenTypes';
import { Container } from './styles';
export const ButtonTask: React.FC<ChildrenTypes> = ({
  children,
}: ChildrenTypes) => {
  return <Container>{children}</Container>;
};
