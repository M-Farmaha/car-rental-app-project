import { useEffect, useState } from "react";
import { CarCard } from "../CarCard/CarCard";
import { ApiRequest } from "../../ApiRequest";
import { CarListWrap, LoadMoreButton } from "./CarList-styles";
import { FilterBar } from "../FilterBar/FilterBar";

export const CarList = () => {
  const [carsArray, setCarsArray] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const { data } = await ApiRequest("catalog", page);

      if (page === 1) setCarsArray(data);
      if (page > 1) setCarsArray((prev) => [...prev, ...data]);
    })();
  }, [page]);

  useEffect(() => {
    if (carsArray.length <= 8) return;
    window.scrollBy({
      top: 777,
      behavior: "smooth",
    });
  }, [carsArray]);

  const handleLoadMoreClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
    <FilterBar/>
      {carsArray.length > 0 && <CarListWrap sx={{ mb: 12.5 }}>
        {carsArray.map((car) => (
          <li key={car.id}>
            <CarCard car={car} />
          </li>
        ))}
      </CarListWrap>}

      {carsArray.length > 0 && carsArray.length < 40 && (
        <LoadMoreButton type="button" onClick={handleLoadMoreClick}>
          Load more
        </LoadMoreButton>
      )}
    </>
  );
};
