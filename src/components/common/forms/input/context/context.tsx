import { createContext, useContext } from "react";
import { Control, FieldValues, Path } from "react-hook-form";

interface InputFieldContextValue<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  error?: string;
  fieldId: string;
}

const InputFieldContext = createContext<InputFieldContextValue<any> | null>(null);

export function useInputFieldContext<T extends FieldValues>() {
  const context = useContext(InputFieldContext);
  if (!context) {
    throw new Error("InputField sub-components must be used within an InputField component");
  }
  return context as InputFieldContextValue<T>;
}

export { InputFieldContext };
export type { InputFieldContextValue };
