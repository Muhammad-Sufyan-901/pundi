import React, { useMemo } from "react";
import { Control, FieldValues, Path, useFormState } from "react-hook-form";
import { YStack } from "tamagui";
import { InputFieldContext } from "./context/context";
import InputFieldError from "./InputFieldError";
import InputFieldHint from "./InputFieldHint";
import InputFieldInput from "./InputFieldInput";
import InputFieldLabel from "./InputFieldLabel";

interface InputFieldProps<T extends FieldValues> {
 name: Path<T>;
 control: Control<T>;
 children: React.ReactNode;
 gap?: string;
}

function InputFieldRoot<T extends FieldValues>({ name, control, children, gap = "$2" }: InputFieldProps<T>) {
 const { errors } = useFormState({ control });

 const error = useMemo(() => {
  const fieldError = errors[name];
  return fieldError?.message as string | undefined;
 }, [errors, name]);

 const fieldId = useMemo(() => `input-field-${String(name)}`, [name]);

 const contextValue = useMemo(
  () => ({
   name,
   control,
   error,
   fieldId,
  }),
  [name, control, error, fieldId],
 );

 return (
  <InputFieldContext.Provider value={contextValue}>
   <YStack gap={gap}>{children}</YStack>
  </InputFieldContext.Provider>
 );
}

const InputField = Object.assign(InputFieldRoot, {
 Label: InputFieldLabel,
 Input: InputFieldInput,
 Error: InputFieldError,
 Hint: InputFieldHint,
});

export default InputField;
