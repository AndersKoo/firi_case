import styled from "styled-components";
import UseButtonsHook from "../../utils/hooks/UseButtons";

import { ButtonsType } from "../../utils/type";
import { MouseEventHandler, useEffect } from "react";

interface IProps {
  title: string;
  className?: string;
}

const ButtonSell: React.FC<IProps> = ({ title, className }) => {
  const { setSellClicked, setBuyClicked, sellClicked, buyClicked } =
    UseButtonsHook();

  const clickSellFunction: MouseEventHandler<HTMLButtonElement> = (e) => {
    const click = e.currentTarget.dataset.type as ButtonsType;
    if (click === "SELL") {
      setSellClicked(true);
      setBuyClicked(false);
    }
  };

  // Lytter etter state endringer
  useEffect(() => {
    if (sellClicked) {
      setBuyClicked(false);
    }
  }, [sellClicked, buyClicked]);

  return (
    <StyledButton
      sellClicked={sellClicked}
      buyClicked={buyClicked}
      data-type="SELL"
      onClick={clickSellFunction}
    >
      <span className={className ? className : ""}>{title}</span>
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  sellClicked: boolean | undefined;
  buyClicked: boolean | undefined;
}>`
  width: 100px;
  padding: 10px 20px;
  border-radius: var(--border-radius, 10px);
  background-color: var(--button-secondary-color, #474aee);
  border: ${({ sellClicked, buyClicked }) =>
    sellClicked && !buyClicked ? "1px solid #474aee" : "none"};
  span {
    color: var(--button-primary-font-color, #ffffff);
  }
`;

export default ButtonSell;
