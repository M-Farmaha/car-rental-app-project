import {
  Form,
  Input,
  InputRangeWrap,
  InputWrap,
  Label,
} from "./FilterBar-styled";

import Select from "react-select";

import { ButtonText } from "../ButtonText/ButtonText";
import { BrandSelectArray, PriceSelectArray } from "./SelectArrays";
import { useState } from "react";

export const FilterBar = () => {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [isBrandOpen, setIsBrandOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const selectStyles = {
    dropdownIndicator: (styles) => ({
      ...styles,
      color: "var(--primary-black-color)",
      transform: isBrandOpen ? "rotate(180deg)" : "rotate(0deg)",
    }),

    input: (styles) => ({
      ...styles,
      fontFamily: "Manrope",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "20px",
      cursor: "pointer",
      color: "var(--primary-black-color)",
    }),

    placeholder: (styles) => ({
      ...styles,
      fontFamily: "Manrope",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "20px",
      cursor: "pointer",
      color: "var(--primary-black-color)",
    }),

    container: (styles) => ({
      ...styles,
      fontFamily: "Manrope",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "20px",
      color: "var(--primary-black-color)",
    }),

    control: (styles) => ({
      ...styles,
      border: "none",
      borderWidth: 0,
      height: "48px",
      width: "224px",
      borderColor: "transparent",
      borderRadius: "14px",
      backgroundColor: "var(--secondary-grey-color)",
      cursor: "pointer",
      padding: "0px 8px",
    }),

    menu: (baseStyles) => ({
      ...baseStyles,
      overflow: "hidden",
      borderRadius: "14px",
      padding: "10px 0px",
    }),

    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      fontFamily: "Manrope",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "20px",
      cursor: "pointer",
      padding: "4px 18px",
      color:
        isSelected || isFocused
          ? "var(--primary-black-color)"
          : "rgba(18, 20, 23, 0.20)",
      backgroundColor: "var(--primary-white-color)",
    }),

    menuList: (base) => ({
      ...base,
      "::-webkit-scrollbar": {
        width: "24px",
        height: "130px",
      },
      "::-webkit-scrollbar-track": {
        background: "transparent",
      },
      "::-webkit-scrollbar-thumb": {
        background: "rgba(18, 20, 23, 0.1);",
        borderRadius: "9999px",
        border: "8px solid rgba(0, 0, 0, 0)",
        backgroundClip: "padding-box",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "rgba(18, 20, 23, 0.2);",
        borderRadius: "9999px",
        border: "8px solid rgba(0, 0, 0, 0)",
        backgroundClip: "padding-box",
      },
    }),
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputWrap sx={{ width: "224px" }}>
        <Label htmlFor="brand">Car brand</Label>
        <Select
          placeholder={"Enter the text"}
          maxMenuHeight={272}
          components={{
            IndicatorSeparator: () => null,
          }}
          styles={selectStyles}
          name="brand"
          value={brand}
          onMenuOpen={() => setIsBrandOpen(true)}
          onMenuClose={() => setIsBrandOpen(false)}
          onChange={(selectedOption) => setBrand(selectedOption)}
          options={BrandSelectArray.map((brand) => ({
            value: brand,
            label: brand,
          }))}
        ></Select>
      </InputWrap>

      <InputWrap sx={{ width: "125px" }}>
        <Label htmlFor="price">Price/ 1 hour</Label>
        <Select
          name="price"
          value={price}
          onChange={(selectedOption) => setPrice(selectedOption)}
          options={PriceSelectArray.map((price) => ({
            value: price,
            label: price,
          }))}
        ></Select>
      </InputWrap>

      <InputWrap>
        <Label htmlFor="carMileage">Сar mileage / km</Label>
        <InputRangeWrap>
          <Input type="number" name="minMileage" min="0" />
          <Input type="number" name="maxMileage" min="0" />
        </InputRangeWrap>
      </InputWrap>

      <ButtonText
        type={"submit"}
        text={"Search"}
        sx={{ width: "136px", height: "48px" }}
      />
    </Form>
  );
};
