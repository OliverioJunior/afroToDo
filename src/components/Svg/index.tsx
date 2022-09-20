import { SvgTypes } from '../../@types/SvgTypes';
import { Container } from './styles';
export const Svg: React.FC<SvgTypes> = ({
  children,
  xmlns,
  viewBox,
  fill,
  hoverFill,
}: SvgTypes) => {
  return (
    <Container
      xmlns={xmlns}
      viewBox={viewBox}
      hoverFill={hoverFill}
      fill={fill}
    >
      {children}
    </Container>
  );
};
