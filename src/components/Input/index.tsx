import { InputTypes } from '../../@types/InputTypes';
import { ContainerInput } from './styles';

export const Input: React.FC<InputTypes> = ({
  placeholder,
  type,
}: InputTypes) => {
  return <ContainerInput type={type} placeholder={placeholder} />;
};
