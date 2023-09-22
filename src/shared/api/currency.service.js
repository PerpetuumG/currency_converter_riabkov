import { Enviroment } from '../util/index.js';

const createCurrencyService = () => {
  return {
    getCurrency() {
      return fetch(
        `https://api.freecurrencyapi.com/v1/latest?apikey=${
          import.meta.env[Enviroment.CURRENCY_API_KEY]
        }`,
      ).then(response => response.json());
    },
  };
};

export const currencyService = createCurrencyService();
