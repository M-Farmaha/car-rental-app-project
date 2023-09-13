import axios from "axios";

const BASE_URL = "https://65019abb736d26322f5c0003.mockapi.io/";
// const KEY = '34891957-fbaa485884f22f3e8d25bd4d4';
// const orientation = 'horizontal';
// const safesearch = 'true';
// const per_page = 12;

export const ApiRequest = async (endpoint) => {
 try {
    const response = await axios
      .get(`${BASE_URL}/${endpoint}`);
    return response.data;
  } catch (error) {
    console.error("Помилка отримання даних з сервера:", error);
  }
};
