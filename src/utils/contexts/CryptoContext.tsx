import * as React from "react";

interface IProps {
  children: React.ReactNode;
}

interface ICryptoInfo {
  currentmarkedPrice?: number;
  limitPrice?: number;
  cryptoVolume?: number;
}
const CryptoInfo: ICryptoInfo = {
  currentmarkedPrice: 563890.45,
  limitPrice: 563500.0,
  cryptoVolume: 0.5,
};

export const CryptoContext = React.createContext<ICryptoInfo>(CryptoInfo);

export const CryptoProvider: React.FC<IProps> = ({ children }) => {
  return (
    <CryptoContext.Provider value={CryptoInfo}>
      {children}
    </CryptoContext.Provider>
  );
};
