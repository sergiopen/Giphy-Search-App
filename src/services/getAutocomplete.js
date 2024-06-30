import { API_KEY } from './settings';

export function getAutocomplete (gifName) {
  const API_URL = `https://api.giphy.com/v1/gifs/search/tags?api_key=${API_KEY}&q=${gifName}`;
  return fetch(API_URL)
    .then(res => res.json())
    .then(response => {
      return response;
    });
}
