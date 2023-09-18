import axios from "axios";

const BASE_URL = "https://65019abb736d26322f5c0003.mockapi.io";

export const GetAll = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/adverts`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const GetAllFavoritesId = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/favorites`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const AddToFavorites = async (id) => {
  try {
    const response = await axios.post(`${BASE_URL}/favorites`, {
      id,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const removeFromFavorites = async (mockapiId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/favorites/${mockapiId}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
