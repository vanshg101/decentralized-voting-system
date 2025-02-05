import styled from "@emotion/styled";
import {
  Select,
  Box,
  Button,
  ListItem,
  TextField,
  Typography,
  List,
  MenuItem,
} from "@mui/material";

// TextField styling
export const StyledTextField = styled(TextField)({
  width: 500,
  color: "black",
  "& .MuiInputBase-root": {
    color: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E0E3E7",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#6F7E8C",
    },
    "&:hover fieldset": {
      borderColor: "gray",
    },
  },
});

// Typography styling
export const StyledTypography = styled(Typography)({
  color: "black",
  marginBottom: 5,
  fontWeight: 700,
});

// Box for child components (margins)
export const StyledChildBox = styled(Box)({
  margin: 20,
});

// Submit button styling
export const StyledSubmitBtn = styled(Button)({
  backgroundColor: "#66BB6A",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
});

// List item styling
export const StyledListItem = styled(ListItem)({
  display: "list-item",
});

// List styling
export const StyledList = styled(List)({
  listStyle: "disc",
  color: "black",
  fontSize: 10,
});

// Success box styling for successful registration
export const StyledSuccessBox = styled(Box)({
  background: "green",
  width: 200,
  height: 50,
  padding: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  borderRadius: 5,
  margin: "auto",
  color: "white",
});

// Styled Select for dropdown
export const StyledSelect = styled(Select)({
  width: 500,
  color: "black",
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "green!important",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "& .MuiSvgIcon-root": {
    color: "white",
  },
  "&:hover": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
  },
  "::-moz-selection": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "white",
    },
  },
});

// MenuItem styling for Select dropdown
export const StyledMenuItem = styled(MenuItem)({
  color: "black",
});
