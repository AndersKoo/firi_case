import * as React from "react";

import { ButtonsContext } from "../context/ButtonsContext";

const UseButtonsHook = () => {
  return React.useContext(ButtonsContext);
};

export { UseButtonsHook };
