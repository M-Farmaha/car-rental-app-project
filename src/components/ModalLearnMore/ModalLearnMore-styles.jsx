import { styled } from "@mui/material/styles";

export const ModalWrap = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "540px",
  height: "540px",
  backgroundColor: "var(--primary-white-color)",
  borderRadius: "24px",
  padding: "40px",
});

export const ButtonClose = styled("button")({
  position: "absolute",
  top: "16px",
  right: "16px",
  width: "24px",
  height: "24px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "var(--primary-black-color)",
  backgroundColor: "transparent",
  
  border: "none",
  transition: "var(--main-transition)",

  "&:hover": {
    color: "var(--accent-hover-color)",
    transform: "scale(1.2)",
  },
});

export const CloseIcon = styled("svg")({
  width: "24px",
  height: "24px",
  stroke: "currentcolor",
});
