import { ChildrenTypes } from '../../@types/ChildrenTypes';
import { ContainerMain } from './styles';

export const Main: React.FC<ChildrenTypes> = ({ children }: ChildrenTypes) => {
  return <ContainerMain>{children}</ContainerMain>;
};
