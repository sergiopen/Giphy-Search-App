import { API_KEY } from './settings';

export function getTrendingGifs () {
  const API_URL = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=10`;
  return fetch(API_URL)
    .then(res => res.json())
    .then(response => {
      const { data = [] } = response;
      const gifs = data.map(gif => {
        const { images, title, id } = gif;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      return gifs;
    });
}
