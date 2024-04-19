import React from "react";

interface IButton {
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
  children: React.ReactNode;
}

export default function Button({ children, setIsOpen }: IButton) {
  return (
    <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
      {children}
    </button>
  );
}
