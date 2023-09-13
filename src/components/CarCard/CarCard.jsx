
import { ButtonLike } from "../ButtonLike/ButtonLike";
import { ButtonText } from "../ButtonText/ButtonText";
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

export const CarCard = ({ car }) => {
  const {
    make,
    model,
    year,
    img,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
  } = car;
  const country = address.split(",")[2];
  const city = address.split(",")[1];
  const firstFunctionality = functionalities[0];

  return (
    <>
      <CardWrap>
        <ImageWrap sx={{ mb: 1.75 }}>
          <ButtonLike />
          <img src={img} alt={make} />
        </ImageWrap>

        <TitleWrap sx={{ mb: 1 }}>
          <CarTitle>
            {make} <span>{model}</span>, {year}
          </CarTitle>
          <CarPrice>{rentalPrice}</CarPrice>
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
            {mileage}
            <Divider />
            {firstFunctionality}
          </TagsText>
        </TagsWrap>

        <ButtonText text={"Learn more"} />
      </CardWrap>
    </>
  );
};
