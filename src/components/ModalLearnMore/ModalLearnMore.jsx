import { Box, Modal } from "@mui/material";
import {
  SubTitle,
  AccessoriesText,
  ButtonClose,
  CarDescription,
  CarTitle,
  CloseIcon,
  Divider,
  ImageWrap,
  ModalWrap,
  TagsText,
  TagsWrap,
  ConditionsList,
  ConditionItem,
  ConditionText,
} from "./ModalLearnMore-styles";
import sprite from "../../sprite.svg";
import { ButtonText } from "../ButtonText/ButtonText";

export const ModalLearnMore = ({ open, onClose, car }) => {
  const {
    id,
    make,
    model,
    year,
    img,
    address,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = car;

  const country = address.split(",")[2];
  const city = address.split(",")[1];

  const conditionsArray = [
    ...rentalConditions.split("\n"),
    `Mileage: ${mileage.toLocaleString("en-US")}`,
    `Price: ${rentalPrice}`,
  ];

  const conditionsObject = {};
  for (const condition of conditionsArray) {
    const parts = condition.split(": ");
    const name = parts[0];
    const value = parts[1] || name;
    conditionsObject[name] = value;
  }
  const conditionsEntries = Object.entries(conditionsObject);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal learn more"
      aria-describedby="get more information about chosen car"
      slotProps={{
        backdrop: {
          sx: {
            backgroundColor: "rgba(18, 20, 23, 0.50)",
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

        <Box>
          <ImageWrap sx={{ mb: 1.75 }}>
            <img src={img} alt={make} />
          </ImageWrap>

          <CarTitle sx={{ mb: 1.75 }}>
            {make} <span>{model}</span>, {year}
          </CarTitle>

          <TagsWrap sx={{ mb: 1.75 }}>
            <TagsText>
              {city}
              <Divider />
              {country}
              <Divider />
              Id: {id}
              <Divider />
              Year: {year}
              <Divider />
              Type: {type}
              <br />
              Fuel Consumption: {fuelConsumption}
              <Divider />
              Engine Size: {engineSize}
            </TagsText>
          </TagsWrap>

          <CarDescription sx={{ mb: 3 }}>{description}</CarDescription>

          <SubTitle sx={{ mb: 1 }}>Accessories and functionalities:</SubTitle>

          <AccessoriesText sx={{ mb: 3 }}>
            {accessories[0]}
            <Divider />
            {accessories[1]}
            <Divider />
            {accessories[2]}
            <Divider />
            {functionalities[0]}
            <Divider />
            {functionalities[1]}
            <Divider />
            {functionalities[2]}
          </AccessoriesText>

          <SubTitle sx={{ mb: 1 }}>Rental Conditions:</SubTitle>

          <ConditionsList sx={{ mb: 3 }}>
            {conditionsEntries.map((el, index) => (
              <ConditionItem key={index}>
                {el[0] === el[1] ? (
                  <ConditionText>{el[0]}</ConditionText>
                ) : (
                  <ConditionText>
                    {el[0]}: <span>{el[1]}</span>
                  </ConditionText>
                )}
              </ConditionItem>
            ))}
          </ConditionsList>

          <ButtonText type={"button"} sx={{ width: "168px", height: "44px" }}>
            Rental car
          </ButtonText>
        </Box>
      </ModalWrap>
    </Modal>
  );
};
