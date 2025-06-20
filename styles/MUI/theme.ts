/* eslint-disable no-undef */
"use client";

import { createTheme, ThemeOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    overline_s: React.CSSProperties;
    overline_s_400: React.CSSProperties;
    overline_s_700: React.CSSProperties;
    body_1: React.CSSProperties;
    body_2: React.CSSProperties;
    body_2_500: React.CSSProperties;
    body_3: React.CSSProperties;
    body_3_400: React.CSSProperties;
    body_3_600: React.CSSProperties;
    body_4: React.CSSProperties;
    body_4_600: React.CSSProperties;
    body_4_400: React.CSSProperties;
    body_5: React.CSSProperties;
    body_6: React.CSSProperties;
    body_7: React.CSSProperties;
    body_8: React.CSSProperties;
    count: React.CSSProperties;
    year_count: React.CSSProperties;
    year: React.CSSProperties;
    Caption: React.CSSProperties;
    Caption1: React.CSSProperties;
    small_typography: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    overline_s?: React.CSSProperties;
    overline_s_400?: React.CSSProperties;
    overline_s_700?: React.CSSProperties;
    body_1: React.CSSProperties;
    body_2: React.CSSProperties;
    body_2_500: React.CSSProperties;
    body_3: React.CSSProperties;
    body_3_400: React.CSSProperties;
    body_3_600: React.CSSProperties;
    body_4: React.CSSProperties;
    body_4_600: React.CSSProperties;
    body_4_400: React.CSSProperties;
    body_5: React.CSSProperties;
    body_6: React.CSSProperties;
    body_7: React.CSSProperties;
    body_8: React.CSSProperties;
    count: React.CSSProperties;
    year_count: React.CSSProperties;
    year: React.CSSProperties;
    Caption?: React.CSSProperties;
    Caption1?: React.CSSProperties;
    small_typography?: React.CSSProperties;
  }

  interface BreakpointOverrides {
    containerlargedesktop: true;
    largescreen: true;
    smallDesktop: true;
    middlescreen: true;
    sm: true;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    overline_s: true;
    overline_s_400: true;
    overline_s_700: true;
    body_1: true;
    body_2: true;
    body_2_500: true;
    body_3: true;
    body_3_400: true;
    body_3_600: true;
    body_4: true;
    body_4_600: true;
    body_4_400: true;
    body_5: true;
    body_6: true;
    body_7: true;
    body_8: true;
    count: true;
    year_count: true;
    year: true;
    Caption: true;
    Caption1: true;
    small_typography: true;
  }
}

interface CustomPalette {
  black?: string;
  black1?: string;
  black2?: string;
  black3?: string;
  border1?: string;
  border2?: string;
  white?: string;
  white1?: string;
  white2?: string;
  white3?: string;
  white4?: string;
  white5?: string;
  white6?: string;
  bgcolor?: string;
  grey_700?: string;
  grey_200?: string;
  orange_600?: string;
  red?: string;
  brown?: string;
  borderColor?: string;
}

declare module "@mui/material/styles" {
  interface PaletteOptions {
    custom?: CustomPalette;
  }
  interface Palette {
    custom?: CustomPalette;
  }
}

const breakpoints = {
  largescreen: "1920px",
  smallDesktop: "1536px",
  lg: "1199px",
  md: "991px",
  sm: "767px",
};

const body_3 = {
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "36px",
  letterSpacing: "0.15px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    fontSize: "20px",
    lineHeight: "32px",
  },
  [`@media (max-width: ${breakpoints.md})`]: {
    fontSize: "18px",
    lineHeight: "29px",
  },
};

const overline_s = {
  fontWeight: 600,
  fontSize: "16px",
  letterSpacing: "0.15px",
};

const body_2 = {
  fontWeight: 400,
  fontSize: "32px",
  lineHeight: "41.66px",
  letterSpacing: "0.15px",
};

const body_4 = {
  fontWeight: 500,
  fontSize: "18px",
  lineHeight: "28px",
  letterSpacing: "0.2px",
  [`@media (max-width: ${breakpoints.md})`]: {
    fontSize: "16px",
    lineHeight: "26px",
  },
};

const body_5 = {
  fontSize: "31px",
  lineHeight: "40px",
  letterSpacing: "0.15px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    fontSize: "25px",
    lineHeight: "35px",
  },
  [`@media (max-width: ${breakpoints.md})`]: {
    fontSize: "24px",
    lineHeight: "32px",
  },
};

const typography: ThemeOptions["typography"] = {
  overline_s_400: {
    ...overline_s,
    fontWeight: 400,
  },
  overline_s_700: {
    ...overline_s,
    fontWeight: 700,
  },
  body_1: {
    fontWeight: 500,
    fontSize: "86px",
    lineHeight: "96px",
    letterSpacing: "0.15px",
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "60px",
      lineHeight: "60px",
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
      fontSize: "40px",
      lineHeight: "48px",
    },
  },
  body_2,
  body_2_500: {
    ...body_2,
    fontWeight: 500,
  },
  body_3,
  body_3_600: {
    ...body_3,
    fontWeight: 600,
  },
  body_3_400: {
    ...body_3,
    fontWeight: 400,
  },
  body_4,
  body_4_400: {
    ...body_4,
    fontWeight: 400,
  },
  body_4_600: {
    ...body_4,
    fontWeight: 600,
  },
  body_5: {
    ...body_5,
    fontWeight: 600,
  },
  body_6: {
    fontWeight: 500,
    fontSize: "60px",
    lineHeight: "68px",
    letterSpacing: "0.15px",
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "52px",
      lineHeight: "64px",
    },
    [`@media (max-width: ${breakpoints.md})`]: {
      fontSize: "40px",
      lineHeight: "48px",
    },
  },
  body_7: {
    fontWeight: 500,
    fontSize: "96px",
    lineHeight: "normal",
    letterSpacing: "0.15px",
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "70px",
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
      fontSize: "30px",
    },
  },
  body_8: {
    fontWeight: 400,
    fontSize: "22px",
    lineHeight: "34px",
  },
  count: {
    fontWeight: 600,
    fontSize: "48px",
    lineHeight: "68px",
    letterSpacing: "0.15px",
    textAlign: "center",
    [`@media (max-width: ${breakpoints.lg})`]: {
      fontSize: "30px",
      lineHeight: "36px",
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
      fontSize: "27px",
      lineHeight: "36px",
    },
  },
  year_count: {
    fontWeight: 900,
    fontSize: "464px",
    lineHeight: "346.16px",
    letterSpacing: "0.15px",
  },
  year: {
    fontWeight: 700,
    fontSize: "251px",
    lineHeight: "185.5px",
    letterSpacing: "0.15px",
  },
  Caption: {
    ...body_5,
    fontWeight: 400,
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "26px",
      lineHeight: "36px",
    },
    [`@media (max-width: ${breakpoints.md})`]: {
      fontSize: "25px",
      lineHeight: "30px",
    },
    [`@media (max-width: ${breakpoints.md})`]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
  Caption1: {
    fontWeight: 400,
    fontSize: "31px",
    lineHeight: "40px",
    letterSpacing: "0.15px",
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "26px",
      lineHeight: "36px",
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
      fontSize: "20px",
      lineHeight: "26px",
    },
  },
  small_typography: {
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "14px",
    letterSpacing: "1.6px",
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#fff",
    },
    primary: {
      main: "#1976D2",
    },
    secondary: {
      main: "#444446",
    },
    error: {
      main: "rgba(255, 69, 26, 1)",
    },
    custom: {
      black: "#151515 !important",
      black1: "#444446",
      black2: "#0E0E0E",
      black3: "#58595B",
      bgcolor: "#F6F6F6 !important",
      white: "#ffffff !important",
      white1: "#E4E4E4 !important",
      white2: "#F6F6F6 !important",
      white3: "#AFAFB0",
      white4: "#8B8B8C",
      white5: "#f2f2f2 !important",
      white6: "#a2a2a2",
      border1: "#c6c6c6",
      border2: "#1F1F1F !important",
      grey_700: "#4F4F50",
      grey_200: "#E7E7E8",
      orange_600: "#F7941E !important",
      red: "#FF8989 !important",
      brown: "#6e3c00",
      borderColor: "#737373",
    },
  },

  typography: {
    fontFamily: "DM Sans, serif",
    ...typography,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        scrollbarColor: "#000000",
        "& body": {
          padding: "0 !important",
          backgroundColor: "#f6f6f6",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ECEFF1",
          borderRadius: "10px",
        },
      },
    },
  },
});
