"use client";

import type { ThemeOptions } from "@mui/material";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { JetBrains_Mono } from "next/font/google";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const codeFont = JetBrains_Mono({ subsets: ["latin"] });

declare module "@mui/material/styles" {
  interface Palette {
    cardBackground: Palette["primary"];
    cardBorder: Palette["primary"];
  }
  interface PaletteOptions {
    cardBackground?: PaletteOptions["primary"];
    cardBorder?: PaletteOptions["primary"];
  }
}

export const defaultTheme: ThemeOptions = {
  palette: {
    mode: "dark",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1560,
    },
  },
  typography: {
    fontFamily: ["Satoshi", "Arial", "sans-serif"].join(","),
    fontWeightRegular: 500,
    fontSize: 16,
    caption: {
      fontFamily: [codeFont.style.fontFamily, "Monaco", "monospace"].join(","),
    },
  },
};

export const overrides = {
  palette: {
    text: {
      primary: "#fff",
      secondary: "#969696",
    },
    primary: {
      main: "#0168e5",
      contrastText: "#fff",
    },
    cardBackground: {
      main: "#161821",
    },
    background: {
      default: "#101011",
    },
    action: {
      background: "#3070F6",
    },
  },
  components: {
    muiButton: {
      styleOverrides: {
        root: {
          // textTransform: 'none'
          "& .MuiButton-colorPrimary": {
            color: "#fff",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#101011",
          backgroundImage: "unset",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#121212",
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          fontFamily: ["Courier"],
          border: "none",
          outline: "none",
          backgroundColor: "#131419",
        },
        header: {
          border: "none",
          outline: "none",
          backgroundColor: "#131419",
        },
        cell: {
          border: "none",
          outline: "none",
        },
      },
    },
  },
};

export const theme = defaultTheme;

type TThemeContext = {
  isLarge: boolean;
  isExtraLarge: boolean;
};

const initialValue: TThemeContext = {
  isLarge: true,
  isExtraLarge: false,
};

export const ThemeContext = createContext<TThemeContext>(initialValue);

export const FlexibleThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLarge, setLarge] = useState(false);
  const [isExtraLarge, setExtraLarge] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted]);

  const onScreenChange = (mql: MediaQueryList, mxql: MediaQueryList) => () => {
    setLarge(mql.matches);
    setExtraLarge(mxql.matches);
  };

  const large = "(min-width: 600px) and (orientation: landscape)";
  const extraLarge = "(min-width: 1280px) and (orientation: landscape)";

  useEffect(() => {
    const mql = window.matchMedia(large);
    const mxql = window.matchMedia(extraLarge);
    onScreenChange(mql, mxql)();
    mql.onchange = onScreenChange(mql, mxql);
  }, []);

  const theme = useMemo(
    () => responsiveFontSizes(createTheme(defaultTheme, overrides)),
    [],
  );

  return (
    <ThemeContext.Provider value={{ isLarge, isExtraLarge }}>
      <ThemeProvider theme={theme}>{mounted && children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
