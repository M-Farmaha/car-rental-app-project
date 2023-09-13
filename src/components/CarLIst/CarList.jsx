import { useEffect, useState } from "react";
import { CarCard } from "../CarCard/CarCard";
import { ApiRequest } from "../../ApiRequest";
import { CarListWrap } from "./CarList-styles";

export const CarList = () => {
  const [carArray, setCarArray] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await ApiRequest("catalog");
      if (response) setCarArray(response);
    })();
  }, []);

  return (
    <CarListWrap>
      {carArray.map((car) => (
        <li key={car.id}>
          <CarCard car={car} />
        </li>
      ))}
    </CarListWrap>
  );
};
