import { styled } from "@mui/material/styles";

export const ModalWrap = styled("div")({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "var(--primary-white-color)",
  borderRadius: "24px",
  padding: "40px",

  overflow: "hidden",

  maxWidth: "540px",
  width: "90vw",
  minWidth: "300px",

  maxHeight: "90vh",
  minHeight: "500px",

  display: "flex",
  flexDirection: "column",
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
    color: "var(--accent-color)",
  },
});

export const CloseIcon = styled("svg")({
  width: "24px",
  height: "24px",
  stroke: "currentcolor",
});

export const ImageWrap = styled("div")({
  position: "relative",
  overflow: "hidden",
  width: "100%",
  minHeight: "248px",
  height: "248px",
  borderRadius: "14px",
  background:
    "linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%), #F3F3F2",

  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export const CarTitle = styled("p")({
  color: "var(--primary-black-color)",
  fontFamily: "Manrope",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "24px",

  whiteSpace: "nowrap",
  textOverflow: "ellipsis",

  "& span": {
    color: "var(--accent-color)",
  },
});

export const CarPrice = styled("p")({
  color: "var(--primary-black-color)",
  fontFamily: "Manrope",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "24px",
});

export const TagsWrap = styled("div")({
  width: "100%",
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

export const CarDescription = styled("p")({
  color: "var(--primary-black-color)",
  fontFamily: "Manrope",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "20px",
});

export const SubTitle = styled("p")({
  color: "var(--primary-black-color)",
  fontFamily: "Manrope",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "24px",
});

export const AccessoriesText = styled("p")({
  color: "var(--alternative-grey-corol)",
  opacity: 0.5,
  fontFamily: "Manrope",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "18px",
});

export const ConditionsList = styled("ul")({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "8px",
});

export const ConditionItem = styled("li")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "var(--secondary-grey-color)",
  padding: "7px 14px",
  borderRadius: "35px",
});

export const ConditionText = styled("p")({
  color: "var(--alternative-grey-corol)",
  fontFamily: "Manrope",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "18px",

  "& span": {
    color: "var(--accent-color)",
    fontWeight: 600,
  },
});

export const PhoneNumberLink = styled("a")({
  textDecoration: "none",
  height: "44px",
  width: "168px",
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

  cursor: "pointer",

  transition: "var(--main-transition)",

  "&:hover": {
    backgroundColor: "var(--accent-hover-color)",
  },
});
