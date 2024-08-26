import axios from 'axios';

export const useCoingeckoAPI = () => {
  const apiKey = 'CG-D4cNcEgwF4msRcJ7zGPteieR';
  const baseURL = 'https://api.coingecko.com/api/v3/';

  const fetchTrending = async () => {
    const endpoint = 'search/trending';
    try {
      const response = await axios.get(`${baseURL + endpoint}`, {
        headers: { accept: 'application/json', 'x-cg-demo-api-key': apiKey },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching trending:', error);
      return null;
    }
  };

  const fetchCategories = async () => {
    const endpoint = 'coins/categories';
    try {
      const response = await axios.get(`${baseURL + endpoint}`, {
        headers: { accept: 'application/json', 'x-cg-demo-api-key': apiKey },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching categories:', error);
      return null;
    }
  };
  const fetchMarketData = async () => {
    const endpoint = 'coins/markets?vs_currency=usd';
    try {
      const response = await axios.get(`${baseURL + endpoint}`, {
        headers: { accept: 'application/json', 'x-cg-demo-api-key': apiKey },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching market data:', error);
      return null;
    }
  };

  return {
    fetchTrending,
    fetchCategories,
    fetchMarketData,
  };
};
