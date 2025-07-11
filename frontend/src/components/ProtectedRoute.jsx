// src/components/ProtectedRoute.jsx
import { useAuth } from '../context/AuthContext'; // adjust if needed
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
