import { styled } from "@mui/material/styles";
import { NavLink } from 'react-router-dom';

export const Header = styled("header")({
  height: "80px",
  top: 0,
  left: 0,
  position: "sticky",
  zIndex: 9999,
  backgroundColor: "var(--secondary-grey-color)",

  transition: "var(--main-transition)",
});

export const NavWrap = styled("nav")({
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "440px",
  height: "100%",
  padding: "0px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
});

export const NavList = styled("ul")({
  height: "80%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const NavItem = styled("li")({
  height: "100%",
  minWidth: "66px",
});

export const NavLinkStyled = styled(NavLink)({
  fontFamily: "Manrope",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "24px",

  height: "100%",
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
  color: "var( --primary-grey-color)",
  textDecoration: "none",

  transition: "var(--main-transition)",
  '&:hover': {
    color: "var(--primary-black-color)",
  },
  '&.active': {
    color: "var(--primary-black-color)",
    cursor: "default",
  },
});

export const TitleWrap = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const PhonebookTitle = styled("h1")({
  fontFamily: "Manrope",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "24px",
  color: "var(--primary-black-color)",
  transition: "var(--main-transition)",
});
