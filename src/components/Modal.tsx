import React, { useEffect } from "react";
import cross from "../assets/cross.png";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  maxWidth: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children, open, maxWidth, onClose }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  if (!open) return null;
  const handleModalClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-[#00000080] z-10 backdrop-blur-sm flex justify-center items-center"
    >
      <div
        onClick={handleModalClick}
        className={`z-20 relative w-full max-w-[${maxWidth}]`}
      >
        <div
          onClick={onClose}
          className="absolute bg-[#131319] rounded-full p-2 top-4 right-8"
        >
          <img src={cross} alt="X" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
