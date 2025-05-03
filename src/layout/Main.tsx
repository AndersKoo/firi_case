import styled from "styled-components";
import Order from "./Order";
import numeral from "numeral";
import Spacer from "../ui/Spacer";
import Paragraph from "../ui/Paragraph";
import InputField from "../ui/InputField";

import { currency, Extension } from "../utils/currency";
import { FieldName, Validation } from "../utils/type";
import { useState } from "react";
import { Style } from "./Style";
import { cryptoValidation, priceValidation } from "../utils/helpers";

const Main: React.FC = () => {
  const [errorLimit, setErrorLimitMessage] = useState("");
  const [error, setErrorVolumeMessage] = useState("");
  const [cryptoVolume, setCryptoVolume] = useState("");
  const [limitPrice, setLimitPrice] = useState("");

  const total = Number(cryptoVolume) * Number(limitPrice);

  const handleUserChange =
    (inputField: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value;
      if (inputField === FieldName.LIMIT) return setLimitPrice(input);
      if (inputField === FieldName.VOLUME) return setCryptoVolume(input);
    };

  return (
    <Style>
      <Spacer top="15px" />
      <InputField
        data={{
          className: "limitPrice",
          title: `Limit pris (${currency(Extension.NOK)})`,
          onChange: handleUserChange("limitField"),
          onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
            const input = e.target.value;
            if (priceValidation) {
              const validation = priceValidation(input);
              switch (validation) {
                case Validation.APPROVED:
                  setErrorLimitMessage("");
                  break;
                case Validation.EMPTY:
                  setErrorLimitMessage("Ingen verdi er angitt");
                  break;
                case Validation.PARTIALLYFILLED:
                  setErrorLimitMessage("Delvis utfylt");
                  break;
                case Validation.INVALID:
                  setErrorLimitMessage("Ugyldig verdi");
                  break;
                default:
                  setErrorLimitMessage("Ukjent feil");
              }
            }
          },
        }}
      />
      {errorLimit ? <ErrorText>{errorLimit}</ErrorText> : null}
      <Spacer bottom="15px" />

      <InputField
        data={{
          className: "volume",
          title: `Volume (${currency(Extension.BTC)})`,
          onChange: handleUserChange("volumeField"),
          onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
            const input = e.target.value;
            if (cryptoValidation) {
              const validation = cryptoValidation(input);
              switch (validation) {
                case Validation.APPROVED:
                  setErrorVolumeMessage("");
                  break;
                case Validation.EMPTY:
                  setErrorVolumeMessage("Ingen verdi er angitt");
                  break;
                case Validation.PARTIALLYFILLED:
                  setErrorVolumeMessage("Delvis utfylt");
                  break;
                case Validation.INVALID:
                  setErrorVolumeMessage("Ugyldig verdi");
                  break;
                default:
                  setErrorVolumeMessage("Ukjent feil");
              }
            }
          },
        }}
      />

      {error ? <ErrorText>{error}</ErrorText> : null}

      <Spacer top="15px" />
      <Paragraph>
        Total: {numeral(total).format("0,0.00")} {currency(Extension.NOK)}
      </Paragraph>
      <Spacer top="15px" />
      <Order
        data={{
          titleMain: "Plasser ordre",
          limitPrice: limitPrice,
          cryptoVolume: cryptoVolume,
          titleSecondary: "Tilbake til oversikt",
        }}
      />
    </Style>
  );
};

const ErrorText = styled.div`
  font-size: 12px;
  color: red;
`;

export default Main;
