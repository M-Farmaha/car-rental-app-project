import { styled } from "@mui/material/styles";

export const Form = styled("form")({
  marginBottom: "50px",
  marginLeft: "auto",
  marginRight: "auto",
  width: "859px",
  height: "74px",

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
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
  height: "28px",

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
  lineHeight: "18px", // 128.571%
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
