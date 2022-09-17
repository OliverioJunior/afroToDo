import styled from 'styled-components';

export const ContainerInput = styled.input`
  display: flex;
  height: 51px;
  padding: 0 1rem;
  flex: 1;
  border: 1px solid var(--blue-100);
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  &::placeholder {
    color: var(--gray-500);
  }
`;
