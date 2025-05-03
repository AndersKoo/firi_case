export enum Extension {
  BTC = "BTC",
  NOK = "NOK",
  BTCNOK = "BTC/NOK",
}
export const currency = (extension: Extension) => {
  switch (extension) {
    case Extension.BTC:
      return "BTC";
    case Extension.NOK:
      return "NOK";
    case Extension.BTCNOK:
      return "BTC/NOK";
  }
};
