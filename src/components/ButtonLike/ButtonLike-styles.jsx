import { IconButton, styled } from "@mui/material";

export const Button = styled(IconButton)({
  position: "absolute",
  right: "14px",
  top: "14px",

  width: "20px",
  height: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0px",
  color: "var(--accent-color)",

  transition: "var(--main-transition)",

  "&:hover": {
    transform: "scale(1.4)",
    backgroundColor: "transparent",
    color: "var(--accent-hover-color)",
    opacity: 1,
  },
});

export const ButtonIcon = styled("svg")(({ isLiked }) => ({
  width: "18px",
  height: "18px",
  strokeWidth: 3,
  stroke: isLiked ? "currentColor" : "var(--primary-white-color)",
  fill: isLiked ? "currentColor" : "none",
}));
