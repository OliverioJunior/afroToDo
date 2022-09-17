import { ReactElement } from 'react';
import { ContainerMain } from './styles';
type HeaderTypes = {
  children: ReactElement;
};
export const Main: React.FC<HeaderTypes> = ({ children }: HeaderTypes) => {
  return <ContainerMain>{children}</ContainerMain>;
};
