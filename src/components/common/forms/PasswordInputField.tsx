import { colors } from "@/src/styles/colors";
import { Eye, EyeOff } from "lucide-react-native";
import React, { useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { TouchableOpacity } from "react-native";
import { Input, XStack } from "tamagui";
import InputField from "./input";
import { useInputFieldContext } from "./input/context/context";

interface PasswordInputFieldProps<T extends FieldValues> {
 name: Path<T>;
 control: Control<T>;
 label: string;
 placeholder?: string;
 autoComplete?: "password" | "password-new" | "off";
 required?: boolean;
}

interface PasswordInputProps {
 placeholder?: string;
 autoComplete?: "password" | "password-new" | "off";
}

function PasswordInput({ placeholder, autoComplete }: PasswordInputProps) {
 const { name, control, error } = useInputFieldContext();
 const [showPassword, setShowPassword] = useState(false);

 return (
  <Controller
   control={control}
   name={name}
   render={({ field: { onChange, onBlur, value } }) => (
    <XStack
     position="relative"
     alignItems="center"
     style={{
      backgroundColor: colors.white,
      borderRadius: 8,
      borderColor: error ? colors.error : colors.gray200,
      borderWidth: 1,
     }}
    >
     <Input
      flex={1}
      value={value}
      onChangeText={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      secureTextEntry={!showPassword}
      autoCapitalize="none"
      autoComplete={autoComplete}
      backgroundColor="transparent"
      borderWidth={0}
      padding={12}
      focusStyle={{
       borderWidth: 0,
       borderColor: "transparent",
      }}
     />

     <TouchableOpacity
      onPress={() => setShowPassword(!showPassword)}
      style={{
       padding: 12,
       justifyContent: "center",
       alignItems: "center",
      }}
     >
      {showPassword ? (
       <EyeOff
        size={20}
        color={colors.gray500}
       />
      ) : (
       <Eye
        size={20}
        color={colors.gray500}
       />
      )}
     </TouchableOpacity>
    </XStack>
   )}
  />
 );
}

export default function PasswordInputField<T extends FieldValues>({
 name,
 control,
 label,
 placeholder = "Masukkan Password",
 autoComplete = "password",
 required = false,
}: PasswordInputFieldProps<T>) {
 return (
  <InputField
   name={name}
   control={control}
  >
   <InputField.Label required={required}>{label}</InputField.Label>
   <PasswordInput
    placeholder={placeholder}
    autoComplete={autoComplete}
   />
   <InputField.Error />
  </InputField>
 );
}
