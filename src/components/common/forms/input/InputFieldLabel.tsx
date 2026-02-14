import React from "react";
import { Paragraph, XStack } from "tamagui";

interface InputFieldLabelProps {
 children: React.ReactNode;
 fontSize?: string;
 fontWeight?: string;
 color?: string;
 required?: boolean;
}

export default function InputFieldLabel({
 children,
 fontSize = "$4",
 fontWeight = "bold",
 color,
 required = false,
}: InputFieldLabelProps) {
 return (
  <XStack
   gap="$1"
   alignItems="center"
  >
   <Paragraph
    fontSize={fontSize}
    fontWeight={fontWeight}
    color={color}
   >
    {children}
   </Paragraph>
   {required && (
    <Paragraph
     fontSize={fontSize}
     fontWeight={fontWeight}
     color="$red10"
    >
     *
    </Paragraph>
   )}
  </XStack>
 );
}
