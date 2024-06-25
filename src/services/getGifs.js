const API_KEY = 'dIJrma20pSU6ymMwWnDbiaT7NFHeAGVa';

export function getGifs ({ keyword = 'morty' } = {}) {
  const API_URL = `https://api.giphy.com/v1/gifs/search/?api_key=${API_KEY}&q=${keyword}&limit=10`;
  return fetch(API_URL)
    .then(res => res.json())
    .then(response => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifs = data.map(image => {
          const { images, title, id } = image;
          const { url } = images.downsized_medium;
          return { title, id, url };
        });
        return gifs;
      }
    });
}
