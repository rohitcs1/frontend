import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import { AuthProvider, useAuth } from './context/AuthContext';
import { RoverProvider } from './context/RoverContext';
import Login from './pages/Login';
import RoverConnection from './pages/RoverConnection';
import Dashboard from './pages/Dashboard';
import RoverControl from './pages/RoverControl';
import Monitoring from './pages/Monitoring';
import ThermalVision from './pages/ThermalVision';
import MineMap from './pages/MineMap';
import AIIntelligence from './pages/AIIntelligence';
import Alerts from './pages/Alerts';
import Missions from './pages/Missions';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" replace />;
}

function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/rover-connection"
        element={
          <ProtectedRoute>
            <RoverConnection />
          </ProtectedRoute>
        }
      />
      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Navigate to={user?.roverConnected ? '/dashboard' : '/rover-connection'} replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/rover-control" element={<RoverControl />} />
        <Route path="/monitoring" element={<Monitoring />} />
        <Route path="/thermal-vision" element={<ThermalVision />} />
        <Route path="/mine-map" element={<MineMap />} />
        <Route path="/ai-intelligence" element={<AIIntelligence />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <RoverProvider>
        <AppRoutes />
      </RoverProvider>
    </AuthProvider>
  );
}
