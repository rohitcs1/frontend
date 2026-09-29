import { api } from './api';

export const aiService = {
  async getAssessment() {
    return api.get('/ai/assessment');
  },

  async getRiskScore() {
    return api.get('/ai/risk-score');
  },

  async getRecommendations() {
    return api.get('/ai/recommendations');
  },
};
