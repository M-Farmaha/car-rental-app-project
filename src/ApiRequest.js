import axios from "axios";

const BASE_URL = "https://65019abb736d26322f5c0003.mockapi.io";
const limit = 8;

export const GetAll = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/catalog`, {
      params: {
        page,
        limit,
      },
    });
    return response;
  } catch (error) {
    console.log("Помилка отримання даних з сервера:", error);
  }
};

export const GetAllWithoutLimit = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/catalog`);
    return response;
  } catch (error) {
    console.log("Помилка отримання даних з сервера:", error);
  }
};

export const GetAllFavoritesId = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/favorites`);
    return response;
  } catch (error) {
    console.log("Помилка отримання даних з сервера:", error);
  }
};

export const AddToFavorites = async (id) => {
  try {
    const response = await axios.post(`${BASE_URL}/favorites`, {
      id,
      mockapiId: 9002,
    });
    return response;
  } catch (error) {
    console.log("Помилка додавання даних на сервер:", error);
  }
};

export const removeFromFavorites = async (mockapiId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/favorites/${mockapiId}`);
    return response;
  } catch (error) {
    console.log("Помилка видалення даних з серверу:", error);
  }
};
