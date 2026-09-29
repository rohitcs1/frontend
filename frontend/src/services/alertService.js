import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

export const alertService = {
  async getAlerts() {
    return axios.get(`${API_BASE}/alerts`).then((res) => res.data);
  },
  async resolveAlert(id) {
    return axios.post(`${API_BASE}/alerts/${id}/resolve`).then((res) => res.data);
  },
};
