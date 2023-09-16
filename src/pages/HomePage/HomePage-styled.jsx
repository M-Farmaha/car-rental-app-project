import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import BackgroundImage from "./background.jpg";
import { Link } from "react-router-dom";

export const Background = styled(Paper)({
  backgroundImage: `url(${BackgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  color: "var(--primary-black-color)",
  backgroundColor: "var(--primary-white-color)",
  paddingTop: "200px",
});

export const ContentSection = styled("div")({
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "8px",
  paddingRight: "8px",
  width: "1200px",
  height: "100%",

  color: "var(--primary-black-color)",
});

export const ContentWrap = styled("div")({
  width: "400px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const Title = styled("h1")({
  fontFamily: "Manrope",
  fontSize: "46px",
  fontStyle: "normal",
  fontWeight: 500,
  color: "var(--primary-white-color)",

  "& span": {
    color: "var(--accent-color)",
    fontWeight: 800,
  },
});

export const SubTitle = styled("p")({
  fontFamily: "Manrope",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 400,
  color: "var(--primary-white-color)",
});

export const ButtonLink = styled(Link)({
  textDecoration: "none",

  width: "180px",
  height: "48px",

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

  transition: "var(--main-transition)",

  "&:hover": {
    backgroundColor: "var(--accent-hover-color)",
  },
});
