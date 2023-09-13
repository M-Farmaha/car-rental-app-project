import { Button, styled } from "@mui/material";

export const ButtonWrap = styled(Button)({
  height: "44px",
  width: "100%",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "12px",
  borderRadius: "12px",

  backgroundColor: "var(--accent-color)",
  color: "var(--primary-white-color)",

  fontSize: "14px",
  fontFamily: "Manrope",
  fontWeight: 600,

  textTransform: "none",
  lineHeight: "20px",
  letterSpacing: 0,

  "&:hover": {
    backgroundColor: "var(--accent-hover-color)",
  },
});
