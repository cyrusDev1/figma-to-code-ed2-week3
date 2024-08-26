import axios from 'axios';

export const useNewsAPI = () => {
  const apiKey = '74d7b41f5c1b4dc589ba95c44d3c88fd';
  const baseURL = 'https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything';

  const fetchLatestCryptoNews = async () => {
    try {
      const response = await axios.get(baseURL, {
        headers: {
          'Upgrade-Insecure-Requests': '1',
        },
        params: {
          q: 'cryptocurrency',
          apiKey: apiKey,
        },
      });
      return response.data.articles;
    } catch (error) {
      console.error('Error fetching crypto news:', error);
      return null;
    }
  };

  return {
    fetchLatestCryptoNews,
  };
};
