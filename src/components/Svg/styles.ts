import styled from 'styled-components';
export type Colors = {
  fill?: string;
  hoverFill?: string;
};
export const Container = styled.svg`
  fill: ${({ fill }: Colors) => fill};
  &:hover {
    fill: ${({ hoverFill }: Colors) => hoverFill};
  }
`;
