import * as React from "react";

import { ModalContext } from "../context/ModalContext";

const UseModalHook = () => {
  return React.useContext(ModalContext);
};

export { UseModalHook };
