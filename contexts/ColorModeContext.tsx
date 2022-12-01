import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export interface ColorModeProps {
  children: React.ReactNode;
}

export const ColorModeProvider = ({ children }: ColorModeProps) => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              ".containerpuro": {
                margin: "auto",
                maxWidth: 850,
              },
              ".containercentral": {
                display: "flex",
                margin: "auto",
                maxWidth: 850,
              },
              ".titesq-btndir": {
                maxWidth: 850,
                alignItems: "center",
                display: "flex",
                margin: "auto",
                justifyContent: "space-between",
                flexWrap: "wrap",
              },
              ".flexcentral": {
                alignItems: "center",
                display: "flex",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeContext;
