import * as React from "react";

import { ButtonsContext } from "../contexts/ButtonsContext";

const UseButtonsHook = () => {
  return React.useContext(ButtonsContext);
};

export default UseButtonsHook;
