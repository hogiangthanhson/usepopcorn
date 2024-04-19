import React, { useState } from "react";
import Button from "./Button";

export default function Box({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <Button setIsOpen={setIsOpen}>{isOpen ? "–" : "+"}</Button>
      {isOpen && children}
    </div>
  );
}
