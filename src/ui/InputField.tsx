import styled from "styled-components";
import Spacer from "./Spacer";

import { InputObject } from "../utils/type";

interface IProps {
  data: InputObject;
}

const InputField: React.FC<IProps> = ({ data }) => {
  return (
    <Style>
      <label>{data?.title}</label>
      <Spacer top="10px" />
      <input
        name={data?.name}
        className={data?.className}
        type="text"
        onChange={data?.onChange}
        onBlur={data?.onBlur}
      />
    </Style>
  );
};

const Style = styled.div`
  display: flex;
  flex-direction: column;
  input {
    border-radius: var(--border-radius, 10px);
    border: 1px solid #ccc;
  }
  input: focus {
    outline: none;
  }
`;

export default InputField;
