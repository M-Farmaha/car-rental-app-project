import { useEffect, useState } from "react";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { CarCard } from "../../components/CarCard/CarCard";
import {
  CarList,
  CarListWrap,
  LoadMoreButton,
  Section,
} from "./FavoritesPage-styles";
import { GetAll, GetAllFavoritesId } from "../../ApiRequest";

const LIMIT = 8;

export const FavoritesPage = () => {
  const [totalCarsArray, setTotalCarsArray] = useState([]);
  const [filteredCarsArray, setFilteredCarsArray] = useState([]);
  const [paginationArray, setPaginationArray] = useState([]);

  const [page, setPage] = useState(1);
  const [favoriesIdArray, setFavoriesIdArray] = useState([]);


  console.log(favoriesIdArray);
  const [filterParams, setFilterParams] = useState({
    brand: null,
    price: null,
    minMileage: null,
    maxMileage: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await GetAllFavoritesId();
        if (response) setFavoriesIdArray(response.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await GetAll();
        if (response) {
          setTotalCarsArray(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {

        let filteredArray = [...totalCarsArray];
        let paginationArray = [];

        if (filteredArray.length && favoriesIdArray.length) {
          filteredArray = filteredArray.filter((car) =>
            favoriesIdArray.some((favorite) => favorite.id === car.id)
          );
        }

        if (filteredArray.length && filterParams.brand && filterParams.brand !== "All") {
          filteredArray = filteredArray.filter(
            (car) => car.make === filterParams.brand
          );
        }

        if (filteredArray.length && filterParams.price) {
          filteredArray = filteredArray.filter(
            (car) => car.rentalPrice <= filterParams.price
          );
        }

        if (filteredArray.length && filterParams.minMileage) {
          filteredArray = filteredArray.filter(
            (car) => car.mileage >= filterParams.minMileage
          );
        }

        if (filteredArray.length && filterParams.maxMileage) {
          filteredArray = filteredArray.filter(
            (car) => car.mileage <= filterParams.maxMileage
          );
        }

        if (filteredArray.length) {
          paginationArray = filteredArray.filter(
            (_, index) => index < page * LIMIT
          );
        }

        
        setFilteredCarsArray(filteredArray);
        setPaginationArray(paginationArray)

      } catch (error) {
        console.log(error);
      }
    })();
  }, [favoriesIdArray, filterParams.brand, filterParams.maxMileage, filterParams.minMileage, filterParams.price, page, totalCarsArray]);

  useEffect(() => {
    if (paginationArray.length <= 8) return;
    window.scrollBy({
      top: 400,
      behavior: "smooth",
    });
  }, [paginationArray.length]);

  const handleLoadMoreClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <Section>
        <FilterBar setFilterParams={setFilterParams} setPage={setPage} />

        {paginationArray.length > 0 && (
          <CarListWrap>
            <CarList sx={{ mb: 12.5 }}>
              {paginationArray.map((car) => {
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

        {paginationArray.length > 0 &&
          paginationArray.length < filteredCarsArray.length && (
            <LoadMoreButton type="button" onClick={handleLoadMoreClick}>
              Load more
            </LoadMoreButton>
          )}
      </Section>
    </>
  );
};
