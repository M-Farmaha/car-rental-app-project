import { IconButton, styled } from "@mui/material";

export const Button = styled(IconButton)({
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px",
    color: "var(--accent-color)",

    "&:hover": {
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
