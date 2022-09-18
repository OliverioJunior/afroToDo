import styled from 'styled-components';

export const ContainerLabel = styled.label`
  div {
    height: 1rem;
    width: 1rem;
    border-radius: 0.25rem;
    border: 0.125rem solid var(--gray-700);
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.625rem;
    color: white;
    cursor: pointer;
    user-select: none;
  }
`;
export const ContainerInput = styled.input`
  display: flex;
  height: 51px;
  display: none;
`;
