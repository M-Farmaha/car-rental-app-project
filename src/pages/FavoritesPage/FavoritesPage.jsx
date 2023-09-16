import { useEffect, useState } from "react";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { CarCard } from "../../components/CarCard/CarCard";
import { CarList, CarListWrap, Section } from "./FavoritesPage-styles";
import { GetAllFavoritesId, GetAllWithoutLimit } from "../../ApiRequest";

export const FavoritesPage = () => {
  const [carsArray, setCarsArray] = useState([]);
  const [filteredCarsArray, setFilteredCarsArray] = useState([]);
  const [favoriesIdArray, setFavoriesIdArray] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await GetAllWithoutLimit();
      if (response) setCarsArray(response.data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await GetAllFavoritesId();
        if (response) {
          setFavoriesIdArray(response.data);
          const favoriteCarIds = response.data.map((item) => item.id);
          const filteredCars = carsArray.filter((car) =>
            favoriteCarIds.includes(car.id)
          );
          setFilteredCarsArray(filteredCars);
        }
      } catch (error) {
        console.error("Помилка отримання обраних об'єктів:", error);
      }
    })();
  }, [carsArray]);

  return (
    <>
      <Section>
        <FilterBar />

        {filteredCarsArray.length > 0 && (
          <CarListWrap>
            <CarList sx={{ mb: 12.5 }}>
              {filteredCarsArray.map((car) => {
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
      </Section>
    </>
  );
};
