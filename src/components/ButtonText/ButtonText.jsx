import { ButtonWrap } from "./ButtonText-styles";

export const ButtonText = ({ text, onClick, type, sx }) => {
  return (
    <ButtonWrap type={type} onClick={onClick} sx={sx}>
      {text}
    </ButtonWrap>
  );
};
