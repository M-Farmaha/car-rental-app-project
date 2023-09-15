import { styled } from "@mui/material/styles";

export const Form = styled("form")({
  marginBottom: "50px",

  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "8px",
  paddingRight: "8px",

  width: "1200px",
  height: "74px",

  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-end",
  gap: "18px",
});

export const InputWrap = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "74px",
  gap: "8px",
  justifyContent: "space-between",
});

export const InputRangeWrap = styled("div")({
  display: "flex",
});

export const Input = styled("input")({
  height: "48px",
  width: "160px",

  paddingTop: "10px",
  paddingBottom: "10px",

  border: "none",
  outline: "none",
  borderRadius: "14px",
  backgroundColor: "var(--secondary-grey-color)",
  fontFamily: "Manrope",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "20px",
  color: "var(--primary-black-color)",
});

export const Label = styled("label")({
  color: "var( --primary-grey-color)",
  fontFamily: "Manrope",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "18px",
});

export const LabelMileage = styled("label")({
  position: "absolute",
  zIndex: "999",
  left: "24px",
  top: "14px",
  fontFamily: "Manrope",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "20px",
  color: "var(--primary-black-color)",

  pointerEvents: "none",
});
