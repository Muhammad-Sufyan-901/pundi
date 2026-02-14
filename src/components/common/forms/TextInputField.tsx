import React from "react";
import { Control, FieldValues, Path } from "react-hook-form";
import InputField from "./input";

interface TextInputFieldProps<T extends FieldValues> {
 name: Path<T>;
 control: Control<T>;
 label: string;
 placeholder?: string;
 autoCapitalize?: "none" | "sentences" | "words" | "characters";
 autoComplete?: "off" | "name" | "username";
 required?: boolean;
}

export default function TextInputField<T extends FieldValues>({
 name,
 control,
 label,
 placeholder,
 autoCapitalize = "sentences",
 autoComplete = "off",
 required = false,
}: TextInputFieldProps<T>) {
 return (
  <InputField
   name={name}
   control={control}
  >
   <InputField.Label required={required}>{label}</InputField.Label>
   <InputField.Input
    placeholder={placeholder}
    autoCapitalize={autoCapitalize}
    autoComplete={autoComplete}
   />
   <InputField.Error />
  </InputField>
 );
}
