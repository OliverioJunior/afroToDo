import styled from 'styled-components';

export const ContainerInput = styled.input`
  display: flex;
  height: 51px;
  flex: 1;
  padding: 0 1rem;
  border: 1px solid var(--blue-100);
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  &::placeholder {
    color: var(--gray-500);
  }
`;
