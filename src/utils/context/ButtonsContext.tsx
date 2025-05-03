import * as React from "react";

interface IProps {
  children: React.ReactNode;
}
interface IButtons {
  buyClicked: boolean | undefined;
  sellClicked: boolean | undefined;
  setBuyClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setSellClicked: React.Dispatch<React.SetStateAction<boolean>>;
  resetBuyClick: () => void;
  resetSellClick: () => void;
  children: React.ReactNode;
}

export const ButtonsContext = React.createContext<IButtons>({
  buyClicked: false,
  sellClicked: false,
  setBuyClicked: () => {},
  setSellClicked: () => {},
  resetBuyClick: () => {},
  resetSellClick: () => {},
  children: undefined,
});

export const ButtonsProvider: React.FC<IProps> = ({ children }) => {
  const [buyClicked, setBuyClicked] = React.useState(false);
  const [sellClicked, setSellClicked] = React.useState(false);

  const resetBuyClick = () => {
    setBuyClicked(false);
  };

  const resetSellClick = () => {
    setSellClicked(false);
  };
  return (
    <ButtonsContext.Provider
      value={{
        buyClicked,
        sellClicked,
        setBuyClicked,
        setSellClicked,
        resetBuyClick,
        resetSellClick,
        children,
      }}
    >
      {children}
    </ButtonsContext.Provider>
  );
};
