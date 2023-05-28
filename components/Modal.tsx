import React, { useState } from "react";

type props = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent) => void;
  isModalClosed: boolean;
  closeModal: () => void;
};

const Modal = ({ children, isModalClosed, closeModal }: props) => {

  return (
    <div
      onClick={closeModal}
      className={`w-full h-screen fixed top-0 bg-black/50 py-28 transition-all delay-75 ${
        isModalClosed && "opacity-0 invisible"
      }`}
    >
      <div onClick={(e) => e.stopPropagation()} className="max-w-[1000px] w-[96%] mx-auto">{children}</div>
    </div>
  );
};

export default Modal;

export const useModal = () => {
  const [isModalClosed, setIsModalClosed] = useState(true);

  const closeModal = () => {
    setIsModalClosed(true);
  };

  const openModal = () => {
    setIsModalClosed(false);
  };

  return { isModalClosed, closeModal, openModal };
};
