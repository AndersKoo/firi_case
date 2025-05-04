import numeral from "numeral";
import Spacer from "../ui/Spacer";
import ButtonsGroup from "../ui/buttons/ButtonsGroup";
import styled from "styled-components";
import ButtonBuy from "../ui/buttons/ButtonBuy";
import ButtonSell from "../ui/buttons/ButtonSell";
import Paragraph from "../ui/Paragraph";
import UseCryptoHook from "../utils/hooks/UseCrypto";

import { currency, Extension } from "../utils/currency";

const Top: React.FC = () => {
  const { currentmarkedPrice, limitPrice, cryptoVolume } = UseCryptoHook();

  return (
    <Style>
      <Paragraph>Eiendel: {currency(Extension.BTCNOK)} </Paragraph>
      <Spacer top="10px" />
      <Paragraph>
        Nåværende markedspris:
        {numeral(currentmarkedPrice).format("0,0.00")} {currency(Extension.NOK)}
      </Paragraph>
      <Spacer top="15px" />
      <ButtonsGroup>
        <ButtonBuy className="buy" title="Kjøp" />
        <ButtonSell className="sell" title="Selg" />
      </ButtonsGroup>
      <Spacer bottom="15px" />
      <Paragraph>
        Limit-pris ({currency(Extension.NOK)}):{" "}
        {numeral(limitPrice).format("0,0.00")}
      </Paragraph>
      <Spacer top="15px" />
      <Paragraph>
        Volum ({currency(Extension.BTC)}): {cryptoVolume}
      </Paragraph>
      <Spacer bottom="15px" />
    </Style>
  );
};

export default Top;

const Style = styled.div`
  width: 100%;
  max-width: var(--container-small-max-width, 300px);
  margin: 0 auto;

  .buy {
    color: var(--button-secondary-font-color, #474aee);
  }
  .sell {
    color: var(--button-secondary-font-color, #474aee);
  }
`;
