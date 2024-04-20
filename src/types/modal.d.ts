type modal = {
  isOpen: boolean;
  onYesClick: () => void;
  onClose: (v) => void;
  question: string;
  button1Text: string;
  button2Text: string;
  button1Style: {
    bgColor: string;
    textColor: string;
    hoverBgColor: string;
    border?: string;
  };
  button2Style: {
    bgColor: string;
    textColor: string;
    hoverBgColor: string;
    border?: string;
  };
};