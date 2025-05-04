import * as React from "react";

import { CryptoContext } from "../contexts/CryptoContext";

const UseCryptoHook = () => {
  return React.useContext(CryptoContext);
};

export default UseCryptoHook;
