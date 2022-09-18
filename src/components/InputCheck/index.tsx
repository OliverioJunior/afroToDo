import { InputTypes } from '../../@types/InputTypes';
import { ContainerInput, ContainerLabel } from './styles';
import { useRef, useEffect } from 'react';

export const InputCheck: React.FC<InputTypes> = ({ type }: InputTypes) => {
  const divRef = useRef<HTMLDivElement>(null) ?? false;
  const inputRef = useRef<HTMLInputElement>(null) ?? false;
  const Styled = (
    obj: { style: { backgroundColor: string; borderColor: string } },
    background: string,
    border: string,
  ) => {
    return (
      (obj.style.backgroundColor = `var(${background})`),
      (obj.style.borderColor = `var(${border})`)
    );
  };
  useEffect(() => {
    const div = divRef.current;
    const input = inputRef.current;
    input?.addEventListener('click', () => {
      if (input.checked && div) {
        return Styled(div, '--green-300', '--green-300');
      }
      if (div) return Styled(div, '--white', '--gray-500');
    });
  }, [divRef, inputRef]);
  return (
    <ContainerLabel>
      <ContainerInput ref={inputRef} type={type} />
      <div ref={divRef}>✔</div>
    </ContainerLabel>
  );
};
