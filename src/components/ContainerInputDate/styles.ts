import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: max-content;
  display: flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
  button {
    width: 51px;
    height: 51px;
    color: var(--white);
    margin-left: 0.5rem;
    background: var(--green-500);
    border-radius: 8px;
    border: none;
    font-size: 2rem;
  }
`;
