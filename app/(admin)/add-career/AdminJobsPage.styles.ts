import { styled } from "@mui/material/styles";
import { Box, Paper, Button, Typography } from "@mui/material";

// ✅ Styled MUI Components
export const PageContainer = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1, 2),
}));

export const OuterBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#f5f5f5",
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(3),
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
}));

export const ActionButton = styled(Button)(({ theme }) => ({
  height: 40,
  marginRight: theme.spacing(1),
}));

export const CancelButton = styled(Button)(() => ({
  height: 40,
}));

export const FilterBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "start",
  marginBottom: 16,
}));

export const ButtonAdmin = styled(Button)(() => ({
  "&.MuiButton-root": {
    background: "#F7941E",
  },
}));

export const EditorWrapper = styled(Box)(() => ({
  border: "0",
  backgroundColor: "#fff",
}));

export const EditorStyle = {
  minHeight: "200px",
  backgroundColor: "#fff",
  padding: "6px",
  fontSize: "0.95rem",
  border: "none",
  borderRadius: "0px",
};

export const ToolbarStyle = {
  background: "#f9f9f9",
  borderRadius: "0px",
  border: "0",
  borderBottom: "none",
};
