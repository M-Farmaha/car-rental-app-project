import { Modal } from "@mui/material";
import { ButtonClose, CloseIcon, ModalWrap } from "./ModalLearnMore-styles";
import sprite from "../../sprite.svg";

export const ModalLearnMore = ({ open, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal learn more"
      aria-describedby="get more information about chosen car"
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: 'rgba(18, 20, 23, 0.50)',
            backdropFilter: "blur(6px)",
          },
        },
      }}
    >
      <ModalWrap>
        <ButtonClose type="button" onClick={onClose}>
          <CloseIcon>
          <use href={sprite + "#icon-close"}></use>
          </CloseIcon>
        </ButtonClose>
      </ModalWrap>
    </Modal>
  );
};
