import styled from 'styled-components';

export const Container = styled.button`
  width: 2rem;
  height: 2rem;
  background: var(--gray-100);
  border: none;
  border-radius: 8px;
  svg {
    fill: var(--gray-700);
    padding: 0.625rem;
  }
  &:hover {
    svg {
      fill: var(--red-400);
    }
  }
`;
