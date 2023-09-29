import { useEffect, useState } from "react";
import { FilterBar } from "../../components/FilterBar/FilterBar";
import { CarCard } from "../../components/CarCard/CarCard";
import {
  CarList,
  LoadMoreButton,
  NotFoundTMessage,
  Section,
} from "./CatalogPage-styles";
import { GetAll, GetAllFavoritesId } from "../../ApiRequest";

const LIMIT = 12;

export const CatalogPage = () => {
  const [totalCarsArray, setTotalCarsArray] = useState([]);
  const [filteredCarsArray, setFilteredCarsArray] = useState([]);
  const [paginationArray, setPaginationArray] = useState([]);

  const [page, setPage] = useState(1);
  const [favoriesIdArray, setFavoriesIdArray] = useState([]);
  const [filterParams, setFilterParams] = useState({
    brand: null,
    price: null,
    minMileage: null,
    maxMileage: null,
  });

  useEffect(() => {
    const section = document.querySelector("section");
    const nav = document.querySelector("nav");

    if (document.body.clientHeight > window.innerHeight) {
      section.style.marginRight = "0px";
      nav.style.marginRight = "0px";
    } else {
      section.style.marginRight = "8px";
      nav.style.marginRight = "8px";
    }
  }, [paginationArray]);

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

        if (
          filteredArray.length &&
          filterParams.brand &&
          filterParams.brand !== "All"
        ) {
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
        setPaginationArray(paginationArray);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [
    filterParams.brand,
    filterParams.maxMileage,
    filterParams.minMileage,
    filterParams.price,
    page,
    totalCarsArray,
  ]);

  useEffect(() => {
    if (paginationArray.length <= LIMIT) return;
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

        {paginationArray.length > 0 ? (
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
        ) : (
          <NotFoundTMessage>
            Any car does not match the search parameters
          </NotFoundTMessage>
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
