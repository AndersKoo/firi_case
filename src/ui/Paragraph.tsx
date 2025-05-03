import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
  className?: string;
}
const Paragraph: React.FC<IProps> = ({ children, className }) => {
  return <Style className={className}>{children}</Style>;
};

const Style = styled.div``;

export default Paragraph;
