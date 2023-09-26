import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";
import BackgroundImage from "./background.jpg";
import { Link } from "react-router-dom";

export const Background = styled(Paper)({
  color: "var(--primary-black-color)",
  backgroundColor: "var(--primary-black-color)",
  backgroundImage: `linear-gradient(rgba(11, 19, 95, 0.4), rgba(0, 0, 0, 0.7)), url(${BackgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",

  paddingTop: "200px",
});

export const Section = styled("div")({
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "8px",
  paddingRight: "8px",
  maxWidth: "1200px",
});

export const ContentWrap = styled("div")({
  maxWidth: "400px",
  minWidth: "300xp",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  marginLeft: "20px",
});

export const Title = styled("h1")({
  fontFamily: "Manrope",
  fontSize: "44px",
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
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 400,
  color: "var(--primary-white-color)",
  lineHeight: "28px",
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
