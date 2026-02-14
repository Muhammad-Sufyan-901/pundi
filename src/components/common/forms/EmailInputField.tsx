import React from "react";
import { Control, FieldValues, Path } from "react-hook-form";
import InputField from "./input";

interface EmailInputFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder?: string;
  required?: boolean;
}

export default function EmailInputField<T extends FieldValues>({
  name,
  control,
  label,
  placeholder = "Masukkan Email",
  required = false,
}: EmailInputFieldProps<T>) {
  return (
    <InputField
      name={name}
      control={control}
    >
      <InputField.Label required={required}>{label}</InputField.Label>
      <InputField.Input
        placeholder={placeholder}
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
      />
      <InputField.Error />
    </InputField>
  );
}
