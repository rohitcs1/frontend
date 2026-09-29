import { useEffect, useState } from 'react';

const sensorDefinitions = [
  { key: 'CH4', name: 'Methane', unit: '%', threshold: '0.0-1.0%', color: '#f59e0b', value: 1.2, min: 0.4, max: 2.8, step: 0.12, decimals: 2 },
  { key: 'CO', name: 'Carbon Monoxide', unit: 'ppm', threshold: '0-25 ppm', color: '#22d3ee', value: 18, min: 8, max: 34, step: 1.4, decimals: 0 },
  { key: 'CO2', name: 'Carbon Dioxide', unit: 'ppm', threshold: '400-1000 ppm', color: '#34d399', value: 940, min: 650, max: 1120, step: 24, decimals: 0 },
  { key: 'O2', name: 'Oxygen', unit: '%', threshold: '19.5-23.5%', color: '#f97316', value: 19.4, min: 18.8, max: 20.8, step: 0.08, decimals: 2 },
  { key: 'TEMP', name: 'Temperature', unit: 'C', threshold: '20-30 C', color: '#facc15', value: 34, min: 29, max: 38, step: 0.35, decimals: 1 },
  { key: 'RH', name: 'Humidity', unit: '%', threshold: '45-65%', color: '#c084fc', value: 71, min: 58, max: 84, step: 1.4, decimals: 0 },
];

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

function getStatus(sensor) {
  if (sensor.key === 'CH4') return sensor.value >= 2.2 ? 'CRITICAL' : sensor.value >= 1 ? 'WARNING' : 'NORMAL';
  if (sensor.key === 'CO') return sensor.value >= 30 ? 'HIGH' : sensor.value >= 25 ? 'WARNING' : 'NORMAL';
  if (sensor.key === 'CO2') return sensor.value >= 1050 ? 'WARNING' : 'NORMAL';
  if (sensor.key === 'O2') return sensor.value < 19 ? 'CRITICAL' : sensor.value < 19.5 ? 'WARNING' : 'NORMAL';
  if (sensor.key === 'TEMP') return sensor.value >= 36 ? 'HIGH' : sensor.value > 30 ? 'WARNING' : 'NORMAL';
  if (sensor.key === 'RH') return sensor.value >= 78 ? 'HIGH' : sensor.value > 65 ? 'WARNING' : 'NORMAL';
  return 'NORMAL';
}

function createReading(sensor) {
  const value = Number(sensor.value.toFixed(sensor.decimals));
  return {
    ...sensor,
    value,
    status: getStatus({ ...sensor, value }),
    displayValue: `${value}${sensor.unit === 'C' ? ' C' : ` ${sensor.unit}`}`,
    history: Array.from({ length: 8 }, (_, index) => ({
      time: `${index * 2}`.padStart(2, '0'),
      value: Number((value + (index - 7) * sensor.step * 0.7).toFixed(sensor.decimals)),
    })),
  };
}

function initialReadings() {
  return sensorDefinitions.map(createReading);
}

export function useLiveTelemetry() {
  const [sensors, setSensors] = useState(initialReadings);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSensors((current) => current.map((sensor) => {
        const nextValue = clamp(
          sensor.value + (Math.random() - 0.5) * sensor.step * 2,
          sensor.min,
          sensor.max
        );
        const value = Number(nextValue.toFixed(sensor.decimals));
        const history = [...sensor.history.slice(-7), { time: new Date().toLocaleTimeString([], { minute: '2-digit', second: '2-digit' }), value }];

        return {
          ...sensor,
          value,
          status: getStatus({ ...sensor, value }),
          displayValue: `${value}${sensor.unit === 'C' ? ' C' : ` ${sensor.unit}`}`,
          history,
        };
      }));
    }, 2000);

    return () => window.clearInterval(interval);
  }, []);

  return sensors;
}

export function useLiveSensor(key) {
  return useLiveTelemetry().find((sensor) => sensor.key === key);
}
