import styled from "styled-components";
import Title from "../ui/Title";

const Header: React.FC = () => {
  return (
    <Style>
      <Title>CryptoCoin</Title>
    </Style>
  );
};
const Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0 2em 0;
`;

export default Header;
