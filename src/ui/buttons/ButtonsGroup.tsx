import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  className?: string;
}
const ButtonsGroup: React.FC<IProps> = ({ children, className }) => {
  return <Style className={className}>{children}</Style>;
};
const Style = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default ButtonsGroup;
