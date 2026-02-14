import { theme } from "@/src/styles/theme";
import { AlertCircle, AlertTriangle } from "lucide-react-native";
import React, { createContext, useContext } from "react";
import { Text, View } from "react-native";
import { fallbackStyles } from "./styles/fallback.styles";

// Context to share variant type between parent and children
type FallbackVariant = "error" | "warning";

interface FallbackContextValue {
  variant: FallbackVariant;
}

const FallbackContext = createContext<FallbackContextValue | null>(null);

function useFallbackContext() {
  const context = useContext(FallbackContext);
  if (!context) {
    throw new Error("Fallback subcomponents must be used within Fallback.Error or Fallback.Warning");
  }
  return context;
}

// Root container component for Error variant
interface FallbackErrorProps {
  children: React.ReactNode;
}

function FallbackError({ children }: FallbackErrorProps): React.JSX.Element {
  return (
    <FallbackContext.Provider value={{ variant: "error" }}>
      <View style={fallbackStyles.container}>{children}</View>
    </FallbackContext.Provider>
  );
}

// Root container component for Warning variant
interface FallbackWarningProps {
  children: React.ReactNode;
}

function FallbackWarning({ children }: FallbackWarningProps): React.JSX.Element {
  return (
    <FallbackContext.Provider value={{ variant: "warning" }}>
      <View style={fallbackStyles.container}>{children}</View>
    </FallbackContext.Provider>
  );
}

// Icon component - can use default or custom icon
interface FallbackIconProps {
  children?: React.ReactNode;
  size?: number;
}

function FallbackIcon({ children, size = 80 }: FallbackIconProps): React.JSX.Element {
  const { variant } = useFallbackContext();

  // If custom icon provided, render it
  if (children) {
    return <>{children}</>;
  }

  // Otherwise, render default icon based on variant
  if (variant === "error") {
    return (
      <AlertCircle
        size={size}
        color={theme.colors.error}
        strokeWidth={2}
      />
    );
  }

  return (
    <AlertTriangle
      size={size}
      color={theme.colors.warning}
      strokeWidth={2}
    />
  );
}

// Title component
interface FallbackTitleProps {
  children: React.ReactNode;
}

function FallbackTitle({ children }: FallbackTitleProps): React.JSX.Element {
  return <Text style={fallbackStyles.title}>{children}</Text>;
}

// Message/Description component
interface FallbackMessageProps {
  children: React.ReactNode;
}

function FallbackMessage({ children }: FallbackMessageProps): React.JSX.Element {
  return <Text style={fallbackStyles.message}>{children}</Text>;
}

// Compose the Fallback component with all subcomponents
const Fallback = {
  Error: FallbackError,
  Warning: FallbackWarning,
  Icon: FallbackIcon,
  Title: FallbackTitle,
  Message: FallbackMessage,
};

export default Fallback;
