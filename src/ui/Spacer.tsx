import styled from "styled-components";

interface ISpacerProps {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  children?: React.ReactNode;
}

const Spacer: React.FC<ISpacerProps> = ({
  top = "0",
  right = "0",
  bottom = "0",
  left = "0",
  children,
}) => {
  return (
    <StyledSpacer $top={top} $right={right} $bottom={bottom} $left={left}>
      {children}
    </StyledSpacer>
  );
};

const StyledSpacer = styled.div<{
  $top: string;
  $right: string;
  $bottom: string;
  $left: string;
}>`
  position: relative;
  margin-top: ${({ $top }) => $top};
  margin-right: ${({ $right }) => $right};
  margin-bottom: ${({ $bottom }) => $bottom};
  margin-left: ${({ $left }) => $left};
`;

export default Spacer;
