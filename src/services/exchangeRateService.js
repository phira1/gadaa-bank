import { api } from './api';

const exchangeRateService = {
  /** GET live exchange rates from the backend proxy */
  getLiveRates: () => api.get('exchange-rates/live'),
  getAll: () => api.get('exchange-rates/live'),
};

export { exchangeRateService };
export default exchangeRateService;