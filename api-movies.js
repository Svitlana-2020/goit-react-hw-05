import axios from "axios";

const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTA0N2UwNDkzYTM5ZDUxMDIwZjVmNzU2N2VlMmM2ZCIsIm5iZiI6MTcyNjg2OTYzNi45NTM1NTksInN1YiI6IjY2ZWQ2MzA0NmQwY2QyNjQ4M2ZlMDRkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ISh2uaLsUsxirOHKaFZ4tOt1SlN1fbhkKyJWoTeL8TI'
  }
};

export const fetchUrl = async (url, options) => {
  try {
    const response = await axios.get(url, options);
    return response.data; // Возвращаем данные
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Выбрасываем ошибку для дальнейшей обработки
  }
};

fetchUrl(url, options)
  .then(data => console.log(data))
  .catch(error => console.error(error));
