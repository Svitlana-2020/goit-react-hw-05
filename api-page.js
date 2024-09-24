import axios from "axios";

export const fetchPage = async (movieId) => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const options = {
      headers: {
        // Замість api_read_access_token вставте свій токен
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTA0N2UwNDkzYTM5ZDUxMDIwZjVmNzU2N2VlMmM2ZCIsIm5iZiI6MTcyNjgzNDAyNy4zMjk1MDgsInN1YiI6IjY2ZWQ2MzA0NmQwY2QyNjQ4M2ZlMDRkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fz5jNQ3ahUgsxl51CaUKIeH7wBaYaRuVSTm7XT3aACY',
      },
    
      params: {
        // include_adult: false,
        // language: 'en-US',
        page: 1,
        append_to_response: 'reviews,credits',
      }
    };
      try {
        const response = await axios.get(url, options);
        return response.data; // Возвращаем данные
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Выбрасываем ошибку для дальнейшей обработк;
      }
    };