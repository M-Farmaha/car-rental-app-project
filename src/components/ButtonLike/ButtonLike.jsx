import { useState } from "react";
import sprite from "../../sprite.svg";
import { Button, ButtonIcon } from "./ButtonLike-styles";

export const ButtonLike = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleButtonLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <Button
      onClick={handleButtonLikeClick}
      aria-label="like"
      sx={{ opacity: isLiked ? 1 : 0.8 }}
    >
      <ButtonIcon isLiked={isLiked}>
        <use href={sprite + "#icon-like"}></use>
      </ButtonIcon>
    </Button>
  );
};
