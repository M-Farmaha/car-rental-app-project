import { useEffect, useState } from "react";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { CarCard } from "../../components/CarCard/CarCard";
import {
  CarList,
  CarListWrap,
  LoadMoreButton,
  Section,
} from "./CatalogPage-styles";
import { GetAll, GetAllFavoritesId } from "../../ApiRequest";

export const CatalogPage = () => {
  const [carsArray, setCarsArray] = useState([]);
  const [page, setPage] = useState(1);
  const [favoriesIdArray, setFavoriesIdArray] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await GetAllFavoritesId();
        if (response) setFavoriesIdArray(response.data);
      } catch (error) {
        console.error("Помилка отримання обраних об'єктів:", error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await GetAll(page);
      if (response) {
        if (page === 1) setCarsArray(response.data);
        if (page > 1) setCarsArray((prev) => [...prev, ...response.data]);
      }
      } catch (error) {
        console.error("Помилка отримання всіх об'єктів:", error);
      }
    })();
  }, [page]);

  useEffect(() => {
    if (carsArray.length <= 8) return;
    window.scrollBy({
      top: 400,
      behavior: "smooth",
    });
  }, [carsArray]);

  const handleLoadMoreClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Section>
        <FilterBar />

        {carsArray.length > 0 && (
          <CarListWrap>
            <CarList sx={{ mb: 12.5 }}>
              {carsArray.map((car) => {
                let mockapiId = null;
                const favoriteItem = favoriesIdArray.find(
                  (item) => item.id === car.id
                );
                if (favoriteItem) {
                  mockapiId = favoriteItem.mockapiId;
                }
                return (
                  <li key={car.id}>
                    <CarCard car={car} mockapiId={mockapiId} />
                  </li>
                );
              })}
            </CarList>
          </CarListWrap>
        )}

        {carsArray.length > 0 && carsArray.length < 40 && (
          <LoadMoreButton type="button" onClick={handleLoadMoreClick}>
            Load more
          </LoadMoreButton>
        )}
      </Section>
    </>
  );
};
