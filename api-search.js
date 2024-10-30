import axios from "axios";

export const fetchUrlTitle = async (query) => {
    const url = 'https://api.themoviedb.org/3/search/movie?'
    const options = {
      headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OTA0N2UwNDkzYTM5ZDUxMDIwZjVmNzU2N2VlMmM2ZCIsIm5iZiI6MTcyNjgzNDAyNy4zMjk1MDgsInN1YiI6IjY2ZWQ2MzA0NmQwY2QyNjQ4M2ZlMDRkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fz5jNQ3ahUgsxl51CaUKIeH7wBaYaRuVSTm7XT3aACY',
      },
    
      params: {
        query: query, 
        include_adult: false,
        language: 'en-US',
        page: 1
      }
    };
      try {
        // const finalUrl = `${url}?query=${query}`;
        const response = await axios.get(url, options);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error; 
      }
    };