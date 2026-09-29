import { api } from './api';

export const sensorService = {
  async getReadings() {
    return api.get('/sensor-readings/latest');
  },

  async getHistory(window = '24h') {
    return api.get(`/sensor-readings/history?window=${window}`);
  },
};
