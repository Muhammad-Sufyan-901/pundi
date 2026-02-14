import { theme } from "@/src/styles/theme";
import React, { createContext, useContext } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { loaderStyles } from "./styles/loader.styles";

// Context to share loader configuration
interface LoaderContextValue {
  color?: string;
  size?: "small" | "large";
}

const LoaderContext = createContext<LoaderContextValue>({
  color: theme.colors.primary,
  size: "large",
});

function useLoaderContext() {
  return useContext(LoaderContext);
}

// Root container component
interface LoaderRootProps {
  children: React.ReactNode;
  color?: string;
  size?: "small" | "large";
}

function LoaderRoot({
  children,
  color = theme.colors.primary,
  size = "large"
}: LoaderRootProps): React.JSX.Element {
  return (
    <LoaderContext.Provider value={{ color, size }}>
      <View style={loaderStyles.container}>{children}</View>
    </LoaderContext.Provider>
  );
}

// Spinner component
interface LoaderSpinnerProps {
  color?: string;
  size?: "small" | "large";
}

function LoaderSpinner({
  color,
  size
}: LoaderSpinnerProps = {}): React.JSX.Element {
  const context = useLoaderContext();

  return (
    <ActivityIndicator
      size={size || context.size}
      color={color || context.color}
    />
  );
}

// Text component
interface LoaderTextProps {
  children: React.ReactNode;
}

function LoaderText({ children }: LoaderTextProps): React.JSX.Element {
  return <Text style={loaderStyles.text}>{children}</Text>;
}

// Compose the Loader component
const Loader = {
  Root: LoaderRoot,
  Spinner: LoaderSpinner,
  Text: LoaderText,
};

export default Loader;


