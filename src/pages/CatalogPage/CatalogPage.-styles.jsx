import { styled } from "@mui/material/styles";

export const Section = styled("section")({
  paddingTop: "150px",
  paddingBottom: "150px",
});

export const CarListWrap = styled("ul")({
  width: "1184px",
  marginLeft: "auto",
  marginRight: "auto",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  columnGap: "29px",
  rowGap: "50px ",
});

export const LoadMoreButton = styled("button")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "79px",
  height: "24px",
  marginLeft: "auto",
  marginRight: "auto",

  border: "none",
  backgroundColor: "transparent",
  color: "var(--accent-color)",
  fontFamily: "Manrope",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "24px" /* 150% */,
  textDecorationLine: "underline",
  cursor: "pointer",

  "&:hover": {
    color: "var(--accent-hover-color)",
  },
});
