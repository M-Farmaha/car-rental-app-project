import { ButtonWrap } from "./ButtonText-styles";

export const ButtonText = ({ children, onClick, type, sx }) => {
  return (
    <ButtonWrap type={type} onClick={onClick} sx={sx}>
      {children}
    </ButtonWrap>
  );
};
