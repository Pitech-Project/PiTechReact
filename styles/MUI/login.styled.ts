"use client";

import { styled, Stack, TextField, Button } from "@mui/material";

export const LoginContainer = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  minHeight: "100%",
  "&::before": {
    content: '""',
    display: "block",
    position: "absolute",
    zIndex: -1,
    inset: 0,
    backgroundImage:
      "radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))",
    backgroundRepeat: "no-repeat",
    ...theme.applyStyles("dark", {
      backgroundImage:
        "radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
    }),
  },
}));

export const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-notchedOutline": {
    border: 0,
    borderBottom: "2px solid",
    borderColor: theme.palette.custom?.border1,
    borderRadius: 0,
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: `${theme.palette.custom?.black2} !important`,
  },
  "& .MuiOutlinedInput-input": {
    padding: "12.5px 0",
    height: "20px",
  },
  "& .MuiInputLabel-root": {
    fontSize: "15px",
  },
}));

export const BlackButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.custom?.black2,
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.custom?.black2,
  },
}));
