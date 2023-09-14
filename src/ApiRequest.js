import axios from "axios";

const BASE_URL = "https://65019abb736d26322f5c0003.mockapi.io/";
const limit = 8;

export const ApiRequest = async (endpoint, page) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      params: {
        page,
        limit,
      },
    });
    return response;
  } catch (error) {
    console.error("Помилка отримання даних з сервера:", error);
  }
};
