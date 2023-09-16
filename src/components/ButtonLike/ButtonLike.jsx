import { useState } from "react";
import sprite from "../../sprite.svg";
import { Button, ButtonIcon } from "./ButtonLike-styles";
import { AddToFavorites, removeFromFavorites } from "../../ApiRequest";

export const ButtonLike = ({ id, mockapiId }) => {
  const [isLiked, setIsLiked] = useState(mockapiId !== null);
  const [newMockapiId, setNewMockapiId] = useState(mockapiId);

  const handleButtonLikeClick = async () => {
    try {
      if (isLiked) {
        await removeFromFavorites(newMockapiId);
        setNewMockapiId(null);
      } else {
        const { data } = await AddToFavorites(id);
        setNewMockapiId(data.mockapiId);
      }
      setIsLiked(!isLiked);
    } catch (error) {
      console.log(error);
    }
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
