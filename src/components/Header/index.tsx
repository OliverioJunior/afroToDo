import { ChildrenTypes } from '../../@types/ChildrenTypes';
import { Title } from './styles';

export const Header: React.FC<ChildrenTypes> = ({
  children,
}: ChildrenTypes) => {
  return <Title>{children}</Title>;
};
