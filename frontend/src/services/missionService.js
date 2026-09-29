import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

export const missionService = {
  async getMission() {
    return axios.get(`${API_BASE}/missions/current`).then((res) => res.data);
  },
  async startMission() {
    return axios.post(`${API_BASE}/missions/start`).then((res) => res.data);
  },
  async pauseMission() {
    return axios.post(`${API_BASE}/missions/pause`).then((res) => res.data);
  },
  async resumeMission() {
    return axios.post(`${API_BASE}/missions/resume`).then((res) => res.data);
  },
  async endMission() {
    return axios.post(`${API_BASE}/missions/end`).then((res) => res.data);
  },
};
