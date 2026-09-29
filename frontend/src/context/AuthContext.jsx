import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { authService } from '../services/authService';

const AuthContext = createContext(null);

const demoUser = {
  id: 'ops-101',
  username: 'operator',
  email: 'ops@mine-rescue.local',
  role: 'Rescue Operator',
  roverConnected: false,
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('mine-ops-user');
    return stored ? JSON.parse(stored) : demoUser;
  });
  const [token, setToken] = useState(() => localStorage.getItem('mine-ops-token') || '');

  useEffect(() => {
    if (user) {
      localStorage.setItem('mine-ops-user', JSON.stringify(user));
    } else {
      localStorage.removeItem('mine-ops-user');
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('mine-ops-token', token);
    } else {
      localStorage.removeItem('mine-ops-token');
    }
  }, [token]);

  const login = async (credentials) => {
    const result = await authService.login(credentials);
    const authToken = result.access_token || token;
    const nextUser = result.user || (authToken ? { username: credentials.username || credentials.email } : null);

    if (authToken) {
      setToken(authToken);
    }

    if (nextUser) {
      setUser(nextUser);
    }

    return result;
  };

  const logout = () => {
    setUser(null);
    setToken('');
  };

  const value = useMemo(
    () => ({ user, setUser, token, setToken, login, logout }),
    [user, token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
