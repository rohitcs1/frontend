export const mockMission = {
  id: 'MR-001',
  roverId: 'ROVER-01',
  missionName: 'South Drift Rescue Sweep',
  duration: '00:42:18',
  distance: '1.8 km',
  location: 'Zone B-12',
  connection: 'CONNECTED',
  battery: 87,
  signal: 'STRONG',
  network: 'STABLE',
  time: '11:42:18',
  status: 'ACTIVE',
  operator: 'A. Singh'
};

export const mockSensors = [
  { name: 'Methane', short: 'CH₄', value: '1.2%', unit: '%', range: '0.0–1.0%', status: 'WARNING', icon: 'Flame', trend: [0.8, 1.1, 1.0, 1.4, 1.2, 1.3] },
  { name: 'Carbon Monoxide', short: 'CO', value: '18 ppm', unit: 'ppm', range: '0–25 ppm', status: 'NORMAL', icon: 'ShieldAlert', trend: [12, 14, 15, 16, 18, 17] },
  { name: 'Carbon Dioxide', short: 'CO₂', value: '940 ppm', unit: 'ppm', range: '400–1000 ppm', status: 'NORMAL', icon: 'AirVent', trend: [720, 760, 800, 880, 920, 940] },
  { name: 'Oxygen', short: 'O₂', value: '19.4%', unit: '%', range: '19.5–23.5%', status: 'WARNING', icon: 'Wind', trend: [20.1, 20.0, 19.8, 19.6, 19.5, 19.4] },
  { name: 'Temperature', short: 'TEMP', value: '34°C', unit: '°C', range: '20–30°C', status: 'WARNING', icon: 'ThermometerSun', trend: [28, 29, 30, 31, 33, 34] },
  { name: 'Humidity', short: 'RH', value: '71%', unit: '%', range: '45–65%', status: 'HIGH', icon: 'Droplets', trend: [59, 61, 63, 66, 69, 71] },
  { name: 'Pressure', short: 'PRESS', value: '101.4 kPa', unit: 'kPa', range: '100–102 kPa', status: 'NORMAL', icon: 'Gauge', trend: [100.8, 101.0, 101.2, 101.4, 101.3, 101.4] },
  { name: 'Air Quality', short: 'AQI', value: '74', unit: 'index', range: '0–100', status: 'NORMAL', icon: 'Wind', trend: [55, 58, 62, 68, 71, 74] },
];

export const mockAlerts = [
  { id: 1, time: '11:42:18', severity: 'CRITICAL', type: 'CH₄ LEVEL CRITICAL', location: 'Zone B', sensor: 'Methane Sensor', status: 'ACTIVE', value: '2.8%' },
  { id: 2, time: '11:40:11', severity: 'HIGH', type: 'HUMAN DETECTED', location: 'Access Drift', sensor: 'RGB + Thermal', status: 'CONFIRMED', value: '94%' },
  { id: 3, time: '11:39:24', severity: 'WARNING', type: 'THERMAL ANOMALY', location: 'Zone C', sensor: 'Thermal Camera', status: 'MONITORING', value: '38.9°C' },
  { id: 4, time: '11:38:07', severity: 'MEDIUM', type: 'COMMUNICATION LATENCY', location: 'Tunnel 3', sensor: 'Network Link', status: 'STABLE', value: '42 ms' },
];

export const mockAI = {
  label: 'AI Assessment',
  summary: 'Possible trapped worker detected in a hazardous gas environment.',
  detection: 'Human detected',
  confidence: '94%',
  location: 'Zone B',
  risk: 'HIGH',
  recommendation: 'Approach only after environmental risk assessment.',
};

export const mockRoverHealth = {
  raspberry: 'CONNECTED',
  driver: 'ONLINE',
  rgbCamera: 'ONLINE',
  thermalCamera: 'ONLINE',
  gasSensors: 'ONLINE',
  imu: 'ONLINE',
  battery: '87%',
  cpuTemp: '48°C',
  latency: '42 ms',
  roverHealth: 'STABLE',
};

export const mockMissionHistory = [
  { id: 'MR-001', rover: 'ROVER-01', operator: 'A. Singh', start: '09:10', end: '11:42', duration: '02:32:18', distance: '3.6 km', hazards: '02', persons: '01', maxGas: '2.8%', status: 'In Progress' },
  { id: 'MR-0009', rover: 'ROVER-07', operator: 'M. Patel', start: '07:12', end: '09:02', duration: '01:50:17', distance: '2.9 km', hazards: '05', persons: '02', maxGas: '1.9%', status: 'Completed' },
  { id: 'MR-0008', rover: 'ROVER-03', operator: 'L. Chen', start: '05:41', end: '07:11', duration: '01:29:43', distance: '2.1 km', hazards: '03', persons: '00', maxGas: '1.4%', status: 'Completed' },
];

export const mockReports = [
  { title: 'Mission Summary', category: 'Safety', updated: '11:40' },
  { title: 'Gas Sensor Statistics', category: 'Environment', updated: '11:37' },
  { title: 'Hazard Timeline', category: 'Critical Ops', updated: '11:30' },
  { title: 'AI Findings', category: 'Intelligence', updated: '11:28' },
];

export const mockMapHazards = [
  { x: 26, y: 22, risk: 'CRITICAL', label: 'Gas pocket' },
  { x: 54, y: 34, risk: 'HIGH', label: 'Loose strata' },
  { x: 60, y: 58, risk: 'WARNING', label: 'Blocked tunnel' },
  { x: 74, y: 52, risk: 'CRITICAL', label: 'Water ingress' },
  { x: 44, y: 68, risk: 'HIGH', label: 'Human detection' },
];
