import React from "react";
import { Controller, FieldValues } from "react-hook-form";
import { Input, InputProps } from "tamagui";
import { useInputFieldContext } from "./context/context";

interface InputFieldInputProps extends Omit<InputProps, "value" | "onChangeText" | "onBlur"> {
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  autoComplete?: "off" | "name" | "email" | "password" | "password-new" | "username";
}

export default function InputFieldInput<T extends FieldValues>(props: InputFieldInputProps) {
  const { name, control, error } = useInputFieldContext<T>();
  const {
    placeholder,
    secureTextEntry = false,
    keyboardType = "default",
    autoCapitalize = "sentences",
    autoComplete = "off",
    ...restProps
  } = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value } }) => (
        <Input
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoComplete={autoComplete}
          style={{
            backgroundColor: "#fff",
            borderRadius: 8,
            padding: 12,
            borderColor: error ? "#ef4444" : "#e5e7eb",
            borderWidth: 1,
          }}
          {...restProps}
        />
      )}
    />
  );
}
