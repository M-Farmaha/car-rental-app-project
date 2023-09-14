import { styled } from "@mui/material/styles";

export const CardWrap = styled("div")({
  width: "274px",
});

export const ImageWrap = styled("div")({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  height: "268px",
  borderRadius: "14px",
  background:
    "linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), #F3F3F2",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export const TitleWrap = styled("div")({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
});

export const CarTitle = styled("p")({
  color: "var(--primary-black-color)",
  fontFamily: "Manrope",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "24px",

  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",

  "& span": {
    color: "var(--accent-color)",
  },
});

export const CarPrice = styled("p")({
  color: "var(--primary-black-color)",
  fontFamily: "Manrope",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "24px",
});

export const TagsWrap = styled("div")({
  width: "100%",
  height: "40px",
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
});

export const TagsText = styled("p")({
  color: "var(--alternative-grey-corol)",
  opacity: 0.5,
  fontFamily: "Manrope",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: 1.5,

  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const Divider = styled("span")({
  display: "inline-block",
  backgroundColor: "var(--alternative-grey-corol)",
  opacity: 0.1,
  width: "1px",
  height: "16px",
  marginLeft: "6px",
  marginRight: "6px",
  marginBottom: "-4px",
});
