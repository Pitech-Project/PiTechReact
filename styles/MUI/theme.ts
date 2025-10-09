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
    body_2_1: React.CSSProperties;
    body_2_500: React.CSSProperties;
    body_3: React.CSSProperties;
    body_3_400: React.CSSProperties;
    body_3_500: React.CSSProperties;
    body_3_600: React.CSSProperties;
    body_4: React.CSSProperties;
    body_4_600: React.CSSProperties;
    body_4_500: React.CSSProperties;
    body_4_400: React.CSSProperties;
    body_5: React.CSSProperties;
    body_5_1: React.CSSProperties;
    body_6: React.CSSProperties;
    body_7: React.CSSProperties;
    body_8: React.CSSProperties;
    body_9: React.CSSProperties;
    body_10: React.CSSProperties;
    body_10_1: React.CSSProperties;
    body_10_500: React.CSSProperties;
    body_11: React.CSSProperties;
    body_11_1: React.CSSProperties;
    body_12: React.CSSProperties;
    body_9_600: React.CSSProperties;
    body_9_600_1: React.CSSProperties;
    count: React.CSSProperties;
    year_count: React.CSSProperties;
    year: React.CSSProperties;
    Caption: React.CSSProperties;
    Caption1: React.CSSProperties;
    Caption2: React.CSSProperties;
    small_typography: React.CSSProperties;
    small_typography1: React.CSSProperties;
    font_38: React.CSSProperties;
    para: React.CSSProperties;
    font_19_600: React.CSSProperties;
    mediumFont: React.CSSProperties;
    font_19_500?: React.CSSProperties;
    font_subtitle?: React.CSSProperties;
    short_desc?: React.CSSProperties;
    font_14?: React.CSSProperties;
    font_19?: React.CSSProperties;
    font_20?: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    overline_s?: React.CSSProperties;
    overline_s_400?: React.CSSProperties;
    overline_s_700?: React.CSSProperties;
    body_1: React.CSSProperties;
    body_2: React.CSSProperties;
    body_2_1: React.CSSProperties;
    body_2_500: React.CSSProperties;
    body_3: React.CSSProperties;
    body_3_400: React.CSSProperties;
    body_3_500: React.CSSProperties;
    body_3_600: React.CSSProperties;
    body_4: React.CSSProperties;
    body_4_600: React.CSSProperties;
    body_4_500: React.CSSProperties;
    body_4_400: React.CSSProperties;
    body_5: React.CSSProperties;
    body_5_1: React.CSSProperties;
    body_6: React.CSSProperties;
    body_7: React.CSSProperties;
    body_8: React.CSSProperties;
    body_9: React.CSSProperties;
    body_10: React.CSSProperties;
    body_10_1: React.CSSProperties;
    body_10_500: React.CSSProperties;
    body_11: React.CSSProperties;
    body_11_1: React.CSSProperties;
    body_12: React.CSSProperties;
    body_9_600: React.CSSProperties;
    body_9_600_1: React.CSSProperties;
    count: React.CSSProperties;
    year_count: React.CSSProperties;
    year: React.CSSProperties;
    Caption?: React.CSSProperties;
    Caption1?: React.CSSProperties;
    Caption2?: React.CSSProperties;
    small_typography?: React.CSSProperties;
    small_typography1?: React.CSSProperties;
    font_38?: React.CSSProperties;
    para?: React.CSSProperties;
    font_19_600?: React.CSSProperties;
    mediumFont?: React.CSSProperties;
    font_19_500?: React.CSSProperties;
    font_subtitle?: React.CSSProperties;
    short_desc?: React.CSSProperties;
    font_14?: React.CSSProperties;
    font_19?: React.CSSProperties;
    font_20?: React.CSSProperties;
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
    body_2_1: true;
    body_2_500: true;
    body_3: true;
    body_3_400: true;
    body_3_500: true;
    body_3_600: true;
    body_4: true;
    body_4_600: true;
    body_4_500: true;
    body_4_400: true;
    body_5: true;
    body_5_1: true;
    body_6: true;
    body_7: true;
    body_8: true;
    body_9: true;
    body_10: true;
    body_10_1: true;
    body_10_500: true;
    body_11: true;
    body_11_1: true;
    body_12: true;
    body_9_600: true;
    body_9_600_1: true;
    count: true;
    year_count: true;
    year: true;
    Caption: true;
    Caption1: true;
    Caption2: true;
    small_typography: true;
    small_typography1: true;
    font_38: true;
    para: true;
    font_19_600: true;
    mediumFont: true;
    font_19_500: true;
    font_subtitle: true;
    short_desc: true;
    font_14: true;
    font_19: true;
    font_20: true;
  }
}

interface CustomPalette {
  black?: string;
  black1?: string;
  black2?: string;
  black3?: string;
  black4?: string;
  gray_txt?: string;
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
  red1?: string;
  brown?: string;
  borderColor?: string;
  borderColor1?: string;
  black5?: string;
  grey?: string;
  black6?: string;
  light_green?: string;
  green?: string;
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
  lineHeight: "32px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    fontSize: "20px",
    lineHeight: "28px",
  },
  // [`@media (max-width: ${breakpoints.lg})`]: {
  //   fontSize: "18px",
  //   lineHeight: "29px",
  // },
  [`@media (max-width: ${breakpoints.sm})`]: {
    fontSize: "16px",
    lineHeight: "24px",
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
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    fontSize: "25px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    fontSize: "22px",
    lineHeight: "30px",
  },
};

const body_4 = {
  fontWeight: 500,
  fontSize: "18px !important",
  lineHeight: "28px !important",
  letterSpacing: "0.2px",
  [`@media (max-width: ${breakpoints.lg})`]: {
    fontSize: "16px !important",
    lineHeight: "16px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    fontSize: "14px !important",
    lineHeight: "14px",
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

const body_9 = {
  fontWeight: 500,
  fontSize: "24px",
  lineHeight: "32px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    fontSize: "22px",
    lineHeight: "30px",
  },
  [`@media (max-width: ${breakpoints.lg})`]: {
    fontSize: "24px",
    lineHeight: "32px",
  },
  [`@media (max-width: ${breakpoints.sm})`]: {
    fontSize: "16px",
    lineHeight: "24px",
  },
};

const body_10 = {
  fontWeight: 500,
  fontSize: "19px",
  lineHeight: "28px",
  // [`@media (max-width: ${breakpoints.sm})`]: {
  //   fontSize: "16px",
  //   lineHeight: "24px",
  // },
};
const font_19 = {
  fontSize: 19,
  lineHeight: "28px",
  [`@media (max-width: ${breakpoints.smallDesktop})`]: {
    fontSize: "16px",
    lineHeight: "26px",
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
    [`@media (max-width: ${breakpoints.lg})`]: {
      fontSize: "55px",
      lineHeight: "64px",
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
      fontSize: "28px",
      lineHeight: "32px",
      letterSpacing: "-0.32px",
    },
  },
  body_2,
  body_2_500: {
    ...body_2,
    fontWeight: 500,
  },

  body_2_1: {
    fontWeight: 400,
    fontSize: "32px",
    lineHeight: "36px",
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "24px",
      lineHeight: "32px",
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },

  body_3,
  body_3_600: {
    ...body_3,
    fontWeight: 600,
    lineHeight: "32px",
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "24px",
      lineHeight: "32px",
    },
    [`@media (max-width: ${breakpoints.lg})`]: {
      fontSize: "22px",
      lineHeight: "28px",
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
      fontSize: "16px !important",
      lineHeight: "24px !important",
    },
  },
  body_3_400: {
    ...body_3,
    fontWeight: 400,
  },
  body_3_500: {
    ...body_3,
    fontWeight: 500,
    display: "block",
  },
  para: {
    ...body_3,
    lineHeight: "32px",
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "22px",
      lineHeight: "30px",
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
  body_4,
  body_4_400: {
    ...body_4,
    fontWeight: 400,
  },
  body_9,
  body_9_600: {
    ...body_9,
    fontWeight: 600,
  },
  body_9_600_1: {
    ...body_9,
    fontWeight: 600,
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "17px",
      lineHeight: "25px",
    },
    [`@media (max-width: ${breakpoints.lg})`]: {
      fontSize: "22px",
      lineHeight: "28px",
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
      fontSize: "19px",
      lineHeight: "28px",
    },
  },

  body_10,
  body_10_500: {
    ...body_10,
    lineHeight: "24px",
    transition: "all 0.3s ease-in-out",
    margin: "12px 0",
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "17px",
      lineHeight: "22px",
    },
    [`@media (max-width: ${breakpoints.lg})`]: {
      margin: "26px 0 12px",
    },
  },

  body_4_600: {
    ...body_4,
    fontWeight: 600,
    lineHeight: "20px",
    letterSpacing: "2.4px",
    marginBottom: "8px",
    textTransform: "uppercase",
    display: "block",
  },

  body_4_500: {
    ...body_4,
    letterSpacing: "1.6px",
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "16px !important",
      lineHeight: "16.2px !important",
    },
    [`@media (max-width: ${breakpoints.lg})`]: {
      fontSize: "13px !important",
      lineHeight: "12px !important",
      letterSpacing: "1.3px",
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
      fontSize: "13px !important",
      lineHeight: "12px !important",
      letterSpacing: "1.3px",
    },
  },

  body_5: {
    ...body_5,
    fontWeight: 600,
  },

  body_5_1: {
    fontSize: "32px",
    lineHeight: "36px",
    letterSpacing: "0.15px",
    fontWeight: 400,
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "25px",
      lineHeight: "25px",
    },
  },

  body_6: {
    fontWeight: 500,
    fontSize: "56px",
    lineHeight: "60px",
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "48px",
      lineHeight: "54px",
    },
    [`@media (max-width: ${breakpoints.lg})`]: {
      fontSize: "54px",
      lineHeight: "58px",
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
      fontSize: "33px",
      lineHeight: "40px",
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
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "19px",
      lineHeight: "28px",
    },
  },
  body_10_1: {
    fontWeight: 500,
    fontSize: "19px",
    lineHeight: "28px",
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
      fontSize: "14px",
      lineHeight: "22px",
    },
  },
  body_11: {
    fontWeight: 500,
    fontSize: "32px",
    lineHeight: "36px",
    letterSpacing: "-0.32px",
    [`@media (max-width: ${breakpoints.lg})`]: {
      fontSize: "28px",
      lineHeight: "32px",
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
      fontSize: "22px",
      lineHeight: "28px",
    },
  },

  body_11_1: {
    fontWeight: 500,
    fontSize: "32px",
    lineHeight: "36px",
    letterSpacing: "-0.32px",
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "27px",
      lineHeight: "34px",
    },
    [`@media (max-width: ${breakpoints.lg})`]: {
      fontSize: "28px",
      lineHeight: "32px",
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
      fontSize: "20px",
      lineHeight: "28px",
    },
  },

  body_12: {
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "32px",
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "22px",
      lineHeight: "30px",
    },
    [`@media (max-width: ${breakpoints.lg})`]: {
      fontSize: "24px",
      lineHeight: "32px",
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
      fontSize: "19px",
      lineHeight: "28px",
    },
  },

  font_19_600: {
    ...font_19,
    fontWeight: 600,
  },

  font_19_500: {
    ...font_19,
    fontWeight: 500,
    [`@media (max-width: ${breakpoints.lg})`]: {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },

  count: {
    fontWeight: 600,
    fontSize: "40px",
    lineHeight: "44px",
    letterSpacing: "0.15px",
    textAlign: "center",
    [`@media (max-width: ${breakpoints.lg})`]: {
      fontSize: "32px",
      lineHeight: "36px",
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
      "&.careerTitle": {
        fontSize: "27px",
        lineHeight: "36px",
      },
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
    [`@media (max-width: ${breakpoints.sm})`]: {
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
  Caption2: {
    fontSize: "31px",
    lineHeight: "40px",
    letterSpacing: "0.15px",
    fontWeight: 400,
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "28px",
      lineHeight: "37px",
    },
    [`@media (max-width: ${breakpoints.lg})`]: {
      fontSize: "24px",
      lineHeight: "38px",
    },
  },
  small_typography: {
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "16px",
    letterSpacing: "1.6px",
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "14px",
      lineHeight: "14px",
    },
  },
  small_typography1: {
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "14px",
    letterSpacing: "1.4px",
    textTransform: "uppercase",
    textDecoration: "underline",
    textUnderlineOffset: "4px",
  },
  font_38: {
    fontSize: "38px",
    lineHeight: "44px",
    fontWeight: 500,
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "32px",
      lineHeight: "38px",
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
      fontSize: "33px",
      lineHeight: "40px",
    },
  },
  mediumFont: {
    fontSize: 32,
    lineHeight: "36px",
    fontWeight: 500,
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "30px",
      lineHeight: "34px",
    },
    [`@media (max-width: ${breakpoints.lg})`]: {
      fontSize: "24px",
      lineHeight: "32px",
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
      fontSize: "22px",
      lineHeight: "28px",
    },
  },
  font_subtitle: {
    fontSize: 19,
    lineHeight: "24px",
    fontWeight: 500,
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "16px",
      lineHeight: "22px",
    },
  },
  short_desc: {
    fontSize: 19,
    lineHeight: "30px",
    fontWeight: 500,
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "17px",
      lineHeight: "23px",
    },
  },
  font_14: {
    fontSize: 14,
    lineHeight: "20px",
    fontWeight: 500,
  },
  font_19: {
    fontWeight: 500,
    fontSize: "19px",
    lineHeight: "28px",
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      "&.descriptionAbout": {
        fontSize: "20px",
        lineHeight: "32px",
      },
    },
    [`@media (max-width: ${breakpoints.lg})`]: {
      "&.descriptionAbout": {
        fontSize: "19px",
        lineHeight: "28px",
      },
    },
    [`@media (max-width: ${breakpoints.sm})`]: {
      fontSize: "14px",
      lineHeight: "22px",
      "&.descriptionAbout": {
        fontSize: "14px",
        lineHeight: "22px",
      },
    },
  },
  font_20: {
    fontWeight: 400,
    fontSize: "19px",
    lineHeight: "28px",
    [`@media (max-width: ${breakpoints.smallDesktop})`]: {
      fontSize: "16px",
      lineHeight: "25px",
    },
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
      black: "#1b1b1b !important",
      black1: "#444446",
      black2: "#1b1b1b",
      black3: "#58595B",
      black4: "#0b0b0b !important",
      gray_txt: "#68686A",
      bgcolor: "#f4f4f4 !important",
      white: "#ffffff !important",
      white1: "#E4E4E4 !important",
      white2: "#f4f4f4 !important",
      white3: "#AFAFB0",
      white4: "#8B8B8C",
      white5: "#f2f2f2 !important",
      white6: "#a2a2a2",
      border1: "#c6c6c6",
      border2: "#1F1F1F !important",
      grey_700: "#CDCDCE",
      grey_200: "#E7E7E8",
      orange_600: "#F7941E !important",
      red: "#FF8989 !important",
      red1: "#B3261E !important",
      brown: "#6e3c00",
      borderColor: "#737373",
      borderColor1: "#323131",
      black5: "#191919",
      grey: "#bab9b9",
      black6: "#000000",
      light_green: "#badbcc",
      green: "#0f5132",
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
          backgroundColor: "#f4f4f4",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#ECEFF1",
          borderRadius: "10px",
        },
        "& .page-- .FooterTopSpacing": {
          backgroundColor: "#f4f4f4",
        },
        "& span br.br-tag": {
          display: "block ",
        },
        "& span br.d-block": {
          display: "block !important",
        },
        "& div .grecaptcha-badge": {
          display: "none !important",
        },
        "@media (max-width:1600px)": {
          "& span br.br-tag": {
            display: "none",
          },
        },
        "@media (max-width:899px)": {
          "& br": {
            display: "none",
          },
          "& .TabletViewBorder br": {
            display: "block",
          },
        },
        "@media (max-width:599px)": {
          "& .mobileAnimationNone": {
            transform: "none !important",
          },
        },
      },
    },
  },
});
