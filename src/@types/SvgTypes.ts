import { ReactElement } from 'react';

export type SvgTypes = {
  children: ReactElement | ReactElement[];
  xmlns: string;
  viewBox: string;
  fill: string;
  hoverFill?: string;
};
