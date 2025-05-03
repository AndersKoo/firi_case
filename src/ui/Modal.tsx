import React from "react";
import styled from "styled-components";
import UseModalHook from "../utils/hooks/UseModal";

interface ModalProps {
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const { isOpen } = UseModalHook();

  if (!isOpen) return null;

  return (
    <Styled>
      <div className="modal-content">{children}</div>
    </Styled>
  );
};

const Styled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  .modal-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    padding: 20px 0 20px 0;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    border-radius: var(--border-radius, 10px);
  }
`;

export default Modal;
