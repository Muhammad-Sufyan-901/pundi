import React from "react";
import { Paragraph } from "tamagui";
import { useInputFieldContext } from "./context/context";

export default function InputFieldError() {
  const { error } = useInputFieldContext();

  if (!error) return null;

  return (
    <Paragraph
      fontSize="$3"
      color="#ef4444"
    >
      {error}
    </Paragraph>
  );
}
