import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

export const Header = styled("header")({
  height: "80px",
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 999,
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  backdropFilter: "blur(10px)",
  boxShadow: "rgba(0, 0, 0, 0.05) 0px 2px 15px 0px",
  transition: "var(--main-transition)",
  
});

export const NavWrap = styled("nav")({
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: "8px",
  paddingRight: "8px",

  width: "1200px",
  height: "100%",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
});

export const NavList = styled("ul")({
  height: "100%",
  display: "flex",
  gap: "20px",
  justifyContent: "center",
  alignItems: "center",
});

export const NavItem = styled("li")({
  height: "100%",
});

export const NavLinkStyled = styled(NavLink)({
  fontFamily: "Manrope",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "24px",

  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "var(--primary-black-color)",
  textDecoration: "none",

  transition: "var(--main-transition)",
  "&:hover": {
    color: "var(--accent-color)",
  },
  "&.active": {
    color: "var(--accent-color)",
    cursor: "default",
  },
});

export const Logo = styled("h1")({
  minWidth: "120px",

  fontFamily: "Manrope",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "24px",
  color: "var(--primary-black-color)",
});
