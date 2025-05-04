import * as React from "react";

import { ModalContext } from "../contexts/ModalContext";

const UseModalHook = () => {
  return React.useContext(ModalContext);
};

export default UseModalHook;
