import axios from "axios";

export const fetchUrlTitle = async (query) => {
    const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1'
    const options = {
      headers: {
        // Замість api_read_access_token вставте свій токен
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTA0N2UwNDkzYTM5ZDUxMDIwZjVmNzU2N2VlMmM2ZCIsIm5iZiI6MTcyNjgzNDAyNy4zMjk1MDgsInN1YiI6IjY2ZWQ2MzA0NmQwY2QyNjQ4M2ZlMDRkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fz5jNQ3ahUgsxl51CaUKIeH7wBaYaRuVSTm7XT3aACY',
      },
    
      params: {
        query: query, // Параметры запроса передаются через "params"
        include_adult: false,
        language: 'en-US',
        page: 1
      }
    };
      try {
        // const finalUrl = `${url}?query=${query}`;
        const response = await axios.get(url, options);
        return response.data; // Возвращаем данные
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Выбрасываем ошибку для дальнейшей обработк;
      }
    };