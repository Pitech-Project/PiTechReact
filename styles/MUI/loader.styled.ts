import { keyframes } from "@emotion/react";
import { styled, Box } from "@mui/material";

export const shine = keyframes`
  to {
    background-position-x: -200%;
  }
`;

export const slideUp = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const scroll = keyframes`
    0% {
        top: 0px;
    }
    100% {
        top: -175px;
    }
`;

export const LoaderWrapper = styled(Box)(() => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "#000",
  zIndex: "9999",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const SkeletonContainer = styled(Box)(() => ({
  width: "400px",
  height: "175px",
  overflow: "hidden",
  position: "absolute",
  right: "10%",
  bottom: "100px",
  animation: `${slideUp} 1s ease-out`,
}));

export const Group1 = styled(Box)(() => ({
  animation: `${scroll} 1s linear infinite`,
  animationDelay: "1s",
  position: "relative",
}));

export const Group = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
}));

export const Line = styled(Box)(() => ({
  display: "flex",
  gap: "1rem",
}));

export const Dash = styled(Box)<{ width?: string }>(() => ({
  height: "20px",
  borderRadius: "5px",
  background: "linear-gradient(90deg, #333 25%, #222 50%, #333 75%",
  backgroundSize: "200% 100%",
  animation: "${shine} 2s infinite linear",
}));
