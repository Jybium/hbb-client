import React from "react";
import downicon from "../assets/downicon.png";
import Icon from "./Icons";
import { ChevronDown } from "lucide-react";

const Modal = ({
  isOpen,
  onClose,
  onYesClick,
  question,
  button1Text,
  button2Text,
  button1Style,
  button2Style,
} : modal) => {


  if (!isOpen) return null;

  const handleYesClick = () => {
    if (onYesClick) {
      onYesClick(); // Call the new prop function
    }
    // Don't need to call onClose here if it's already called in onYesClick
  };

  const handleNoClick = () => {
    onClose(false);
  };



  return (
    <div className="fixed top-0 left-0 w-full h-full ">
      <div className="flex justify-center pt-[8px] lg:pt-[20px] pb-[10px] md:pb-[4px] md:pt-[16px]">
        <ChevronDown color="#EFD378" className="text-tertiary"  size={30}/>
      </div>
      <div className="modal-content bg-white w-4/5 lg:w-max md:px-20 rounded-[20px] mx-auto z-50 px-[24px] py-4">
        <h2 className="text-[#080808] text-sm font-[400] text-center mb-[24px]">
          {question}
        </h2>
        <div className="flex gap-[16px] justify-center">
          <button
            className={`px-[12px] py-[6px] rounded-[8px] text-xs border font-[300] ${button1Style.hoverBgColor} ${button1Style.bgColor} ${button1Style.textColor} ${button1Style.border}`}
            onClick={handleYesClick}
          >
            {button1Text}
          </button>
          <button
            className={`px-[12px] py-[6px] rounded-[8px] text-xs font-[300] border ${button2Style.hoverBgColor} ${button2Style.bgColor} ${button2Style.textColor} ${button2Style.border}`}
            onClick={handleNoClick}
          >
            {button2Text}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
