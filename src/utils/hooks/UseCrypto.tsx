import * as React from "react";

import { CryptoContext } from "../context/CryptoContext";

const UseCryptoHook = () => {
  return React.useContext(CryptoContext);
};

export { UseCryptoHook };
