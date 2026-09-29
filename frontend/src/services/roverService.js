import { api } from './api';

export const roverService = {
  async getStatus() {
    return api.get('/rovers/status');
  },

  async sendCommand(command) {
    return api.post('/rovers/commands', { command });
  },

  async getMissionState() {
    return api.get('/missions/current');
  },
};
