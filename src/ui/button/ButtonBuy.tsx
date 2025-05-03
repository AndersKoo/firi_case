import styled from "styled-components";

import { ButtonsType } from "../../utils/type";
import { MouseEventHandler, useEffect } from "react";
import { UseButtonsHook } from "../../utils/hooks/UseButtons";

interface IProps {
  title: string;
  className?: string;
}

const ButtonBuy: React.FC<IProps> = ({ title, className }) => {
  const { setBuyClicked, buyClicked } = UseButtonsHook();

  const clickBuyFunction: MouseEventHandler<HTMLButtonElement> = (e) => {
    const click = e.currentTarget.dataset.type as ButtonsType;
    if (click === "BUY") {
      setBuyClicked(true);
    }
  };

  // Lytter etter state endringer
  useEffect(() => {}, [buyClicked]);

  return (
    <Style>
      <button data-type="BUY" onClick={clickBuyFunction}>
        <span className={className ? className : ""}>{title}</span>
      </button>
    </Style>
  );
};
const Style = styled.div`
  button {
    width: 100px;
    padding: 10px 20px 10px 20px;
    border-radius: var(--border-radius, 10px);
    background-color: var(--button-secondary-color, #474aee);
    border: none;
  }
  button span {
    color: var(--button-primary-font-color, #ffffff);
  }
`;
export default ButtonBuy;
