import { ButtonLike } from "../ButtonLike/ButtonLike";
import { ButtonText } from "../ButtonText/ButtonText";
import { ModalLearnMore } from "../ModalLearnMore/ModalLearnMore";
import {
  CarPrice,
  CarTitle,
  CardWrap,
  ImageWrap,
  TagsText,
  TitleWrap,
  Divider,
  TagsWrap,
} from "./CarCard.styles";
import { useState } from "react";

export const CarCard = ({ car, mockapiId }) => {
  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    address,
    rentalCompany,
    type,
    functionalities,
  } = car;
  const country = address.split(",")[2];
  const city = address.split(",")[1];
  const firstFunctionality = functionalities[0];

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CardWrap>
        <ImageWrap sx={{ mb: 1.75 }}>
          <ButtonLike id={id} mockapiId={mockapiId} />
          <img src={img} alt={make} />
        </ImageWrap>

        <TitleWrap sx={{ mb: 1 }}>
          <CarTitle>
            {make} <span>{model}</span>, {year}
          </CarTitle>
          <CarPrice>{`$${rentalPrice}`}</CarPrice>
        </TitleWrap>

        <TagsWrap sx={{ mb: 3.5 }}>
          <TagsText>
            {city}
            <Divider />
            {country}
            <Divider />
            {rentalCompany}
            <br />
            {type}
            <Divider />
            {model}
            <Divider />
            {id}
            <Divider />
            {firstFunctionality}
          </TagsText>
        </TagsWrap>

        <ButtonText type={"button"} onClick={() => setIsModalOpen(true)}>
          Learn more
        </ButtonText>
      </CardWrap>

      <ModalLearnMore
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        car={car}
      />
    </>
  );
};
