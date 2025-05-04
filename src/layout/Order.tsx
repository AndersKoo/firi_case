import numeral from "numeral";
import Modal from "../ui/Modal";
import styled from "styled-components";
import Spacer from "../ui/Spacer";
import Paragraph from "../ui/Paragraph";
import Title from "../ui/Title";
import Line from "../ui/Line";
import UseModalHook from "../utils/hooks/UseModal";
import UseButtonsHook from "../utils/hooks/UseButtons";

import { currency, Extension } from "../utils/currency";
import { OrderObject } from "../utils/type";

interface IProps {
  data: OrderObject;
}

const Order: React.FC<IProps> = ({ data }) => {
  const total = Number(data?.cryptoVolume) * Number(data?.limitPrice);

  const { openModal, closeModal } = UseModalHook();

  const { sellClicked, buyClicked, resetBuyClick, resetSellClick } =
    UseButtonsHook();

  return (
    <Style>
      <button
        className="orderBtn"
        disabled={false}
        onClick={() => {
          openModal();
        }}>
        <span>{data?.titleMain}</span>
      </button>

      <Modal>
        {buyClicked ? (
          <>
            <Title>Bestilling er gjennomført</Title>
            <Spacer top="20px" />
            <Paragraph>Du har kjøpt crypto for</Paragraph>

            <Spacer top="30px" />
            <Paragraph>
              Limitpris: {numeral(data?.limitPrice).format("0,0.00")}{" "}
              {currency(Extension.NOK)}
            </Paragraph>
            <Spacer bottom="5px" />
            <Paragraph>
              Volume: {data?.cryptoVolume} {currency(Extension.BTC)}
            </Paragraph>
            <Spacer top="20px" />
            <Line />
            <Spacer top="20px" />
            <Paragraph>
              Total: {numeral(total).format("0,0.00")} {currency(Extension.NOK)}
            </Paragraph>
            <Spacer top="40px" />
          </>
        ) : sellClicked ? (
          <>
            <Title>Bestilling er gjennomført</Title>
            <Spacer top="20px" />
            <Paragraph>Du har solgt crypto for</Paragraph>
            <Spacer top="30px" />
            <Paragraph>
              Limitpris: {numeral(data?.limitPrice).format("0,0.00")}{" "}
              {currency(Extension.NOK)}
            </Paragraph>
            <Spacer bottom="5px" />
            <Paragraph>
              Volume: {data?.cryptoVolume} {currency(Extension.BTC)}
            </Paragraph>
            <Spacer top="20px" />
            <Line />
            <Spacer top="20px" />
            <Paragraph>
              Total: {numeral(total).format("0,0.00")} {currency(Extension.NOK)}
            </Paragraph>
            <Spacer top="40px" />
          </>
        ) : (
          <Paragraph className="choiceNotPicked">
            Ingen valg er definert. Velg om du vil kjøpe eller selge crypto
          </Paragraph>
        )}

        <button
          className="closeBtn"
          onClick={() => {
            closeModal();
            resetBuyClick();
            resetSellClick();
          }}>
          <span>{data?.titleSecondary}</span>
        </button>
      </Modal>
    </Style>
  );
};

export default Order;

const Style = styled.div`
display: flex;  
justify-content: center;

  .orderBtn {
    width:100%;
    max-width: 200px;
    padding: 10px 20px 10px 20px;
    border-radius: var(--border-radius, 10px);
    background-color: var(--button-primary-color, #474aee);
    border: none;
    color: var(--button-primary-font-color, #ffffff);
  }

  .orderBtn:disabled {
     color: var(--button-primary-font-color, #ffffff);
      background-color: var(--button-disabled-color, rgba(240, 240, 240, 1));
  }

  .closeBtn span {
    color: var(--button-primary-font-color, #ffffff);
  }

  .closeBtn {
    width:100%;
    max-width: 200px;
    padding: 10px 20px 10px 20px;
    border-radius: var(--border-radius, 10px);
    background-color: var(--button-primary-color, #474aee);
    border: none;
  }

  .close span {
    color: var(--button-primary-font-color, #ffffff);
  }

  .choiceNotPicked {
    padding: 20px 20px 20px;
`;
