const API_KEY = 'dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa';

export function getGif ({ id }) {
  const API_URL = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`;
  return fetch(API_URL)
    .then(res => res.json())
    .then(response => {
      return response.data;
    });
}
