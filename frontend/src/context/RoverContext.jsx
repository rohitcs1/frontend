import { createContext, useContext, useMemo, useState } from 'react';
import { api } from '../services/api';
import { useAuth } from './AuthContext';

const RoverContext = createContext(null);

export function RoverProvider({ children }) {
  const { token, user } = useAuth();
  const [rover, setRover] = useState({
    id: 'ROVER-01',
    name: 'Rover-01',
    ip: '10.0.0.149',
    status: 'DISCONNECTED',
    battery: 87,
    signal: 'STRONG',
    location: 'Zone B-12',
    latency: 42,
  });

  const connect = async (payload) => {
    const roverId = payload.roverId || payload.id || payload.name;

    if (!token || token === 'demo-token') {
      const next = {
        ...rover,
        ...payload,
        status: 'CONNECTED',
      };
      setRover(next);
      if (user) {
        user.roverConnected = true;
      }
      return next;
    }

    const result = await api.post(`/rovers/${roverId}/connect`, {
      ip_address: payload.ip || payload.ip_address,
      rover_password: payload.password || payload.rover_password,
    });

    const next = {
      ...rover,
      id: result.rover_id || roverId,
      name: result.name || roverId,
      ip: result.ip_address || payload.ip,
      status: result.status || 'CONNECTED',
      battery: result.battery || rover.battery,
      signal: result.signal_strength ? `${result.signal_strength}%` : rover.signal,
      location: 'Zone B-12',
      latency: 42,
    };

    setRover(next);
    if (user) {
      user.roverConnected = true;
    }
    return next;
  };

  const value = useMemo(() => ({ rover, setRover, connect }), [rover, token, user]);

  return <RoverContext.Provider value={value}>{children}</RoverContext.Provider>;
}

export function useRover() {
  return useContext(RoverContext);
}
