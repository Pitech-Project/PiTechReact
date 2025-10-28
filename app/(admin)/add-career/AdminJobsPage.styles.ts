import { styled } from "@mui/material/styles";
import { Box, Paper, Button, Typography, FormControl } from "@mui/material";

// ✅ Page layout wrappers
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

// ✅ Header Section
export const HeaderBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 16,
}));

// ✅ Filters Section
export const FilterBox = styled(Box)(() => ({
  display: "flex",
  gap: 16,
  flexWrap: "wrap",
  marginBottom: 16,
}));

export const FilterFormControl = styled(FormControl)(() => ({
  minWidth: 200,
  "&.title": {
    minWidth: 220,
  },
  "&.status": {
    minWidth: 180,
  },
}));

export const ClearButton = styled(Button)(() => ({
  height: 40,
  textTransform: "none",
  fontWeight: 600,
}));

// ✅ Buttons
export const ButtonAdmin = styled(Button)(() => ({
  "&.MuiButton-root": {
    background: "#F7941E",
    color: "#fff",
    "&:hover": {
      background: "#e88914",
    },
  },
}));

export const ActionButton = styled(Button)(({ theme }) => ({
  height: 40,
  marginRight: theme.spacing(1),
}));

export const CancelButton = styled(Button)(() => ({
  height: 40,
}));

// ✅ Rich Editor Styles (if used later)
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

export const SubmitBox = styled(Box)(() => ({
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  background: "#fff",
  borderTop: "1px solid #ddd",
  paddingTop:"16px",
  paddingBottom:"16px",
  paddingLeft:"24px",
  paddingRight:"24px",
  display: "flex",
  justifyContent: "center",
  gap: 16,
  zIndex: 1000,
}));
