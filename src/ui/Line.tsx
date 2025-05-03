import styled from "styled-components";

const Line: React.FC = () => {
  return <Divider />;
};

const Divider = styled.div`
  width: 100%;
  max-width: 250px;
  height: 2px;
  border: none;
  background-color: #ccc;
`;

export default Line;
