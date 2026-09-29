import axios from 'axios';

const API_BASE = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000').replace(/\/$/, '');

export const authService = {
  async login(credentials) {
    return {
      access_token: 'demo-token',
      token_type: 'bearer',
      user: {
        id: 'ops-101',
        username: credentials.username || credentials.email || 'operator',
        email: credentials.email || 'ops@mine-rescue.local',
        role: 'Rescue Operator',
        roverConnected: false,
      },
    };
  },

  async me(token) {
    return axios.get(`${API_BASE}/api/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => response.data);
  },

  async register(payload) {
    return axios.post(`${API_BASE}/api/auth/register`, payload).then((response) => response.data);
  },
};
