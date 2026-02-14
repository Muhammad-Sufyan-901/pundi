import React from "react";
import { Paragraph } from "tamagui";

interface InputFieldHintProps {
 children: React.ReactNode;
 fontSize?: string;
 color?: string;
}

export default function InputFieldHint({ children, fontSize = "$3", color = "$gray500" }: InputFieldHintProps) {
 return (
  <Paragraph
   fontSize={fontSize}
   color={color}
  >
   {children}
  </Paragraph>
 );
}
