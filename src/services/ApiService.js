import axios from 'axios';
const baseUrl = 'https://swapi.dev/api';

export const getMovies = () => {
  return axios({
    method: 'GET',
    url: `${baseUrl}/films`,
  });
};

